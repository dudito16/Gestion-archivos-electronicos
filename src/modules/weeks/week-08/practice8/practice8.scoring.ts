import { isMeaningfulText, matchConcepts, normalize } from "../activities/evaluate";
import type {
  AnswerValue8,
  CompareChoiceQuestion,
  DragClassifyQuestion,
  EditFieldsQuestion,
  MatchPairsQuestion,
  MatrixBuilderQuestion,
  OpenTextQuestion,
  Practice8Question,
  ReorderQuestion,
  SelectJustifyQuestion,
  StageFlowQuestion,
  Verdict,
} from "./practice8.types";

/** Combines a 0-1 correctness ratio with a written-answer quality gate into a 3-state verdict. Never a hard pass/fail. */
function combineVerdict(ratio: number, writingOk: boolean): Verdict {
  if (ratio >= 0.75 && writingOk) return "correct";
  if (ratio > 0 || writingOk) return "partial";
  return "review";
}

interface EvalResult {
  verdict: Verdict;
  summary: string;
  ratio: number;
}

export function evaluateQuestion8(question: Practice8Question, value: AnswerValue8): EvalResult {
  switch (question.kind) {
    case "selectJustify": {
      const q = question as SelectJustifyQuestion;
      const v = value as Extract<AnswerValue8, { kind: "selectJustify" }>;
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
      const v = value as Extract<AnswerValue8, { kind: "openText" }>;
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
      const v = value as Extract<AnswerValue8, { kind: "dragClassify" }>;
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
      const v = value as Extract<AnswerValue8, { kind: "reorder" }>;
      const matches = v.order.filter((id, i) => id === q.correctOrder[i]).length;
      const ratio = q.correctOrder.length > 0 ? matches / q.correctOrder.length : 0;
      const labels = v.order.map((id) => q.items.find((i) => i.id === id)?.label ?? id);
      return { verdict: combineVerdict(ratio, true), summary: labels.join(" → "), ratio };
    }

    case "matchPairs": {
      const q = question as MatchPairsQuestion;
      const v = value as Extract<AnswerValue8, { kind: "matchPairs" }>;
      const correctCount = q.concepts.filter((c) => v.pairs[c.id] === q.correctPairs[c.id]).length;
      const ratio = q.concepts.length > 0 ? correctCount / q.concepts.length : 0;
      const justifyOk = q.justifyPrompt ? isMeaningfulText(v.justification ?? "", q.justifyMinWords ?? 6) : true;
      const summary = q.concepts
        .map((c) => `${c.label} → ${q.definitions.find((d) => d.id === v.pairs[c.id])?.label ?? "—"}`)
        .join("; ");
      return { verdict: combineVerdict(ratio, justifyOk), summary, ratio };
    }

    case "compareChoice": {
      const q = question as CompareChoiceQuestion;
      const v = value as Extract<AnswerValue8, { kind: "compareChoice" }>;
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
      const v = value as Extract<AnswerValue8, { kind: "editFields" }>;
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
          const clean = edited.trim();
          fieldVerdict = clean.length >= 2 ? "correct" : "review";
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

    case "stageFlow": {
      const q = question as StageFlowQuestion;
      const v = value as Extract<AnswerValue8, { kind: "stageFlow" }>;
      const filledStages = q.stages.filter((s) => {
        const row = v.rows[s.id];
        return row && Object.values(row).every((val) => val?.trim());
      }).length;
      const ratio = Math.min(1, filledStages / q.minStages);
      const writingOk = Boolean(v.criticalStageId) && isMeaningfulText(v.criticalJustification, q.criticalMinWords ?? 6);
      const stageLabel = q.stages.find((s) => s.id === v.criticalStageId)?.label ?? "sin elegir";
      return {
        verdict: writingOk ? combineVerdict(ratio, true) : "review",
        summary: `${filledStages}/${q.stages.length} etapas completadas; etapa crítica: ${stageLabel}`,
        ratio,
      };
    }

    case "matrixBuilder": {
      const q = question as MatrixBuilderQuestion;
      const v = value as Extract<AnswerValue8, { kind: "matrixBuilder" }>;
      const completeRows = v.rows.filter((row) => q.columns.every((c) => row[c.key]?.trim())).length;
      const rowsRatio = Math.min(1, completeRows / q.minRows);

      // Catch a row that names one of the suggested problems but assigns it a contradictory
      // value (e.g. calling a low-resolution scan problem a "format" decision) — filling every
      // column is not the same as the analysis being internally consistent.
      let hasContradiction = false;
      if (q.consistencyHints) {
        for (const row of v.rows) {
          const problemText = normalize(Object.values(row).join(" "));
          for (const hint of q.consistencyHints) {
            if (problemText.includes(normalize(hint.problemKeyword))) {
              const actual = row[hint.column];
              const accepted = Array.isArray(hint.expectedValue) ? hint.expectedValue : [hint.expectedValue];
              if (actual && !accepted.some((value) => normalize(actual) === normalize(value))) hasContradiction = true;
            }
          }
        }
      }

      const writingOk = v.closingAnswers.every((a) => isMeaningfulText(a, q.closingMinWords ?? 6));
      const ratio = hasContradiction ? Math.min(rowsRatio, 0.5) : rowsRatio;
      return {
        verdict: writingOk ? combineVerdict(ratio, true) : "review",
        summary: `${completeRows} fila(s) completa(s) de ${v.rows.length}${hasContradiction ? " (con una relación problema–decisión inconsistente)" : ""}`,
        ratio,
      };
    }
  }
}

/** Same attempt-based reduction as Week 7's `pointsForVerdict7`: first-try full credit, second-try reduced. */
export function pointsForVerdict8(verdict: Verdict, attemptNumber: 1 | 2, points: number): number {
  if (attemptNumber === 1) {
    if (verdict === "correct") return points;
    if (verdict === "partial") return points * 0.5;
    return 0;
  }
  if (verdict === "correct") return points * 0.6;
  if (verdict === "partial") return points * 0.3;
  return 0;
}
