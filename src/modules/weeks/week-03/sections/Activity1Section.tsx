import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { SequenceBuilder } from "../../../../components/common/SequenceBuilder";
import { activity1Explanation, activity1Items, activity1Order } from "../week03.data";

export function Activity1Section() {
  const [done, setDone] = useState(false);

  return (
    <section id="actividad-1" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="Actividad 1"
        title="Reconstruye el proceso documental"
        description="Ordena las etapas tal como ocurren desde que un documento ingresa hasta que se archiva."
      />

      <SequenceBuilder items={activity1Items} correctOrder={activity1Order} onComplete={() => setDone(true)} />

      <AnimatePresence>
        {done && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-1 sm:grid-cols-2 gap-sm">
            {activity1Order.map((id) => {
              const item = activity1Items.find((i) => i.id === id)!;
              return (
                <div key={id} className="rounded-lg border border-outline-variant bg-surface-container-lowest p-sm">
                  <p className="text-label-md font-label-md font-semibold text-on-surface">{item.label}</p>
                  <p className="text-caption font-caption text-on-surface-variant mt-1">{activity1Explanation[id]}</p>
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
