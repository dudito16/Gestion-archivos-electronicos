import { motion } from "framer-motion";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { FlowChain } from "../../../../components/common/FlowChain";
import { getIcon } from "../../../../utils/getIcon";
import { whyItMattersFile, whyItMattersFlow, whyItMattersInitialStates, whyItMattersLaterLabel, whyItMattersQuestion } from "../week10.data";

export function WhyItMattersSection() {
  return (
    <section id="por-que-importa" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="¿Por qué importa?" title="Un documento puede seguir existiendo sin seguir siendo el mismo" />

      <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg space-y-md">
        <div className="flex items-center gap-sm flex-wrap">
          <span className="rounded-lg bg-secondary-container px-4 py-2 text-label-md font-label-md font-bold text-on-secondary-container">{whyItMattersFile}</span>
          {whyItMattersInitialStates.map((s) => {
            const Icon = getIcon(s.icon);
            return (
              <span key={s.id} className="flex items-center gap-1 rounded-full border border-tertiary-fixed-dim bg-tertiary-fixed/30 px-3 py-1.5 text-caption font-caption font-medium text-on-tertiary-fixed-variant">
                <Icon size={13} /> {s.label}
              </span>
            );
          })}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-center">
          <span className="inline-block rounded-full bg-surface-container-low px-4 py-1.5 text-caption font-caption font-semibold uppercase tracking-wider text-on-surface-variant">
            {whyItMattersLaterLabel}
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-headline-md font-headline-md text-center text-on-surface max-w-2xl mx-auto"
        >
          {whyItMattersQuestion}
        </motion.p>

        <FlowChain steps={whyItMattersFlow} />
      </div>
    </section>
  );
}
