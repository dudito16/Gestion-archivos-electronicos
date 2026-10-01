import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { SequenceBuilder } from "../../../../components/common/SequenceBuilder";
import { ActivityShell } from "./components/ActivityShell";
import { OpenTextField, OpenAnswerDisclaimer } from "./components/OpenTextField";
import { activity7CorrectOrder, activity7Items } from "./activities.data";
import { isMeaningfulText } from "./evaluate";
import { useWeek7Activities } from "./activitiesProgress";

const ID = "actividad-7" as const;

export function Activity7OrderResponse() {
  const { getAnswer, setAnswer, markCompleted, isCompleted } = useWeek7Activities();
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
      number={7}
      title="Ordena las acciones de respuesta"
      objective="Reconocer la secuencia general de respuesta ante un incidente de seguridad documental."
      instructions={<>Toca los elementos en el orden en que deberían ocurrir ante un incidente.</>}
      done={isCompleted(ID)}
    >
      <SequenceBuilder items={activity7Items} correctOrder={activity7CorrectOrder} onComplete={handleComplete} />

      <AnimatePresence>
        {ordered && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="space-y-sm pt-xs border-t border-outline-variant">
            <OpenTextField
              id="act7-explain"
              label="¿Por qué documentar el incidente debería ser el último paso y no el primero?"
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
