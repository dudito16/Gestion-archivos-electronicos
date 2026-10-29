import { MultiSelectCheck } from "../../../../components/common/MultiSelectCheck";
import { ActivityShell } from "./components/ActivityShell";
import { FeedbackNote } from "./components/FeedbackNote";
import { activity8Instruction, activity8Statements } from "./activities.data";
import { useWeek12Activities } from "./activitiesProgress";
import { useState } from "react";

const ID = "actividad-8" as const;

export function Activity8IdentifyErrors() {
  const { markCompleted, isCompleted } = useWeek12Activities();
  const [checked, setChecked] = useState(isCompleted(ID));

  return (
    <ActivityShell
      id={ID}
      number={8}
      title="Identifica errores conceptuales sobre OAIS"
      objective="Detectar afirmaciones académicamente incorrectas sobre el modelo OAIS."
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
        <FeedbackNote kind="criterio">
          OAIS no garantiza por sí solo la autenticidad, y no todo repositorio implementa el modelo de forma
          completa — ambas son afirmaciones absolutas no sustentadas, el mismo tipo de error que se evitó en la
          Semana 11 con las estrategias de preservación.
        </FeedbackNote>
      )}
    </ActivityShell>
  );
}
