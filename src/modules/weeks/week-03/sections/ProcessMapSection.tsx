import { ArrowDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { cn } from "../../../../utils/cn";
import { processMapBranches } from "../week03.data";

const branchDescriptions: Record<string, string> = {
  recepcion: "El documento ingresa, se registra, se tramita y termina relacionado con un expediente organizado y controlado.",
  emision: "Se genera un documento institucional que luego se despacha a su destinatario.",
  archivo: "Concluido el trámite, documentos y expedientes se conservan conforme a las reglas archivísticas aplicables.",
};

export function ProcessMapSection() {
  const [activeId, setActiveId] = useState(processMapBranches[0].id);
  const active = processMapBranches.find((b) => b.id === activeId) ?? processMapBranches[0];

  return (
    <section id="mapa-procesos" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="Vista general"
        title="Mapa general de procesos"
        description="Haz clic en una rama para ver su función dentro de la gestión documental."
      />

      <div className="flex flex-col items-center gap-sm">
        <div className="rounded-lg bg-primary-container text-on-primary px-6 py-3 text-label-md font-label-md font-bold uppercase tracking-wider shadow-md">
          Gestión documental
        </div>
        <ArrowDown className="text-outline" size={20} />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-md w-full max-w-4xl">
          {processMapBranches.map((branch, branchIndex) => (
            <div key={branch.id} className="flex flex-col items-center gap-1">
              {branch.steps.map((step, index) => (
                <div key={step} className="flex flex-col items-center w-full">
                  <motion.button
                    type="button"
                    onClick={() => setActiveId(branch.id)}
                    initial={{ opacity: 0, y: -8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.3, delay: branchIndex * 0.1 + index * 0.08 }}
                    className={cn(
                      "w-full rounded-lg border px-sm py-2 text-center text-label-md font-label-md font-medium transition-colors",
                      activeId === branch.id
                        ? "border-primary-container bg-secondary-container text-on-secondary-container"
                        : "border-outline-variant bg-surface-container-lowest text-on-surface hover:border-primary-container",
                    )}
                  >
                    {step}
                  </motion.button>
                  {index < branch.steps.length - 1 && <ArrowDown className="text-outline shrink-0 my-0.5" size={14} />}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={active.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
          <Callout variant="info" title={active.steps[0]}>
            {branchDescriptions[active.id]}
          </Callout>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
