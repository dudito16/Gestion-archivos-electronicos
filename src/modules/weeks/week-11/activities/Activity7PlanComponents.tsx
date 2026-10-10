import { MultiSelectCheck } from "../../../../components/common/MultiSelectCheck";
import { ActivityShell } from "./components/ActivityShell";
import { FeedbackNote } from "./components/FeedbackNote";
import { activity7PlanItems } from "./activities.data";
import { useWeek11Activities } from "./activitiesProgress";
import { useState } from "react";

const ID = "actividad-7" as const;

export function Activity7PlanComponents() {
  const { markCompleted, isCompleted } = useWeek11Activities();
  const [checked, setChecked] = useState(isCompleted(ID));

  return (
    <ActivityShell
      id={ID}
      number={7}
      title="¿Qué pertenece al plan de preservación?"
      objective="Reconocer qué elementos corresponden a la ejecución concreta del plan, en lugar de a los principios de la política."
      instructions={<>Selecciona los elementos que corresponden a un plan de preservación digital (ejecución concreta), no a la política institucional.</>}
      done={isCompleted(ID)}
    >
      <MultiSelectCheck
        items={activity7PlanItems}
        onComplete={() => {
          setChecked(true);
          markCompleted(ID);
        }}
      />

      {checked && (
        <FeedbackNote kind="criterio">
          El plan organiza la ejecución concreta (inventario, cronograma, indicadores); los principios generales de
          autenticidad e integridad que la institución se compromete a respetar pertenecen a la política.
        </FeedbackNote>
      )}
    </ActivityShell>
  );
}
