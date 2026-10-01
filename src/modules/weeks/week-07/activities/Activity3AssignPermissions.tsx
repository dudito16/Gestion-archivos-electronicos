import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { DragDropClassifier } from "../../../../components/common/DragDropClassifier";
import { ActivityShell } from "./components/ActivityShell";
import { OpenTextField, OpenAnswerDisclaimer } from "./components/OpenTextField";
import { activity3Categories, activity3Items } from "./activities.data";
import { isMeaningfulText } from "./evaluate";
import { useWeek7Activities } from "./activitiesProgress";

const ID = "actividad-3" as const;

export function Activity3AssignPermissions() {
  const { getAnswer, setAnswer, markCompleted, isCompleted } = useWeek7Activities();
  const [classified, setClassified] = useState(isCompleted(ID));
  const [reason, setReason] = useState<string>(() => getAnswer(ID, ""));

  useEffect(() => setAnswer(ID, reason), [reason, setAnswer]);

  return (
    <ActivityShell
      id={ID}
      number={3}
      title="Asigna usuarios y permisos"
      objective="Relacionar cada acción con el rol que debería tener el permiso correspondiente."
      instructions={<>Arrastra cada acción (o tócala y luego toca el rol) hacia quién debería poder realizarla.</>}
      done={isCompleted(ID)}
    >
      <DragDropClassifier
        items={activity3Items}
        categories={activity3Categories}
        onComplete={() => {
          markCompleted(ID);
          setClassified(true);
        }}
      />

      <AnimatePresence>
        {classified && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="pt-sm border-t border-outline-variant space-y-sm">
            <OpenTextField
              id="act3-reason"
              label="¿Por qué el rol de Consulta no debería poder crear ni eliminar documentos?"
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
