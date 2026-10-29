/**
 * Types for the Week 12 graded practice ("Práctica Calificada 12 — Modelo OAIS"). 10 preguntas × 2
 * puntos = 20 puntos. Scoped to the three "preferred" interaction types requested for this practice
 * (selección única, clasificación/correspondencia, análisis de una situación breve) — unlike other
 * weeks, this practice deliberately does not use `reorder`, `stageFlow` or `matrixBuilder`, to avoid
 * the heavier open-ended judgment those types rely on for a practice that calls for unambiguous,
 * single-correct-answer questions.
 */

export type Verdict = "correct" | "partial" | "review";

export type Q12Kind = "selectJustify" | "compareChoice" | "matchPairs" | "dragClassify";

interface FeedbackByVerdict {
  correct: string;
  partial: string;
  review: string;
}

interface BaseQuestion {
  id: number;
  category: string;
  kind: Q12Kind;
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

export type Practice12Question = SelectJustifyQuestion | CompareChoiceQuestion | MatchPairsQuestion | DragClassifyQuestion;

export type AnswerValue12 =
  | { kind: "selectJustify"; selected: string[]; justifications: string[] }
  | { kind: "compareChoice"; choice: "a" | "b"; justification: string }
  | { kind: "matchPairs"; pairs: Record<string, string>; justification?: string }
  | { kind: "dragClassify"; score: number; total: number; justification: string };

/** Per-question outcome, kept for scoring and the review screen. Mirrors Week 11's `Question11Result`. */
export interface Question12Result {
  attempts: 1 | 2;
  earnedPoints: number;
  verdict: Verdict;
  answerSummary: string;
  feedback: string;
}

export type Practice12Stage = "intro" | "quiz" | "results";

/** Mirrors Week 11's `Practice11State` field-for-field (same persistence mechanism, same shape). */
export interface Practice12State {
  nombreCompleto: string;
  nombreGrupo: string;
  preguntaActual: number;
  resultados: Record<number, Question12Result>;
  puntaje: number;
  fechaInicio: string;
  fechaFin: string | null;
  finalizada: boolean;
}
