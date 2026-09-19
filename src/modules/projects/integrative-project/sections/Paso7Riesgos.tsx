import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Badge } from "../../../../components/ui/badge";
import { riskFindings } from "../integrativeProject.data";

export function Paso7Riesgos() {
  return (
    <section id="paso-7-riesgos" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Caso modelo · Paso 07" title="Evaluemos los riesgos" description="Conecta directamente con la Semana 5." />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
        {riskFindings.map((finding, index) => (
          <motion.div
            key={finding.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.35, delay: index * 0.08 }}
            className="rounded-xl border border-outline-variant bg-surface-container-lowest p-md space-y-2"
          >
            <div className="flex items-center gap-xs">
              <Badge variant="secondary">Hallazgo {index + 1}</Badge>
            </div>
            <p className="text-body-md font-body-md italic text-on-surface-variant">"{finding.finding}"</p>
            <div className="flex flex-col items-start gap-1 text-body-md font-body-md text-on-surface pt-1">
              <span className="rounded-md bg-surface-container-low px-2 py-1">Problema (arriba)</span>
              <ArrowDown size={14} className="text-outline ml-2" />
              <span className="rounded-md bg-secondary-container/60 px-2 py-1 font-semibold">Atributo: {finding.attribute}</span>
              <ArrowDown size={14} className="text-outline ml-2" />
              <span className="rounded-md bg-error-container/40 px-2 py-1">{finding.risk}</span>
              <ArrowDown size={14} className="text-outline ml-2" />
              <span className="rounded-md bg-tertiary-fixed/40 px-2 py-1">{finding.control}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
