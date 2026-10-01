import { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { ActivityShell } from "./components/ActivityShell";
import { FeedbackNote } from "./components/FeedbackNote";
import { activity7Case, activity7Feedback, activity7Options } from "./activities.data";
import { useWeek8Activities } from "./activitiesProgress";

const ID = "actividad-7" as const;

export function Activity7SelectColorMode() {
  const { markCompleted, isCompleted } = useWeek8Activities();
  const [selected, setSelected] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(isCompleted(ID));

  function handleSubmit() {
    if (!selected) return;
    markCompleted(ID);
    setSubmitted(true);
  }

  const correct = activity7Options.find((o) => o.correct)!;

  return (
    <ActivityShell
      id={ID}
      number={7}
      title="Selecciona el modo de color"
      objective="Decidir el modo de color adecuado según el valor informativo del documento, no por una regla fija."
      instructions={<>Lee el caso y elige el modo de color más adecuado.</>}
      done={isCompleted(ID)}
    >
      <p className="rounded-lg border border-outline-variant bg-surface-container-low p-md text-body-md font-body-md text-on-surface">{activity7Case}</p>

      <div className="flex gap-sm flex-wrap">
        {activity7Options.map((opt) => (
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
        <FeedbackNote kind={selected === correct.id ? "bien" : "revisar"}>{activity7Feedback}</FeedbackNote>
      )}
    </ActivityShell>
  );
}
