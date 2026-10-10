import { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { ActivityShell } from "./components/ActivityShell";
import { OpenTextField, OpenAnswerDisclaimer } from "./components/OpenTextField";
import { FeedbackNote } from "./components/FeedbackNote";
import { isMeaningfulText } from "./evaluate";
import { useWeek11Activities } from "./activitiesProgress";

const ID = "actividad-10" as const;

export function Activity10ProfessionalCase() {
  const { getAnswer, setAnswer, markCompleted, isCompleted } = useWeek11Activities();
  const [plan, setPlan] = useState<string>(() => getAnswer(ID, ""));
  const [submitted, setSubmitted] = useState(isCompleted(ID));
  const [error, setError] = useState<string | null>(null);

  useEffect(() => setAnswer(ID, plan), [plan, setAnswer]);

  function handleSubmit() {
    if (!isMeaningfulText(plan, 15)) {
      setError("Desarrolla tu propuesta con algo más de detalle (al menos tres elementos concretos).");
      return;
    }
    setError(null);
    markCompleted(ID);
    setSubmitted(true);
  }

  return (
    <ActivityShell
      id={ID}
      number={10}
      title="Caso profesional: esboza una política de preservación"
      objective="Integrar fundamentos, riesgos, política y estrategias en una propuesta profesional aplicable a una institución."
      instructions={
        <>
          Una institución pública nunca ha definido una política de preservación digital. Como responsable de
          gestión documental, propone brevemente los elementos esenciales que esa política debería incluir (alcance,
          responsabilidades, criterios de selección y al menos una estrategia frente a la obsolescencia).
        </>
      }
      done={isCompleted(ID)}
    >
      <OpenTextField
        id="act10-plan"
        label="Tu propuesta de política de preservación"
        value={plan}
        onChange={setPlan}
        rows={5}
        disabled={submitted}
        placeholder="p. ej. Alcance: expedientes de valor permanente..."
      />
      <OpenAnswerDisclaimer />

      {error && <p className="text-label-md font-label-md text-error">{error}</p>}

      {!submitted ? (
        <Button onClick={handleSubmit}>Enviar propuesta</Button>
      ) : (
        <FeedbackNote kind="criterio">
          Una buena propuesta define el alcance, asigna responsabilidades claras, establece criterios de selección
          para priorizar documentos, y contempla al menos una estrategia (migración, normalización o emulación)
          frente a los riesgos de obsolescencia identificados.
        </FeedbackNote>
      )}
    </ActivityShell>
  );
}
