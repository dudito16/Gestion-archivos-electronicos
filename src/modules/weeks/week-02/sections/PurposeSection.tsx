import { motion } from "framer-motion";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { getIcon } from "../../../../utils/getIcon";
import { purposeCards } from "../week02.data";

export function PurposeSection() {
  return (
    <section id="finalidad" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Finalidad" title="¿Para qué sirve un SGD?" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-sm">
        {purposeCards.map((card, index) => {
          const Icon = getIcon(card.icon);
          return (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.35, delay: (index % 4) * 0.06 }}
              className="rounded-lg border border-outline-variant bg-surface-container-lowest p-sm hover:border-primary-container hover:shadow-sm transition-all"
            >
              <Icon className="text-primary-container mb-1" size={20} />
              <p className="text-label-md font-label-md font-semibold text-on-surface">{card.title}</p>
              <p className="text-caption font-caption text-on-surface-variant mt-1">{card.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
