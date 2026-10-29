/**
 * Types for the Week 13 graded practice ("Práctica Calificada 13 — Estándares de preservación
 * digital"). 10 preguntas × 2 puntos = 20 puntos. Scoped to the same four "preferred" interaction
 * types adopted for Week 12's practice (selección única, correspondencia, análisis de una situación
 * breve, clasificación) — chosen again here for the same reason: a single, unambiguous correct
 * answer per question, avoiding the heavier open-ended judgment that `reorder`, `stageFlow` or
 * `matrixBuilder` require.
 */

export type Verdict = "correct" | "partial" | "review";

export type Q13Kind = "selectJustify" | "compareChoice" | "matchPairs" | "dragClassify";

interface FeedbackByVerdict {
  correct: string;
  partial: string;
  review: string;
}

interface BaseQuestion {
  id: number;
  category: string;
  kind: Q13Kind;
  scenario?: string;
  prompt: string;
  instructions?: string;
  points: number;
  feedbackByVerdict: FeedbackByVerdict;
  expectedSummary: string;
}

export interface SelectOption {
  id: string;
  label: string;
}

export interface SelectJustifyQuestion extends BaseQuestion {
  kind: "selectJustify";
  options: SelectOption[];
  correctIds: string[];
  minSelected: number;
  justifyPrompts: string[];
  justifyMinWords?: number;
}

export interface CompareChoiceQuestion extends BaseQuestion {
  kind: "compareChoice";
  labelA: string;
  labelB: string;
  rowsA: { field: string; value: string }[];
  rowsB: { field: string; value: string }[];
  expected: "a" | "b";
  justifyMinWords?: number;
}

export interface MatchPairsQuestion extends BaseQuestion {
  kind: "matchPairs";
  concepts: SelectOption[];
  definitions: SelectOption[];
  correctPairs: Record<string, string>;
  justifyPrompt?: string;
  justifyMinWords?: number;
}

export interface DragClassifyQuestion extends BaseQuestion {
  kind: "dragClassify";
  items: { id: string; label: string; icon: string; category: string }[];
  categories: { id: string; label: string; icon: string }[];
  justifyPrompt?: string;
}

export type Practice13Question = SelectJustifyQuestion | CompareChoiceQuestion | MatchPairsQuestion | DragClassifyQuestion;

export type AnswerValue13 =
  | { kind: "selectJustify"; selected: string[]; justifications: string[] }
  | { kind: "compareChoice"; choice: "a" | "b"; justification: string }
  | { kind: "matchPairs"; pairs: Record<string, string>; justification?: string }
  | { kind: "dragClassify"; score: number; total: number; justification: string };

/** Per-question outcome, kept for scoring and the review screen. Mirrors Week 12's `Question12Result`. */
export interface Question13Result {
  attempts: 1 | 2;
  earnedPoints: number;
  verdict: Verdict;
  answerSummary: string;
  feedback: string;
}

export type Practice13Stage = "intro" | "quiz" | "results";

/** Mirrors Week 12's `Practice12State` field-for-field (same persistence mechanism, same shape). */
export interface Practice13State {
  nombreCompleto: string;
  nombreGrupo: string;
  preguntaActual: number;
  resultados: Record<number, Question13Result>;
  puntaje: number;
  fechaInicio: string;
  fechaFin: string | null;
  finalizada: boolean;
}
