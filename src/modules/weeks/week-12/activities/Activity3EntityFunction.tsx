import { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { cn } from "../../../../utils/cn";
import { ActivityShell } from "./components/ActivityShell";
import { FeedbackNote } from "./components/FeedbackNote";
import { activity3FunctionOptions, activity3Pairs } from "./activities.data";
import { useWeek12Activities } from "./activitiesProgress";

const ID = "actividad-3" as const;

export function Activity3EntityFunction() {
  const { markCompleted, isCompleted } = useWeek12Activities();
  const [choices, setChoices] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(isCompleted(ID));

  function choose(entity: string, fn: string) {
    if (checked) return;
    setChoices((prev) => ({ ...prev, [entity]: fn }));
  }

  const allAnswered = activity3Pairs.every((p) => choices[p.entity]);

  function handleCheck() {
    setChecked(true);
    markCompleted(ID);
  }

  return (
    <ActivityShell
      id={ID}
      number={3}
      title="Relaciona cada entidad con su función"
      objective="Asociar las entidades funcionales de OAIS con su responsabilidad principal."
      instructions={<>Para cada entidad, selecciona su función principal.</>}
      done={isCompleted(ID)}
    >
      <div className="space-y-sm">
        {activity3Pairs.map((pair) => {
          const choice = choices[pair.entity];
          const isRight = checked && choice === pair.function;
          return (
            <div key={pair.entity} className="rounded-lg border border-outline-variant bg-surface-container-low p-md space-y-xs">
              <p className="text-label-md font-label-md font-bold text-on-surface">{pair.entity}</p>
              <div className="flex flex-wrap gap-xs">
                {activity3FunctionOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    disabled={checked}
                    onClick={() => choose(pair.entity, opt)}
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
          Cada entidad funcional tiene una responsabilidad principal distinta — atender al público en mesa de partes
          no corresponde a ninguna de las funciones internas del modelo OAIS.
        </FeedbackNote>
      )}
    </ActivityShell>
  );
}
