import { ArrowDown } from "lucide-react";
import { ScrollReveal } from "../../../../components/common/ScrollReveal";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { foliationDocs } from "../week03.data";

export function FoliationSection() {
  return (
    <section id="foliacion" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Expediente · Foliación" title="Foliación electrónica / digital" />

      <ScrollReveal>
        <div className="flex flex-col items-center gap-sm">
          <p className="text-label-md font-label-md font-bold uppercase tracking-wider text-on-surface-variant">Expediente</p>
          <div className="flex flex-wrap justify-center gap-xs max-w-xl">
            {foliationDocs.map((doc) => (
              <span key={doc} className="rounded-lg border border-outline-variant bg-surface-container-low px-3 py-1.5 text-label-md font-label-md text-on-surface">
                {doc}
              </span>
            ))}
          </div>
          <ArrowDown className="text-outline" size={18} />
          <span className="rounded-lg bg-secondary-container px-4 py-2 text-label-md font-label-md font-bold text-on-secondary-container uppercase tracking-wider">
            Orden / Secuencia
          </span>
        </div>
      </ScrollReveal>

      <Callout variant="warning" title="Un concepto que exige prudencia">
        La foliación electrónica no debe entenderse simplemente como "poner números a archivos". La foliación y el
        ordenamiento deben analizarse según los criterios y reglas aplicables al tipo de expediente y sistema — no se
        presenta aquí una norma específica de foliación al no contar con esa fuente.
      </Callout>
    </section>
  );
}
