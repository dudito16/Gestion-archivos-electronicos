import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { getIcon } from "../../../../utils/getIcon";
import { functionCards } from "../week04.data";

export function FunctionsSection() {
  return (
    <section id="funciones" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Funciones" title="¿Para qué sirven los metadatos?" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-sm">
        {functionCards.map((card, index) => {
          const Icon = getIcon(card.icon);
          return (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.35, delay: (index % 6) * 0.06 }}
              className="rounded-lg border border-outline-variant bg-surface-container-lowest p-sm hover:border-primary-container hover:shadow-sm transition-all"
            >
              <Icon className="text-primary-container mb-1" size={20} />
              <p className="text-label-md font-label-md font-semibold text-on-surface">{card.title}</p>
              <p className="text-caption font-caption text-on-surface-variant mt-1 italic">{card.question}</p>
            </motion.div>
          );
        })}
      </div>

      <div className="flex flex-col items-center gap-1 pt-sm">
        <span className="rounded-lg border border-outline-variant bg-surface-container-low px-4 py-2 text-label-md font-label-md font-semibold text-on-surface">
          Documento
        </span>
        <ArrowDown className="text-outline" size={16} />
        <span className="rounded-lg bg-primary-container px-4 py-2 text-label-md font-label-md font-bold text-on-primary uppercase tracking-wider">
          Metadatos
        </span>
        <ArrowDown className="text-outline" size={16} />
        <div className="flex flex-wrap justify-center gap-xs max-w-md">
          {["Identificación", "Contexto", "Gestión"].map((item) => (
            <span key={item} className="rounded-full border border-outline-variant bg-surface-container-low px-3 py-1 text-label-md font-label-md text-on-surface">
              {item}
            </span>
          ))}
        </div>
        <ArrowDown className="text-outline" size={16} />
        <span className="rounded-lg border border-outline-variant bg-surface-container-low px-4 py-2 text-label-md font-label-md font-semibold text-on-surface">
          Trazabilidad
        </span>
        <ArrowDown className="text-outline" size={16} />
        <span className="rounded-lg border border-outline-variant bg-surface-container-low px-4 py-2 text-label-md font-label-md font-semibold text-on-surface">
          Ciclo de vida
        </span>
        <ArrowDown className="text-outline" size={16} />
        <span className="rounded-lg bg-secondary-container px-4 py-2 text-label-md font-label-md font-bold text-on-secondary-container uppercase tracking-wider">
          Preservación
        </span>
      </div>
    </section>
  );
}
