import { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Badge } from "../../../../components/ui/badge";
import { ActivityShell } from "./components/ActivityShell";
import { OpenTextField, OpenAnswerDisclaimer } from "./components/OpenTextField";
import { FeedbackNote } from "./components/FeedbackNote";
import { activity10Question, activity10Scenario } from "./activities.data";
import { isMeaningfulText } from "./evaluate";
import { useWeek13Activities } from "./activitiesProgress";

const ID = "actividad-10" as const;

export function Activity10ProfessionalCase() {
  const { getAnswer, setAnswer, markCompleted, isCompleted } = useWeek13Activities();
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
      objective="Aplicar PREMIS, METS, Dublin Core y BagIt de forma integrada a un caso institucional concreto."
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
          Dublin Core completa la descripción; METS representa la relación entre los archivos del expediente; BagIt
          permite empaquetar y verificar la transferencia; y PREMIS registra el evento de identificación de formato
          sobre el archivo mal nombrado, con su resultado, fecha y agente responsable.
        </FeedbackNote>
      )}
    </ActivityShell>
  );
}
