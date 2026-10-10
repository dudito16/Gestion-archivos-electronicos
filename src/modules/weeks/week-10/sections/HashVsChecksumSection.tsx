import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Button } from "../../../../components/ui/button";
import { Callout } from "../../../../components/common/Callout";
import { hashVsChecksumClosing, hashVsChecksumProperties } from "../week10.data";

export function HashVsChecksumSection() {
  const [revealed, setRevealed] = useState(0);
  const allRevealed = revealed >= hashVsChecksumProperties.length;

  return (
    <section id="hash-vs-checksum" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Hash vs Checksum" title="Dos herramientas distintas, no sinónimos" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-sm">
        <div className="rounded-xl border-2 border-primary-container bg-secondary-container/20 p-md">
          <p className="text-headline-md font-headline-md text-on-surface text-center mb-sm">HASH</p>
          <p className="text-caption font-caption text-on-surface-variant text-center">Huella del contenido completo del documento</p>
        </div>
        <div className="rounded-xl border-2 border-outline-variant bg-surface-container-low p-md">
          <p className="text-headline-md font-headline-md text-on-surface text-center mb-sm">CHECKSUM</p>
          <p className="text-caption font-caption text-on-surface-variant text-center">Valor de control para detectar errores de transferencia</p>
        </div>
      </div>

      <div className="space-y-sm">
        <AnimatePresence initial={false}>
          {hashVsChecksumProperties.slice(0, revealed).map((prop) => (
            <motion.div
              key={prop.key}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="rounded-lg border border-outline-variant bg-surface-container-lowest overflow-hidden"
            >
              <p className="text-label-md font-label-md font-bold uppercase tracking-wider text-primary-container px-md pt-sm">{prop.label}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-sm p-md pt-xs">
                <p className="text-body-md font-body-md text-on-surface">{prop.hash}</p>
                <p className="text-body-md font-body-md text-on-surface-variant">{prop.checksum}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {!allRevealed && (
          <Button variant="secondary" onClick={() => setRevealed((r) => Math.min(hashVsChecksumProperties.length, r + 1))}>
            Ver diferencias {revealed > 0 && `(${revealed}/${hashVsChecksumProperties.length})`}
          </Button>
        )}
      </div>

      {allRevealed && (
        <Callout variant="info" title="En gestión documental">
          {hashVsChecksumClosing}
        </Callout>
      )}
    </section>
  );
}
