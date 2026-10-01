import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { SequenceBuilder } from "../../../../components/common/SequenceBuilder";
import { ActivityShell } from "../activities/components/ActivityShell";
import { OpenTextField, OpenAnswerDisclaimer } from "../activities/components/OpenTextField";
import { taller7CorrectOrder, taller7Items } from "./taller.data";
import { isMeaningfulText } from "../activities/evaluate";
import { useWeek7Taller } from "./tallerProgress";

const ID = "taller-7" as const;

export function Taller7ReconstructIncident() {
  const { getAnswer, setAnswer, markCompleted, isCompleted } = useWeek7Taller();
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
      title="Reconstrucción de un incidente mediante registros"
      objective="Reconstruir, a partir de eventos desordenados, la secuencia probable de un incidente de acceso indebido."
      instructions={<>Ordena estos eventos según el orden en que probablemente ocurrieron.</>}
      done={isCompleted(ID)}
    >
      <SequenceBuilder items={taller7Items} correctOrder={taller7CorrectOrder} onComplete={handleComplete} />

      <AnimatePresence>
        {ordered && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="space-y-sm pt-xs border-t border-outline-variant">
            <OpenTextField
              id="taller7-explain"
              label="¿Qué evento de esta secuencia debería generar una alerta automática, y por qué?"
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
