import { motion } from "framer-motion";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { getIcon } from "../../../../utils/getIcon";
import { summaryPoints } from "../week05.data";

export function SummarySection() {
  return (
    <section id="resumen" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Resumen" title="Lo esencial de la Semana 5" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-md">
        {summaryPoints.map((point, index) => {
          const Icon = getIcon(point.icon);
          return (
            <motion.div
              key={point.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              className="rounded-xl border border-outline-variant bg-gradient-to-br from-surface-container-lowest to-surface-container-low p-md text-center"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-container text-on-primary mb-sm">
                <Icon size={22} />
              </div>
              <p className="text-caption font-caption font-bold text-primary-container mb-1">{point.title}</p>
              <p className="text-body-md font-body-md text-on-surface">{point.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
