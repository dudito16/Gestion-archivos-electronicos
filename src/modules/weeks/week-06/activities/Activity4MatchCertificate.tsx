import { Check, X } from "lucide-react";
import { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { cn } from "../../../../utils/cn";
import { ActivityShell } from "./components/ActivityShell";
import { FeedbackNote } from "./components/FeedbackNote";
import { activity4Concepts, activity4CorrectPairs, activity4Definitions } from "./activities.data";
import { useWeek6Activities } from "./activitiesProgress";

const ID = "actividad-4" as const;

export function Activity4MatchCertificate() {
  const { markCompleted, isCompleted } = useWeek6Activities();
  const [pairs, setPairs] = useState<Record<string, string>>({});
  const [activeConcept, setActiveConcept] = useState<string | null>(null);
  const [checked, setChecked] = useState(isCompleted(ID));
  const pairedDefinitionIds = new Set(Object.values(pairs));
  const allPaired = activity4Concepts.every((c) => pairs[c.id]);

  function selectConcept(id: string) {
    if (checked) return;
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
    if (checked || !activeConcept || pairedDefinitionIds.has(defId)) return;
    setPairs((prev) => ({ ...prev, [activeConcept]: defId }));
    setActiveConcept(null);
  }

  function handleCheck() {
    setChecked(true);
    markCompleted(ID);
  }

  const correctCount = activity4Concepts.filter((c) => pairs[c.id] === activity4CorrectPairs[c.id]).length;

  return (
    <ActivityShell
      id={ID}
      number={4}
      title="Relaciona firma y certificado"
      objective="Diferenciar los roles de la firma digital, el certificado, la autoridad certificadora y la clave pública."
      instructions={<>Toca un concepto y luego su definición correspondiente.</>}
      done={isCompleted(ID)}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
        <div className="space-y-xs">
          <p className="text-label-md font-label-md text-on-surface-variant">Conceptos</p>
          {activity4Concepts.map((c) => {
            const isPaired = Boolean(pairs[c.id]);
            const isActive = activeConcept === c.id;
            const isCorrect = checked && pairs[c.id] === activity4CorrectPairs[c.id];
            return (
              <button
                key={c.id}
                type="button"
                disabled={checked}
                onClick={() => selectConcept(c.id)}
                className={cn(
                  "w-full flex items-center justify-between gap-xs rounded-lg border px-md py-sm text-left text-label-md font-label-md font-semibold transition-colors",
                  !checked && isPaired && "border-tertiary-fixed-dim bg-tertiary-fixed/40",
                  !checked && !isPaired && isActive && "border-primary-container bg-secondary-container/50",
                  !checked && !isPaired && !isActive && "border-outline-variant bg-surface-container-lowest hover:border-primary-container",
                  checked && isCorrect && "border-tertiary-fixed-dim bg-tertiary-fixed/50",
                  checked && !isCorrect && "border-error bg-error-container/50",
                )}
              >
                {c.label}
                {checked && (isCorrect ? <Check size={16} className="text-tertiary shrink-0" /> : <X size={16} className="text-error shrink-0" />)}
              </button>
            );
          })}
        </div>

        <div className="space-y-xs">
          <p className="text-label-md font-label-md text-on-surface-variant">Definiciones</p>
          {activity4Definitions.map((d) => {
            const isPaired = pairedDefinitionIds.has(d.id);
            return (
              <button
                key={d.id}
                type="button"
                disabled={checked || isPaired || !activeConcept}
                onClick={() => selectDefinition(d.id)}
                className={cn(
                  "w-full rounded-lg border px-md py-sm text-left text-body-md font-body-md transition-colors",
                  isPaired ? "border-tertiary-fixed-dim bg-tertiary-fixed/40 text-on-surface opacity-80" : "border-outline-variant bg-surface-container-lowest text-on-surface hover:border-primary-container",
                )}
              >
                {d.label}
              </button>
            );
          })}
        </div>
      </div>

      {!checked ? (
        <Button disabled={!allPaired} onClick={handleCheck}>
          Comprobar relación
        </Button>
      ) : (
        <FeedbackNote kind={correctCount === activity4Concepts.length ? "bien" : "revisar"}>
          Relacionaste correctamente {correctCount} de {activity4Concepts.length}. La firma es el resultado
          criptográfico; el certificado vincula identidad y clave; la autoridad certificadora emite y gestiona
          certificados; la clave pública permite verificar sin exponer la clave privada.
        </FeedbackNote>
      )}
    </ActivityShell>
  );
}
