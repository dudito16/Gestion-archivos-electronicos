import { useState } from "react";
import { Button } from "../../../../../components/ui/button";
import { cn } from "../../../../../utils/cn";
import type { AnswerValue14, MultipleChoiceQuestion } from "../practice14.types";

interface Props {
  question: MultipleChoiceQuestion;
  disabled: boolean;
  onCheck: (value: AnswerValue14) => void;
}

export function MultipleChoiceView14({ question, disabled, onCheck }: Props) {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="space-y-md">
      <div className="flex flex-col gap-xs">
        {question.options.map((opt) => {
          const isSelected = selected === opt.id;
          return (
            <button
              key={opt.id}
              type="button"
              disabled={disabled}
              onClick={() => setSelected(opt.id)}
              aria-pressed={isSelected}
              className={cn(
                "rounded-lg border px-md py-sm text-left text-body-md font-body-md transition-colors",
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

      <Button disabled={!selected || disabled} onClick={() => selected && onCheck({ kind: "multipleChoice", selectedId: selected })}>
        Comprobar respuesta
      </Button>
    </div>
  );
}
