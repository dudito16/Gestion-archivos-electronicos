import { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { ActivityShell } from "./components/ActivityShell";
import { OpenTextField, OpenAnswerDisclaimer } from "./components/OpenTextField";
import { FeedbackNote } from "./components/FeedbackNote";
import { activity9Case, activity9Question } from "./activities.data";
import { isMeaningfulText } from "./evaluate";
import { useWeek13Activities } from "./activitiesProgress";

const ID = "actividad-9" as const;

export function Activity9EvaluateNormalization() {
  const { getAnswer, setAnswer, markCompleted, isCompleted } = useWeek13Activities();
  const [response, setResponse] = useState<string>(() => getAnswer(ID, ""));
  const [submitted, setSubmitted] = useState(isCompleted(ID));
  const [error, setError] = useState<string | null>(null);

  useEffect(() => setAnswer(ID, response), [response, setAnswer]);

  function handleSubmit() {
    if (!isMeaningfulText(response, 10)) {
      setError("Desarrolla tu respuesta con algo más de detalle.");
      return;
    }
    setError(null);
    markCompleted(ID);
    setSubmitted(true);
  }

  return (
    <ActivityShell
      id={ID}
      number={9}
      title="Evalúa una propuesta de normalización"
      objective="Reconocer qué evaluación previa requiere una decisión de normalización de formatos."
      instructions={<>{activity9Question}</>}
      done={isCompleted(ID)}
    >
      <p className="rounded-lg border border-outline-variant bg-surface-container-low p-md text-body-md font-body-md text-on-surface">{activity9Case}</p>

      <OpenTextField id="act9-response" label="Tu análisis" value={response} onChange={setResponse} rows={4} disabled={submitted} />
      <OpenAnswerDisclaimer />

      {error && <p className="text-label-md font-label-md text-error">{error}</p>}

      {!submitted ? (
        <Button onClick={handleSubmit}>Enviar respuesta</Button>
      ) : (
        <FeedbackNote kind="criterio">
          A la propuesta le falta evaluar el riesgo real de obsolescencia, comprobar qué podría perderse en la
          transformación, conservar los archivos originales, comprobar el resultado y documentar la decisión como
          un evento de preservación — normalizar sin esta evaluación previa no es una decisión justificada.
        </FeedbackNote>
      )}
    </ActivityShell>
  );
}
