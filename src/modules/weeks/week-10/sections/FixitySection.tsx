import { ArrowDown, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { cn } from "../../../../utils/cn";
import { fixityDefinition, fixityFlow } from "../week10.data";

export function FixitySection() {
  const [selected, setSelected] = useState<string>(fixityFlow[0].id);
  const active = fixityFlow.find((s) => s.id === selected)!;

  return (
    <section id="fixity" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Fixity" title="Verificar la integridad de forma sistemática y repetible" description={fixityDefinition} />

      <div className="hidden lg:flex items-stretch justify-center gap-1 flex-wrap">
        {fixityFlow.map((stage, index) => (
          <div key={stage.id} className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setSelected(stage.id)}
              className={cn(
                "min-w-[8.5rem] rounded-lg border-2 px-md py-sm text-center transition-colors",
                selected === stage.id ? "border-primary-container bg-secondary-container/50" : "border-outline-variant bg-surface-container-lowest hover:border-primary-container",
              )}
            >
              <span className="text-label-md font-label-md font-semibold text-on-surface">{stage.label}</span>
            </button>
            {index < fixityFlow.length - 1 && <ArrowRight className="text-outline shrink-0" size={18} />}
          </div>
        ))}
      </div>

      <div className="flex lg:hidden flex-col items-center gap-1">
        {fixityFlow.map((stage, index) => (
          <div key={stage.id} className="flex flex-col items-center">
            <button
              type="button"
              onClick={() => setSelected(stage.id)}
              className={cn(
                "w-full max-w-xs rounded-lg border-2 px-md py-sm text-center transition-colors",
                selected === stage.id ? "border-primary-container bg-secondary-container/50" : "border-outline-variant bg-surface-container-lowest hover:border-primary-container",
              )}
            >
              <span className="text-label-md font-label-md font-semibold text-on-surface">{stage.label}</span>
            </button>
            {index < fixityFlow.length - 1 && <ArrowDown className="text-outline shrink-0 my-0.5" size={16} />}
          </div>
        ))}
      </div>

      <motion.div
        key={active.id}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="rounded-lg border border-outline-variant bg-surface-container-low p-md max-w-2xl mx-auto"
      >
        <p className="text-label-md font-label-md font-bold text-primary-container mb-1">{active.label}</p>
        <p className="text-body-md font-body-md text-on-surface">{active.explanation}</p>
      </motion.div>
    </section>
  );
}
