import { isMeaningfulText, matchConcepts, normalize } from "../activities/evaluate";
import type {
  AnswerValue4,
  CapstoneQuestion,
  CompareChoiceQuestion,
  DragClassifyQuestion,
  EditFieldsQuestion,
  MatchPairsQuestion,
  OpenTextQuestion,
  Practice4Question,
  ReorderQuestion,
  SelectJustifyQuestion,
  Verdict,
} from "./practice4.types";

/** Combines a 0-1 correctness ratio with a written-answer quality gate into a 3-state verdict. Never a hard pass/fail. */
function combineVerdict(ratio: number, writingOk: boolean): Verdict {
  if (ratio >= 0.75 && writingOk) return "correct";
  if (ratio > 0 || writingOk) return "partial";
  return "review";
}

function evaluateSpecificity(original: string, edited: string): Verdict {
  const clean = edited.trim();
  if (clean.length < 3) return "review";
  const changed = normalize(clean) !== normalize(original);
  const wordCount = clean.split(/\s+/).filter(Boolean).length;
  if (changed && wordCount >= 3) return "correct";
  if (changed || wordCount >= 3) return "partial";
  return "review";
}

interface EvalResult {
  verdict: Verdict;
  summary: string;
  ratio: number;
}

export function evaluateQuestion4(question: Practice4Question, value: AnswerValue4): EvalResult {
  switch (question.kind) {
    case "selectJustify": {
      const q = question as SelectJustifyQuestion;
      const v = value as Extract<AnswerValue4, { kind: "selectJustify" }>;
      const correctSet = new Set(q.correctIds);
      const selectedSet = new Set(v.selected);
      const truePositives = [...selectedSet].filter((id) => correctSet.has(id)).length;
      const falsePositives = [...selectedSet].filter((id) => !correctSet.has(id)).length;
      const ratio = correctSet.size > 0 ? Math.max(0, truePositives - falsePositives * 0.5) / correctSet.size : 0;
      const justifyOk = v.justifications.every((j) => isMeaningfulText(j, q.justifyMinWords ?? 6));
      const labels = v.selected.map((id) => q.options.find((o) => o.id === id)?.label ?? id);
      return {
        verdict: combineVerdict(Math.min(1, ratio), justifyOk),
        summary: labels.length > 0 ? labels.join(", ") : "Sin selección",
        ratio,
      };
    }

    case "openText": {
      const q = question as OpenTextQuestion;
      const v = value as Extract<AnswerValue4, { kind: "openText" }>;
      const results = matchConcepts(v.text, q.candidates);
      const matched = results.filter((r) => r.matched).length;
      const ratio = q.requiredCount > 0 ? Math.min(1, matched / q.requiredCount) : matched > 0 ? 1 : 0;
      const writingOk = isMeaningfulText(v.text, q.minWords);
      return {
        verdict: writingOk ? combineVerdict(ratio, true) : "review",
        summary: v.text.trim().length > 0 ? v.text : "Sin respuesta",
        ratio,
      };
    }

    case "dragClassify": {
      const q = question as DragClassifyQuestion;
      const v = value as Extract<AnswerValue4, { kind: "dragClassify" }>;
      const ratio = v.total > 0 ? v.score / v.total : 0;
      const justifyOk = q.justifyPrompt ? isMeaningfulText(v.justification, 6) : true;
      return {
        verdict: combineVerdict(ratio, justifyOk),
        summary: `${v.score}/${v.total} elementos clasificados correctamente`,
        ratio,
      };
    }

    case "reorder": {
      const q = question as ReorderQuestion;
      const v = value as Extract<AnswerValue4, { kind: "reorder" }>;
      const matches = v.order.filter((id, i) => id === q.correctOrder[i]).length;
      const ratio = q.correctOrder.length > 0 ? matches / q.correctOrder.length : 0;
      const labels = v.order.map((id) => q.items.find((i) => i.id === id)?.label ?? id);
      return { verdict: combineVerdict(ratio, true), summary: labels.join(" → "), ratio };
    }

    case "matchPairs": {
      const q = question as MatchPairsQuestion;
      const v = value as Extract<AnswerValue4, { kind: "matchPairs" }>;
      const correctCount = q.concepts.filter((c) => v.pairs[c.id] === q.correctPairs[c.id]).length;
      const ratio = q.concepts.length > 0 ? correctCount / q.concepts.length : 0;
      const summary = q.concepts
        .map((c) => `${c.label} → ${q.definitions.find((d) => d.id === v.pairs[c.id])?.label ?? "—"}`)
        .join("; ");
      return { verdict: combineVerdict(ratio, true), summary, ratio };
    }

    case "compareChoice": {
      const q = question as CompareChoiceQuestion;
      const v = value as Extract<AnswerValue4, { kind: "compareChoice" }>;
      const choiceOk = v.choice === q.expected;
      const justifyOk = isMeaningfulText(v.justification, q.justifyMinWords ?? 6);
      let verdict: Verdict;
      if (choiceOk && justifyOk) verdict = "correct";
      else if (justifyOk) verdict = "partial";
      else verdict = "review";
      return {
        verdict,
        summary: `${v.choice === "a" ? q.labelA : q.labelB} — ${v.justification || "sin justificación"}`,
        ratio: choiceOk ? 1 : 0.3,
      };
    }

    case "editFields": {
      const q = question as EditFieldsQuestion;
      const v = value as Extract<AnswerValue4, { kind: "editFields" }>;
      let scoreSum = 0;
      for (const field of q.fields) {
        const edited = v.values[field.id] ?? "";
        let fieldVerdict: Verdict;
        if (field.keywordGroups && field.keywordGroups.length > 0) {
          const clean = normalize(edited);
          const matchedGroups = field.keywordGroups.filter((group) => group.some((kw) => clean.includes(normalize(kw))));
          const groupRatio = matchedGroups.length / field.keywordGroups.length;
          fieldVerdict = groupRatio >= 0.6 ? "correct" : groupRatio > 0 ? "partial" : "review";
        } else {
          fieldVerdict = evaluateSpecificity(field.initialValue, edited);
        }
        scoreSum += fieldVerdict === "correct" ? 1 : fieldVerdict === "partial" ? 0.5 : 0;
      }
      const ratio = q.fields.length > 0 ? scoreSum / q.fields.length : 0;
      const writingOk = isMeaningfulText(v.explanation, q.explanationMinWords);
      return {
        verdict: writingOk ? combineVerdict(ratio, true) : "review",
        summary: q.fields.map((f) => `${f.label}: ${v.values[f.id] ?? ""}`).join("; "),
        ratio,
      };
    }

    case "capstone": {
      const q = question as CapstoneQuestion;
      const v = value as Extract<AnswerValue4, { kind: "capstone" }>;
      const filledRows = v.rows.filter((r) => r.campo?.trim() && r.finalidad?.trim()).length;
      const rowsRatio = Math.min(1, filledRows / q.minRows);
      const indispensableRatio = v.indispensable.length > 0 ? 1 : 0;
      const justifyOk = isMeaningfulText(v.justification, q.justifyMinWords);
      const ratio = rowsRatio * 0.6 + indispensableRatio * 0.4;
      return {
        verdict: justifyOk ? combineVerdict(ratio, true) : "review",
        summary: `${filledRows} metadatos propuestos; ${v.indispensable.length} marcados como indispensables`,
        ratio,
      };
    }
  }
}

/** Same attempt-based reduction as Week 3's `pointsForAttempt`: first-try full credit, second-try reduced, generalized to a 3-state verdict. */
export function pointsForVerdict4(verdict: Verdict, attemptNumber: 1 | 2, points: number): number {
  if (attemptNumber === 1) {
    if (verdict === "correct") return points;
    if (verdict === "partial") return points * 0.5;
    return 0;
  }
  if (verdict === "correct") return points * 0.6;
  if (verdict === "partial") return points * 0.3;
  return 0;
}
