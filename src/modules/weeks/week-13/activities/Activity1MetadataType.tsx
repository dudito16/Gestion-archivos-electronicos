import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { MultiSelectCheck } from "../../../../components/common/MultiSelectCheck";
import { ActivityShell } from "./components/ActivityShell";
import { OpenTextField, OpenAnswerDisclaimer } from "./components/OpenTextField";
import { FeedbackNote } from "./components/FeedbackNote";
import { activity1Scenario, activity1Statements } from "./activities.data";
import { isMeaningfulText } from "./evaluate";
import { useWeek13Activities } from "./activitiesProgress";

const ID = "actividad-1" as const;

export function Activity1MetadataType() {
  const { getAnswer, setAnswer, markCompleted, isCompleted } = useWeek13Activities();
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
      title="¿Qué tipo de metadato corresponde a cada dato?"
      objective="Diferenciar metadatos descriptivos, técnicos y de preservación en un caso concreto."
      instructions={<>{activity1Scenario} Selecciona las afirmaciones correctas sobre el tipo de metadato de cada dato.</>}
      done={isCompleted(ID)}
    >
      <MultiSelectCheck items={activity1Statements} onComplete={() => setChecked(true)} />

      <AnimatePresence>
        {checked && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="space-y-sm pt-xs border-t border-outline-variant">
            <OpenTextField
              id="act1-explain"
              label="¿Por qué el hash corresponde a un metadato de preservación y no a uno descriptivo?"
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
                El título ayuda a describir y encontrar el documento (metadato descriptivo); el hash registra una
                comprobación necesaria para sostener la preservación a largo plazo (metadato de preservación).
              </FeedbackNote>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </ActivityShell>
  );
}
