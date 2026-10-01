import { motion } from "framer-motion";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { digitizingWellFactors } from "../week08.data";

export function DigitizingWellSection() {
  return (
    <section id="digitalizar-bien" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="¿Qué significa digitalizar bien?"
        title='No basta con "escanear el documento"'
        description="Digitalizar correctamente exige controlar múltiples factores a la vez."
      />

      <div className="flex flex-wrap gap-xs">
        {digitizingWellFactors.map((factor, index) => (
          <motion.span
            key={factor}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.25, delay: index * 0.03 }}
            className="rounded-full border border-outline-variant bg-surface-container-lowest px-3 py-1.5 text-label-md font-label-md text-on-surface"
          >
            {factor}
          </motion.span>
        ))}
      </div>
    </section>
  );
}
