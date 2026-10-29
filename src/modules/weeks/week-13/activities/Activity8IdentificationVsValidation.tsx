import { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { ActivityShell } from "./components/ActivityShell";
import { FeedbackNote } from "./components/FeedbackNote";
import { activity8Case, activity8Feedback, activity8Options } from "./activities.data";
import { useWeek13Activities } from "./activitiesProgress";

const ID = "actividad-8" as const;

export function Activity8IdentificationVsValidation() {
  const { markCompleted, isCompleted } = useWeek13Activities();
  const [selected, setSelected] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(isCompleted(ID));

  function handleSubmit() {
    if (!selected) return;
    markCompleted(ID);
    setSubmitted(true);
  }

  const correct = activity8Options.find((o) => o.correct)!;

  return (
    <ActivityShell
      id={ID}
      number={8}
      title="Distingue identificación de validación"
      objective="Diferenciar identificar un formato de validar su conformidad con un perfil específico."
      instructions={<>Lee el caso y elige la afirmación correcta.</>}
      done={isCompleted(ID)}
    >
      <p className="rounded-lg border border-outline-variant bg-surface-container-low p-md text-body-md font-body-md text-on-surface">{activity8Case}</p>

      <div className="flex flex-col gap-xs">
        {activity8Options.map((opt) => (
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
        <FeedbackNote kind={selected === correct.id ? "bien" : "revisar"}>{activity8Feedback}</FeedbackNote>
      )}
    </ActivityShell>
  );
}
