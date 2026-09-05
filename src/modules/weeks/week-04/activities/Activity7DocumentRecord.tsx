import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { DragDropClassifier } from "../../../../components/common/DragDropClassifier";
import { OpenTextField, OpenAnswerDisclaimer } from "./components/OpenTextField";
import { ActivityShell } from "./components/ActivityShell";
import { activity7Categories, activity7ExpedienteDocs, activity7Items } from "./activities.data";
import { isMeaningfulText } from "./evaluate";
import { useWeek4Activities } from "./activitiesProgress";

const ID = "actividad-7" as const;

export function Activity7DocumentRecord() {
  const { getAnswer, setAnswer, markCompleted, isCompleted } = useWeek4Activities();
  const [reason, setReason] = useState<string>(() => getAnswer(ID, ""));
  const [classified, setClassified] = useState(isCompleted(ID));

  useEffect(() => setAnswer(ID, reason), [reason, setAnswer]);

  return (
    <ActivityShell
      id={ID}
      number={7}
      title="Documento y expediente"
      objective="Distinguir qué metadatos describen al expediente como conjunto y cuáles corresponden a cada documento individual."
      instructions={
        <>
          Este expediente agrupa cuatro documentos: {activity7ExpedienteDocs.join(", ")}. Clasifica cada metadato
          según corresponda al expediente o a un documento individual.
        </>
      }
    >
      <DragDropClassifier
        items={activity7Items}
        categories={[...activity7Categories]}
        onComplete={() => {
          markCompleted(ID);
          setClassified(true);
        }}
      />

      <AnimatePresence>
        {classified && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="pt-sm border-t border-outline-variant space-y-sm">
            <OpenTextField
              id="act7-reason"
              label="¿Por qué algunos metadatos pertenecen al expediente y otros al documento?"
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
