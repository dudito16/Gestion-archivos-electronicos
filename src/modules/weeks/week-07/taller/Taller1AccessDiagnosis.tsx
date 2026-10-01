import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { MultiSelectCheck } from "../../../../components/common/MultiSelectCheck";
import { FeedbackNote } from "../activities/components/FeedbackNote";
import { ActivityShell } from "../activities/components/ActivityShell";
import { OpenTextField, OpenAnswerDisclaimer } from "../activities/components/OpenTextField";
import { taller1Case, taller1Concerns } from "./taller.data";
import { isMeaningfulText } from "../activities/evaluate";
import { useWeek7Taller } from "./tallerProgress";

const ID = "taller-1" as const;

export function Taller1AccessDiagnosis() {
  const { getAnswer, setAnswer, markCompleted, isCompleted } = useWeek7Taller();
  const [checked, setChecked] = useState(isCompleted(ID));
  const [explanation, setExplanation] = useState<string>(() => getAnswer(ID, ""));
  const [submitted, setSubmitted] = useState(isCompleted(ID));
  const [error, setError] = useState<string | null>(null);

  useEffect(() => setAnswer(ID, explanation), [explanation, setAnswer]);

  function handleSubmit() {
    if (!isMeaningfulText(explanation, 8)) {
      setError("Explica con algo más de detalle tu diagnóstico.");
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
      title="Diagnóstico de accesos"
      objective="Diagnosticar problemas de control de acceso en un sistema de gestión documental."
      instructions={<>Lee el caso y selecciona los problemas de acceso que identificas.</>}
      done={isCompleted(ID)}
    >
      <p className="rounded-lg border border-outline-variant bg-surface-container-low p-md text-body-md font-body-md text-on-surface">{taller1Case}</p>

      <MultiSelectCheck items={taller1Concerns} onComplete={() => setChecked(true)} />

      <AnimatePresence>
        {checked && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="space-y-sm pt-xs border-t border-outline-variant">
            <OpenTextField
              id="taller1-explain"
              label="Propón una regla de acceso que resuelva el problema principal."
              value={explanation}
              onChange={setExplanation}
              rows={3}
              disabled={submitted}
            />
            <OpenAnswerDisclaimer />
            {error && <p className="text-label-md font-label-md text-error">{error}</p>}
            {!submitted ? (
              <Button onClick={handleSubmit}>Enviar diagnóstico</Button>
            ) : (
              <FeedbackNote kind="bien">
                Un acceso sin segmentación por función viola el principio de necesidad de conocer: cada persona debería
                acceder solo a lo que su función exige, no a todo el sistema por estar autenticada.
              </FeedbackNote>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </ActivityShell>
  );
}
