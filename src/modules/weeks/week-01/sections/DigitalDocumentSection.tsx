import { motion } from "framer-motion";
import { Callout } from "../../../../components/common/Callout";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { getIcon } from "../../../../utils/getIcon";
import { digitalExamples } from "../week01.data";

export function DigitalDocumentSection() {
  return (
    <section id="documento-digital" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Los cuatro conceptos · 2 de 4" title="Documento Digital" />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-sm">
        {digitalExamples.map((example, index) => {
          const Icon = getIcon(example.icon);
          return (
            <motion.div
              key={example.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="rounded-lg border border-outline-variant bg-surface-container-lowest p-sm text-center hover:border-primary-container hover:shadow-sm transition-all"
            >
              <Icon className="mx-auto text-primary-container mb-1" size={24} />
              <p className="text-label-md font-label-md font-semibold text-on-surface">{example.format}</p>
              <p className="text-caption font-caption text-on-surface-variant mt-1">{example.description}</p>
            </motion.div>
          );
        })}
      </div>

      <Callout variant="warning" title="No todo documento digital es un documento electrónico">
        Un documento digital es, simplemente, cualquier contenido en formato binario. Solo se convierte en{" "}
        <strong>documento electrónico</strong> cuando incorpora firma digital válida y metadatos de gestión
        normalizados que le otorgan autenticidad, integridad y valor jurídico.
      </Callout>
    </section>
  );
}
