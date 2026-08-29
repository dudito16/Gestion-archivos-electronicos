import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { cn } from "../../../../utils/cn";
import { getIcon } from "../../../../utils/getIcon";
import { contextElements } from "../week04.data";

export function ContextSection() {
  const [activeId, setActiveId] = useState(contextElements[0].id);
  const active = contextElements.find((e) => e.id === activeId) ?? contextElements[0];

  return (
    <section id="metadatos-contexto" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="Metadatos y contexto"
        title="El documento no debe analizarse de manera aislada"
        description="Haz clic en cada elemento para ver su relación con el documento."
      />

      <div className="flex flex-wrap gap-xs">
        {contextElements.map((el) => {
          const Icon = getIcon(el.icon);
          const isActive = el.id === activeId;
          return (
            <button
              key={el.id}
              type="button"
              onClick={() => setActiveId(el.id)}
              className={cn(
                "flex items-center gap-xs rounded-full border px-4 py-2 text-label-md font-label-md font-medium transition-colors",
                isActive
                  ? "border-primary-container bg-secondary-container text-on-secondary-container"
                  : "border-outline-variant bg-surface-container-lowest text-on-surface hover:border-primary-container",
              )}
            >
              <Icon size={16} />
              {el.label}
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={active.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
          <Callout variant="info" title={active.label}>
            {active.explanation}
          </Callout>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
