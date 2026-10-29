import { useState } from "react";
import { MultiSelectCheck } from "../../../../components/common/MultiSelectCheck";
import { ActivityShell } from "./components/ActivityShell";
import { FeedbackNote } from "./components/FeedbackNote";
import { activity4Scenario, activity4Statements } from "./activities.data";
import { useWeek13Activities } from "./activitiesProgress";

const ID = "actividad-4" as const;

export function Activity4DublinCoreElements() {
  const { markCompleted, isCompleted } = useWeek13Activities();
  const [checked, setChecked] = useState(isCompleted(ID));

  return (
    <ActivityShell
      id={ID}
      number={4}
      title="Selecciona los elementos Dublin Core correctos"
      objective="Aplicar elementos del Dublin Core Metadata Element Set para describir un recurso digital."
      instructions={<>{activity4Scenario} Selecciona las afirmaciones correctas.</>}
      done={isCompleted(ID)}
    >
      <MultiSelectCheck
        items={activity4Statements}
        onComplete={() => {
          setChecked(true);
          markCompleted(ID);
        }}
      />

      {checked && (
        <FeedbackNote kind="bien">
          title, creator y date son elementos del Dublin Core Metadata Element Set. Dublin Core describe el recurso
          para facilitar su búsqueda; no registra el historial de acciones de preservación — eso corresponde a PREMIS.
        </FeedbackNote>
      )}
    </ActivityShell>
  );
}
