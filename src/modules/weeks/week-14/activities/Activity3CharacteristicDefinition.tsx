import { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { cn } from "../../../../utils/cn";
import { ActivityShell } from "./components/ActivityShell";
import { FeedbackNote } from "./components/FeedbackNote";
import { activity3DefinitionOptions, activity3Pairs } from "./activities.data";
import { useWeek14Activities } from "./activitiesProgress";

const ID = "actividad-3" as const;

export function Activity3CharacteristicDefinition() {
  const { markCompleted, isCompleted } = useWeek14Activities();
  const [choices, setChoices] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(isCompleted(ID));

  function choose(characteristic: string, def: string) {
    if (checked) return;
    setChoices((prev) => ({ ...prev, [characteristic]: def }));
  }

  const allAnswered = activity3Pairs.every((p) => choices[p.characteristic]);

  function handleCheck() {
    setChecked(true);
    markCompleted(ID);
  }

  return (
    <ActivityShell
      id={ID}
      number={3}
      title="Relaciona cada característica con su definición"
      objective="Asociar las características de confiabilidad con su definición exacta."
      instructions={<>Para cada característica, selecciona su definición.</>}
      done={isCompleted(ID)}
    >
      <div className="space-y-sm">
        {activity3Pairs.map((pair) => {
          const choice = choices[pair.characteristic];
          const isRight = checked && choice === pair.definition;
          return (
            <div key={pair.characteristic} className="rounded-lg border border-outline-variant bg-surface-container-low p-md space-y-xs">
              <p className="text-label-md font-label-md font-bold text-on-surface">{pair.characteristic}</p>
              <div className="flex flex-wrap gap-xs">
                {activity3DefinitionOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    disabled={checked}
                    onClick={() => choose(pair.characteristic, opt)}
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
          Cada característica tiene una definición precisa y distinta de las demás — "que cualquier persona pueda
          modificar el documento sin dejar registro" no corresponde a ninguna característica de confiabilidad: es,
          precisamente, el riesgo que la seguridad y la trazabilidad buscan controlar.
        </FeedbackNote>
      )}
    </ActivityShell>
  );
}
