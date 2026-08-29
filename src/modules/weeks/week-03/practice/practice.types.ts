/** Types for the Week 3 graded practice ("Simulador de Decisiones Documentales"). Scoped to this feature only. */

export type QuestionType = "single" | "multi" | "order" | "match";

interface BaseQuestion {
  id: number;
  category: string;
  scenario?: string;
  contextItems?: string[];
  prompt: string;
  feedbackCorrect: string;
  feedbackIncorrect: string;
  points: number;
  /** Present on the 4 questions that also carry an ungraded open-ended follow-up (§29). */
  openQuestion?: string;
  /** Shown only after the open answer is submitted, for question 18. */
  openSuggestions?: string[];
}

export interface SingleOption {
  id: string;
  label: string;
}

export interface SingleQuestionData extends BaseQuestion {
  type: "single";
  options: SingleOption[];
  correct: string;
}

export interface MultiQuestionData extends BaseQuestion {
  type: "multi";
  options: SingleOption[];
  correct: string[];
}

export interface OrderQuestionData extends BaseQuestion {
  type: "order";
  items: SingleOption[];
  correctOrder: string[];
}

export interface MatchQuestionData extends BaseQuestion {
  type: "match";
  concepts: SingleOption[];
  definitions: SingleOption[];
  correctPairs: Record<string, string>;
}

export type PracticeQuestion = SingleQuestionData | MultiQuestionData | OrderQuestionData | MatchQuestionData;

/** Per-question outcome, kept for scoring and for the review screen. */
export interface QuestionResult {
  attempts: 0 | 1 | 2;
  earnedPoints: number;
  finalized: boolean;
  correct: boolean;
  /** Human-readable form of the last submitted answer, for the review screen. */
  answerSummary: string;
  openAnswer?: string;
}

export type PracticeStage = "intro" | "quiz" | "results";

export interface PracticeState {
  nombreCompleto: string;
  nombreGrupo: string;
  preguntaActual: number;
  resultados: Record<number, QuestionResult>;
  puntaje: number;
  fechaInicio: string;
  fechaFin: string | null;
  finalizada: boolean;
}
