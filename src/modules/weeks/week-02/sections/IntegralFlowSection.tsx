import { ArrowDown, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { getIcon } from "../../../../utils/getIcon";
import { integralFlowCompanions, integralFlowSteps } from "../week02.data";

const FIRST_ROW = integralFlowSteps.slice(0, 5);
const SECOND_ROW = integralFlowSteps.slice(5);

/** The Week 2 centerpiece animation: the document travels through the process, escorted the whole way by its companions. */
export function IntegralFlowSection() {
  return (
    <section id="flujo-integral" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="La animación central"
        title="Flujo integral"
        description="El documento no viaja solo."
      />

      <div className="grid grid-cols-1 xl:grid-cols-[1fr_18rem] gap-lg items-start">
        {/* Desktop: two horizontal rows in a zig-zag. Below lg: a single vertical column. */}
        <div className="hidden lg:flex flex-col items-center gap-sm">
          <FlowRow steps={FIRST_ROW} startDelay={0} />
          <ArrowDown className="text-outline shrink-0" size={20} />
          <FlowRow steps={SECOND_ROW} startDelay={FIRST_ROW.length * 0.08} />
        </div>

        <div className="flex lg:hidden flex-col items-center gap-1">
          {integralFlowSteps.map((step, index) => (
            <FlowCard key={step.id} label={step.label} delay={index * 0.06} last={index === integralFlowSteps.length - 1} vertical />
          ))}
        </div>

        <div className="rounded-xl border border-primary-container/40 bg-secondary-container/20 p-md space-y-sm xl:justify-self-end w-full xl:w-72">
          <p className="text-label-md font-label-md font-bold uppercase tracking-wider text-primary-container">
            Acompañan al documento
          </p>
          {integralFlowCompanions.map((item, index) => {
            const Icon = getIcon(item.icon);
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.35, delay: 0.1 + index * 0.08 }}
                className="flex items-center gap-xs rounded-lg bg-surface-container-lowest px-3 py-2.5"
              >
                <Icon className="text-primary-container shrink-0" size={18} />
                <span className="text-label-md font-label-md text-on-surface">{item.label}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FlowRow({ steps, startDelay }: { steps: typeof integralFlowSteps; startDelay: number }) {
  return (
    <div className="flex items-center justify-center flex-wrap gap-2">
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center gap-2">
          <FlowCard label={step.label} delay={startDelay + index * 0.08} last={index === steps.length - 1} />
          {index < steps.length - 1 && <ArrowRight className="text-outline shrink-0" size={18} />}
        </div>
      ))}
    </div>
  );
}

function FlowCard({ label, delay, last, vertical }: { label: string; delay: number; last: boolean; vertical?: boolean }) {
  return (
    <div className="flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.35, delay }}
        className="min-w-[9.5rem] max-w-[11.5rem] rounded-lg border border-outline-variant bg-surface-container-lowest px-md py-sm md:py-4 text-center shadow-sm"
      >
        <span className="text-label-md font-label-md font-semibold text-on-surface">{label}</span>
      </motion.div>
      {vertical && !last && <ArrowDown className="text-outline shrink-0 my-0.5" size={16} />}
    </div>
  );
}
