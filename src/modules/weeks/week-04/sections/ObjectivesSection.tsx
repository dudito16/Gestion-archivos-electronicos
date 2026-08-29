import { motion } from "framer-motion";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { getIcon } from "../../../../utils/getIcon";
import { objectives } from "../week04.data";

export function ObjectivesSection() {
  return (
    <section id="objetivos" className="scroll-mt-24 space-y-md">
      <SectionHeading eyebrow="Objetivos de aprendizaje" title="Al finalizar esta sesión, el estudiante será capaz de:" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
        {objectives.map((objective, index) => {
          const Icon = getIcon(objective.icon);
          return (
            <motion.div
              key={objective.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.1, ease: "easeOut" }}
              className="rounded-xl border border-outline-variant bg-surface-container-lowest p-md shadow-sm hover:shadow-md hover:border-primary-container transition-all"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary-container text-on-secondary-container mb-sm">
                <Icon size={22} />
              </div>
              <h3 className="text-body-lg font-body-lg font-semibold text-on-surface mb-1">{objective.title}</h3>
              <p className="text-body-md font-body-md text-on-surface-variant">{objective.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
