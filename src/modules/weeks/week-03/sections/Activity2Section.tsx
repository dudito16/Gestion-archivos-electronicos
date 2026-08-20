import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { MultiSelectCheck } from "../../../../components/common/MultiSelectCheck";
import { activity2Explanation, activity2Items } from "../week03.data";

export function Activity2Section() {
  const [done, setDone] = useState(false);

  return (
    <section id="actividad-2" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="Actividad 2"
        title="Organiza el expediente"
        description="Selecciona qué documentos deberían formar parte de este expediente, según el caso."
      />

      <MultiSelectCheck items={activity2Items} onComplete={() => setDone(true)} />

      <AnimatePresence>
        {done && (
          <motion.p initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="text-body-lg font-body-lg text-on-surface text-center">
            {activity2Explanation}
          </motion.p>
        )}
      </AnimatePresence>
    </section>
  );
}
