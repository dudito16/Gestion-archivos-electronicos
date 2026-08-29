import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { getIcon } from "../../../../utils/getIcon";
import { startingQuestionChecks, startingQuestionFile } from "../week04.data";

export function StartingQuestionSection() {
  const [revealed, setRevealed] = useState(false);
  const Icon = getIcon("FileText");

  return (
    <section id="pregunta-inicial" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Antes de empezar" title="Tenemos un archivo llamado:" />

      <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg space-y-lg text-center">
        <div className="flex items-center justify-center gap-xs rounded-lg bg-surface-container-low py-md">
          <Icon className="text-primary-container" size={22} />
          <code className="text-body-lg font-body-lg font-mono text-on-surface">{startingQuestionFile}</code>
        </div>

        <p className="text-body-lg font-body-lg font-semibold text-on-surface">¿Qué sabemos realmente sobre este documento?</p>

        <div className="flex flex-wrap justify-center gap-xs max-w-2xl mx-auto">
          {startingQuestionChecks.map((q) => (
            <button
              key={q}
              type="button"
              onClick={() => setRevealed(true)}
              className="rounded-full border border-outline-variant bg-surface-container-low px-3 py-1.5 text-label-md font-label-md text-on-surface-variant hover:border-primary-container hover:text-primary-container transition-colors"
            >
              {q}
            </button>
          ))}
        </div>

        <AnimatePresence>
          {revealed && (
            <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="space-y-sm">
              <p className="text-body-lg font-body-lg text-on-surface max-w-xl mx-auto">
                El nombre del archivo no contiene todo el contexto documental.
              </p>
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.15 }}
                className="inline-block rounded-full bg-secondary-container px-4 py-2 text-label-md font-label-md font-bold text-on-secondary-container uppercase tracking-wider"
              >
                Metadatos
              </motion.span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
