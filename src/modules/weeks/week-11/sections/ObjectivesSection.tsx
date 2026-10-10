import { motion } from "framer-motion";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { getIcon } from "../../../../utils/getIcon";
import { learningOutcomes } from "../week11.data";

export function ObjectivesSection() {
  return (
    <section id="objetivos" className="scroll-mt-24 space-y-md">
      <SectionHeading
        eyebrow="Objetivo de aprendizaje"
        title="Comprender la preservación digital como un proceso planificado de largo plazo"
        description="Al finalizar esta sesión, el estudiante será capaz de diferenciar gestión documental, archivo electrónico y preservación digital, y proponer estrategias frente a los riesgos de obsolescencia, pérdida de acceso y dependencia tecnológica."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
        {learningOutcomes.map((outcome, index) => {
          const Icon = getIcon(outcome.icon);
          return (
            <motion.div
              key={outcome.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: (index % 6) * 0.08, ease: "easeOut" }}
              className="rounded-xl border border-outline-variant bg-surface-container-lowest p-md shadow-sm hover:shadow-md hover:border-primary-container transition-all flex items-start gap-sm"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary-container text-on-secondary-container">
                <Icon size={22} />
              </div>
              <p className="text-body-md font-body-md text-on-surface pt-1.5">{outcome.label}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
