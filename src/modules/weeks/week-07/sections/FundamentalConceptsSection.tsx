import { motion } from "framer-motion";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { orientationQuestions, relatedConcepts } from "../week07.data";

export function FundamentalConceptsSection() {
  return (
    <section id="conceptos" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="Conceptos fundamentales"
        title="Un hilo conductor para analizar cualquier caso de seguridad documental"
        description="Ante un documento o expediente electrónico, estas preguntas ayudan a razonar de forma ordenada."
      />

      <ol className="space-y-xs">
        {orientationQuestions.map((question, index) => (
          <motion.li
            key={question}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="flex items-center gap-sm rounded-lg border border-outline-variant bg-surface-container-lowest px-md py-sm"
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-container text-on-primary text-caption font-caption font-bold">
              {index + 1}
            </span>
            <span className="text-body-md font-body-md text-on-surface">{question}</span>
          </motion.li>
        ))}
      </ol>

      <div>
        <p className="text-label-md font-label-md font-semibold text-on-surface mb-sm">Esto siempre se relaciona con:</p>
        <div className="flex flex-wrap gap-xs">
          {relatedConcepts.map((concept) => (
            <span key={concept} className="rounded-full border border-outline-variant bg-surface-container-lowest px-3 py-1.5 text-label-md font-label-md text-on-surface">
              {concept}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
