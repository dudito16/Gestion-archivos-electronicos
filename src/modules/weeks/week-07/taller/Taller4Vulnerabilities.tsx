import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { MultiSelectCheck } from "../../../../components/common/MultiSelectCheck";
import { FeedbackNote } from "../activities/components/FeedbackNote";
import { ActivityShell } from "../activities/components/ActivityShell";
import { OpenTextField, OpenAnswerDisclaimer } from "../activities/components/OpenTextField";
import { taller4Case, taller4Concerns } from "./taller.data";
import { isMeaningfulText } from "../activities/evaluate";
import { useWeek7Taller } from "./tallerProgress";

const ID = "taller-4" as const;

export function Taller4Vulnerabilities() {
  const { getAnswer, setAnswer, markCompleted, isCompleted } = useWeek7Taller();
  const [checked, setChecked] = useState(isCompleted(ID));
  const [explanation, setExplanation] = useState<string>(() => getAnswer(ID, ""));
  const [submitted, setSubmitted] = useState(isCompleted(ID));
  const [error, setError] = useState<string | null>(null);

  useEffect(() => setAnswer(ID, explanation), [explanation, setAnswer]);

  function handleSubmit() {
    if (!isMeaningfulText(explanation, 8)) {
      setError("Explica con algo más de detalle tu propuesta.");
      return;
    }
    setError(null);
    markCompleted(ID);
    setSubmitted(true);
  }

  return (
    <ActivityShell
      id={ID}
      number={4}
      title="Identificación de vulnerabilidades"
      objective="Identificar vulnerabilidades concretas en una situación de uso real del sistema."
      instructions={<>Lee el caso y selecciona las vulnerabilidades que identifiques.</>}
      done={isCompleted(ID)}
    >
      <p className="rounded-lg border border-outline-variant bg-surface-container-low p-md text-body-md font-body-md text-on-surface">{taller4Case}</p>

      <MultiSelectCheck items={taller4Concerns} onComplete={() => setChecked(true)} />

      <AnimatePresence>
        {checked && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="space-y-sm pt-xs border-t border-outline-variant">
            <OpenTextField
              id="taller4-explain"
              label="Propón una medida concreta para corregir esta situación."
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
                Compartir una sesión no es solo una mala práctica: es una vulnerabilidad concreta, porque impide
                atribuir cada acción a una persona específica cuando algo sale mal.
              </FeedbackNote>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </ActivityShell>
  );
}
