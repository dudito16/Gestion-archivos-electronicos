import { Check } from "lucide-react";
import { useState } from "react";
import { Button } from "../../../../../components/ui/button";
import { cn } from "../../../../../utils/cn";
import type { MatchQuestionData } from "../practice.types";

interface Props {
  question: MatchQuestionData;
  disabled: boolean;
  onCheck: (value: Record<string, string>) => void;
}

const shuffledDefinitions = <T,>(defs: T[]): T[] => {
  const arr = [...defs];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(((i + 1) * 2654435761) % (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

/** Click a concept, then click its matching definition — pairs lock in and can be undone before checking. */
export function MatchView({ question, disabled, onCheck }: Props) {
  const [definitions] = useState(() => shuffledDefinitions(question.definitions));
  const [pairs, setPairs] = useState<Record<string, string>>({});
  const [activeConcept, setActiveConcept] = useState<string | null>(null);

  const pairedDefinitionIds = new Set(Object.values(pairs));
  const allPaired = question.concepts.every((c) => pairs[c.id]);

  function selectConcept(conceptId: string) {
    if (disabled) return;
    if (pairs[conceptId]) {
      // unpair
      setPairs((prev) => {
        const next = { ...prev };
        delete next[conceptId];
        return next;
      });
      return;
    }
    setActiveConcept((current) => (current === conceptId ? null : conceptId));
  }

  function selectDefinition(defId: string) {
    if (disabled || !activeConcept || pairedDefinitionIds.has(defId)) return;
    setPairs((prev) => ({ ...prev, [activeConcept]: defId }));
    setActiveConcept(null);
  }

  return (
    <div className="space-y-md">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
        <div className="space-y-xs">
          <p className="text-label-md font-label-md text-on-surface-variant">Conceptos</p>
          {question.concepts.map((c) => {
            const isPaired = Boolean(pairs[c.id]);
            const isActive = activeConcept === c.id;
            return (
              <button
                key={c.id}
                type="button"
                disabled={disabled}
                onClick={() => selectConcept(c.id)}
                className={cn(
                  "w-full flex items-center justify-between gap-xs rounded-lg border px-md py-sm text-left text-label-md font-label-md font-semibold transition-colors",
                  isPaired && "border-tertiary-fixed-dim bg-tertiary-fixed/40",
                  !isPaired && isActive && "border-primary-container bg-secondary-container/50",
                  !isPaired && !isActive && "border-outline-variant bg-surface-container-lowest hover:border-primary-container",
                )}
              >
                {c.label}
                {isPaired && <Check size={16} className="text-tertiary shrink-0" />}
              </button>
            );
          })}
        </div>

        <div className="space-y-xs">
          <p className="text-label-md font-label-md text-on-surface-variant">Definiciones</p>
          {definitions.map((d) => {
            const isPaired = pairedDefinitionIds.has(d.id);
            return (
              <button
                key={d.id}
                type="button"
                disabled={disabled || isPaired || !activeConcept}
                onClick={() => selectDefinition(d.id)}
                className={cn(
                  "w-full rounded-lg border px-md py-sm text-left text-body-md font-body-md transition-colors",
                  isPaired
                    ? "border-tertiary-fixed-dim bg-tertiary-fixed/40 text-on-surface opacity-80"
                    : "border-outline-variant bg-surface-container-lowest text-on-surface hover:border-primary-container disabled:hover:border-outline-variant",
                )}
              >
                {d.label}
              </button>
            );
          })}
        </div>
      </div>

      <p className="text-caption font-caption text-on-surface-variant italic">
        {activeConcept ? "Ahora toca la definición correspondiente." : "Toca un concepto y luego su definición."}
      </p>

      <Button disabled={!allPaired || disabled} onClick={() => onCheck(pairs)}>
        Comprobar relación
      </Button>
    </div>
  );
}
