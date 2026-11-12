import { useState } from "react";
import { MultiSelectCheck } from "../../../../components/common/MultiSelectCheck";
import { ActivityShell } from "./components/ActivityShell";
import { FeedbackNote } from "./components/FeedbackNote";
import { activity6Statements } from "./activities.data";
import { useWeek14Activities } from "./activitiesProgress";

const ID = "actividad-6" as const;

export function Activity6AuditVsCertification() {
  const { markCompleted, isCompleted } = useWeek14Activities();
  const [checked, setChecked] = useState(isCompleted(ID));

  return (
    <ActivityShell
      id={ID}
      number={6}
      title="Auditoría, certificación y autoevaluación"
      objective="Diferenciar una auditoría formal, una certificación y una autoevaluación académica."
      instructions={<>Selecciona las afirmaciones correctas.</>}
      done={isCompleted(ID)}
    >
      <MultiSelectCheck
        items={activity6Statements}
        onComplete={() => {
          setChecked(true);
          markCompleted(ID);
        }}
      />

      {checked && (
        <FeedbackNote kind="bien">
          Una auditoría examina evidencias concretas; una certificación es el reconocimiento formal emitido tras una
          auditoría exitosa. Completar una autoevaluación académica —como la de este módulo— nunca certifica, por sí
          sola, ningún repositorio real.
        </FeedbackNote>
      )}
    </ActivityShell>
  );
}
