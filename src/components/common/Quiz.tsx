import { CheckCircle2, XCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { cn } from "../../utils/cn";
import type { QuizData } from "../../types/course.types";

interface QuizProps {
  quiz: QuizData;
}

/** Self-check quiz: pick an option per question, submit, see score + correctness. */
export function Quiz({ quiz }: QuizProps) {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const allAnswered = quiz.questions.every((q) => answers[q.id] !== undefined);
  const score = quiz.questions.filter((q) => answers[q.id] === q.correctOptionIndex).length;

  function selectOption(questionId: string, optionIndex: number) {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  }

  return (
    <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg space-y-lg">
      <h3 className="text-headline-md font-headline-md text-on-surface">{quiz.title}</h3>

      {quiz.questions.map((question, qIndex) => (
        <div key={question.id} className="space-y-sm">
          <p className="text-body-md font-body-md font-semibold text-on-surface">
            {qIndex + 1}. {question.question}
          </p>
          <div className="grid gap-xs">
            {question.options.map((option, optionIndex) => {
              const isSelected = answers[question.id] === optionIndex;
              const isCorrectOption = optionIndex === question.correctOptionIndex;
              const showResult = submitted;

              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => selectOption(question.id, optionIndex)}
                  disabled={submitted}
                  className={cn(
                    "flex items-center justify-between gap-sm rounded-lg border px-md py-sm text-left text-label-md font-label-md transition-colors",
                    isSelected && !showResult && "border-primary-container bg-secondary-container/50",
                    !isSelected && !showResult && "border-outline-variant hover:bg-surface-container-high",
                    showResult && isCorrectOption && "border-tertiary-fixed-dim bg-tertiary-fixed/50",
                    showResult && isSelected && !isCorrectOption && "border-error bg-error-container/60",
                    showResult && !isSelected && !isCorrectOption && "border-outline-variant opacity-60",
                  )}
                >
                  <span>{option}</span>
                  {showResult && isCorrectOption && <CheckCircle2 className="text-tertiary" size={18} />}
                  {showResult && isSelected && !isCorrectOption && <XCircle className="text-error" size={18} />}
                </button>
              );
            })}
          </div>
        </div>
      ))}

      {!submitted ? (
        <Button disabled={!allAnswered} onClick={() => setSubmitted(true)}>
          Enviar respuestas
        </Button>
      ) : (
        <div className="flex items-center gap-sm">
          <p className="text-label-md font-label-md text-on-surface">
            Resultado: {score}/{quiz.questions.length} correctas
          </p>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              setSubmitted(false);
              setAnswers({});
            }}
          >
            Reintentar
          </Button>
        </div>
      )}
    </div>
  );
}
