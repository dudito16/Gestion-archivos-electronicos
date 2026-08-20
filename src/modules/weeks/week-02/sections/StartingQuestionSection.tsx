import { ArrowDown, Database, FileText } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Button } from "../../../../components/ui/button";

/** Opens with a provocative scenario question, revealed only on click — sets up storage vs. management. */
export function StartingQuestionSection() {
  const [revealed, setRevealed] = useState(false);

  return (
    <section id="pregunta-inicio" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Antes de empezar" title="Una pregunta para pensar" />

      <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg space-y-lg text-center">
        <p className="text-body-lg font-body-lg text-on-surface max-w-2xl mx-auto">
          Una institución tiene 100 000 archivos PDF almacenados en un servidor.
          <br />
          <span className="font-semibold">¿Podemos afirmar que tiene un Sistema de Gestión Documental?</span>
        </p>

        <div className="flex flex-col items-center gap-xs">
          <div className="flex items-center gap-xs rounded-lg border border-outline-variant bg-surface-container-low px-4 py-2">
            <Database className="text-primary-container" size={22} />
            <span className="text-label-md font-label-md font-semibold text-on-surface">Servidor</span>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5 max-w-sm">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="flex items-center justify-center rounded-md border border-outline-variant bg-surface-container-low p-2">
                <FileText className="text-on-surface-variant" size={18} />
              </div>
            ))}
          </div>
          <ArrowDown className="text-outline" size={18} />
          <span className="text-headline-md font-headline-md text-on-surface-variant">¿SGD?</span>
        </div>

        {!revealed ? (
          <Button onClick={() => setRevealed(true)}>Ver respuesta</Button>
        ) : (
          <AnimatePresence>
            <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="space-y-md">
              <p className="text-headline-md font-headline-md text-primary-container">NO NECESARIAMENTE.</p>
              <p className="text-body-md font-body-md text-on-surface-variant max-w-xl mx-auto">
                Almacenar documentos no es lo mismo que gestionarlos documentalmente.
              </p>
              <div className="flex items-center justify-center gap-sm text-label-md font-label-md">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="rounded-full border border-outline-variant px-3 py-1 text-on-surface-variant"
                >
                  Almacenamiento
                </motion.span>
                <ArrowDown className="rotate-[-90deg] text-outline" size={16} />
                <motion.span
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                  className="rounded-full bg-secondary-container px-3 py-1 text-on-secondary-container font-semibold"
                >
                  Gestión documental
                </motion.span>
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </section>
  );
}
