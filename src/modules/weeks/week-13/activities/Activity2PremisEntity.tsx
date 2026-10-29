import { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { cn } from "../../../../utils/cn";
import { ActivityShell } from "./components/ActivityShell";
import { FeedbackNote } from "./components/FeedbackNote";
import { activity2EntityOptions, activity2Pairs } from "./activities.data";
import { useWeek13Activities } from "./activitiesProgress";

const ID = "actividad-2" as const;

export function Activity2PremisEntity() {
  const { markCompleted, isCompleted } = useWeek13Activities();
  const [choices, setChoices] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(isCompleted(ID));

  function choose(scenario: string, entity: string) {
    if (checked) return;
    setChoices((prev) => ({ ...prev, [scenario]: entity }));
  }

  const allAnswered = activity2Pairs.every((p) => choices[p.scenario]);

  function handleCheck() {
    setChecked(true);
    markCompleted(ID);
  }

  return (
    <ActivityShell
      id={ID}
      number={2}
      title="Relaciona cada situación con su entidad PREMIS"
      objective="Reconocer a qué entidad conceptual de PREMIS (Objetos, Eventos, Agentes, Derechos) corresponde cada situación."
      instructions={<>Para cada situación, selecciona la entidad PREMIS correspondiente.</>}
      done={isCompleted(ID)}
    >
      <div className="space-y-sm">
        {activity2Pairs.map((pair) => {
          const choice = choices[pair.scenario];
          const isRight = checked && choice === pair.entity;
          return (
            <div key={pair.scenario} className="rounded-lg border border-outline-variant bg-surface-container-low p-md space-y-xs">
              <p className="text-label-md font-label-md font-bold text-on-surface">{pair.scenario}</p>
              <div className="flex flex-wrap gap-xs">
                {activity2EntityOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    disabled={checked}
                    onClick={() => choose(pair.scenario, opt)}
                    className={cn(
                      "rounded-full border px-3 py-1.5 text-caption font-caption font-medium transition-colors text-left",
                      choice === opt
                        ? checked
                          ? isRight
                            ? "border-tertiary-fixed-dim bg-tertiary-fixed/40"
                            : "border-error bg-error-container/40"
                          : "border-primary-container bg-secondary-container text-on-secondary-container"
                        : "border-outline-variant bg-surface-container-lowest text-on-surface hover:border-primary-container",
                    )}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {!checked ? (
        <Button disabled={!allAnswered} onClick={handleCheck}>
          Comprobar relación
        </Button>
      ) : (
        <FeedbackNote kind="criterio">
          Una comprobación de integridad es un Evento; el sistema que la ejecuta es un Agente; y una restricción de
          acceso vigente corresponde a Derechos — tres entidades PREMIS distintas para tres informaciones distintas.
        </FeedbackNote>
      )}
    </ActivityShell>
  );
}
