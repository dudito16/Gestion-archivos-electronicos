import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { cn } from "../../../../utils/cn";
import { getIcon } from "../../../../utils/getIcon";
import { formats } from "../week08.data";

export function FormatsSection() {
  const [activeId, setActiveId] = useState(formats[0].id);
  const active = formats.find((f) => f.id === activeId) ?? formats[0];

  return (
    <section id="formatos" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="Formatos"
        title="TIFF, JPEG, PNG, PDF y PDF/A"
        description="Selecciona cada formato para repasar sus características. Existen muchos otros formatos — la selección siempre depende del propósito."
      />

      <div className="flex flex-wrap gap-xs">
        {formats.map((format) => {
          const Icon = getIcon(format.icon);
          const isActive = activeId === format.id;
          return (
            <button
              key={format.id}
              type="button"
              onClick={() => setActiveId(format.id)}
              className={cn(
                "flex items-center gap-xs rounded-lg border px-md py-sm text-label-md font-label-md font-semibold transition-colors",
                isActive
                  ? "border-primary-container bg-secondary-container text-on-secondary-container"
                  : "border-outline-variant bg-surface-container-lowest text-on-surface hover:border-primary-container",
              )}
            >
              <Icon size={18} />
              {format.label}
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
          className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg space-y-sm"
        >
          <div className="flex flex-wrap gap-xs">
            <span className="rounded-full bg-secondary-container text-on-secondary-container px-3 py-1 text-caption font-caption font-semibold">{active.type}</span>
            <span className="rounded-full border border-outline-variant px-3 py-1 text-caption font-caption text-on-surface-variant">Compresión: {active.compression}</span>
          </div>
          <p className="text-body-md font-body-md text-on-surface">{active.definition}</p>
          <div>
            <p className="text-caption font-caption font-bold uppercase tracking-wider text-on-surface-variant mb-1">Consideraciones</p>
            <ul className="list-disc list-inside text-body-md font-body-md text-on-surface-variant space-y-0.5">
              {active.considerations.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
