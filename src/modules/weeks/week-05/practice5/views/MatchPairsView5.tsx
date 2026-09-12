import { Check } from "lucide-react";
import { useState } from "react";
import { Button } from "../../../../../components/ui/button";
import { cn } from "../../../../../utils/cn";
import { OpenTextField, OpenAnswerDisclaimer } from "../../activities/components/OpenTextField";
import type { AnswerValue5, MatchPairsQuestion } from "../practice5.types";

interface Props {
  question: MatchPairsQuestion;
  disabled: boolean;
  onCheck: (value: AnswerValue5) => void;
}

/** Click a concept, then its matching definition — same accessible pairing pattern used elsewhere in the app.
 *  When the question carries a `justifyPrompt`, matching first reveals a justification field before submitting. */
export function MatchPairsView5({ question, disabled, onCheck }: Props) {
  const [pairs, setPairs] = useState<Record<string, string>>({});
  const [activeConcept, setActiveConcept] = useState<string | null>(null);
  const [matched, setMatched] = useState(false);
  const [justification, setJustification] = useState("");
  const pairedDefinitionIds = new Set(Object.values(pairs));
  const allPaired = question.concepts.every((c) => pairs[c.id]);

  function selectConcept(id: string) {
    if (disabled || matched) return;
    if (pairs[id]) {
      setPairs((prev) => {
        const next = { ...prev };
        delete next[id];
        return next;
      });
      return;
    }
    setActiveConcept((current) => (current === id ? null : id));
  }

  function selectDefinition(defId: string) {
    if (disabled || matched || !activeConcept || pairedDefinitionIds.has(defId)) return;
    setPairs((prev) => ({ ...prev, [activeConcept]: defId }));
    setActiveConcept(null);
  }

  function handleCheckPairs() {
    if (question.justifyPrompt) {
      setMatched(true);
      return;
    }
    onCheck({ kind: "matchPairs", pairs });
  }

  return (
    <div className="space-y-md">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
        <div className="space-y-xs">
          <p className="text-label-md font-label-md text-on-surface-variant">Elementos</p>
          {question.concepts.map((c) => {
            const isPaired = Boolean(pairs[c.id]);
            const isActive = activeConcept === c.id;
            return (
              <button
                key={c.id}
                type="button"
                disabled={disabled || matched}
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
          <p className="text-label-md font-label-md text-on-surface-variant">Opciones</p>
          {question.definitions.map((d) => {
            const isPaired = pairedDefinitionIds.has(d.id);
            return (
              <button
                key={d.id}
                type="button"
                disabled={disabled || matched || isPaired || !activeConcept}
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
        {activeConcept ? "Ahora toca la opción correspondiente." : "Toca un elemento y luego su opción correspondiente."}
      </p>

      {!matched && (
        <Button disabled={!allPaired || disabled} onClick={handleCheckPairs}>
          Comprobar relación
        </Button>
      )}

      {matched && question.justifyPrompt && (
        <div className="space-y-sm pt-sm border-t border-outline-variant">
          <OpenTextField id={`mp5-${question.id}`} label={question.justifyPrompt} value={justification} onChange={setJustification} rows={3} disabled={disabled} />
          <OpenAnswerDisclaimer />
          <Button disabled={justification.trim().length === 0 || disabled} onClick={() => onCheck({ kind: "matchPairs", pairs, justification })}>
            Enviar respuesta
          </Button>
        </div>
      )}
    </div>
  );
}
