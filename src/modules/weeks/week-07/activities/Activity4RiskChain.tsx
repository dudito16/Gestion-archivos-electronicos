import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { SequenceBuilder } from "../../../../components/common/SequenceBuilder";
import { ActivityShell } from "./components/ActivityShell";
import { OpenTextField, OpenAnswerDisclaimer } from "./components/OpenTextField";
import { activity4Case, activity4CorrectOrder, activity4Items } from "./activities.data";
import { isMeaningfulText } from "./evaluate";
import { useWeek7Activities } from "./activitiesProgress";

const ID = "actividad-4" as const;

export function Activity4RiskChain() {
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
      number={4}
      title="Relaciona amenaza, vulnerabilidad, riesgo e impacto"
      objective="Reconocer la cadena conceptual amenaza → vulnerabilidad → riesgo → impacto en un caso concreto."
      instructions={<>Toca los elementos en el orden conceptual correcto.</>}
      done={isCompleted(ID)}
    >
      <p className="rounded-lg border border-outline-variant bg-surface-container-low p-md text-body-md font-body-md text-on-surface">{activity4Case}</p>

      <SequenceBuilder items={activity4Items} correctOrder={activity4CorrectOrder} onComplete={handleComplete} />

      <AnimatePresence>
        {ordered && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="space-y-sm pt-xs border-t border-outline-variant">
            <OpenTextField
              id="act4-explain"
              label="Propón un control que reduzca esta vulnerabilidad."
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
