import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { getIcon } from "../../../../utils/getIcon";
import { sgdDiagram } from "../week04.data";

export function MetadataAndSGDSection() {
  return (
    <section id="metadatos-sgd" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Integración" title="Metadatos y SGD" />

      <div className="flex flex-col items-center gap-1">
        <span className="rounded-lg border border-outline-variant bg-surface-container-low px-4 py-2 text-label-md font-label-md font-semibold text-on-surface">
          Usuario
        </span>
        <ArrowDown className="text-outline" size={16} />
        <span className="rounded-lg border border-outline-variant bg-surface-container-low px-4 py-2 text-label-md font-label-md font-semibold text-on-surface">
          Interfaz SGD
        </span>
        <ArrowDown className="text-outline" size={16} />
        <span className="rounded-lg bg-primary-container px-4 py-2 text-label-md font-label-md font-bold text-on-primary uppercase tracking-wider">
          Documento
        </span>
        <ArrowDown className="text-outline" size={16} />
        <div className="flex flex-wrap justify-center gap-xs max-w-lg">
          {sgdDiagram.map((item, index) => {
            const Icon = getIcon(item.icon);
            return (
              <motion.span
                key={item.id}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-center gap-1 rounded-full border border-outline-variant bg-surface-container-low px-3 py-1.5 text-label-md font-label-md text-on-surface"
              >
                <Icon size={14} className="text-primary-container" />
                {item.label}
              </motion.span>
            );
          })}
        </div>
        <ArrowDown className="text-outline" size={16} />
        <span className="rounded-lg bg-secondary-container px-4 py-2 text-label-md font-label-md font-bold text-on-secondary-container uppercase tracking-wider">
          Gestión documental
        </span>
      </div>
    </section>
  );
}
