import { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { cn } from "../../../../utils/cn";
import { ActivityShell } from "./components/ActivityShell";
import { FeedbackNote } from "./components/FeedbackNote";
import { activity3MeasureOptions, activity3Pairs } from "./activities.data";
import { useWeek11Activities } from "./activitiesProgress";

const ID = "actividad-3" as const;

export function Activity3RiskMeasure() {
  const { markCompleted, isCompleted } = useWeek11Activities();
  const [choices, setChoices] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(isCompleted(ID));

  function choose(risk: string, measure: string) {
    if (checked) return;
    setChoices((prev) => ({ ...prev, [risk]: measure }));
  }

  const allAnswered = activity3Pairs.every((p) => choices[p.risk]);

  function handleCheck() {
    setChecked(true);
    markCompleted(ID);
  }

  return (
    <ActivityShell
      id={ID}
      number={3}
      title="Relaciona cada riesgo con su medida preventiva"
      objective="Asociar riesgos de preservación con la medida preventiva o correctiva más directamente relacionada."
      instructions={<>Para cada riesgo, selecciona la medida más adecuada.</>}
      done={isCompleted(ID)}
    >
      <div className="space-y-sm">
        {activity3Pairs.map((pair) => {
          const choice = choices[pair.risk];
          const isRight = checked && choice === pair.measure;
          return (
            <div key={pair.risk} className="rounded-lg border border-outline-variant bg-surface-container-low p-md space-y-xs">
              <p className="text-label-md font-label-md font-bold text-on-surface">{pair.risk}</p>
              <div className="flex flex-wrap gap-xs">
                {activity3MeasureOptions.map((opt) => (
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
          Cada riesgo de preservación tiene una medida preventiva o correctiva directamente asociada — la formación
          en atención al público, aunque valiosa, no responde a ninguno de estos riesgos técnicos.
        </FeedbackNote>
      )}
    </ActivityShell>
  );
}
