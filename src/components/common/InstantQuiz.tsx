import { CheckCircle2, RotateCcw, XCircle } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";
import { cn } from "../../utils/cn";
import type { InstantQuizQuestion } from "../../modules/weeks/week-01/week01.types";

interface InstantQuizProps {
  questions: InstantQuizQuestion[];
  onComplete?: (score: number, total: number) => void;
}

/**
 * Question-by-question quiz with immediate correctness feedback and an explanation,
 * unlike `Quiz` (common/Quiz.tsx) which batches all answers before revealing results.
 * Used for longer, high-stakes self-checks like the Week 1 closing quiz.
 */
export function InstantQuiz({ questions, onComplete }: InstantQuizProps) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [finished, setFinished] = useState(false);

  const question = questions[index];
  const score = useMemo(() => answers.filter(Boolean).length, [answers]);

  function selectOption(optionIndex: number) {
    if (selected !== null) return;
    setSelected(optionIndex);
    setAnswers((prev) => [...prev, optionIndex === question.correctIndex]);
  }

  function next() {
    if (index + 1 >= questions.length) {
      setFinished(true);
      onComplete?.(score, questions.length);
      return;
    }
    setIndex((i) => i + 1);
    setSelected(null);
  }

  function restart() {
    setIndex(0);
    setSelected(null);
    setAnswers([]);
    setFinished(false);
  }

  if (finished) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-xl text-center space-y-sm">
        <CheckCircle2 className="mx-auto text-primary-container" size={40} />
        <h3 className="text-headline-md font-headline-md text-on-surface">Autoevaluación completada</h3>
        <p className="text-body-md font-body-md text-on-surface-variant">
          Obtuviste {score} de {questions.length} respuestas correctas ({pct}%).
        </p>
        <Button size="sm" onClick={restart}>
          <RotateCcw size={16} />
          Reintentar quiz
        </Button>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg space-y-md">
      <div className="flex items-center justify-between text-caption font-caption text-on-surface-variant">
        <span>
          Pregunta {index + 1} de {questions.length}
        </span>
        <span>Aciertos: {score}</span>
      </div>
      <Progress value={((index + (selected !== null ? 1 : 0)) / questions.length) * 100} />

      <AnimatePresence mode="wait">
        <motion.div
          key={question.id}
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -12 }}
          transition={{ duration: 0.25 }}
        >
          <p className="text-body-lg font-body-lg font-semibold text-on-surface mb-sm">{question.question}</p>

          <div className="grid gap-xs">
            {question.options.map((option, optionIndex) => {
              const isSelected = selected === optionIndex;
              const isCorrectOption = optionIndex === question.correctIndex;
              const showResult = selected !== null;

              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => selectOption(optionIndex)}
                  disabled={showResult}
                  className={cn(
                    "flex items-center justify-between gap-sm rounded-lg border px-md py-sm text-left text-label-md font-label-md transition-colors",
                    !showResult && "border-outline-variant hover:bg-surface-container-high",
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

          {selected !== null && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="mt-sm rounded-lg bg-surface-container-low p-sm text-body-md font-body-md text-on-surface-variant"
            >
              <span className="font-semibold text-on-surface">
                {selected === question.correctIndex ? "Correcto. " : "No es correcto. "}
              </span>
              {question.explanation}
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      {selected !== null && (
        <Button size="sm" onClick={next}>
          {index + 1 >= questions.length ? "Ver resultado" : "Siguiente pregunta"}
        </Button>
      )}
    </div>
  );
}
