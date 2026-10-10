import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { MultiSelectCheck } from "../../../../components/common/MultiSelectCheck";
import { ActivityShell } from "./components/ActivityShell";
import { OpenTextField, OpenAnswerDisclaimer } from "./components/OpenTextField";
import { FeedbackNote } from "./components/FeedbackNote";
import { activity3Statements } from "./activities.data";
import { isMeaningfulText } from "./evaluate";
import { useWeek10Activities } from "./activitiesProgress";

const ID = "actividad-3" as const;

export function Activity3HashBehavior() {
  const { getAnswer, setAnswer, markCompleted, isCompleted } = useWeek10Activities();
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
      number={3}
      title="¿Cómo se comporta un hash?"
      objective="Reconocer que el hash depende del contenido del documento, no de su nombre u otros metadatos superficiales."
      instructions={<>Selecciona las afirmaciones correctas sobre el comportamiento de una función hash.</>}
      done={isCompleted(ID)}
    >
      <MultiSelectCheck items={activity3Statements} onComplete={() => setChecked(true)} />

      <AnimatePresence>
        {checked && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="space-y-sm pt-xs border-t border-outline-variant">
            <OpenTextField
              id="act3-explain"
              label="¿Por qué el hash no depende del nombre del archivo?"
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
                El hash se calcula a partir del contenido binario del documento, no de su nombre, su ubicación ni
                otros metadatos — por eso renombrar un archivo no cambia su hash, pero modificar su contenido sí.
              </FeedbackNote>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </ActivityShell>
  );
}
