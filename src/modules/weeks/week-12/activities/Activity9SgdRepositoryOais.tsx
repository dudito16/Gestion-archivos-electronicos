import { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { ActivityShell } from "./components/ActivityShell";
import { OpenTextField, OpenAnswerDisclaimer } from "./components/OpenTextField";
import { FeedbackNote } from "./components/FeedbackNote";
import { activity9Case, activity9Question } from "./activities.data";
import { isMeaningfulText } from "./evaluate";
import { useWeek12Activities } from "./activitiesProgress";

const ID = "actividad-9" as const;

export function Activity9SgdRepositoryOais() {
  const { getAnswer, setAnswer, markCompleted, isCompleted } = useWeek12Activities();
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
      title="SGD, repositorio y OAIS"
      objective="Analizar la relación conceptual entre el SGD, un repositorio digital concreto y el modelo OAIS."
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
          La afirmación no es correcta: tener un SGD y un repositorio no equivale automáticamente a aplicar OAIS. El
          repositorio puede adoptar principios de OAIS, pero eso depende de cómo se diseñe y gestione, no de su sola
          adquisición.
        </FeedbackNote>
      )}
    </ActivityShell>
  );
}
