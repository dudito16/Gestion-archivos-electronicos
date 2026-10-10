/** Types for the Week 11 graded practice ("Práctica Calificada 11 — Preservación digital"). 10 preguntas × 2 puntos = 20 puntos. */

export type Verdict = "correct" | "partial" | "review";

export type Q11Kind = "selectJustify" | "compareChoice" | "reorder" | "dragClassify" | "matchPairs" | "stageFlow" | "matrixBuilder";

interface FeedbackByVerdict {
  correct: string;
  partial: string;
  review: string;
}

interface BaseQuestion {
  id: number;
  category: string;
  kind: Q11Kind;
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

export interface ReorderQuestion extends BaseQuestion {
  kind: "reorder";
  items: SelectOption[];
  correctOrder: string[];
}

export interface DragClassifyQuestion extends BaseQuestion {
  kind: "dragClassify";
  items: { id: string; label: string; icon: string; category: string }[];
  categories: { id: string; label: string; icon: string }[];
  justifyPrompt?: string;
}

export interface MatchPairsQuestion extends BaseQuestion {
  kind: "matchPairs";
  concepts: SelectOption[];
  definitions: SelectOption[];
  correctPairs: Record<string, string>;
  justifyPrompt?: string;
  justifyMinWords?: number;
}

/** Fixed set of stages the student annotates (not add/remove). */
export interface StageFlowQuestion extends BaseQuestion {
  kind: "stageFlow";
  stages: SelectOption[];
  fieldLabels: [string, string, string];
  minStages: number;
  criticalPrompt: string;
  criticalMinWords?: number;
}

export interface MatrixColumn {
  key: string;
  label: string;
  placeholder?: string;
  type?: "text" | "select";
  options?: SelectOption[];
}

/** Free add/remove row builder with mixed column types, plus one or more closing open questions. */
export interface MatrixBuilderQuestion extends BaseQuestion {
  kind: "matrixBuilder";
  columns: MatrixColumn[];
  minRows: number;
  addLabel?: string;
  chipSuggestions?: string[];
  chipColumnKey?: string;
  /**
   * Optional semantic check: maps a normalized (lowercase, accent-stripped) substring of a known
   * suggested problem to the column key that should hold one of a set of acceptable values for that
   * row to be internally consistent. Lets the evaluator catch a row that names a known problem but
   * assigns it a contradictory strategy/decision — without penalizing freely-written custom rows.
   */
  consistencyHints?: { problemKeyword: string; column: string; expectedValue: string | string[] }[];
  closingQuestions: string[];
  closingMinWords?: number;
}

export type Practice11Question =
  | SelectJustifyQuestion
  | CompareChoiceQuestion
  | ReorderQuestion
  | DragClassifyQuestion
  | MatchPairsQuestion
  | StageFlowQuestion
  | MatrixBuilderQuestion;

export type AnswerValue11 =
  | { kind: "selectJustify"; selected: string[]; justifications: string[] }
  | { kind: "compareChoice"; choice: "a" | "b"; justification: string }
  | { kind: "reorder"; order: string[] }
  | { kind: "dragClassify"; score: number; total: number; justification: string }
  | { kind: "matchPairs"; pairs: Record<string, string>; justification?: string }
  | { kind: "stageFlow"; rows: Record<string, Record<string, string>>; criticalStageId: string | null; criticalJustification: string }
  | { kind: "matrixBuilder"; rows: Record<string, string>[]; closingAnswers: string[] };

/** Per-question outcome, kept for scoring and the review screen. Mirrors Week 10's `Question10Result`. */
export interface Question11Result {
  attempts: 1 | 2;
  earnedPoints: number;
  verdict: Verdict;
  answerSummary: string;
  feedback: string;
}

export type Practice11Stage = "intro" | "quiz" | "results";

/** Mirrors Week 10's `Practice10State` field-for-field (same persistence mechanism, same shape). */
export interface Practice11State {
  nombreCompleto: string;
  nombreGrupo: string;
  preguntaActual: number;
  resultados: Record<number, Question11Result>;
  puntaje: number;
  fechaInicio: string;
  fechaFin: string | null;
  finalizada: boolean;
}
