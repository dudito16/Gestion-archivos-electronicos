import { useState } from "react";
import { DragDropClassifier } from "../../../../components/common/DragDropClassifier";
import { ActivityShell } from "./components/ActivityShell";
import { FeedbackNote } from "./components/FeedbackNote";
import { activity4Categories, activity4Items } from "./activities.data";
import { useWeek12Activities } from "./activitiesProgress";

const ID = "actividad-4" as const;

export function Activity4ClassifyTasks() {
  const { markCompleted, isCompleted } = useWeek12Activities();
  const [result, setResult] = useState<{ score: number; total: number } | null>(null);

  return (
    <ActivityShell
      id={ID}
      number={4}
      title="Clasifica cada tarea según la entidad responsable"
      objective="Reconocer a qué entidad funcional de OAIS corresponde cada tarea concreta."
      instructions={<>Clasifica cada tarea según la entidad funcional de OAIS responsable de ejecutarla.</>}
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
          Administración negocia acuerdos y define políticas; Almacenamiento Archivístico conserva y verifica;
          Gestión de Datos administra lo descriptivo; Planificación de la Preservación anticipa riesgos tecnológicos;
          Ingest valida el ingreso; Acceso prepara y entrega respetando restricciones.
        </FeedbackNote>
      )}
    </ActivityShell>
  );
}
