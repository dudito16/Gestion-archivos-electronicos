import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { MultiSelectCheck } from "../../../../components/common/MultiSelectCheck";
import { ActivityShell } from "./components/ActivityShell";
import { OpenTextField, OpenAnswerDisclaimer } from "./components/OpenTextField";
import { FeedbackNote } from "./components/FeedbackNote";
import { activity7Fields, activity7Log } from "./activities.data";
import { isMeaningfulText } from "./evaluate";
import { useWeek6Activities } from "./activitiesProgress";

const ID = "actividad-7" as const;

export function Activity7AuditInfo() {
  const { getAnswer, setAnswer, markCompleted, isCompleted } = useWeek6Activities();
  const [checked, setChecked] = useState(isCompleted(ID));
  const [explanation, setExplanation] = useState<string>(() => getAnswer(ID, ""));
  const [submitted, setSubmitted] = useState(isCompleted(ID));
  const [error, setError] = useState<string | null>(null);

  useEffect(() => setAnswer(ID, explanation), [explanation, setAnswer]);

  function handleSubmit() {
    if (!isMeaningfulText(explanation, 6)) {
      setError("Explica con algo más de detalle qué información falta en este registro.");
      return;
    }
    setError(null);
    markCompleted(ID);
    setSubmitted(true);
  }

  return (
    <ActivityShell
      id={ID}
      number={7}
      title="Identifica información de auditoría"
      objective="Reconocer qué información aporta realmente un registro para reconstruir una acción."
      instructions={<>Lee el registro y selecciona qué información SÍ está presente en él.</>}
      done={isCompleted(ID)}
    >
      <p className="rounded-lg border border-outline-variant bg-surface-container-low p-md text-body-md font-body-md font-mono text-on-surface">{activity7Log}</p>

      <MultiSelectCheck items={activity7Fields} onComplete={() => setChecked(true)} />

      <AnimatePresence>
        {checked && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="space-y-sm pt-xs border-t border-outline-variant">
            <OpenTextField
              id="act7-explain"
              label="¿Qué información de auditoría falta en este registro?"
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
                El registro identifica quién, qué, cuándo y sobre qué documento — pero no dice cuál era el estado
                previo ni cuál fue el resultado de la modificación, información que también resulta valiosa para
                reconstruir la acción completa.
              </FeedbackNote>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </ActivityShell>
  );
}
