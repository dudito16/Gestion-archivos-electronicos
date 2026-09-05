/** Types for the Week 4 graded practice ("Práctica Calificada 4 — Simulador de decisiones sobre metadatos"). */

export type Verdict = "correct" | "partial" | "review";

export type Q4Kind = "selectJustify" | "openText" | "dragClassify" | "reorder" | "matchPairs" | "compareChoice" | "editFields" | "capstone";

interface FeedbackByVerdict {
  correct: string;
  partial: string;
  review: string;
}

interface BaseQuestion {
  id: number;
  category: string;
  kind: Q4Kind;
  scenario?: string;
  contextItems?: string[];
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

export interface CapstoneQuestion extends BaseQuestion {
  kind: "capstone";
  minRows: number;
  justifyMinWords: number;
}

export type Practice4Question =
  | SelectJustifyQuestion
  | OpenTextQuestion
  | DragClassifyQuestion
  | ReorderQuestion
  | MatchPairsQuestion
  | CompareChoiceQuestion
  | EditFieldsQuestion
  | CapstoneQuestion;

export type AnswerValue4 =
  | { kind: "selectJustify"; selected: string[]; justifications: string[] }
  | { kind: "openText"; text: string }
  | { kind: "dragClassify"; score: number; total: number; justification: string }
  | { kind: "reorder"; order: string[] }
  | { kind: "matchPairs"; pairs: Record<string, string> }
  | { kind: "compareChoice"; choice: "a" | "b"; justification: string }
  | { kind: "editFields"; values: Record<string, string>; explanation: string }
  | { kind: "capstone"; rows: Record<string, string>[]; indispensable: string[]; justification: string };

/** Per-question outcome, kept for scoring and the review screen. Mirrors Week 3's `QuestionResult`. */
export interface Question4Result {
  attempts: 1 | 2;
  earnedPoints: number;
  verdict: Verdict;
  answerSummary: string;
  feedback: string;
}

export type Practice4Stage = "intro" | "quiz" | "results";

/** Mirrors Week 3's `PracticeState` field-for-field (same persistence mechanism, same shape). */
export interface Practice4State {
  nombreCompleto: string;
  nombreGrupo: string;
  preguntaActual: number;
  resultados: Record<number, Question4Result>;
  puntaje: number;
  fechaInicio: string;
  fechaFin: string | null;
  finalizada: boolean;
}
