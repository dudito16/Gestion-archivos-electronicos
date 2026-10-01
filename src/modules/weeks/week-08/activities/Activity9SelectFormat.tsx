import { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { ActivityShell } from "./components/ActivityShell";
import { FeedbackNote } from "./components/FeedbackNote";
import { activity9Case, activity9Feedback, activity9Options } from "./activities.data";
import { useWeek8Activities } from "./activitiesProgress";

const ID = "actividad-9" as const;

export function Activity9SelectFormat() {
  const { markCompleted, isCompleted } = useWeek8Activities();
  const [selected, setSelected] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(isCompleted(ID));

  function handleSubmit() {
    if (!selected) return;
    markCompleted(ID);
    setSubmitted(true);
  }

  const correct = activity9Options.find((o) => o.correct)!;

  return (
    <ActivityShell
      id={ID}
      number={9}
      title="Selecciona un formato para un caso"
      objective="Elegir el formato adecuado según el propósito y los requisitos de conservación del caso."
      instructions={<>Lee el caso y elige el formato más adecuado.</>}
      done={isCompleted(ID)}
    >
      <p className="rounded-lg border border-outline-variant bg-surface-container-low p-md text-body-md font-body-md text-on-surface">{activity9Case}</p>

      <div className="flex gap-sm flex-wrap">
        {activity9Options.map((opt) => (
          <Button key={opt.id} variant={selected === opt.id ? "primary" : "secondary"} disabled={submitted} onClick={() => setSelected(opt.id)}>
            {opt.label}
          </Button>
        ))}
      </div>

      {!submitted ? (
        <Button disabled={!selected} onClick={handleSubmit}>
          Enviar selección
        </Button>
      ) : (
        <FeedbackNote kind={selected === correct.id ? "bien" : "revisar"}>{activity9Feedback}</FeedbackNote>
      )}
    </ActivityShell>
  );
}
