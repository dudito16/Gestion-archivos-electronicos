import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { getIcon } from "../../../../utils/getIcon";
import { fewMetadataProblem, manyMetadataProblems, qualityCards, qualityConclusion } from "../week04.data";

export function QualitySection() {
  return (
    <section id="calidad" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Metadatos y calidad" title="Más metadatos no significa necesariamente mejor gestión" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
        <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg flex flex-col items-center gap-xs text-center">
          <span className="text-label-md font-label-md font-bold uppercase tracking-wider text-on-surface-variant">
            Pocos metadatos
          </span>
          <ArrowDown className="text-outline" size={16} />
          <span className="rounded-full border border-error/50 bg-error-container/40 px-3 py-1 text-label-md font-label-md text-on-error-container">
            {fewMetadataProblem}
          </span>
        </div>
        <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg flex flex-col items-center gap-xs text-center">
          <span className="text-label-md font-label-md font-bold uppercase tracking-wider text-on-surface-variant">
            Demasiados metadatos
          </span>
          <ArrowDown className="text-outline" size={16} />
          <div className="flex flex-wrap justify-center gap-xs">
            {manyMetadataProblems.map((p) => (
              <span key={p} className="rounded-full border border-error/50 bg-error-container/40 px-3 py-1 text-label-md font-label-md text-on-error-container">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>

      <p className="text-body-lg font-body-lg text-on-surface text-center max-w-2xl mx-auto">{qualityConclusion}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-sm pt-sm">
        {qualityCards.map((card, index) => {
          const Icon = getIcon(card.icon);
          return (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.35, delay: index * 0.07 }}
              className="rounded-lg border border-outline-variant bg-surface-container-lowest p-sm text-center"
            >
              <Icon className="text-primary-container mx-auto mb-1" size={20} />
              <p className="text-label-md font-label-md font-semibold text-on-surface">{card.title}</p>
              <p className="text-caption font-caption text-on-surface-variant mt-1 italic">{card.question}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
