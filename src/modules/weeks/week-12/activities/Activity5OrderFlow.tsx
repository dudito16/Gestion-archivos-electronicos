import { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { cn } from "../../../../utils/cn";
import { ActivityShell } from "./components/ActivityShell";
import { FeedbackNote } from "./components/FeedbackNote";
import { activity5Feedback, activity5Stages } from "./activities.data";
import { useWeek12Activities } from "./activitiesProgress";

const ID = "actividad-5" as const;

const shuffled = [activity5Stages[2], activity5Stages[0], activity5Stages[4], activity5Stages[1], activity5Stages[3]];

export function Activity5OrderFlow() {
  const { markCompleted, isCompleted } = useWeek12Activities();
  const [order, setOrder] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(isCompleted(ID));
  const pool = shuffled.filter((s) => !order.includes(s));
  const isCorrect = order.join("|") === activity5Stages.join("|");

  function handleSubmit() {
    if (order.length !== activity5Stages.length) return;
    markCompleted(ID);
    setSubmitted(true);
  }

  return (
    <ActivityShell
      id={ID}
      number={5}
      title="Ordena el flujo conceptual de ingreso y acceso"
      objective="Reconocer la secuencia lógica del flujo general del modelo OAIS."
      instructions={<>Toca las etapas en el orden en que ocurren conceptualmente.</>}
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
        <Button disabled={order.length !== activity5Stages.length} onClick={handleSubmit}>
          Comprobar orden
        </Button>
      ) : (
        <FeedbackNote kind={isCorrect ? "bien" : "revisar"}>{activity5Feedback}</FeedbackNote>
      )}
    </ActivityShell>
  );
}
