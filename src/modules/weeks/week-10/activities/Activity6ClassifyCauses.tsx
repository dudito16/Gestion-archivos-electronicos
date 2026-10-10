import { MultiSelectCheck } from "../../../../components/common/MultiSelectCheck";
import { ActivityShell } from "./components/ActivityShell";
import { FeedbackNote } from "./components/FeedbackNote";
import { activity6Causes, activity6Instruction } from "./activities.data";
import { useWeek10Activities } from "./activitiesProgress";
import { useState } from "react";

const ID = "actividad-6" as const;

export function Activity6ClassifyCauses() {
  const { markCompleted, isCompleted } = useWeek10Activities();
  const [checked, setChecked] = useState(isCompleted(ID));

  return (
    <ActivityShell
      id={ID}
      number={6}
      title="Causas benignas y causas que comprometen la integridad"
      objective="Distinguir causas de una diferencia de hash que, una vez investigadas, resultan legítimas de aquellas que no."
      instructions={<>{activity6Instruction}</>}
      done={isCompleted(ID)}
    >
      <MultiSelectCheck
        items={activity6Causes}
        onComplete={() => {
          setChecked(true);
          markCompleted(ID);
        }}
      />

      {checked && (
        <FeedbackNote kind="criterio">
          Una modificación autorizada o una conversión de formato registrada son causas legítimas que explican un
          cambio de hash; una sustitución no registrada o una corrupción de datos, en cambio, comprometen la
          integridad y requieren una respuesta distinta.
        </FeedbackNote>
      )}
    </ActivityShell>
  );
}
