import { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { cn } from "../../../../utils/cn";
import { ActivityShell } from "./components/ActivityShell";
import { FeedbackNote } from "./components/FeedbackNote";
import { activity3Pairs, activity3PurposeOptions } from "./activities.data";
import { useWeek13Activities } from "./activitiesProgress";

const ID = "actividad-3" as const;

export function Activity3MetsPurpose() {
  const { markCompleted, isCompleted } = useWeek13Activities();
  const [choices, setChoices] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(isCompleted(ID));

  function choose(section: string, purpose: string) {
    if (checked) return;
    setChoices((prev) => ({ ...prev, [section]: purpose }));
  }

  const allAnswered = activity3Pairs.every((p) => choices[p.section]);

  function handleCheck() {
    setChecked(true);
    markCompleted(ID);
  }

  return (
    <ActivityShell
      id={ID}
      number={3}
      title="Identifica la finalidad de cada sección METS"
      objective="Reconocer la finalidad específica de las secciones fileSec, structMap y dmdSec dentro de un documento METS."
      instructions={<>Para cada sección, selecciona su finalidad correcta.</>}
      done={isCompleted(ID)}
    >
      <div className="space-y-sm">
        {activity3Pairs.map((pair) => {
          const choice = choices[pair.section];
          const isRight = checked && choice === pair.purpose;
          return (
            <div key={pair.section} className="rounded-lg border border-outline-variant bg-surface-container-low p-md space-y-xs">
              <code className="rounded bg-secondary-container/40 px-2 py-0.5 text-caption font-caption font-bold text-on-secondary-container">{pair.section}</code>
              <div className="flex flex-wrap gap-xs pt-1">
                {activity3PurposeOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    disabled={checked}
                    onClick={() => choose(pair.section, opt)}
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
          fileSec enumera los archivos; structMap los organiza jerárquicamente; dmdSec contiene o enlaza la
          descripción del objeto. Ninguna sección METS ejecuta por sí sola ninguna acción de preservación.
        </FeedbackNote>
      )}
    </ActivityShell>
  );
}
