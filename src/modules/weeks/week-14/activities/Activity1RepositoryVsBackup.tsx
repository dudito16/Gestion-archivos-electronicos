import { useState } from "react";
import { MultiSelectCheck } from "../../../../components/common/MultiSelectCheck";
import { ActivityShell } from "./components/ActivityShell";
import { FeedbackNote } from "./components/FeedbackNote";
import { activity1Statements } from "./activities.data";
import { useWeek14Activities } from "./activitiesProgress";

const ID = "actividad-1" as const;

export function Activity1RepositoryVsBackup() {
  const { markCompleted, isCompleted } = useWeek14Activities();
  const [checked, setChecked] = useState(isCompleted(ID));

  return (
    <ActivityShell
      id={ID}
      number={1}
      title="Almacenamiento, copia de seguridad y repositorio confiable"
      objective="Diferenciar almacenamiento digital, copia de seguridad y repositorio digital confiable."
      instructions={<>Selecciona las afirmaciones correctas.</>}
      done={isCompleted(ID)}
    >
      <MultiSelectCheck
        items={activity1Statements}
        onComplete={() => {
          setChecked(true);
          markCompleted(ID);
        }}
      />

      {checked && (
        <FeedbackNote kind="bien">
          Un repositorio confiable sostiene la preservación mediante políticas, controles y responsabilidades — no
          basta con tener servidores modernos, copias de seguridad, ni con almacenar documentos sin más.
        </FeedbackNote>
      )}
    </ActivityShell>
  );
}
