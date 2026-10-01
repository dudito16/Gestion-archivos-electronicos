import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { SequenceBuilder } from "../../../../components/common/SequenceBuilder";
import { ActivityShell } from "./components/ActivityShell";
import { OpenTextField, OpenAnswerDisclaimer } from "./components/OpenTextField";
import { activity4CorrectOrder, activity4Items } from "./activities.data";
import { isMeaningfulText } from "./evaluate";
import { useWeek8Activities } from "./activitiesProgress";

const ID = "actividad-4" as const;

export function Activity4ReconstructExchange() {
  const { getAnswer, setAnswer, markCompleted, isCompleted } = useWeek8Activities();
  const [ordered, setOrdered] = useState(isCompleted(ID));
  const [explanation, setExplanation] = useState<string>(() => getAnswer(ID, ""));

  useEffect(() => setAnswer(ID, explanation), [explanation, setAnswer]);

  function handleComplete() {
    markCompleted(ID);
    setOrdered(true);
  }

  return (
    <ActivityShell
      id={ID}
      number={4}
      title="Reconstruye un intercambio documental"
      objective="Reconocer la secuencia general con la que un documento se intercambia entre dos entidades."
      instructions={<>Toca los elementos en el orden en que ocurren durante un intercambio documental.</>}
      done={isCompleted(ID)}
    >
      <SequenceBuilder items={activity4Items} correctOrder={activity4CorrectOrder} onComplete={handleComplete} />

      <AnimatePresence>
        {ordered && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="space-y-sm pt-xs border-t border-outline-variant">
            <OpenTextField
              id="act4-explain"
              label="¿Por qué incorporar el documento al expediente debería ser el último paso?"
              value={explanation}
              onChange={setExplanation}
              rows={3}
            />
            <OpenAnswerDisclaimer />
            {isMeaningfulText(explanation, 4) && <p className="text-caption font-caption text-tertiary font-semibold">Explicación registrada.</p>}
          </motion.div>
        )}
      </AnimatePresence>
    </ActivityShell>
  );
}
