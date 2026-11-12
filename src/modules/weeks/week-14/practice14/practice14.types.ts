/**
 * Types for the Week 14 graded evaluation ("Evaluación final — Repositorios digitales confiables").
 * 15 preguntas × 2 puntos = 30 puntos. The brief for this week asks specifically for straightforward
 * multiple-choice items ("cuatro alternativas y una respuesta correcta"), scored automatically with
 * explanatory feedback — unlike other weeks' practices, this evaluation deliberately uses a single,
 * simpler `multipleChoice` kind (no open justification field) rather than reusing `selectJustify`,
 * to match that literal requirement without adding friction the brief did not ask for.
 *
 * On alternative ordering: the brief asks for "orden aleatorio ... cuando sea compatible con la
 * arquitectura existente." No component in this codebase shuffles options anywhere (confirmed across
 * every previous week's audit) — introducing randomization only for this evaluation would be a
 * one-off architectural deviation and risk reintroducing position-based bugs already avoided
 * elsewhere. Instead, the same mitigation used throughout the course was applied: the correct
 * option's position was manually interleaved across the 15 questions (see practice14.data.ts).
 */

export type Verdict14 = "correct" | "incorrect";

export type Q14Kind = "multipleChoice";

export interface SelectOption {
  id: string;
  label: string;
}

export interface MultipleChoiceQuestion {
  id: number;
  category: string;
  kind: "multipleChoice";
  scenario?: string;
  prompt: string;
  points: number;
  options: SelectOption[];
  correctId: string;
  expectedSummary: string;
  feedbackByVerdict: {
    correct: string;
    incorrect: string;
  };
}

export type Practice14Question = MultipleChoiceQuestion;

export type AnswerValue14 = { kind: "multipleChoice"; selectedId: string };

/** Per-question outcome, kept for scoring and the review screen. */
export interface Question14Result {
  attempts: 1 | 2;
  earnedPoints: number;
  verdict: Verdict14;
  answerSummary: string;
  feedback: string;
}

export type Practice14Stage = "intro" | "quiz" | "results";

/** Mirrors the shape used by every other week's practice state (same persistence mechanism). */
export interface Practice14State {
  nombreCompleto: string;
  nombreGrupo: string;
  preguntaActual: number;
  resultados: Record<number, Question14Result>;
  puntaje: number;
  fechaInicio: string;
  fechaFin: string | null;
  finalizada: boolean;
}
