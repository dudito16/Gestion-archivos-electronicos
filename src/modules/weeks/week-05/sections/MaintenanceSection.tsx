import { motion } from "framer-motion";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { maintenanceIdeas } from "../week05.data";

export function MaintenanceSection() {
  return (
    <section id="mantenimiento" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="Proceso 3 de 3"
        title="Mantenimiento"
        description="Mantener un documento no es solo conservarlo: es sostener activamente las condiciones que lo hacen auténtico, fiable, íntegro y disponible mientras esté vigente."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-sm">
        {maintenanceIdeas.map((idea, index) => (
          <motion.div
            key={idea}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.3, delay: index * 0.08 }}
            className="rounded-lg border border-outline-variant bg-surface-container-lowest p-md"
          >
            <p className="text-body-md font-body-md text-on-surface">{idea}</p>
          </motion.div>
        ))}
      </div>

      <Callout variant="info" title="Mirando hacia adelante">
        Estos retos de mantenimiento en el tiempo son la puerta de entrada a la preservación digital, tema que se
        desarrolla más adelante en el curso.
      </Callout>
    </section>
  );
}
