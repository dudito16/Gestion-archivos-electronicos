import { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { ActivityShell } from "./components/ActivityShell";
import { OpenTextField, OpenAnswerDisclaimer } from "./components/OpenTextField";
import { FeedbackNote } from "./components/FeedbackNote";
import { activity5Case, activity5Question } from "./activities.data";
import { isMeaningfulText } from "./evaluate";
import { useWeek11Activities } from "./activitiesProgress";

const ID = "actividad-5" as const;

export function Activity5JustifyStrategy() {
  const { getAnswer, setAnswer, markCompleted, isCompleted } = useWeek11Activities();
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
      number={5}
      title="Analiza y justifica una estrategia"
      objective="Aplicar criterio profesional para elegir y justificar una estrategia de preservación ante un caso complejo."
      instructions={<>{activity5Question}</>}
      done={isCompleted(ID)}
    >
      <p className="rounded-lg border border-outline-variant bg-surface-container-low p-md text-body-md font-body-md text-on-surface">{activity5Case}</p>

      <OpenTextField id="act5-response" label="Tu análisis" value={response} onChange={setResponse} rows={4} disabled={submitted} />
      <OpenAnswerDisclaimer />

      {error && <p className="text-label-md font-label-md text-error">{error}</p>}

      {!submitted ? (
        <Button onClick={handleSubmit}>Enviar respuesta</Button>
      ) : (
        <FeedbackNote kind="criterio">
          No existe una única respuesta correcta: lo importante es que tu elección (migración, emulación o una
          combinación) esté justificada considerando qué se perdería o se conservaría de la funcionalidad original.
        </FeedbackNote>
      )}
    </ActivityShell>
  );
}
