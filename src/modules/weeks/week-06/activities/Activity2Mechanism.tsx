import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { DragDropClassifier } from "../../../../components/common/DragDropClassifier";
import { ActivityShell } from "./components/ActivityShell";
import { OpenTextField, OpenAnswerDisclaimer } from "./components/OpenTextField";
import { activity2Categories, activity2Items } from "./activities.data";
import { isMeaningfulText } from "./evaluate";
import { useWeek6Activities } from "./activitiesProgress";

const ID = "actividad-2" as const;

export function Activity2Mechanism() {
  const { getAnswer, setAnswer, markCompleted, isCompleted } = useWeek6Activities();
  const [classified, setClassified] = useState(isCompleted(ID));
  const [reason, setReason] = useState<string>(() => getAnswer(ID, ""));

  useEffect(() => setAnswer(ID, reason), [reason, setAnswer]);

  return (
    <ActivityShell
      id={ID}
      number={2}
      title="Identifica qué mecanismo se está utilizando"
      objective="Clasificar situaciones concretas según el tipo de firma que realmente emplean."
      instructions={<>Arrastra cada situación (o tócala y luego toca la categoría) hacia el tipo de firma que le corresponde.</>}
      done={isCompleted(ID)}
    >
      <DragDropClassifier
        items={activity2Items}
        categories={activity2Categories}
        onComplete={() => {
          markCompleted(ID);
          setClassified(true);
        }}
      />

      <AnimatePresence>
        {classified && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="pt-sm border-t border-outline-variant space-y-sm">
            <OpenTextField
              id="act2-reason"
              label="Elige una de las situaciones y explica qué la distingue de las otras dos categorías."
              value={reason}
              onChange={setReason}
              rows={3}
            />
            <OpenAnswerDisclaimer />
            {isMeaningfulText(reason, 4) && <p className="text-caption font-caption text-tertiary font-semibold">Explicación registrada.</p>}
          </motion.div>
        )}
      </AnimatePresence>
    </ActivityShell>
  );
}
