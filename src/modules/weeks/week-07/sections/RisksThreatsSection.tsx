import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { SequenceBuilder } from "../../../../components/common/SequenceBuilder";
import { riskChainCorrectOrder, riskChainExample, riskChainOrderItems, riskDefinitions } from "../week07.data";

export function RisksThreatsSection() {
  const [ordered, setOrdered] = useState(false);

  return (
    <section id="riesgos" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Riesgos y amenazas" title="Amenaza, vulnerabilidad, riesgo, impacto y control" />

      <dl className="grid grid-cols-1 sm:grid-cols-2 gap-sm">
        {Object.entries(riskDefinitions).map(([key, def]) => (
          <div key={key} className="rounded-lg border border-outline-variant bg-surface-container-lowest p-md">
            <dt className="text-label-md font-label-md font-bold text-primary-container capitalize">{key}</dt>
            <dd className="text-body-md font-body-md text-on-surface-variant mt-0.5">{def}</dd>
          </div>
        ))}
      </dl>

      <Callout variant="info" title="Ejemplo aplicado a la gestión documental">
        <p><strong>Amenaza:</strong> {riskChainExample.threat}.</p>
        <p><strong>Vulnerabilidad:</strong> {riskChainExample.vulnerability}.</p>
        <p><strong>Riesgo:</strong> {riskChainExample.risk}.</p>
        <p><strong>Impacto:</strong> {riskChainExample.impact}.</p>
        <p><strong>Control:</strong> {riskChainExample.control}.</p>
      </Callout>

      <div>
        <p className="text-body-lg font-body-lg font-semibold text-on-surface mb-sm">Construye el riesgo</p>
        <p className="text-body-md font-body-md text-on-surface-variant mb-sm">Ordena estos elementos según la cadena conceptual correcta.</p>
        <SequenceBuilder items={riskChainOrderItems} correctOrder={riskChainCorrectOrder} onComplete={() => setOrdered(true)} />
      </div>

      <AnimatePresence>
        {ordered && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}>
            <Callout variant="success" title="Correcto">
              La amenaza aprovecha la vulnerabilidad; eso constituye el riesgo; si el riesgo se concreta, produce un
              impacto. El control actúa sobre cualquiera de estos eslabones para reducir la cadena completa.
            </Callout>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
