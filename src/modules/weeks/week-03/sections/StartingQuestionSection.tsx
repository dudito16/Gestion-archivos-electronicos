import { ArrowDown, FileText } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Button } from "../../../../components/ui/button";
import { startingQuestionChecks } from "../week03.data";

export function StartingQuestionSection() {
  const [revealed, setRevealed] = useState(false);

  return (
    <section id="pregunta-inicio" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Antes de empezar" title="Un documento acaba de ingresar a una institución" />

      <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg space-y-lg text-center">
        <p className="text-body-lg font-body-lg text-on-surface max-w-2xl mx-auto font-semibold">
          ¿Ya está gestionado documentalmente?
        </p>

        <div className="flex flex-col items-center gap-sm">
          <div className="flex items-center gap-xs rounded-lg border border-outline-variant bg-surface-container-low px-4 py-2">
            <FileText className="text-primary-container" size={20} />
            <span className="text-label-md font-label-md font-semibold text-on-surface">Documento</span>
          </div>
          <ArrowDown className="text-outline" size={16} />
          <div className="flex flex-wrap justify-center gap-xs max-w-xl">
            {startingQuestionChecks.map((q) => (
              <span key={q} className="rounded-full border border-outline-variant bg-surface-container-low px-3 py-1 text-label-md font-label-md text-on-surface-variant">
                {q}
              </span>
            ))}
          </div>
        </div>

        {!revealed ? (
          <Button onClick={() => setRevealed(true)}>Ver respuesta</Button>
        ) : (
          <AnimatePresence>
            <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="space-y-sm">
              <p className="text-headline-md font-headline-md text-primary-container">No necesariamente.</p>
              <p className="text-body-md font-body-md text-on-surface-variant max-w-xl mx-auto">
                Recibir un documento es solamente el inicio de su gestión.
              </p>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </section>
  );
}
