import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { VerticalTimeline } from "../../../../components/common/VerticalTimeline";
import { cn } from "../../../../utils/cn";
import { lifecycleMetadataMoments, lifecycleSteps } from "../week04.data";

export function LifecycleSection() {
  const [activeId, setActiveId] = useState(lifecycleMetadataMoments[0].id);
  const active = lifecycleMetadataMoments.find((m) => m.id === activeId) ?? lifecycleMetadataMoments[0];

  return (
    <section id="ciclo-vida" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="Ciclo de vida"
        title="Metadatos durante el ciclo de vida"
        description="Distintos metadatos pueden generarse o actualizarse en diferentes etapas."
      />

      <VerticalTimeline steps={lifecycleSteps} />

      <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg space-y-md">
        <p className="text-label-md font-label-md font-semibold text-on-surface-variant">
          Ejemplo de metadatos generados en diferentes momentos
        </p>
        <div className="flex flex-wrap gap-xs">
          {lifecycleMetadataMoments.map((moment) => (
            <button
              key={moment.id}
              type="button"
              onClick={() => setActiveId(moment.id)}
              className={cn(
                "rounded-full border px-4 py-2 text-label-md font-label-md font-medium transition-colors",
                activeId === moment.id
                  ? "border-primary-container bg-secondary-container text-on-secondary-container"
                  : "border-outline-variant bg-surface-container-low text-on-surface hover:border-primary-container",
              )}
            >
              {moment.stage}
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex flex-wrap gap-xs"
          >
            {active.fields.map((field) => (
              <span key={field} className="rounded-full border border-outline-variant bg-surface-container-low px-3 py-1 text-caption font-caption text-on-surface">
                {field}
              </span>
            ))}
          </motion.div>
        </AnimatePresence>
        <p className="text-caption font-caption text-on-surface-variant italic">
          Los metadatos pueden tener diferentes fuentes y momentos de generación.
        </p>
      </div>
    </section>
  );
}
