import { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { ActivityShell } from "./components/ActivityShell";
import { FeedbackNote } from "./components/FeedbackNote";
import { activity2Case, activity2Feedback, activity2Options } from "./activities.data";
import { useWeek12Activities } from "./activitiesProgress";

const ID = "actividad-2" as const;

export function Activity2ModelVsSoftware() {
  const { markCompleted, isCompleted } = useWeek12Activities();
  const [selected, setSelected] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(isCompleted(ID));

  function handleSubmit() {
    if (!selected) return;
    markCompleted(ID);
    setSubmitted(true);
  }

  const correct = activity2Options.find((o) => o.correct)!;

  return (
    <ActivityShell
      id={ID}
      number={2}
      title="Modelo de referencia vs. software"
      objective="Diferenciar un modelo de referencia conceptual de una herramienta de software concreta."
      instructions={<>Lee el caso y elige la afirmación correcta.</>}
      done={isCompleted(ID)}
    >
      <p className="rounded-lg border border-outline-variant bg-surface-container-low p-md text-body-md font-body-md text-on-surface">{activity2Case}</p>

      <div className="flex flex-col gap-xs">
        {activity2Options.map((opt) => (
          <Button key={opt.id} variant={selected === opt.id ? "primary" : "secondary"} disabled={submitted} onClick={() => setSelected(opt.id)} className="justify-start text-left h-auto py-2">
            {opt.label}
          </Button>
        ))}
      </div>

      {!submitted ? (
        <Button disabled={!selected} onClick={handleSubmit}>
          Enviar selección
        </Button>
      ) : (
        <FeedbackNote kind={selected === correct.id ? "bien" : "revisar"}>{activity2Feedback}</FeedbackNote>
      )}
    </ActivityShell>
  );
}
