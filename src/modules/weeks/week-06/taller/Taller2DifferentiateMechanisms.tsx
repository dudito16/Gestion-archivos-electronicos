import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { DragDropClassifier } from "../../../../components/common/DragDropClassifier";
import { ActivityShell } from "../activities/components/ActivityShell";
import { OpenTextField, OpenAnswerDisclaimer } from "../activities/components/OpenTextField";
import { taller2Categories, taller2Items } from "./taller.data";
import { isMeaningfulText } from "../activities/evaluate";
import { useWeek6Taller } from "./tallerProgress";

const ID = "taller-2" as const;

export function Taller2DifferentiateMechanisms() {
  const { getAnswer, setAnswer, markCompleted, isCompleted } = useWeek6Taller();
  const [classified, setClassified] = useState(isCompleted(ID));
  const [reason, setReason] = useState<string>(() => getAnswer(ID, ""));

  useEffect(() => setAnswer(ID, reason), [reason, setAnswer]);

  return (
    <ActivityShell
      id={ID}
      number={2}
      title="Diferencia mecanismos en un caso real"
      objective="Clasificar, con mayor variedad de ejemplos, situaciones reales según el mecanismo de firma empleado."
      instructions={<>Arrastra cada situación (o tócala y luego toca la categoría) hacia el tipo de firma que le corresponde.</>}
      done={isCompleted(ID)}
    >
      <DragDropClassifier
        items={taller2Items}
        categories={taller2Categories}
        onComplete={() => {
          markCompleted(ID);
          setClassified(true);
        }}
      />

      <AnimatePresence>
        {classified && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="pt-sm border-t border-outline-variant space-y-sm">
            <OpenTextField
              id="taller2-reason"
              label="¿Cuál de estas seis situaciones te generó más duda al clasificarla? Explica por qué."
              value={reason}
              onChange={setReason}
              rows={3}
            />
            <OpenAnswerDisclaimer />
            {isMeaningfulText(reason, 4) && <p className="text-caption font-caption text-tertiary font-semibold">Reflexión registrada.</p>}
          </motion.div>
        )}
      </AnimatePresence>
    </ActivityShell>
  );
}
