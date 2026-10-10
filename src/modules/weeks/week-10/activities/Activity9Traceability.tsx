import { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { ActivityShell } from "./components/ActivityShell";
import { FeedbackNote } from "./components/FeedbackNote";
import { activity9Case, activity9Feedback, activity9Options, activity9Question } from "./activities.data";
import { useWeek10Activities } from "./activitiesProgress";

const ID = "actividad-9" as const;

export function Activity9Traceability() {
  const { markCompleted, isCompleted } = useWeek10Activities();
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
      title="Trazabilidad y verificación de integridad"
      objective="Conectar la verificación técnica de integridad con los registros de trazabilidad y auditoría vistos en la Semana 7."
      instructions={<>{activity9Question}</>}
      done={isCompleted(ID)}
    >
      <p className="rounded-lg border border-outline-variant bg-surface-container-low p-md text-body-md font-body-md text-on-surface">{activity9Case}</p>

      <div className="flex flex-col gap-xs">
        {activity9Options.map((opt) => (
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
        <FeedbackNote kind={selected === correct.id ? "bien" : "revisar"}>{activity9Feedback}</FeedbackNote>
      )}
    </ActivityShell>
  );
}
