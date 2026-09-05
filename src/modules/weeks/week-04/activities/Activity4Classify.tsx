import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { DragDropClassifier } from "../../../../components/common/DragDropClassifier";
import { OpenTextField, OpenAnswerDisclaimer } from "./components/OpenTextField";
import { ActivityShell } from "./components/ActivityShell";
import { activity4Categories, activity4Items } from "./activities.data";
import { isMeaningfulText } from "./evaluate";
import { useWeek4Activities } from "./activitiesProgress";

const ID = "actividad-4" as const;

export function Activity4Classify() {
  const { getAnswer, setAnswer, markCompleted, isCompleted } = useWeek4Activities();
  const [reason, setReason] = useState<string>(() => getAnswer(ID, ""));
  const [classified, setClassified] = useState(isCompleted(ID));

  useEffect(() => setAnswer(ID, reason), [reason, setAnswer]);

  return (
    <ActivityShell
      id={ID}
      number={4}
      title="Clasifica el metadato"
      objective="Diferenciar los metadatos según la función que cumplen: identificar, describir, gestionar, contextualizar o preservar."
      instructions={<>Arrastra cada metadato hacia la categoría que le corresponde (o tócalo y luego toca la categoría) y comprueba tu clasificación.</>}
    >
      <DragDropClassifier
        items={activity4Items}
        categories={[...activity4Categories]}
        onComplete={() => {
          markCompleted(ID);
          setClassified(true);
        }}
      />

      <AnimatePresence>
        {classified && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="pt-sm border-t border-outline-variant space-y-sm">
            <OpenTextField
              id="act4-reason"
              label="Elige uno de los metadatos y explica por qué lo ubicaste en esa categoría."
              value={reason}
              onChange={setReason}
              rows={3}
            />
            <OpenAnswerDisclaimer />
            {isMeaningfulText(reason, 4) && (
              <p className="text-caption font-caption text-tertiary font-semibold">Justificación registrada.</p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </ActivityShell>
  );
}
