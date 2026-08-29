import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ScrollReveal } from "../../../../components/common/ScrollReveal";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { FlowChain } from "../../../../components/common/FlowChain";
import { Callout } from "../../../../components/common/Callout";
import { cn } from "../../../../utils/cn";
import { fichaExample, schemaFlow } from "../week04.data";

export function SchemaSection() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = fichaExample.find((f) => f.id === activeId);

  return (
    <section id="esquema-metadatos" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="Diseño"
        title="Esquema de metadatos"
        description="Un esquema de metadatos organiza los elementos que una institución decide utilizar y establece sus definiciones y reglas de gestión."
      />

      <ScrollReveal>
        <FlowChain steps={schemaFlow} />
      </ScrollReveal>

      <Callout variant="warning" title="Ejemplo de diseño">
        Esta ficha no se presenta como una estructura obligatoria de ISO; es un ejemplo de diseño con fines
        didácticos. Haz clic en cada campo para ver su función.
      </Callout>

      <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-xs">
          {fichaExample.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setActiveId((current) => (current === f.id ? null : f.id))}
              className={cn(
                "flex items-center justify-between gap-sm rounded-lg border px-md py-sm text-left transition-colors",
                activeId === f.id
                  ? "border-primary-container bg-secondary-container/40"
                  : "border-outline-variant bg-surface-container-low hover:border-primary-container",
              )}
            >
              <span className="text-label-md font-label-md font-semibold text-on-surface">{f.field}</span>
              <span className="text-body-md font-body-md font-mono text-on-surface-variant">{f.value}</span>
            </button>
          ))}
        </div>

        <AnimatePresence>
          {active && (
            <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} className="mt-md">
              <Callout variant="info" title={active.field}>
                {active.function}
              </Callout>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
