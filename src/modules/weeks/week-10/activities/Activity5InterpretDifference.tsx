import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { MultiSelectCheck } from "../../../../components/common/MultiSelectCheck";
import { ActivityShell } from "./components/ActivityShell";
import { OpenTextField, OpenAnswerDisclaimer } from "./components/OpenTextField";
import { FeedbackNote } from "./components/FeedbackNote";
import { activity5Case, activity5Statements } from "./activities.data";
import { isMeaningfulText } from "./evaluate";
import { useWeek10Activities } from "./activitiesProgress";

const ID = "actividad-5" as const;

export function Activity5InterpretDifference() {
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
      number={5}
      title="Interpreta una diferencia de hash"
      objective="Responder ante una diferencia de hash sin saltar directamente a una conclusión de fraude."
      instructions={<>Lee el caso y selecciona las interpretaciones correctas.</>}
      done={isCompleted(ID)}
    >
      <p className="rounded-lg border border-outline-variant bg-surface-container-low p-md text-body-md font-body-md text-on-surface">{activity5Case}</p>

      <MultiSelectCheck items={activity5Statements} onComplete={() => setChecked(true)} />

      <AnimatePresence>
        {checked && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="space-y-sm pt-xs border-t border-outline-variant">
            <OpenTextField
              id="act5-explain"
              label="¿Por qué una diferencia de hash no es, por sí sola, prueba de fraude?"
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
                Un hash diferente solo indica que el contenido cambió respecto a la referencia; la causa (autorizada o
                no) solo puede determinarse investigando — revisando versiones, trazabilidad y usuarios involucrados.
              </FeedbackNote>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </ActivityShell>
  );
}
