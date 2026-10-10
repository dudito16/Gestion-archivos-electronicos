import { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { cn } from "../../../../utils/cn";
import { ActivityShell } from "./components/ActivityShell";
import { FeedbackNote } from "./components/FeedbackNote";
import { activity8ControlOptions, activity8Instruction, activity8Pairs } from "./activities.data";
import { useWeek10Activities } from "./activitiesProgress";

const ID = "actividad-8" as const;

export function Activity8MatchControls() {
  const { markCompleted, isCompleted } = useWeek10Activities();
  const [choices, setChoices] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(isCompleted(ID));

  function choose(risk: string, control: string) {
    if (checked) return;
    setChoices((prev) => ({ ...prev, [risk]: control }));
  }

  const allAnswered = activity8Pairs.every((p) => choices[p.risk]);

  function handleCheck() {
    setChecked(true);
    markCompleted(ID);
  }

  return (
    <ActivityShell
      id={ID}
      number={8}
      title="Relaciona cada riesgo con su control"
      objective="Asociar riesgos de integridad con el control más directamente relacionado."
      instructions={<>{activity8Instruction}</>}
      done={isCompleted(ID)}
    >
      <div className="space-y-sm">
        {activity8Pairs.map((pair) => {
          const choice = choices[pair.risk];
          const isRight = checked && choice === pair.control;
          return (
            <div key={pair.risk} className="rounded-lg border border-outline-variant bg-surface-container-low p-md space-y-xs">
              <p className="text-label-md font-label-md font-bold text-on-surface">{pair.risk}</p>
              <div className="flex flex-wrap gap-xs">
                {activity8ControlOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    disabled={checked}
                    onClick={() => choose(pair.risk, opt)}
                    className={cn(
                      "rounded-full border px-3 py-1.5 text-caption font-caption font-medium transition-colors",
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
          El hash por sí solo detecta un cambio; el control de acceso, la referencia desde el ingreso y la
          verificación periódica son los que sostienen la integridad en conjunto.
        </FeedbackNote>
      )}
    </ActivityShell>
  );
}
