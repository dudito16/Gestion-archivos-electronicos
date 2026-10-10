import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { preservationRisks } from "../week11.data";

export function RisksSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="riesgos" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Riesgos de preservación" title="Lo que amenaza el acceso a largo plazo" description="Toca cada riesgo para ver su consecuencia y la medida preventiva o correctiva asociada." />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-sm">
        {preservationRisks.map((risk) => {
          const isOpen = openId === risk.id;
          return (
            <button
              key={risk.id}
              type="button"
              onClick={() => setOpenId((id) => (id === risk.id ? null : risk.id))}
              className="text-left rounded-lg border-2 border-outline-variant bg-surface-container-lowest p-md transition-colors hover:border-primary-container"
            >
              <span className="text-label-md font-label-md font-bold text-on-surface">{risk.label}</span>
              <AnimatePresence>
                {isOpen && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden mt-sm space-y-1.5">
                    <p className="text-caption font-caption text-on-surface">
                      <span className="font-semibold">Consecuencia →</span> {risk.consequence}
                    </p>
                    <p className="text-caption font-caption text-on-surface">
                      <span className="font-semibold">Medida →</span> {risk.measure}
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
