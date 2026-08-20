import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { getIcon } from "../../../../utils/getIcon";
import { summaryClusters } from "../week03.data";

export function SummarySection() {
  return (
    <section id="resumen" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Resumen" title="Todo lo visto, en un solo mapa" />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-md">
        {summaryClusters.map((cluster, clusterIndex) => {
          const Icon = getIcon(cluster.icon);
          return (
            <motion.div
              key={cluster.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.35, delay: clusterIndex * 0.1 }}
              className="rounded-xl border border-outline-variant bg-surface-container-lowest p-md"
            >
              <div className="flex items-center gap-xs mb-sm">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary-container text-on-secondary-container">
                  <Icon size={18} />
                </div>
                <h4 className="text-label-md font-label-md font-bold text-on-surface">{cluster.title}</h4>
              </div>
              <ul className="space-y-1">
                {cluster.items.map((item) => (
                  <li key={item} className="text-body-md font-body-md text-on-surface-variant pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-outline">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>

      <div className="flex flex-col items-center gap-1">
        <ArrowDown className="text-outline" size={18} />
        <span className="rounded-full bg-primary-container px-4 py-1.5 text-label-md font-label-md font-semibold text-on-primary uppercase tracking-wider">
          Gestión documental
        </span>
      </div>
    </section>
  );
}
