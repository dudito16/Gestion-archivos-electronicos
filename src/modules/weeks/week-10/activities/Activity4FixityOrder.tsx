import { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { cn } from "../../../../utils/cn";
import { ActivityShell } from "./components/ActivityShell";
import { FeedbackNote } from "./components/FeedbackNote";
import { activity4Feedback, activity4Stages } from "./activities.data";
import { useWeek10Activities } from "./activitiesProgress";

const ID = "actividad-4" as const;

const shuffled = [activity4Stages[2], activity4Stages[0], activity4Stages[4], activity4Stages[1], activity4Stages[5], activity4Stages[3]];

export function Activity4FixityOrder() {
  const { markCompleted, isCompleted } = useWeek10Activities();
  const [order, setOrder] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(isCompleted(ID));
  const pool = shuffled.filter((s) => !order.includes(s));
  const isCorrect = order.join("|") === activity4Stages.join("|");

  function handleSubmit() {
    if (order.length !== activity4Stages.length) return;
    markCompleted(ID);
    setSubmitted(true);
  }

  return (
    <ActivityShell
      id={ID}
      number={4}
      title="Ordena el proceso de fixity"
      objective="Reconocer la secuencia lógica detrás de una verificación de integridad."
      instructions={<>Toca las etapas en el orden en que ocurren.</>}
      done={isCompleted(ID)}
    >
      <div className={cn("min-h-[3.5rem] rounded-lg border border-dashed border-outline-variant p-sm flex flex-wrap gap-xs", submitted && "opacity-80")}>
        {order.length === 0 && <span className="text-caption font-caption text-on-surface-variant italic">Toca las etapas abajo en el orden correcto.</span>}
        {order.map((s, i) => (
          <span key={s} className="rounded-full border border-primary-container bg-secondary-container px-3 py-1.5 text-caption font-caption font-medium text-on-secondary-container">
            {i + 1}. {s}
          </span>
        ))}
      </div>

      {!submitted && pool.length > 0 && (
        <div className="flex flex-wrap gap-xs">
          {pool.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setOrder((prev) => [...prev, s])}
              className="rounded-full border border-outline-variant bg-surface-container-lowest px-3 py-2 text-caption font-caption font-medium text-on-surface hover:border-primary-container transition-colors"
            >
              {s}
            </button>
          ))}
        </div>
      )}

      {!submitted ? (
        <Button disabled={order.length !== activity4Stages.length} onClick={handleSubmit}>
          Comprobar orden
        </Button>
      ) : (
        <FeedbackNote kind={isCorrect ? "bien" : "revisar"}>{activity4Feedback}</FeedbackNote>
      )}
    </ActivityShell>
  );
}
