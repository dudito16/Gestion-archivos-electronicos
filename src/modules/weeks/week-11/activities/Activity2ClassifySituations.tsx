import { useState } from "react";
import { DragDropClassifier } from "../../../../components/common/DragDropClassifier";
import { ActivityShell } from "./components/ActivityShell";
import { FeedbackNote } from "./components/FeedbackNote";
import { activity2Categories, activity2Items } from "./activities.data";
import { useWeek11Activities } from "./activitiesProgress";

const ID = "actividad-2" as const;

export function Activity2ClassifySituations() {
  const { markCompleted, isCompleted } = useWeek11Activities();
  const [result, setResult] = useState<{ score: number; total: number } | null>(null);

  return (
    <ActivityShell
      id={ID}
      number={2}
      title="Clasifica cada situación"
      objective="Distinguir gestión documental, almacenamiento, respaldo y preservación digital."
      instructions={<>Clasifica cada situación según corresponda a gestión documental, almacenamiento, respaldo o preservación digital.</>}
      done={isCompleted(ID)}
    >
      <DragDropClassifier
        items={activity2Items}
        categories={activity2Categories}
        onComplete={(score, total) => {
          setResult({ score, total });
          markCompleted(ID);
        }}
      />

      {result && (
        <FeedbackNote kind={result.score === result.total ? "bien" : "criterio"}>
          Gestión documental es el trámite activo; almacenamiento es solo guardar un archivo; respaldo protege contra
          pérdidas accidentales inmediatas; preservación digital planifica y documenta la accesibilidad a largo
          plazo frente a la obsolescencia tecnológica.
        </FeedbackNote>
      )}
    </ActivityShell>
  );
}
