import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Badge } from "../../../../components/ui/badge";
import { Callout } from "../../../../components/common/Callout";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { cn } from "../../../../utils/cn";
import { getIcon } from "../../../../utils/getIcon";
import { digitizationCaseClosing, digitizationCaseIntro, digitizationCaseItems } from "../week08.data";

export function DigitizationCaseSection() {
  const [activeId, setActiveId] = useState(digitizationCaseItems[0].id);
  const active = digitizationCaseItems.find((i) => i.id === activeId) ?? digitizationCaseItems[0];

  return (
    <section id="caso-digitalizacion" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Caso integrado de digitalización" title="Archivo Histórico — Colección documental" />
      <Badge variant="outline">Caso académico</Badge>

      <p className="rounded-lg border border-outline-variant bg-surface-container-low p-md text-body-md font-body-md text-on-surface">{digitizationCaseIntro}</p>

      <div className="flex flex-wrap gap-xs">
        {digitizationCaseItems.map((item) => {
          const Icon = getIcon(item.icon);
          const isActive = activeId === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveId(item.id)}
              className={cn(
                "flex items-center gap-xs rounded-lg border px-md py-sm text-label-md font-label-md font-semibold transition-colors",
                isActive
                  ? "border-primary-container bg-secondary-container text-on-secondary-container"
                  : "border-outline-variant bg-surface-container-lowest text-on-surface hover:border-primary-container",
              )}
            >
              <Icon size={18} />
              {item.label}
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
          className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg"
        >
          <p className="text-body-md font-body-md text-on-surface">{active.needs}</p>
        </motion.div>
      </AnimatePresence>

      <Callout variant="warning" title="Sin valores universales rígidos">
        {digitizationCaseClosing}
      </Callout>
    </section>
  );
}
