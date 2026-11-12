import { useState } from "react";
import { MultiSelectCheck } from "../../../../components/common/MultiSelectCheck";
import { ActivityShell } from "./components/ActivityShell";
import { FeedbackNote } from "./components/FeedbackNote";
import { activity8Instruction, activity8Statements } from "./activities.data";
import { useWeek14Activities } from "./activitiesProgress";

const ID = "actividad-8" as const;

export function Activity8IdentifyErrors() {
  const { markCompleted, isCompleted } = useWeek14Activities();
  const [checked, setChecked] = useState(isCompleted(ID));

  return (
    <ActivityShell
      id={ID}
      number={8}
      title="Identifica el error conceptual"
      objective="Reconocer afirmaciones con errores conceptuales sobre repositorios digitales confiables."
      instructions={<>{activity8Instruction}</>}
      done={isCompleted(ID)}
    >
      <MultiSelectCheck
        items={activity8Statements}
        onComplete={() => {
          setChecked(true);
          markCompleted(ID);
        }}
      />

      {checked && (
        <FeedbackNote kind="bien">
          Una copia de seguridad semanal no es una política de preservación, y tener un repositorio digital no
          implica estar certificado conforme a ISO 16363. En cambio, exigir responsables formalmente asignados y
          planificar la sostenibilidad financiera y organizacional son afirmaciones correctas sobre la confiabilidad.
        </FeedbackNote>
      )}
    </ActivityShell>
  );
}
