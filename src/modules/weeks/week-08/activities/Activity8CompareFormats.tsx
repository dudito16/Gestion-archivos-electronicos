import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { MultiSelectCheck } from "../../../../components/common/MultiSelectCheck";
import { ActivityShell } from "./components/ActivityShell";
import { OpenTextField, OpenAnswerDisclaimer } from "./components/OpenTextField";
import { FeedbackNote } from "./components/FeedbackNote";
import { activity8Statements } from "./activities.data";
import { isMeaningfulText } from "./evaluate";
import { useWeek8Activities } from "./activitiesProgress";

const ID = "actividad-8" as const;

export function Activity8CompareFormats() {
  const { getAnswer, setAnswer, markCompleted, isCompleted } = useWeek8Activities();
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
      number={8}
      title="Compara formatos"
      objective="Distinguir afirmaciones correctas e incorrectas sobre TIFF, JPEG, PNG, PDF y PDF/A."
      instructions={<>Selecciona únicamente las afirmaciones correctas sobre los formatos.</>}
      done={isCompleted(ID)}
    >
      <MultiSelectCheck items={activity8Statements} onComplete={() => setChecked(true)} />

      <AnimatePresence>
        {checked && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="space-y-sm pt-xs border-t border-outline-variant">
            <OpenTextField
              id="act8-explain"
              label="¿Por qué no es correcto decir que cualquier PDF garantiza preservación a largo plazo?"
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
                Un PDF común puede incluir elementos que comprometen su estabilidad futura; PDF/A agrega requisitos
                específicos orientados a la preservación, aunque tampoco la garantiza por sí solo.
              </FeedbackNote>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </ActivityShell>
  );
}
