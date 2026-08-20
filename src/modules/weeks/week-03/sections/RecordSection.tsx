import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { AnimatedFolder } from "../../../../components/common/AnimatedFolder";
import { recordChain, recordDocs } from "../week03.data";

export function RecordSection() {
  return (
    <section id="expediente" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="Del documento al expediente"
        title="Expediente electrónico"
        description="Haz clic en la carpeta para ver los documentos que reúne."
      />

      <AnimatedFolder label="Expediente" docs={recordDocs} />

      <p className="text-body-lg font-body-lg text-on-surface max-w-2xl">
        El expediente reúne documentos relacionados con un mismo asunto, procedimiento o actuación, manteniendo sus
        relaciones y orden dentro del contexto correspondiente. No existe una estructura única universal: cada
        expediente responde al asunto que lo origina.
      </p>

      <div className="flex flex-wrap items-center gap-xs">
        {recordChain.map((step, index) => (
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="flex items-center gap-xs"
          >
            <span className="rounded-full border border-outline-variant bg-surface-container-low px-3 py-1.5 text-label-md font-label-md text-on-surface">
              {step}
            </span>
            {index < recordChain.length - 1 && <ArrowRight className="text-outline shrink-0" size={16} />}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
