import { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Badge } from "../../../../components/ui/badge";
import { ActivityShell } from "./components/ActivityShell";
import { OpenTextField, OpenAnswerDisclaimer } from "./components/OpenTextField";
import { FeedbackNote } from "./components/FeedbackNote";
import { activity10Question, activity10Scenario } from "./activities.data";
import { isMeaningfulText } from "./evaluate";
import { useWeek14Activities } from "./activitiesProgress";

const ID = "actividad-10" as const;

export function Activity10ProfessionalCase() {
  const { getAnswer, setAnswer, markCompleted, isCompleted } = useWeek14Activities();
  const [response, setResponse] = useState<string>(() => getAnswer(ID, ""));
  const [submitted, setSubmitted] = useState(isCompleted(ID));
  const [error, setError] = useState<string | null>(null);

  useEffect(() => setAnswer(ID, response), [response, setAnswer]);

  function handleSubmit() {
    if (!isMeaningfulText(response, 12)) {
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
      number={10}
      title="Caso profesional integrador"
      objective="Aplicar de forma integrada los criterios de transferencia y los ámbitos de ISO 16363 a un caso institucional."
      instructions={<>{activity10Question}</>}
      done={isCompleted(ID)}
    >
      <div className="rounded-lg border border-outline-variant bg-surface-container-low p-md space-y-xs">
        <Badge variant="tertiary">⚠️ CASO ACADÉMICO SIMULADO</Badge>
        <p className="text-body-md font-body-md text-on-surface">{activity10Scenario}</p>
      </div>

      <OpenTextField id="act10-response" label="Tu propuesta" value={response} onChange={setResponse} rows={5} disabled={submitted} />
      <OpenAnswerDisclaimer />

      {error && <p className="text-label-md font-label-md text-error">{error}</p>}

      {!submitted ? (
        <Button onClick={handleSubmit}>Enviar respuesta</Button>
      ) : (
        <FeedbackNote kind="criterio">
          Los criterios de transferencia (identificación, metadatos, integridad, restricciones, evidencia) sustentan
          el ámbito B (gestión de objetos digitales); las políticas y responsables sustentan el ámbito A; y la
          infraestructura de almacenamiento y recuperación sustenta el ámbito C — los tres ámbitos de ISO 16363 se
          aplican de forma conjunta, no aislada.
        </FeedbackNote>
      )}
    </ActivityShell>
  );
}
