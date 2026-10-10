import { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { ActivityShell } from "./components/ActivityShell";
import { FeedbackNote } from "./components/FeedbackNote";
import { activity4Case, activity4Correct, activity4Feedback, activity4Options } from "./activities.data";
import { useWeek11Activities } from "./activitiesProgress";

const ID = "actividad-4" as const;

export function Activity4ChooseStrategy() {
  const { markCompleted, isCompleted } = useWeek11Activities();
  const [selected, setSelected] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(isCompleted(ID));

  function handleSubmit() {
    if (!selected) return;
    markCompleted(ID);
    setSubmitted(true);
  }

  return (
    <ActivityShell
      id={ID}
      number={4}
      title="Elige la estrategia adecuada"
      objective="Seleccionar la estrategia de preservación más adecuada para un caso concreto."
      instructions={<>Lee el caso y elige la estrategia más apropiada.</>}
      done={isCompleted(ID)}
    >
      <p className="rounded-lg border border-outline-variant bg-surface-container-low p-md text-body-md font-body-md text-on-surface">{activity4Case}</p>

      <div className="flex flex-col gap-xs">
        {activity4Options.map((opt) => (
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
        <FeedbackNote kind={selected === activity4Correct ? "bien" : "revisar"}>{activity4Feedback}</FeedbackNote>
      )}
    </ActivityShell>
  );
}
