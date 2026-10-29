import { motion } from "framer-motion";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { getIcon } from "../../../../utils/getIcon";
import { achievementIndicator, learningOutcomes, metadataRisk } from "../week13.data";

export function ObjectivesSection() {
  return (
    <section id="objetivos" className="scroll-mt-24 space-y-md">
      <SectionHeading
        eyebrow="Objetivos de aprendizaje"
        title="Dar forma técnica a la información de preservación"
        description={`Indicador de logro: ${achievementIndicator}`}
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
              transition={{ duration: 0.45, delay: (index % 8) * 0.06, ease: "easeOut" }}
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

      <Callout variant="warning" title="¿Por qué importa para el trabajo archivístico?">
        {metadataRisk}
      </Callout>
    </section>
  );
}
