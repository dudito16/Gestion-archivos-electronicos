import { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { ActivityShell } from "./components/ActivityShell";
import { OpenTextField, OpenAnswerDisclaimer } from "./components/OpenTextField";
import { FeedbackNote } from "./components/FeedbackNote";
import { activity10Question, activity10Scenario } from "./activities.data";
import { isMeaningfulText } from "./evaluate";
import { useWeek12Activities } from "./activitiesProgress";

const ID = "actividad-10" as const;

export function Activity10ProfessionalCase() {
  const { getAnswer, setAnswer, markCompleted, isCompleted } = useWeek12Activities();
  const [response, setResponse] = useState<string>(() => getAnswer(ID, ""));
  const [submitted, setSubmitted] = useState(isCompleted(ID));
  const [error, setError] = useState<string | null>(null);

  useEffect(() => setAnswer(ID, response), [response, setAnswer]);

  function handleSubmit() {
    if (!isMeaningfulText(response, 15)) {
      setError("Desarrolla tu respuesta con algo más de detalle (al menos tres elementos concretos).");
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
      title="Caso profesional: San Gabriel"
      objective="Integrar fundamentos, entidades y paquetes de información en el análisis de un caso institucional aplicado."
      instructions={<>{activity10Question}</>}
      done={isCompleted(ID)}
    >
      <p className="rounded-lg border border-outline-variant bg-surface-container-low p-md text-body-md font-body-md text-on-surface">{activity10Scenario}</p>

      <OpenTextField id="act10-response" label="Tu análisis" value={response} onChange={setResponse} rows={5} disabled={submitted} />
      <OpenAnswerDisclaimer />

      {error && <p className="text-label-md font-label-md text-error">{error}</p>}

      {!submitted ? (
        <Button onClick={handleSubmit}>Enviar respuesta</Button>
      ) : (
        <FeedbackNote kind="criterio">
          Antes del ingreso debe definirse un criterio uniforme para agrupar los archivos relacionados y un plan para
          completar los metadatos faltantes. El AIP se distingue de una simple copia porque incluye información de
          preservación (integridad, procedencia, historial de acciones), no solo el contenido original.
        </FeedbackNote>
      )}
    </ActivityShell>
  );
}
