import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { SequenceBuilder } from "../../../../components/common/SequenceBuilder";
import { ActivityShell } from "./components/ActivityShell";
import { OpenTextField, OpenAnswerDisclaimer } from "./components/OpenTextField";
import { activity8CorrectOrder, activity8Items } from "./activities.data";
import { isMeaningfulText } from "./evaluate";
import { useWeek6Activities } from "./activitiesProgress";

const ID = "actividad-8" as const;

export function Activity8Timeline() {
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
      number={8}
      title="Reconstruye una línea de tiempo"
      objective="Reconstruir, a partir de pistas desordenadas, la secuencia real de un documento firmado."
      instructions={<>Ordena estos eventos según el orden en que probablemente ocurrieron.</>}
      done={isCompleted(ID)}
    >
      <SequenceBuilder items={activity8Items} correctOrder={activity8CorrectOrder} onComplete={handleComplete} />

      <AnimatePresence>
        {ordered && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="space-y-sm pt-xs border-t border-outline-variant">
            <OpenTextField
              id="act8-explain"
              label="¿Por qué la validación de la firma debería ocurrir antes del archivo del documento?"
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
