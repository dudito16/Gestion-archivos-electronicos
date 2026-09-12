import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { MultiSelectCheck } from "../../../../components/common/MultiSelectCheck";
import { ActivityShell } from "./components/ActivityShell";
import { OpenTextField, OpenAnswerDisclaimer } from "./components/OpenTextField";
import { FeedbackNote } from "./components/FeedbackNote";
import { activity1Statements } from "./activities.data";
import { isMeaningfulText } from "./evaluate";
import { useWeek6Activities } from "./activitiesProgress";

const ID = "actividad-1" as const;

export function Activity1SignatureTypes() {
  const { getAnswer, setAnswer, markCompleted, isCompleted } = useWeek6Activities();
  const [checked, setChecked] = useState(isCompleted(ID));
  const [explanation, setExplanation] = useState<string>(() => getAnswer(ID, ""));
  const [submitted, setSubmitted] = useState(isCompleted(ID));
  const [error, setError] = useState<string | null>(null);

  useEffect(() => setAnswer(ID, explanation), [explanation, setAnswer]);

  function handleSubmit() {
    if (!isMeaningfulText(explanation, 6)) {
      setError("Explica con algo más de detalle tu selección.");
      return;
    }
    setError(null);
    markCompleted(ID);
    setSubmitted(true);
  }

  return (
    <ActivityShell
      id={ID}
      number={1}
      title="Diferencia los tipos de firma"
      objective="Reconocer qué características son propias de una firma digital y cuáles no."
      instructions={<>Selecciona únicamente las afirmaciones que corresponden a una firma digital (no a cualquier firma electrónica ni a una firma manuscrita digitalizada).</>}
      done={isCompleted(ID)}
    >
      <MultiSelectCheck items={activity1Statements} onComplete={() => setChecked(true)} />

      <AnimatePresence>
        {checked && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="space-y-sm pt-xs border-t border-outline-variant">
            <OpenTextField
              id="act1-explain"
              label="Explica por qué las afirmaciones que no seleccionaste no son propias de una firma digital."
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
              <FeedbackNote kind="bien">
                Una firma digital se distingue por su base tecnológica: clave privada, certificado e infraestructura
                de confianza. Un clic de aceptación o una imagen escaneada pueden ser mecanismos válidos en otros
                contextos, pero no ofrecen las mismas garantías de identidad e integridad.
              </FeedbackNote>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </ActivityShell>
  );
}
