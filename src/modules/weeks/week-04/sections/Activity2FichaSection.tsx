import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Button } from "../../../../components/ui/button";
import { Callout } from "../../../../components/common/Callout";
import { ficha2Fields, ficha2Suggested } from "../week04.data";

export function Activity2FichaSection() {
  const [values, setValues] = useState<Record<string, string>>({});
  const [revealed, setRevealed] = useState(false);

  return (
    <section id="actividad-ficha" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="Actividad 2"
        title="Completa la ficha"
        description={`Documento: Informe técnico. Propón un valor para cada campo.`}
      />

      <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg grid grid-cols-1 sm:grid-cols-2 gap-md">
        {ficha2Fields.map((field) => (
          <div key={field}>
            <label htmlFor={`ficha2-${field}`} className="text-label-md font-label-md font-semibold text-on-surface mb-1 block">
              {field}
            </label>
            <input
              id={`ficha2-${field}`}
              type="text"
              value={values[field] ?? ""}
              onChange={(e) => setValues((prev) => ({ ...prev, [field]: e.target.value }))}
              placeholder="Tu propuesta…"
              className="w-full rounded-lg border border-outline-variant bg-surface-container-low px-sm py-2 text-body-md font-body-md text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container"
            />
          </div>
        ))}
      </div>

      <div className="text-center">
        <Button onClick={() => setRevealed(true)}>Ver una propuesta de referencia</Button>
      </div>

      <AnimatePresence>
        {revealed && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}>
            <Callout variant="success" title="Una posible propuesta (no la única válida)">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 mt-1">
                {ficha2Fields.map((field) => (
                  <li key={field}>
                    <span className="font-semibold">{field}:</span> {ficha2Suggested[field]}
                  </li>
                ))}
              </ul>
            </Callout>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
