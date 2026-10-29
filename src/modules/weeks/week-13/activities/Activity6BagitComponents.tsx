import { useState } from "react";
import { MultiSelectCheck } from "../../../../components/common/MultiSelectCheck";
import { ActivityShell } from "./components/ActivityShell";
import { FeedbackNote } from "./components/FeedbackNote";
import { activity6Statements } from "./activities.data";
import { useWeek13Activities } from "./activitiesProgress";

const ID = "actividad-6" as const;

export function Activity6BagitComponents() {
  const { markCompleted, isCompleted } = useWeek13Activities();
  const [checked, setChecked] = useState(isCompleted(ID));

  return (
    <ActivityShell
      id={ID}
      number={6}
      title="Reconoce los componentes de un paquete BagIt"
      objective="Identificar qué afirmaciones describen correctamente los componentes y el alcance de BagIt."
      instructions={<>Selecciona las afirmaciones correctas sobre BagIt.</>}
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
          bagit.txt declara la versión utilizada y el manifiesto registra el valor de verificación de cada archivo.
          Una coincidencia de verificación confirma que el contenido no cambió durante la transferencia; no
          garantiza, por sí sola, autenticidad histórica, ni sustituye a los demás estándares revisados esta semana.
        </FeedbackNote>
      )}
    </ActivityShell>
  );
}
