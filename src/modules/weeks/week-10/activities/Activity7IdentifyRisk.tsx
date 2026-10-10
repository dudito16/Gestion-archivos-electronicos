import { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { ActivityShell } from "./components/ActivityShell";
import { FeedbackNote } from "./components/FeedbackNote";
import { activity7Case, activity7Feedback, activity7Options } from "./activities.data";
import { useWeek10Activities } from "./activitiesProgress";

const ID = "actividad-7" as const;

export function Activity7IdentifyRisk() {
  const { markCompleted, isCompleted } = useWeek10Activities();
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
      title="Identifica el riesgo"
      objective="Reconocer el riesgo de 'ausencia de referencia' como algo distinto de no haber verificado a tiempo."
      instructions={<>Lee el caso y elige el riesgo que mejor lo describe.</>}
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
