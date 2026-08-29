import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ScrollReveal } from "../../../../components/common/ScrollReveal";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { FlowChain } from "../../../../components/common/FlowChain";
import { Callout } from "../../../../components/common/Callout";
import { Button } from "../../../../components/ui/button";
import { iso23081Answer, iso23081Flow } from "../week04.data";

export function ISO23081Section() {
  const [revealed, setRevealed] = useState(false);

  return (
    <section id="iso-23081" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="ISO 23081-1:2017" title="Principios de metadatos para documentos" />

      <p className="text-body-lg font-body-lg text-on-surface max-w-2xl">
        La norma proporciona principios para los metadatos relacionados con la gestión de documentos. Debe
        entenderse como un marco de principios, no como una lista universal de campos obligatorios.
      </p>

      <ScrollReveal>
        <FlowChain steps={iso23081Flow} />
      </ScrollReveal>

      <div className="text-center space-y-sm">
        {!revealed ? (
          <Button variant="secondary" onClick={() => setRevealed(true)}>
            ¿Por qué no existe un esquema único?
          </Button>
        ) : (
          <AnimatePresence>
            <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }}>
              <Callout variant="info" title="No existe un esquema universal">
                {iso23081Answer}
              </Callout>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </section>
  );
}
