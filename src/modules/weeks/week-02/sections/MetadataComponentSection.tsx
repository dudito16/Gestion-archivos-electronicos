import { ArrowDown, FileText, Tags } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ScrollReveal } from "../../../../components/common/ScrollReveal";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Button } from "../../../../components/ui/button";
import { metadataAnswer, metadataExamples, metadataQuestion } from "../week02.data";

export function MetadataComponentSection() {
  const [revealed, setRevealed] = useState(false);

  return (
    <section id="metadatos" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Componente · Metadatos" title="Metadatos" />

      <ScrollReveal>
        <div className="flex flex-col items-center gap-1">
          <div className="flex items-center gap-xs rounded-lg border border-outline-variant bg-surface-container-low px-4 py-2">
            <FileText className="text-primary-container" size={20} />
            <span className="text-label-md font-label-md font-semibold text-on-surface">Documento</span>
          </div>
          <ArrowDown className="text-outline" size={16} />
          <div className="flex items-center gap-xs rounded-lg bg-secondary-container px-4 py-2">
            <Tags className="text-on-secondary-container" size={20} />
            <span className="text-label-md font-label-md font-semibold text-on-secondary-container">Metadatos</span>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="flex flex-wrap justify-center gap-xs">
          {metadataExamples.map((m) => (
            <span key={m} className="rounded-full border border-outline-variant bg-surface-container-low px-3 py-1 text-label-md font-label-md text-on-surface">
              {m}
            </span>
          ))}
        </div>
      </ScrollReveal>

      <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg text-center space-y-sm">
        <p className="text-body-lg font-body-lg text-on-surface">{metadataQuestion}</p>
        {!revealed ? (
          <Button size="sm" onClick={() => setRevealed(true)}>
            Ver respuesta
          </Button>
        ) : (
          <AnimatePresence>
            <motion.p
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-body-md font-body-md text-on-surface-variant max-w-xl mx-auto"
            >
              {metadataAnswer}
            </motion.p>
          </AnimatePresence>
        )}
      </div>
    </section>
  );
}
