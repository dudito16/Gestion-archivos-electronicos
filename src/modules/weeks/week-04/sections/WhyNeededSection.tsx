import { FileText } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { enrichedMetadataExample, rawFileExample } from "../week04.data";

export function WhyNeededSection() {
  return (
    <section id="por-que-necesarios" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="El problema de fondo" title="¿Por qué necesitamos metadatos?" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
        <div className="h-full rounded-xl border border-outline-variant bg-surface-container-lowest p-lg flex flex-col items-center justify-center gap-sm text-center">
          <FileText className="text-outline" size={32} />
          <code className="text-body-lg font-body-lg font-mono text-on-surface">{rawFileExample}</code>
        </div>

        <div className="h-full rounded-xl border border-primary-container/50 bg-secondary-container/20 p-lg">
          <div className="flex flex-wrap gap-xs">
            {enrichedMetadataExample.map((el, index) => (
              <motion.span
                key={el}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.3, delay: index * 0.08 }}
                className="rounded-full bg-secondary-container px-3 py-1.5 text-label-md font-label-md text-on-secondary-container font-medium"
              >
                {el}
              </motion.span>
            ))}
          </div>
        </div>
      </div>

      <p className="text-body-lg font-body-lg text-on-surface text-center max-w-2xl mx-auto">
        El segundo caso permite gestionar mejor el contexto documental.
      </p>
    </section>
  );
}
