import { ArrowDown, ArrowUp, X } from "lucide-react";
import { useState } from "react";
import { Button } from "../../../../../components/ui/button";
import { cn } from "../../../../../utils/cn";
import type { AnswerValue4, ReorderQuestion } from "../practice4.types";

interface Props {
  question: ReorderQuestion;
  disabled: boolean;
  onCheck: (value: AnswerValue4) => void;
}

/** Click-to-add-and-reorder: an accessible alternative to drag-and-drop, using up/down buttons per the activity brief. */
export function ReorderView4({ question, disabled, onCheck }: Props) {
  const [order, setOrder] = useState<string[]>([]);
  const pool = question.items.filter((item) => !order.includes(item.id));

  function add(id: string) {
    if (disabled) return;
    setOrder((prev) => [...prev, id]);
  }

  function remove(id: string) {
    if (disabled) return;
    setOrder((prev) => prev.filter((x) => x !== id));
  }

  function move(index: number, direction: -1 | 1) {
    if (disabled) return;
    setOrder((prev) => {
      const next = [...prev];
      const target = index + direction;
      if (target < 0 || target >= next.length) return prev;
      [next[index], next[target]] = [next[target], next[index]];
      return next;
    });
  }

  return (
    <div className="space-y-md">
      <div>
        <p className="text-label-md font-label-md text-on-surface-variant mb-xs">Tu orden</p>
        <div className={cn("space-y-xs min-h-[3.5rem] rounded-lg border border-dashed border-outline-variant p-sm", disabled && "opacity-70")}>
          {order.length === 0 && <span className="text-caption font-caption text-on-surface-variant italic">Toca los elementos en el orden que consideres correcto.</span>}
          {order.map((id, index) => {
            const item = question.items.find((i) => i.id === id)!;
            return (
              <div key={id} className="flex items-center justify-between gap-xs rounded-lg border border-primary-container bg-secondary-container/40 px-3 py-2">
                <span className="text-body-md font-body-md text-on-secondary-container">
                  <span className="opacity-60 mr-1">{index + 1}.</span>
                  {item.label}
                </span>
                {!disabled && (
                  <span className="flex items-center gap-1 shrink-0">
                    <button type="button" aria-label="Subir" disabled={index === 0} onClick={() => move(index, -1)} className="text-outline hover:text-primary-container disabled:opacity-30">
                      <ArrowUp size={15} />
                    </button>
                    <button type="button" aria-label="Bajar" disabled={index === order.length - 1} onClick={() => move(index, 1)} className="text-outline hover:text-primary-container disabled:opacity-30">
                      <ArrowDown size={15} />
                    </button>
                    <button type="button" aria-label={`Quitar ${item.label}`} onClick={() => remove(id)} className="text-outline hover:text-error">
                      <X size={15} />
                    </button>
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {pool.length > 0 && !disabled && (
        <div>
          <p className="text-label-md font-label-md text-on-surface-variant mb-xs">Elementos disponibles</p>
          <div className="flex flex-wrap gap-xs">
            {pool.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => add(item.id)}
                className="rounded-full border border-outline-variant bg-surface-container-lowest px-3 py-2 text-caption font-caption font-medium text-on-surface hover:border-primary-container transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}

      <Button disabled={pool.length > 0 || disabled} onClick={() => onCheck({ kind: "reorder", order })}>
        Comprobar orden
      </Button>
    </div>
  );
}
