import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { SequenceBuilder } from "../../../../components/common/SequenceBuilder";
import { backupIdeas, backupSimulatorCorrectOrder, backupSimulatorItems, rule321 } from "../week07.data";

export function BackupRecoverySection() {
  const [ordered, setOrdered] = useState(false);

  return (
    <section id="respaldo" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Copias de respaldo y recuperación" title="Un respaldo que nunca se prueba no es una garantía" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-sm">
        {backupIdeas.map((idea) => (
          <div key={idea.id} className="rounded-lg border border-outline-variant bg-surface-container-lowest p-md">
            <p className="text-label-md font-label-md font-bold text-on-surface">{idea.label}</p>
            <p className="text-caption font-caption text-on-surface-variant mt-1">{idea.detail}</p>
          </div>
        ))}
      </div>

      <Callout variant="info" title="Estrategia 3-2-1 (referencial)">
        {rule321}
      </Callout>

      <div>
        <p className="text-body-lg font-body-lg font-semibold text-on-surface mb-sm">Se perdió el servidor</p>
        <p className="text-body-md font-body-md text-on-surface-variant mb-sm">Ordena las acciones que corresponde tomar ante esta pérdida de disponibilidad.</p>
        <SequenceBuilder items={backupSimulatorItems} correctOrder={backupSimulatorCorrectOrder} onComplete={() => setOrdered(true)} />
      </div>

      <AnimatePresence>
        {ordered && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}>
            <Callout variant="success" title="Enfoque documental, no técnico avanzado">
              Este orden refleja el criterio de gestión documental ante una pérdida de disponibilidad: primero
              entender qué pasó, luego contener y evaluar, y solo después restaurar, validar y documentar — no es un
              procedimiento técnico de ciberseguridad avanzada.
            </Callout>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
