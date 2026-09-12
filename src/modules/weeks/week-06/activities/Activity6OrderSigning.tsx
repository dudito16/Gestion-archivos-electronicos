import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { SequenceBuilder } from "../../../../components/common/SequenceBuilder";
import { ActivityShell } from "./components/ActivityShell";
import { OpenTextField, OpenAnswerDisclaimer } from "./components/OpenTextField";
import { activity6CorrectOrder, activity6Items } from "./activities.data";
import { isMeaningfulText } from "./evaluate";
import { useWeek6Activities } from "./activitiesProgress";

const ID = "actividad-6" as const;

export function Activity6OrderSigning() {
  const { getAnswer, setAnswer, markCompleted, isCompleted } = useWeek6Activities();
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
      number={6}
      title="Ordena el proceso de firma"
      objective="Reconocer la secuencia conceptual con la que se produce una firma digital."
      instructions={<>Toca los elementos en el orden en que ocurren al firmar digitalmente un documento.</>}
      done={isCompleted(ID)}
    >
      <SequenceBuilder items={activity6Items} correctOrder={activity6CorrectOrder} onComplete={handleComplete} />

      <AnimatePresence>
        {ordered && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="space-y-sm pt-xs border-t border-outline-variant">
            <OpenTextField
              id="act6-explain"
              label="Explica con tus propias palabras qué función cumple el resumen (hash) en este proceso."
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
