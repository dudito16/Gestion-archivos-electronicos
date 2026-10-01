import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { DragDropClassifier } from "../../../../components/common/DragDropClassifier";
import { ActivityShell } from "./components/ActivityShell";
import { OpenTextField, OpenAnswerDisclaimer } from "./components/OpenTextField";
import { activity5Categories, activity5Items } from "./activities.data";
import { isMeaningfulText } from "./evaluate";
import { useWeek7Activities } from "./activitiesProgress";

const ID = "actividad-5" as const;

export function Activity5ClassifyControls() {
  const { getAnswer, setAnswer, markCompleted, isCompleted } = useWeek7Activities();
  const [classified, setClassified] = useState(isCompleted(ID));
  const [reason, setReason] = useState<string>(() => getAnswer(ID, ""));

  useEffect(() => setAnswer(ID, reason), [reason, setAnswer]);

  return (
    <ActivityShell
      id={ID}
      number={5}
      title="Clasifica controles preventivos, detectivos y correctivos"
      objective="Diferenciar controles según el momento en que actúan: antes, durante o después del incidente."
      instructions={<>Arrastra cada control (o tócalo y luego toca la categoría) hacia el tipo que le corresponde.</>}
      done={isCompleted(ID)}
    >
      <DragDropClassifier
        items={activity5Items}
        categories={activity5Categories}
        onComplete={() => {
          markCompleted(ID);
          setClassified(true);
        }}
      />

      <AnimatePresence>
        {classified && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="pt-sm border-t border-outline-variant space-y-sm">
            <OpenTextField
              id="act5-reason"
              label="Elige un control detectivo y explica qué te permitiría descubrir."
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
