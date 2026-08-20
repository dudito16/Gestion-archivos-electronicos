import { Check, RotateCcw, X } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { cn } from "../../utils/cn";
import { getIcon } from "../../utils/getIcon";

interface SelectableItem {
  id: string;
  label: string;
  icon: string;
  /** Whether this item should be selected for the activity to be "correct". */
  belongs: boolean;
}

interface MultiSelectCheckProps {
  items: SelectableItem[];
  onComplete?: (correct: boolean) => void;
}

/** "Which of these belong to the group?" activity — toggle items, then check the selection against the answer key. */
export function MultiSelectCheck({ items, onComplete }: MultiSelectCheckProps) {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [checked, setChecked] = useState(false);

  function toggle(id: string) {
    if (checked) return;
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function check() {
    setChecked(true);
    const allCorrect = items.every((item) => selected.has(item.id) === item.belongs);
    onComplete?.(allCorrect);
  }

  function reset() {
    setSelected(new Set());
    setChecked(false);
  }

  const allCorrect = checked && items.every((item) => selected.has(item.id) === item.belongs);

  return (
    <div className="space-y-md">
      <div className="grid gap-xs sm:grid-cols-2">
        {items.map((item) => {
          const Icon = getIcon(item.icon);
          const isSelected = selected.has(item.id);
          const showResult = checked;
          const isRight = showResult && isSelected === item.belongs;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => toggle(item.id)}
              disabled={checked}
              aria-pressed={isSelected}
              className={cn(
                "flex items-center gap-xs rounded-lg border px-md py-sm text-left text-label-md font-label-md transition-colors",
                !showResult && isSelected && "border-primary-container bg-secondary-container/50 text-on-secondary-container",
                !showResult && !isSelected && "border-outline-variant bg-surface-container-lowest text-on-surface hover:border-primary-container",
                showResult && isRight && "border-tertiary-fixed-dim bg-tertiary-fixed/40",
                showResult && !isRight && "border-error bg-error-container/40",
              )}
            >
              <Icon size={16} className="shrink-0" />
              <span className="flex-1">{item.label}</span>
              {showResult && (isRight ? <Check size={16} className="text-tertiary shrink-0" /> : <X size={16} className="text-error shrink-0" />)}
            </button>
          );
        })}
      </div>

      <div className="flex items-center gap-sm">
        {!checked ? (
          <Button onClick={check}>Comprobar selección</Button>
        ) : (
          <>
            <p className={cn("text-label-md font-label-md font-semibold", allCorrect ? "text-tertiary" : "text-error")}>
              {allCorrect ? "Correcto." : "Revisa tu selección."}
            </p>
            <Button variant="ghost" size="sm" onClick={reset}>
              <RotateCcw size={14} /> Reintentar
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
