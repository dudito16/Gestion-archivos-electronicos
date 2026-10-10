import { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { cn } from "../../../../utils/cn";
import { ActivityShell } from "./components/ActivityShell";
import { FeedbackNote } from "./components/FeedbackNote";
import { activity8Case, activity8CorrectOrder, activity8Items } from "./activities.data";
import { useWeek11Activities } from "./activitiesProgress";

const ID = "actividad-8" as const;

const shuffled = [activity8Items[2], activity8Items[0], activity8Items[3], activity8Items[1]];

export function Activity8OrderFlow() {
  const { markCompleted, isCompleted } = useWeek11Activities();
  const [order, setOrder] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(isCompleted(ID));
  const pool = shuffled.filter((item) => !order.includes(item.id));
  const isCorrect = order.join("|") === activity8CorrectOrder.join("|");

  function handleSubmit() {
    if (order.length !== activity8Items.length) return;
    markCompleted(ID);
    setSubmitted(true);
  }

  return (
    <ActivityShell
      id={ID}
      number={8}
      title="Ordena el recorrido del documento"
      objective="Reconocer la secuencia lógica entre el SGD, el archivo electrónico y la preservación digital."
      instructions={<>Lee el caso y toca las etapas en el orden en que ocurren.</>}
      done={isCompleted(ID)}
    >
      <p className="rounded-lg border border-outline-variant bg-surface-container-low p-md text-body-md font-body-md text-on-surface">{activity8Case}</p>

      <div className={cn("min-h-[3.5rem] rounded-lg border border-dashed border-outline-variant p-sm flex flex-wrap gap-xs", submitted && "opacity-80")}>
        {order.length === 0 && <span className="text-caption font-caption text-on-surface-variant italic">Toca las etapas abajo en el orden correcto.</span>}
        {order.map((id, i) => {
          const item = activity8Items.find((it) => it.id === id)!;
          return (
            <span key={id} className="rounded-full border border-primary-container bg-secondary-container px-3 py-1.5 text-caption font-caption font-medium text-on-secondary-container">
              {i + 1}. {item.label}
            </span>
          );
        })}
      </div>

      {!submitted && pool.length > 0 && (
        <div className="flex flex-wrap gap-xs">
          {pool.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setOrder((prev) => [...prev, item.id])}
              className="rounded-full border border-outline-variant bg-surface-container-lowest px-3 py-2 text-caption font-caption font-medium text-on-surface hover:border-primary-container transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}

      {!submitted ? (
        <Button disabled={order.length !== activity8Items.length} onClick={handleSubmit}>
          Comprobar orden
        </Button>
      ) : (
        <FeedbackNote kind={isCorrect ? "bien" : "revisar"}>
          El documento se gestiona primero en el SGD, pasa a ser archivo electrónico al concluir su trámite, se
          evalúa según la política institucional, y solo entonces — si corresponde — se transfiere a un entorno de
          preservación digital.
        </FeedbackNote>
      )}
    </ActivityShell>
  );
}
