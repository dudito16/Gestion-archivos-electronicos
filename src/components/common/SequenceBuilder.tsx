import { Check, RotateCcw, X } from "lucide-react";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Button } from "../ui/button";
import { cn } from "../../utils/cn";

interface SequenceItem {
  id: string;
  label: string;
}

interface SequenceBuilderProps {
  /** Items in scrambled order — the pool the learner picks from. */
  items: SequenceItem[];
  /** The correct order, expressed as item ids. */
  correctOrder: string[];
  onComplete?: (correct: boolean) => void;
}

/** Click-to-build-a-sequence activity: tap items in order, then check against the expected sequence. */
export function SequenceBuilder({ items, correctOrder, onComplete }: SequenceBuilderProps) {
  const [chosen, setChosen] = useState<string[]>([]);
  const [checked, setChecked] = useState(false);

  const pool = items.filter((item) => !chosen.includes(item.id));
  const isCorrect = useMemo(() => chosen.length === correctOrder.length && chosen.every((id, i) => id === correctOrder[i]), [chosen, correctOrder]);

  function pick(id: string) {
    if (checked) return;
    setChosen((prev) => [...prev, id]);
  }

  function remove(id: string) {
    if (checked) return;
    setChosen((prev) => prev.filter((x) => x !== id));
  }

  function check() {
    setChecked(true);
    onComplete?.(isCorrect);
  }

  function reset() {
    setChosen([]);
    setChecked(false);
  }

  return (
    <div className="space-y-md">
      <div>
        <p className="text-label-md font-label-md text-on-surface-variant mb-xs">Tu secuencia</p>
        <div className="flex flex-wrap items-center gap-xs min-h-[3.5rem] rounded-lg border border-dashed border-outline-variant p-sm">
          {chosen.length === 0 && (
            <span className="text-caption font-caption text-on-surface-variant italic">
              Toca los elementos de abajo en el orden que creas correcto.
            </span>
          )}
          {chosen.map((id, index) => {
            const item = items.find((i) => i.id === id)!;
            const isRight = checked && correctOrder[index] === id;
            const isWrong = checked && correctOrder[index] !== id;
            return (
              <motion.button
                key={id}
                type="button"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                onClick={() => remove(id)}
                disabled={checked}
                className={cn(
                  "flex items-center gap-1 rounded-full border px-3 py-1.5 text-caption font-caption font-medium",
                  !checked && "border-primary-container bg-secondary-container text-on-secondary-container",
                  isRight && "border-tertiary-fixed-dim bg-tertiary-fixed/60",
                  isWrong && "border-error bg-error-container/60",
                )}
              >
                <span className="opacity-60">{index + 1}.</span> {item.label}
                {checked && (isRight ? <Check size={13} /> : <X size={13} />)}
              </motion.button>
            );
          })}
        </div>
      </div>

      {pool.length > 0 && (
        <div>
          <p className="text-label-md font-label-md text-on-surface-variant mb-xs">Elementos disponibles</p>
          <div className="flex flex-wrap gap-xs">
            {pool.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => pick(item.id)}
                className="rounded-full border border-outline-variant bg-surface-container-lowest px-3 py-1.5 text-caption font-caption font-medium text-on-surface hover:border-primary-container transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="flex items-center gap-sm">
        {!checked ? (
          <Button disabled={pool.length > 0} onClick={check}>
            Comprobar orden
          </Button>
        ) : (
          <>
            <p className={cn("text-label-md font-label-md font-semibold", isCorrect ? "text-tertiary" : "text-error")}>
              {isCorrect ? "Correcto." : "Revisa el orden."}
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
