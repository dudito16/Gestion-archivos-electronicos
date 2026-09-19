import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { cn } from "../../../../utils/cn";
import { observedFlow } from "../integrativeProject.data";

export function Paso3Gestion() {
  const [activeId, setActiveId] = useState(observedFlow[0].id);
  const active = observedFlow.find((s) => s.id === activeId) ?? observedFlow[0];

  return (
    <section id="paso-3-gestion" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Caso modelo · Paso 03" title="¿Cómo se gestiona el documento?" />

      <Callout variant="info" title="Situación observada en el caso (simulación académica)">
        La organización utiliza un sistema de gestión documental para registrar y derivar documentos, pero algunos
        documentos de trabajo pueden circular temporalmente mediante correo electrónico y carpetas compartidas.
      </Callout>

      <div className="flex flex-wrap items-center gap-1">
        {observedFlow.map((stage, index) => (
          <div key={stage.id} className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setActiveId(stage.id)}
              className={cn(
                "rounded-lg border px-3 py-2 text-label-md font-label-md font-semibold transition-colors",
                stage.id === activeId
                  ? "border-primary-container bg-secondary-container text-on-secondary-container"
                  : "border-outline-variant bg-surface-container-lowest text-on-surface hover:border-primary-container",
              )}
            >
              {stage.label}
            </button>
            {index < observedFlow.length - 1 && <span className="text-outline shrink-0 hidden sm:inline">→</span>}
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="rounded-lg border border-outline-variant bg-surface-container-low p-md text-body-md font-body-md text-on-surface"
        >
          <span className="font-semibold">{active.label}:</span> {active.detail}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
