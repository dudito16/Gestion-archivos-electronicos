import { useState } from "react";
import { DragDropClassifier } from "../../../../components/common/DragDropClassifier";
import { ActivityShell } from "./components/ActivityShell";
import { FeedbackNote } from "./components/FeedbackNote";
import { activity4Categories, activity4Items } from "./activities.data";
import { useWeek14Activities } from "./activitiesProgress";

const ID = "actividad-4" as const;

export function Activity4ClassifyAuditScope() {
  const { markCompleted, isCompleted } = useWeek14Activities();
  const [result, setResult] = useState<{ score: number; total: number } | null>(null);

  return (
    <ActivityShell
      id={ID}
      number={4}
      title="Clasifica cada hallazgo según el ámbito de ISO 16363"
      objective="Reconocer a qué ámbito (A, B o C) corresponde cada hallazgo de una autoevaluación."
      instructions={<>Clasifica cada hallazgo según el ámbito de evaluación de ISO 16363:2025 al que corresponde.</>}
      done={isCompleted(ID)}
    >
      <DragDropClassifier
        items={activity4Items}
        categories={activity4Categories}
        onComplete={(score, total) => {
          setResult({ score, total });
          markCompleted(ID);
        }}
      />

      {result && (
        <FeedbackNote kind={result.score === result.total ? "bien" : "criterio"}>
          Responsables y políticas corresponden a infraestructura organizacional (A); metadatos e integridad
          corresponden a gestión de objetos digitales (B); y redundancia y recuperación ante desastres corresponden
          a infraestructura y seguridad (C).
        </FeedbackNote>
      )}
    </ActivityShell>
  );
}
