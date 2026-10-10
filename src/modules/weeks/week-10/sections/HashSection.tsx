import { ArrowDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Callout } from "../../../../components/common/Callout";
import {
  hashChangeMessage,
  hashDefinition,
  hashModifiedDocument,
  hashModifiedValue,
  hashOriginalDocument,
  hashOriginalValue,
  hashSimulationDisclaimer,
} from "../week10.data";

export function HashSection() {
  const [modified, setModified] = useState(false);

  return (
    <section id="hash" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Hash" title="Una huella digital del contenido" description={hashDefinition} />

      <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg space-y-sm flex flex-col items-center">
        <Badge variant="secondary">Simulación conceptual</Badge>

        <div className="rounded-lg border-2 border-primary-container bg-secondary-container/30 px-lg py-sm text-center">
          <p className="text-caption font-caption text-on-surface-variant">Documento original</p>
          <p className="text-label-md font-label-md font-bold text-on-surface">{modified ? hashModifiedDocument : hashOriginalDocument}</p>
        </div>

        <ArrowDown className="text-outline" size={18} />
        <p className="text-caption font-caption font-semibold uppercase tracking-wider text-on-surface-variant">Función hash</p>
        <ArrowDown className="text-outline" size={18} />

        <AnimatePresence mode="wait">
          <motion.div
            key={modified ? "modified" : "original"}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="rounded-lg border-2 border-tertiary-fixed-dim bg-tertiary-fixed/30 px-lg py-sm text-center"
          >
            <p className="text-headline-md font-headline-md font-mono text-on-tertiary-fixed-variant">{modified ? hashModifiedValue : hashOriginalValue}</p>
          </motion.div>
        </AnimatePresence>

        <Button variant={modified ? "secondary" : "primary"} onClick={() => setModified((v) => !v)}>
          {modified ? "Restaurar documento original" : "Modificar documento"}
        </Button>

        {modified && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-body-md font-body-md text-error text-center max-w-md">
            {hashChangeMessage}
          </motion.p>
        )}

        <Callout variant="info" title="Simulación conceptual">
          {hashSimulationDisclaimer}
        </Callout>
      </div>
    </section>
  );
}
