import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { MultiSelectCheck } from "../../../../components/common/MultiSelectCheck";
import { ActivityShell } from "./components/ActivityShell";
import { OpenTextField, OpenAnswerDisclaimer } from "./components/OpenTextField";
import { FeedbackNote } from "./components/FeedbackNote";
import { activity1Case, activity1Statements } from "./activities.data";
import { isMeaningfulText } from "./evaluate";
import { useWeek10Activities } from "./activitiesProgress";

const ID = "actividad-1" as const;

export function Activity1Integrity() {
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
      number={1}
      title="¿Qué es realmente la integridad digital?"
      objective="Reconocer que la integridad se verifica contra una referencia, no se asume por la sola disponibilidad del documento."
      instructions={<>Lee el caso y selecciona las afirmaciones correctas sobre integridad digital.</>}
      done={isCompleted(ID)}
    >
      <p className="rounded-lg border border-outline-variant bg-surface-container-low p-md text-body-md font-body-md text-on-surface">{activity1Case}</p>

      <MultiSelectCheck items={activity1Statements} onComplete={() => setChecked(true)} />

      <AnimatePresence>
        {checked && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="space-y-sm pt-xs border-t border-outline-variant">
            <OpenTextField
              id="act1-explain"
              label="¿Por qué no basta con que un documento siga siendo legible para decir que mantiene integridad?"
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
                La legibilidad es necesaria pero no suficiente: la integridad exige comparar el estado actual del
                documento contra un valor de referencia establecido previamente.
              </FeedbackNote>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </ActivityShell>
  );
}
