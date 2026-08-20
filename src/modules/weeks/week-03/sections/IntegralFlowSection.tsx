import { motion } from "framer-motion";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { ZigzagFlow } from "../../../../components/common/ZigzagFlow";
import { getIcon } from "../../../../utils/getIcon";
import { integralFlowCompanions, integralFlowMain } from "../week03.data";

/** Week 3 centerpiece: the full process flow, escorted by its second dimension — documento → expediente → organización. */
export function IntegralFlowSection() {
  return (
    <section id="flujo-integral" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="Diagrama central"
        title="Flujo integral"
        description="Recepción, registro y trámite conducen a un expediente que se clasifica, ordena y describe antes de su despacho y archivo."
      />

      <div className="grid grid-cols-1 xl:grid-cols-[1fr_16rem] gap-lg items-start">
        <ZigzagFlow steps={integralFlowMain} perRow={5} />

        <div className="rounded-xl border border-primary-container/40 bg-secondary-container/20 p-md space-y-sm w-full xl:w-64 xl:justify-self-end">
          <p className="text-label-md font-label-md font-bold uppercase tracking-wider text-primary-container">
            Segunda dimensión
          </p>
          {integralFlowCompanions.map((item, index) => {
            const Icon = getIcon(item.icon);
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.35, delay: 0.1 + index * 0.1 }}
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
