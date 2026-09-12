import { motion } from "framer-motion";
import { ScrollReveal } from "../../../../components/common/ScrollReveal";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { FlowChain } from "../../../../components/common/FlowChain";
import { getIcon } from "../../../../utils/getIcon";
import { certificateFacts, certificateFlow } from "../week06.data";

export function CertificateSection() {
  return (
    <section id="certificado-digital" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="Certificado digital"
        title="Vincula una identidad con una clave"
        description="Un certificado digital es el documento electrónico que permite atribuir una firma a una identidad concreta, dentro de una infraestructura de confianza."
      />

      <ScrollReveal>
        <FlowChain steps={certificateFlow} />
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
        {certificateFacts.map((fact, index) => {
          const Icon = getIcon(fact.icon);
          return (
            <motion.div
              key={fact.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              className="rounded-lg border border-outline-variant bg-surface-container-lowest p-md flex gap-sm"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary-container text-on-secondary-container">
                <Icon size={18} />
              </div>
              <div>
                <p className="text-label-md font-label-md font-semibold text-on-surface">{fact.label}</p>
                <p className="text-body-md font-body-md text-on-surface-variant">{fact.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
