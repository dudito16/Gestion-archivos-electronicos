import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { cn } from "../../../../utils/cn";
import { getIcon } from "../../../../utils/getIcon";
import { evidenceTypes } from "../integrativeProject.data";

export function EvidenciasSection() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = evidenceTypes.find((e) => e.id === activeId);

  return (
    <section id="evidencias" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Evidencias" title="¿Qué cuenta como evidencia?" description="Toca una tarjeta para ver cuándo puede utilizarse." />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-xs">
        {evidenceTypes.map((e) => {
          const Icon = getIcon(e.icon);
          return (
            <button
              key={e.id}
              type="button"
              onClick={() => setActiveId(e.id)}
              className={cn(
                "flex flex-col items-center gap-1 rounded-lg border px-2 py-3 text-center transition-colors",
                activeId === e.id ? "border-primary-container bg-secondary-container/50" : "border-outline-variant bg-surface-container-lowest hover:border-primary-container",
              )}
            >
              <Icon size={20} className="text-primary-container" />
              <span className="text-caption font-caption font-medium text-on-surface leading-tight">{e.label}</span>
            </button>
          );
        })}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>
            <Callout variant="info" title={active.label}>
              {active.whenToUse}
            </Callout>
          </motion.div>
        )}
      </AnimatePresence>

      <Callout variant="warning" title="La evidencia no reemplaza el análisis">
        Una evidencia no reemplaza el análisis. La evidencia permite sustentar el análisis.
      </Callout>
    </section>
  );
}
