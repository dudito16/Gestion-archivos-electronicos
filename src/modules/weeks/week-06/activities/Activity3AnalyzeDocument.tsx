import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { MultiSelectCheck } from "../../../../components/common/MultiSelectCheck";
import { ActivityShell } from "./components/ActivityShell";
import { OpenTextField, OpenAnswerDisclaimer } from "./components/OpenTextField";
import { FeedbackNote } from "./components/FeedbackNote";
import { activity3Aspects, activity3Case } from "./activities.data";
import { isMeaningfulText } from "./evaluate";
import { useWeek6Activities } from "./activitiesProgress";

const ID = "actividad-3" as const;

export function Activity3AnalyzeDocument() {
  const { getAnswer, setAnswer, markCompleted, isCompleted } = useWeek6Activities();
  const [checked, setChecked] = useState(isCompleted(ID));
  const [explanation, setExplanation] = useState<string>(() => getAnswer(ID, ""));
  const [submitted, setSubmitted] = useState(isCompleted(ID));
  const [error, setError] = useState<string | null>(null);

  useEffect(() => setAnswer(ID, explanation), [explanation, setAnswer]);

  function handleSubmit() {
    if (!isMeaningfulText(explanation, 6)) {
      setError("Explica con algo más de detalle uno de los aspectos seleccionados.");
      return;
    }
    setError(null);
    markCompleted(ID);
    setSubmitted(true);
  }

  return (
    <ActivityShell
      id={ID}
      number={3}
      title="Analiza un documento firmado"
      objective="Identificar qué debe revisarse antes de aceptar un documento firmado digitalmente."
      instructions={<>Lee el caso, selecciona los aspectos que deberían revisarse y explica uno de ellos.</>}
      done={isCompleted(ID)}
    >
      <p className="rounded-lg border border-outline-variant bg-surface-container-low p-md text-body-md font-body-md text-on-surface">{activity3Case}</p>

      <MultiSelectCheck items={activity3Aspects} onComplete={() => setChecked(true)} />

      <AnimatePresence>
        {checked && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="space-y-sm pt-xs border-t border-outline-variant">
            <OpenTextField
              id="act3-explain"
              label="Elige uno de los aspectos seleccionados y explica por qué es relevante."
              value={explanation}
              onChange={setExplanation}
              rows={3}
              disabled={submitted}
            />
            <OpenAnswerDisclaimer />
            {error && <p className="text-label-md font-label-md text-error">{error}</p>}
            {!submitted ? (
              <Button onClick={handleSubmit}>Enviar respuesta</Button>
            ) : (
              <FeedbackNote kind="criterio">
                Antes de aceptar un documento firmado como evidencia, conviene comprobar identidad (certificado),
                vigencia, integridad del contenido y el momento de la firma — el diseño visual no aporta nada a esa
                confianza.
              </FeedbackNote>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </ActivityShell>
  );
}
