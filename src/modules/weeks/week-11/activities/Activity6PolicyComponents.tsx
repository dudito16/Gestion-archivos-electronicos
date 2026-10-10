import { MultiSelectCheck } from "../../../../components/common/MultiSelectCheck";
import { ActivityShell } from "./components/ActivityShell";
import { FeedbackNote } from "./components/FeedbackNote";
import { activity6PolicyItems } from "./activities.data";
import { useWeek11Activities } from "./activitiesProgress";
import { useState } from "react";

const ID = "actividad-6" as const;

export function Activity6PolicyComponents() {
  const { markCompleted, isCompleted } = useWeek11Activities();
  const [checked, setChecked] = useState(isCompleted(ID));

  return (
    <ActivityShell
      id={ID}
      number={6}
      title="¿Qué pertenece a la política de preservación?"
      objective="Reconocer qué elementos corresponden a la política institucional, en lugar de a un plan de ejecución concreto."
      instructions={<>Selecciona los elementos que corresponden a una política de preservación digital (principios institucionales), no a un plan de ejecución.</>}
      done={isCompleted(ID)}
    >
      <MultiSelectCheck
        items={activity6PolicyItems}
        onComplete={() => {
          setChecked(true);
          markCompleted(ID);
        }}
      />

      {checked && (
        <FeedbackNote kind="criterio">
          La política establece principios y responsabilidades generales; un cronograma detallado de migración de un
          lote específico de documentos pertenece al plan de preservación, no a la política.
        </FeedbackNote>
      )}
    </ActivityShell>
  );
}
