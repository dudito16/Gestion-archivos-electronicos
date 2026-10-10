import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { cn } from "../../../../utils/cn";
import { riskCards } from "../week10.data";

const severityStyle = {
  alta: "border-error bg-error-container/30",
  media: "border-secondary bg-secondary-container/40",
  baja: "border-outline-variant bg-surface-container-low",
};

const severityLabel = {
  alta: "Riesgo alto",
  media: "Riesgo medio",
  baja: "Riesgo bajo",
};

export function RisksSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="riesgos" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Riesgos" title="Mapa de riesgos de integridad" description="Toca cada riesgo para ver su impacto y el control asociado." />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-sm">
        {riskCards.map((risk) => {
          const isOpen = openId === risk.id;
          return (
            <button
              key={risk.id}
              type="button"
              onClick={() => setOpenId((id) => (id === risk.id ? null : risk.id))}
              className={cn("text-left rounded-lg border-2 p-md transition-colors", severityStyle[risk.severity])}
            >
              <div className="flex items-center justify-between gap-xs">
                <span className="text-label-md font-label-md font-bold text-on-surface">{risk.label}</span>
                <span className="text-caption font-caption font-semibold uppercase tracking-wider text-on-surface-variant">{severityLabel[risk.severity]}</span>
              </div>
              <AnimatePresence>
                {isOpen && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden mt-sm space-y-1.5">
                    <p className="text-caption font-caption text-on-surface">
                      <span className="font-semibold">Impacto →</span> {risk.impact}
                    </p>
                    <p className="text-caption font-caption text-on-surface">
                      <span className="font-semibold">Control →</span> {risk.control}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          );
        })}
      </div>
    </section>
  );
}
