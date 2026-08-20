import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { SequenceBuilder } from "../../../../components/common/SequenceBuilder";
import { Callout } from "../../../../components/common/Callout";
import { activity3Items, activity3Order, activity3WhyItMatters } from "../week03.data";

export function Activity3Section() {
  const [done, setDone] = useState(false);

  return (
    <section id="actividad-3" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="Actividad 3"
        title="Ordenamiento digital"
        description="Coloca estos documentos en la secuencia correcta."
      />

      <SequenceBuilder items={activity3Items} correctOrder={activity3Order} onComplete={() => setDone(true)} />

      <AnimatePresence>
        {done && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}>
            <Callout variant="info" title="¿Por qué el orden importa?">
              {activity3WhyItMatters.join(" · ")}
            </Callout>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
