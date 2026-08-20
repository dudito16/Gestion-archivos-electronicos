import { CheckCircle2, XCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "../../utils/cn";

export interface SingleChoiceOption {
  id: string;
  label: string;
}

interface SingleChoiceCheckProps {
  prompt: string;
  options: SingleChoiceOption[];
  /** id of the option considered the best answer, if the question has one clear-cut answer. */
  correctId?: string;
  feedback: string;
  onAnswer?: () => void;
}

/**
 * Stand-alone scenario question with a single reveal of feedback — unlike `InstantQuiz`,
 * this is not part of a scored sequence. Used for reflection/activation prompts where the
 * point is analysis, not grading right/wrong.
 */
export function SingleChoiceCheck({ prompt, options, correctId, feedback, onAnswer }: SingleChoiceCheckProps) {
  const [selected, setSelected] = useState<string | null>(null);

  function select(id: string) {
    if (selected) return;
    setSelected(id);
    onAnswer?.();
  }

  return (
    <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg space-y-md">
      <p className="text-body-lg font-body-lg text-on-surface whitespace-pre-line">{prompt}</p>

      <div className="grid gap-xs">
        {options.map((option) => {
          const isSelected = selected === option.id;
          const isCorrectOption = correctId && option.id === correctId;
          const showResult = selected !== null;

          return (
            <button
              key={option.id}
              type="button"
              onClick={() => select(option.id)}
              disabled={showResult}
              className={cn(
                "flex items-center justify-between gap-sm rounded-lg border px-md py-sm text-left text-label-md font-label-md transition-colors",
                !showResult && "border-outline-variant hover:bg-surface-container-high",
                showResult && correctId && isCorrectOption && "border-tertiary-fixed-dim bg-tertiary-fixed/50",
                showResult && isSelected && correctId && !isCorrectOption && "border-error bg-error-container/60",
                showResult && !correctId && isSelected && "border-primary-container bg-secondary-container/50",
                showResult && !isSelected && "opacity-60",
              )}
            >
              <span>{option.label}</span>
              {showResult && correctId && isCorrectOption && <CheckCircle2 className="text-tertiary shrink-0" size={18} />}
              {showResult && isSelected && correctId && !isCorrectOption && <XCircle className="text-error shrink-0" size={18} />}
            </button>
          );
        })}
      </div>

      {selected !== null && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="rounded-lg bg-surface-container-low p-md text-body-md font-body-md text-on-surface-variant"
        >
          {feedback}
        </motion.div>
      )}
    </div>
  );
}
