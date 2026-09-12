import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { FlowChain } from "../../../../components/common/FlowChain";
import { cn } from "../../../../utils/cn";
import { howItWorksSignPhase, howItWorksVerifyPhase } from "../week06.data";

type Phase = "firma" | "verificacion";

export function HowSignatureWorksSection() {
  const [phase, setPhase] = useState<Phase>("firma");

  return (
    <section id="como-funciona" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="¿Cómo funciona una firma digital?" title="Dos fases: firmar y verificar" />

      <div className="flex gap-xs">
        <button
          type="button"
          onClick={() => setPhase("firma")}
          className={cn(
            "rounded-full border px-4 py-2 text-label-md font-label-md font-semibold transition-colors",
            phase === "firma" ? "border-primary-container bg-secondary-container text-on-secondary-container" : "border-outline-variant bg-surface-container-lowest text-on-surface",
          )}
        >
          Fase 1 — Firma
        </button>
        <button
          type="button"
          onClick={() => setPhase("verificacion")}
          className={cn(
            "rounded-full border px-4 py-2 text-label-md font-label-md font-semibold transition-colors",
            phase === "verificacion" ? "border-primary-container bg-secondary-container text-on-secondary-container" : "border-outline-variant bg-surface-container-lowest text-on-surface",
          )}
        >
          Fase 2 — Verificación
        </button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={phase} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.25 }}>
          <FlowChain steps={phase === "firma" ? howItWorksSignPhase : howItWorksVerifyPhase} />
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
