import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { ScrollReveal } from "../../../../components/common/ScrollReveal";
import { ZigzagFlow } from "../../../../components/common/ZigzagFlow";
import { Callout } from "../../../../components/common/Callout";
import { cn } from "../../../../utils/cn";
import { integratorCaseFlow, integratorConcepts } from "../week03.data";

export function IntegratorCaseSection() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = integratorConcepts.find((c) => c.id === activeId);

  return (
    <section id="caso-integrador" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="Caso integrador"
        title="Una solicitud, de principio a fin"
        description="Una entidad recibe una solicitud de un ciudadano. El documento es registrado en el SGD. Posteriormente se deriva a una unidad responsable. El especialista genera un informe. Se emite un documento de respuesta y se despacha al destinatario. Finalmente, el expediente debe quedar organizado y controlado."
      />

      <ScrollReveal>
        <ZigzagFlow steps={integratorCaseFlow} perRow={5} />
      </ScrollReveal>

      <div className="space-y-sm">
        <p className="text-body-lg font-body-lg text-on-surface text-center">
          ¿Dónde intervienen clasificación, organización, ordenamiento y descripción?
        </p>
        <div className="flex flex-wrap justify-center gap-xs">
          {integratorConcepts.map((concept) => (
            <button
              key={concept.id}
              type="button"
              onClick={() => setActiveId((current) => (current === concept.id ? null : concept.id))}
              className={cn(
                "rounded-full border px-4 py-2 text-label-md font-label-md font-semibold transition-colors",
                activeId === concept.id
                  ? "border-primary-container bg-secondary-container text-on-secondary-container"
                  : "border-outline-variant bg-surface-container-lowest text-on-surface hover:border-primary-container",
              )}
            >
              {concept.label}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {active && (
          <motion.div key={active.id} initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
            <Callout variant="info" title={active.label}>
              {active.explanation}
            </Callout>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
