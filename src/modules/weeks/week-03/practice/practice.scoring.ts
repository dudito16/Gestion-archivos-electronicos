import type { MatchQuestionData, MultiQuestionData, OrderQuestionData, PracticeQuestion, SingleQuestionData } from "./practice.types";

export type AnswerValue = string | string[] | Record<string, string>;

export function isAnswerCorrect(question: PracticeQuestion, value: AnswerValue): boolean {
  switch (question.type) {
    case "single":
      return (value as string) === (question as SingleQuestionData).correct;
    case "multi": {
      const q = question as MultiQuestionData;
      const a = new Set(value as string[]);
      const b = new Set(q.correct);
      return a.size === b.size && [...a].every((x) => b.has(x));
    }
    case "order": {
      const q = question as OrderQuestionData;
      const v = value as string[];
      return v.length === q.correctOrder.length && v.every((id, i) => id === q.correctOrder[i]);
    }
    case "match": {
      const q = question as MatchQuestionData;
      const v = value as Record<string, string>;
      return q.concepts.every((c) => v[c.id] === q.correctPairs[c.id]);
    }
  }
}

export function summarizeAnswer(question: PracticeQuestion, value: AnswerValue): string {
  switch (question.type) {
    case "single": {
      const q = question as SingleQuestionData;
      return q.options.find((o) => o.id === value)?.label ?? "Sin respuesta";
    }
    case "multi": {
      const q = question as MultiQuestionData;
      const v = value as string[];
      if (v.length === 0) return "Sin respuesta";
      return v.map((id) => q.options.find((o) => o.id === id)?.label ?? id).join(", ");
    }
    case "order": {
      const q = question as OrderQuestionData;
      const v = value as string[];
      if (v.length === 0) return "Sin respuesta";
      return v.map((id) => q.items.find((i) => i.id === id)?.label ?? id).join(" → ");
    }
    case "match": {
      const q = question as MatchQuestionData;
      const v = value as Record<string, string>;
      return q.concepts
        .map((c) => `${c.label} → ${q.definitions.find((d) => d.id === v[c.id])?.label ?? "—"}`)
        .join("; ");
    }
  }
}

export function summarizeCorrectAnswer(question: PracticeQuestion): string {
  switch (question.type) {
    case "single": {
      const q = question as SingleQuestionData;
      return q.options.find((o) => o.id === q.correct)?.label ?? "";
    }
    case "multi": {
      const q = question as MultiQuestionData;
      return q.correct.map((id) => q.options.find((o) => o.id === id)?.label ?? id).join(", ");
    }
    case "order": {
      const q = question as OrderQuestionData;
      return q.correctOrder.map((id) => q.items.find((i) => i.id === id)?.label ?? id).join(" → ");
    }
    case "match": {
      const q = question as MatchQuestionData;
      return q.concepts
        .map((c) => `${c.label} → ${q.definitions.find((d) => d.id === q.correctPairs[c.id])?.label ?? "—"}`)
        .join("; ");
    }
  }
}

/** §28: first attempt correct = 5 (question.points), second attempt correct = 3, two wrong attempts = 0. */
export function pointsForAttempt(question: PracticeQuestion, attemptNumber: 1 | 2, correct: boolean): number {
  if (!correct) return 0;
  return attemptNumber === 1 ? question.points : 3;
}
