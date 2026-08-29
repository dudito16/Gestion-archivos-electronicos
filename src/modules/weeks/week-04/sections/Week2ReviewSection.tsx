import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { cn } from "../../../../utils/cn";
import { reviewFields } from "../week04.data";

const categoryLabel: Record<string, string> = {
  descriptivos: "Descriptivo",
  administrativos: "Administrativo",
  estructurales: "Estructural",
  preservacion: "Preservación",
};

/**
 * Revisits, from the metadata lens, a set of fields the student may already have proposed
 * informally back in Week 2 while exploring the SGD's components.
 */
export function Week2ReviewSection() {
  const [revealed, setRevealed] = useState(false);

  return (
    <section id="repaso-semana-2" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="Repaso crítico"
        title="Volvamos sobre estos campos"
        description="En la Semana 2 exploramos qué campos podría necesitar un documento dentro de un SGD. Ahora los revisamos con la mirada de esta semana."
      />

      <div className="flex flex-wrap gap-xs">
        {reviewFields.map((f) => (
          <span key={f.id} className="rounded-full border border-outline-variant bg-surface-container-low px-3 py-1.5 text-label-md font-label-md text-on-surface">
            {f.label}
          </span>
        ))}
      </div>

      <div className="text-center">
        {!revealed ? (
          <button
            type="button"
            onClick={() => setRevealed(true)}
            className="text-body-lg font-body-lg font-semibold text-primary-container underline underline-offset-4 hover:text-primary"
          >
            ¿Todos estos campos tienen la misma función?
          </button>
        ) : null}
      </div>

      <AnimatePresence>
        {revealed && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="space-y-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-xs">
              {reviewFields.map((f) => (
                <div key={f.id} className="flex items-center justify-between rounded-lg border border-outline-variant bg-surface-container-lowest px-md py-sm">
                  <span className="text-label-md font-label-md text-on-surface">{f.label}</span>
                  <span
                    className={cn(
                      "rounded-full px-2 py-0.5 text-caption font-caption font-semibold",
                      f.category === "descriptivos" && "bg-secondary-container text-on-secondary-container",
                      f.category === "administrativos" && "bg-tertiary-fixed text-on-tertiary-fixed",
                      f.category === "estructurales" && "bg-primary-container text-on-primary",
                    )}
                  >
                    {categoryLabel[f.category]}
                  </span>
                </div>
              ))}
            </div>
            <Callout variant="info" title="No, no todos cumplen la misma función">
              Cada campo responde a una necesidad distinta: identificar y describir (descriptivo), controlar y dar
              seguimiento (administrativo), o representar relaciones (estructural).
            </Callout>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
