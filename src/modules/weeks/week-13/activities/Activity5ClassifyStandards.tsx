import { useState } from "react";
import { DragDropClassifier } from "../../../../components/common/DragDropClassifier";
import { ActivityShell } from "./components/ActivityShell";
import { FeedbackNote } from "./components/FeedbackNote";
import { activity5Categories, activity5Items } from "./activities.data";
import { useWeek13Activities } from "./activitiesProgress";

const ID = "actividad-5" as const;

export function Activity5ClassifyStandards() {
  const { markCompleted, isCompleted } = useWeek13Activities();
  const [result, setResult] = useState<{ score: number; total: number } | null>(null);

  return (
    <ActivityShell
      id={ID}
      number={5}
      title="Clasifica cada tarea según el estándar que la resuelve"
      objective="Diferenciar las funciones de PREMIS, METS y Dublin Core a partir de tareas concretas."
      instructions={<>Clasifica cada tarea según el estándar (PREMIS, METS o Dublin Core) que la resuelve.</>}
      done={isCompleted(ID)}
    >
      <DragDropClassifier
        items={activity5Items}
        categories={activity5Categories}
        onComplete={(score, total) => {
          setResult({ score, total });
          markCompleted(ID);
        }}
      />

      {result && (
        <FeedbackNote kind={result.score === result.total ? "bien" : "criterio"}>
          PREMIS registra eventos, agentes y derechos de preservación; METS estructura objetos complejos de varias
          partes; Dublin Core describe el recurso para facilitar su búsqueda. Ninguno de los tres resuelve, por sí
          solo, las funciones de los otros dos.
        </FeedbackNote>
      )}
    </ActivityShell>
  );
}
