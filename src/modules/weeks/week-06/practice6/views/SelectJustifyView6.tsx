import { useState } from "react";
import { Button } from "../../../../../components/ui/button";
import { cn } from "../../../../../utils/cn";
import { OpenTextField } from "../../activities/components/OpenTextField";
import type { AnswerValue6, SelectJustifyQuestion } from "../practice6.types";

interface Props {
  question: SelectJustifyQuestion;
  disabled: boolean;
  onCheck: (value: AnswerValue6) => void;
}

export function SelectJustifyView6({ question, disabled, onCheck }: Props) {
  const [selected, setSelected] = useState<string[]>([]);
  const [justifications, setJustifications] = useState<string[]>(() => question.justifyPrompts.map(() => ""));

  function toggle(id: string) {
    if (disabled) return;
    setSelected((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  }

  function updateJustify(index: number, value: string) {
    setJustifications((prev) => {
      const next = [...prev];
      next[index] = value;
      return next;
    });
  }

  const canCheck = selected.length >= question.minSelected && justifications.every((j) => j.trim().length > 0);

  return (
    <div className="space-y-md">
      <div className="flex flex-wrap gap-xs">
        {question.options.map((opt) => {
          const isSelected = selected.includes(opt.id);
          return (
            <button
              key={opt.id}
              type="button"
              disabled={disabled}
              onClick={() => toggle(opt.id)}
              aria-pressed={isSelected}
              className={cn(
                "rounded-full border px-3 py-2 text-caption font-caption font-medium transition-colors",
                isSelected
                  ? "border-primary-container bg-secondary-container text-on-secondary-container"
                  : "border-outline-variant bg-surface-container-lowest text-on-surface hover:border-primary-container",
                disabled && "opacity-70",
              )}
            >
              {opt.label}
            </button>
          );
        })}
      </div>
      <p className="text-caption font-caption text-on-surface-variant">Selecciona al menos {question.minSelected} elementos.</p>

      <div className="space-y-sm">
        {question.justifyPrompts.map((prompt, index) => (
          <OpenTextField
            key={prompt}
            id={`sj6-${question.id}-${index}`}
            label={prompt}
            value={justifications[index] ?? ""}
            onChange={(v) => updateJustify(index, v)}
            rows={2}
            disabled={disabled}
          />
        ))}
      </div>

      <Button disabled={!canCheck || disabled} onClick={() => onCheck({ kind: "selectJustify", selected, justifications })}>
        Comprobar respuesta
      </Button>
    </div>
  );
}
