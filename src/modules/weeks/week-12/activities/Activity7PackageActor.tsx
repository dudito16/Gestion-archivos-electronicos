import { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { cn } from "../../../../utils/cn";
import { ActivityShell } from "./components/ActivityShell";
import { FeedbackNote } from "./components/FeedbackNote";
import { activity7ActorOptions, activity7Pairs } from "./activities.data";
import { useWeek12Activities } from "./activitiesProgress";

const ID = "actividad-7" as const;

export function Activity7PackageActor() {
  const { markCompleted, isCompleted } = useWeek12Activities();
  const [choices, setChoices] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(isCompleted(ID));

  function choose(pkg: string, actor: string) {
    if (checked) return;
    setChoices((prev) => ({ ...prev, [pkg]: actor }));
  }

  const allAnswered = activity7Pairs.every((p) => choices[p.package]);

  function handleCheck() {
    setChecked(true);
    markCompleted(ID);
  }

  return (
    <ActivityShell
      id={ID}
      number={7}
      title="Relaciona cada paquete con su actor"
      objective="Asociar correctamente SIP y DIP con el actor externo correspondiente."
      instructions={<>Para cada paquete, selecciona el actor que lo origina o lo recibe.</>}
      done={isCompleted(ID)}
    >
      <div className="space-y-sm">
        {activity7Pairs.map((pair) => {
          const choice = choices[pair.package];
          const isRight = checked && choice === pair.actor;
          return (
            <div key={pair.package} className="rounded-lg border border-outline-variant bg-surface-container-low p-md space-y-xs">
              <p className="text-label-md font-label-md font-bold text-on-surface">{pair.package}</p>
              <div className="flex flex-wrap gap-xs">
                {activity7ActorOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    disabled={checked}
                    onClick={() => choose(pair.package, opt)}
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
          El SIP lo origina el Productor; el DIP lo recibe el Consumidor. "Administración informática únicamente" no
          corresponde a ninguno de los dos actores externos del modelo.
        </FeedbackNote>
      )}
    </ActivityShell>
  );
}
