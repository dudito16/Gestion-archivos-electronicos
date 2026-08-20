import { CheckSquare, Square } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "../ui/button";
import { cn } from "../../utils/cn";

interface ChecklistRevealProps {
  options: string[];
  revealTitle: string;
  revealContent: string;
  onReveal?: () => void;
}

/** Multi-select checklist ("what do you notice?") that unlocks an explanation once the learner checks it. */
export function ChecklistReveal({ options, revealTitle, revealContent, onReveal }: ChecklistRevealProps) {
  const [checked, setChecked] = useState<Set<string>>(new Set());
  const [revealed, setRevealed] = useState(false);

  function toggle(option: string) {
    if (revealed) return;
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(option)) next.delete(option);
      else next.add(option);
      return next;
    });
  }

  function reveal() {
    setRevealed(true);
    onReveal?.();
  }

  return (
    <div className="space-y-md">
      <div className="grid gap-xs sm:grid-cols-2">
        {options.map((option) => {
          const isChecked = checked.has(option);
          return (
            <button
              key={option}
              type="button"
              onClick={() => toggle(option)}
              disabled={revealed}
              aria-pressed={isChecked}
              className={cn(
                "flex items-start gap-xs rounded-lg border px-md py-sm text-left text-label-md font-label-md transition-colors",
                isChecked
                  ? "border-primary-container bg-secondary-container/40 text-on-secondary-container"
                  : "border-outline-variant bg-surface-container-lowest text-on-surface hover:border-primary-container",
              )}
            >
              {isChecked ? <CheckSquare size={18} className="shrink-0 mt-0.5" /> : <Square size={18} className="shrink-0 mt-0.5" />}
              <span>{option}</span>
            </button>
          );
        })}
      </div>

      {!revealed ? (
        <Button size="sm" disabled={checked.size === 0} onClick={reveal}>
          Ver explicación
        </Button>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-lg border-l-4 border-primary-container bg-secondary-container/30 p-md"
        >
          <p className="text-label-md font-label-md font-semibold text-on-surface mb-1">{revealTitle}</p>
          <p className="text-body-md font-body-md text-on-surface-variant">{revealContent}</p>
        </motion.div>
      )}
    </div>
  );
}
