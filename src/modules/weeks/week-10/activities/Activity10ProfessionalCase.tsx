import { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { ActivityShell } from "./components/ActivityShell";
import { OpenTextField, OpenAnswerDisclaimer } from "./components/OpenTextField";
import { FeedbackNote } from "./components/FeedbackNote";
import { isMeaningfulText } from "./evaluate";
import { useWeek10Activities } from "./activitiesProgress";

const ID = "actividad-10" as const;

export function Activity10ProfessionalCase() {
  const { getAnswer, setAnswer, markCompleted, isCompleted } = useWeek10Activities();
  const [plan, setPlan] = useState<string>(() => getAnswer(ID, ""));
  const [submitted, setSubmitted] = useState(isCompleted(ID));
  const [error, setError] = useState<string | null>(null);

  useEffect(() => setAnswer(ID, plan), [plan, setAnswer]);

  function handleSubmit() {
    if (!isMeaningfulText(plan, 15)) {
      setError("Desarrolla tu plan con algo más de detalle (al menos tres pasos concretos).");
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
      title="Caso profesional: diseña un plan de verificación"
      objective="Integrar hash, fixity, riesgos y controles en una propuesta profesional aplicable a un área de archivo."
      instructions={
        <>
          Una institución nunca ha establecido valores de referencia para sus expedientes electrónicos. Como
          responsable de gestión documental, propone un plan breve para implementar la verificación de integridad
          (qué se calcula, cuándo, cómo se compara y qué se hace ante una diferencia).
        </>
      }
      done={isCompleted(ID)}
    >
      <OpenTextField
        id="act10-plan"
        label="Tu plan de verificación de integridad"
        value={plan}
        onChange={setPlan}
        rows={5}
        disabled={submitted}
        placeholder="p. ej. 1) Calcular el hash de cada documento al momento del ingreso..."
      />
      <OpenAnswerDisclaimer />

      {error && <p className="text-label-md font-label-md text-error">{error}</p>}

      {!submitted ? (
        <Button onClick={handleSubmit}>Enviar plan</Button>
      ) : (
        <FeedbackNote kind="criterio">
          Un buen plan establece la referencia desde el ingreso del documento, define una periodicidad de
          verificación, especifica cómo se compara el valor actual contra la referencia, y describe el procedimiento
          de investigación ante una diferencia — sin saltar directamente a una conclusión de fraude.
        </FeedbackNote>
      )}
    </ActivityShell>
  );
}
