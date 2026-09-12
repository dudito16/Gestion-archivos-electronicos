import { motion } from "framer-motion";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { getIcon } from "../../../../utils/getIcon";
import { auditFields } from "../week06.data";

export function AuditSection() {
  return (
    <section id="auditoria" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="Auditoría"
        title="Qué información permite reconstruir una acción documental"
        description="Una ficha de auditoría documental reúne las preguntas básicas para poder explicar, después, qué ocurrió con un documento."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-md">
        {auditFields.map((field, index) => {
          const Icon = getIcon(field.icon);
          return (
            <motion.div
              key={field.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.35, delay: index * 0.07 }}
              className="rounded-lg border border-outline-variant bg-surface-container-lowest p-md"
            >
              <div className="flex items-center gap-xs mb-1">
                <Icon className="text-primary-container" size={18} />
                <p className="text-label-md font-label-md font-bold text-on-surface">{field.question}</p>
              </div>
              <p className="text-body-md font-body-md text-on-surface-variant">{field.example}</p>
            </motion.div>
          );
        })}
      </div>

      <Callout variant="info" title="Auditoría documental, no auditoría informática completa">
        Aquí nos referimos a la información que permite reconstruir una acción sobre un documento dentro de la
        gestión documental — no a una auditoría de seguridad informática de toda la infraestructura, que es un
        alcance distinto y más amplio.
      </Callout>
    </section>
  );
}
