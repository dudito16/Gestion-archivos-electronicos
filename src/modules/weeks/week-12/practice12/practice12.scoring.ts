import { isMeaningfulText } from "../activities/evaluate";
import type {
  AnswerValue12,
  CompareChoiceQuestion,
  DragClassifyQuestion,
  MatchPairsQuestion,
  Practice12Question,
  SelectJustifyQuestion,
  Verdict,
} from "./practice12.types";

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

export function evaluateQuestion12(question: Practice12Question, value: AnswerValue12): EvalResult {
  switch (question.kind) {
    case "selectJustify": {
      const q = question as SelectJustifyQuestion;
      const v = value as Extract<AnswerValue12, { kind: "selectJustify" }>;
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

    case "compareChoice": {
      const q = question as CompareChoiceQuestion;
      const v = value as Extract<AnswerValue12, { kind: "compareChoice" }>;
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

    case "matchPairs": {
      const q = question as MatchPairsQuestion;
      const v = value as Extract<AnswerValue12, { kind: "matchPairs" }>;
      const correctCount = q.concepts.filter((c) => v.pairs[c.id] === q.correctPairs[c.id]).length;
      const ratio = q.concepts.length > 0 ? correctCount / q.concepts.length : 0;
      const justifyOk = q.justifyPrompt ? isMeaningfulText(v.justification ?? "", q.justifyMinWords ?? 6) : true;
      const summary = q.concepts
        .map((c) => `${c.label} → ${q.definitions.find((d) => d.id === v.pairs[c.id])?.label ?? "—"}`)
        .join("; ");
      return { verdict: combineVerdict(ratio, justifyOk), summary, ratio };
    }

    case "dragClassify": {
      const q = question as DragClassifyQuestion;
      const v = value as Extract<AnswerValue12, { kind: "dragClassify" }>;
      const ratio = v.total > 0 ? v.score / v.total : 0;
      const justifyOk = q.justifyPrompt ? isMeaningfulText(v.justification, 6) : true;
      return {
        verdict: combineVerdict(ratio, justifyOk),
        summary: `${v.score}/${v.total} elementos clasificados correctamente`,
        ratio,
      };
    }
  }
}

/** Same attempt-based reduction as Week 11's `pointsForVerdict11`: first-try full credit, second-try reduced. */
export function pointsForVerdict12(verdict: Verdict, attemptNumber: 1 | 2, points: number): number {
  if (attemptNumber === 1) {
    if (verdict === "correct") return points;
    if (verdict === "partial") return points * 0.5;
    return 0;
  }
  if (verdict === "correct") return points * 0.6;
  if (verdict === "partial") return points * 0.3;
  return 0;
}
