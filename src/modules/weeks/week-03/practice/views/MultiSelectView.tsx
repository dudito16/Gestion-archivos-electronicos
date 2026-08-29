import { CheckSquare, Square } from "lucide-react";
import { useState } from "react";
import { Button } from "../../../../../components/ui/button";
import { cn } from "../../../../../utils/cn";
import type { MultiQuestionData } from "../practice.types";

interface Props {
  question: MultiQuestionData;
  disabled: boolean;
  onCheck: (value: string[]) => void;
}

export function MultiSelectView({ question, disabled, onCheck }: Props) {
  const [selected, setSelected] = useState<Set<string>>(new Set());

  function toggle(id: string) {
    if (disabled) return;
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  return (
    <div className="space-y-sm">
      <div className="grid gap-xs sm:grid-cols-2">
        {question.options.map((opt) => {
          const isSelected = selected.has(opt.id);
          return (
            <button
              key={opt.id}
              type="button"
              disabled={disabled}
              onClick={() => toggle(opt.id)}
              aria-pressed={isSelected}
              className={cn(
                "flex items-start gap-xs rounded-lg border px-md py-sm text-left text-body-md font-body-md transition-colors",
                isSelected
                  ? "border-primary-container bg-secondary-container/50 text-on-secondary-container"
                  : "border-outline-variant bg-surface-container-lowest text-on-surface hover:border-primary-container",
                disabled && "opacity-60",
              )}
            >
              {isSelected ? <CheckSquare size={18} className="shrink-0 mt-0.5" /> : <Square size={18} className="shrink-0 mt-0.5" />}
              <span>
                <span className="font-semibold mr-1">{opt.id.toUpperCase()}.</span> {opt.label}
              </span>
            </button>
          );
        })}
      </div>
      <Button disabled={selected.size === 0 || disabled} onClick={() => onCheck([...selected])}>
        Comprobar decisión
      </Button>
    </div>
  );
}
