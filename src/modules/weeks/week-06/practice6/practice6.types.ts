/** Types for the Week 6 graded practice ("Práctica Calificada 6 — Firma, certificados y trazabilidad"). */

export type Verdict = "correct" | "partial" | "review";

export type Q6Kind =
  | "selectJustify"
  | "openText"
  | "dragClassify"
  | "reorder"
  | "matchPairs"
  | "compareChoice"
  | "editFields"
  | "stageFlow"
  | "matrixBuilder";

interface FeedbackByVerdict {
  correct: string;
  partial: string;
  review: string;
}

interface BaseQuestion {
  id: number;
  category: string;
  kind: Q6Kind;
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

export interface OpenTextQuestion extends BaseQuestion {
  kind: "openText";
  fieldLabel: string;
  candidates: { id: string; label: string; keywords: string[] }[];
  requiredCount: number;
  minWords: number;
}

export interface DragClassifyQuestion extends BaseQuestion {
  kind: "dragClassify";
  items: { id: string; label: string; icon: string; category: string }[];
  categories: { id: string; label: string; icon: string }[];
  justifyPrompt?: string;
}

export interface ReorderQuestion extends BaseQuestion {
  kind: "reorder";
  items: SelectOption[];
  correctOrder: string[];
}

export interface MatchPairsQuestion extends BaseQuestion {
  kind: "matchPairs";
  concepts: SelectOption[];
  definitions: SelectOption[];
  correctPairs: Record<string, string>;
  justifyPrompt?: string;
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

export interface EditFieldsQuestion extends BaseQuestion {
  kind: "editFields";
  fields: { id: string; label: string; initialValue: string; keywordGroups?: string[][] }[];
  explanationPrompt: string;
  explanationMinWords: number;
}

/** Fixed set of stages the student annotates (not add/remove) — used by "Analiza el flujo con firma". */
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
  closingQuestions: string[];
  closingMinWords?: number;
}

export type Practice6Question =
  | SelectJustifyQuestion
  | OpenTextQuestion
  | DragClassifyQuestion
  | ReorderQuestion
  | MatchPairsQuestion
  | CompareChoiceQuestion
  | EditFieldsQuestion
  | StageFlowQuestion
  | MatrixBuilderQuestion;

export type AnswerValue6 =
  | { kind: "selectJustify"; selected: string[]; justifications: string[] }
  | { kind: "openText"; text: string }
  | { kind: "dragClassify"; score: number; total: number; justification: string }
  | { kind: "reorder"; order: string[] }
  | { kind: "matchPairs"; pairs: Record<string, string>; justification?: string }
  | { kind: "compareChoice"; choice: "a" | "b"; justification: string }
  | { kind: "editFields"; values: Record<string, string>; explanation: string }
  | { kind: "stageFlow"; rows: Record<string, Record<string, string>>; criticalStageId: string | null; criticalJustification: string }
  | { kind: "matrixBuilder"; rows: Record<string, string>[]; closingAnswers: string[] };

/** Per-question outcome, kept for scoring and the review screen. Mirrors Week 5's `Question5Result`. */
export interface Question6Result {
  attempts: 1 | 2;
  earnedPoints: number;
  verdict: Verdict;
  answerSummary: string;
  feedback: string;
}

export type Practice6Stage = "intro" | "quiz" | "results";

/** Mirrors Week 5's `Practice5State` field-for-field (same persistence mechanism, same shape). */
export interface Practice6State {
  nombreCompleto: string;
  nombreGrupo: string;
  preguntaActual: number;
  resultados: Record<number, Question6Result>;
  puntaje: number;
  fechaInicio: string;
  fechaFin: string | null;
  finalizada: boolean;
}
