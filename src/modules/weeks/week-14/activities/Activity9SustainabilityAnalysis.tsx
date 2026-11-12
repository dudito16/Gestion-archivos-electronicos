import { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { ActivityShell } from "./components/ActivityShell";
import { OpenTextField, OpenAnswerDisclaimer } from "./components/OpenTextField";
import { FeedbackNote } from "./components/FeedbackNote";
import { activity9Case, activity9Question } from "./activities.data";
import { isMeaningfulText } from "./evaluate";
import { useWeek14Activities } from "./activitiesProgress";

const ID = "actividad-9" as const;

export function Activity9SustainabilityAnalysis() {
  const { getAnswer, setAnswer, markCompleted, isCompleted } = useWeek14Activities();
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
      title="Analiza la sostenibilidad de un repositorio"
      objective="Reconocer riesgos de sostenibilidad financiera, organizacional y tecnológica en un caso concreto."
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
          De forma inmediata y directa, depender de una sola persona compromete la sostenibilidad organizacional, y
          depender de un presupuesto de proyecto ya vencido compromete la sostenibilidad financiera. La
          sostenibilidad tecnológica no es el riesgo directo de este caso: podría verse afectada más adelante, a
          mediano plazo, como consecuencia de esas dos — no como un riesgo inmediato equivalente a los otros dos.
        </FeedbackNote>
      )}
    </ActivityShell>
  );
}
