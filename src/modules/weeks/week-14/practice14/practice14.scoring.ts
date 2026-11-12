import type { AnswerValue14, Practice14Question, Verdict14 } from "./practice14.types";

interface EvalResult {
  verdict: Verdict14;
  summary: string;
}

/** Straightforward right/wrong evaluation — this evaluation deliberately has no partial-credit state (see practice14.types.ts). */
export function evaluateQuestion14(question: Practice14Question, value: AnswerValue14): EvalResult {
  const selected = question.options.find((o) => o.id === value.selectedId);
  const verdict: Verdict14 = value.selectedId === question.correctId ? "correct" : "incorrect";
  return { verdict, summary: selected?.label ?? "Sin respuesta" };
}

/** Same attempt-based reduction used across every other week's practice: first-try full credit, second-try reduced. */
export function pointsForVerdict14(verdict: Verdict14, attemptNumber: 1 | 2, points: number): number {
  if (verdict !== "correct") return 0;
  return attemptNumber === 1 ? points : points * 0.6;
}
