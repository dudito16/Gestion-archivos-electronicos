import { useState } from "react";
import { Button } from "../../../../../components/ui/button";
import { cn } from "../../../../../utils/cn";
import type { SingleQuestionData } from "../practice.types";

interface Props {
  question: SingleQuestionData;
  disabled: boolean;
  onCheck: (value: string) => void;
}

export function SingleChoiceView({ question, disabled, onCheck }: Props) {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="space-y-sm">
      <div className="grid gap-xs">
        {question.options.map((opt) => (
          <button
            key={opt.id}
            type="button"
            disabled={disabled}
            onClick={() => setSelected(opt.id)}
            aria-pressed={selected === opt.id}
            className={cn(
              "w-full text-left rounded-lg border px-md py-sm text-body-md font-body-md transition-colors",
              selected === opt.id
                ? "border-primary-container bg-secondary-container/50 text-on-secondary-container"
                : "border-outline-variant bg-surface-container-lowest text-on-surface hover:border-primary-container",
              disabled && "opacity-60",
            )}
          >
            <span className="font-semibold mr-1">{opt.id.toUpperCase()}.</span> {opt.label}
          </button>
        ))}
      </div>
      <Button disabled={!selected || disabled} onClick={() => selected && onCheck(selected)}>
        Comprobar decisión
      </Button>
    </div>
  );
}
