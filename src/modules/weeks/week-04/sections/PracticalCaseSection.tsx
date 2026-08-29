import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Button } from "../../../../components/ui/button";
import { practicalCaseDocs } from "../week04.data";

export function PracticalCaseSection() {
  const [revealed, setRevealed] = useState(false);

  return (
    <section id="caso-practico" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Caso práctico" title="Tenemos dos documentos llamados Informe.pdf" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
        {practicalCaseDocs.map((doc) => (
          <div key={doc.id} className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg">
            <p className="text-label-md font-label-md font-bold text-on-surface mb-sm">{doc.label}</p>
            <dl className="space-y-1 text-body-md font-body-md text-on-surface-variant">
              <div className="flex justify-between"><dt>Fecha</dt><dd className="text-on-surface">{doc.fecha}</dd></div>
              <div className="flex justify-between"><dt>Productor</dt><dd className="text-on-surface">{doc.productor}</dd></div>
              <div className="flex justify-between"><dt>Expediente</dt><dd className="text-on-surface">{doc.expediente}</dd></div>
              <div className="flex justify-between"><dt>Asunto</dt><dd className="text-on-surface">{doc.asunto}</dd></div>
            </dl>
          </div>
        ))}
      </div>

      <div className="text-center space-y-sm">
        <p className="text-body-lg font-body-lg font-semibold text-on-surface">¿Son el mismo documento?</p>
        {!revealed ? (
          <Button onClick={() => setRevealed(true)}>Ver respuesta</Button>
        ) : (
          <AnimatePresence>
            <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} className="space-y-1">
              <p className="text-headline-md font-headline-md text-primary-container">No.</p>
              <p className="text-body-md font-body-md text-on-surface-variant max-w-md mx-auto">
                Los metadatos ayudan a diferenciarlos y contextualizarlos.
              </p>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </section>
  );
}
