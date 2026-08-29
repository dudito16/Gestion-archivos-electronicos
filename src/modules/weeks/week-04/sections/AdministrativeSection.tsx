import { ScrollReveal } from "../../../../components/common/ScrollReveal";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { metadataTypes } from "../week04.data";

const type = metadataTypes.find((t) => t.id === "administrativos")!;

export function AdministrativeSection() {
  return (
    <section id="administrativos" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Tipo 2 de 4" title="Metadatos administrativos" description={type.question} />

      <ScrollReveal>
        <div className="flex flex-wrap gap-xs">
          {type.examples.map((ex) => (
            <span key={ex} className="rounded-full border border-outline-variant bg-surface-container-low px-3 py-1.5 text-label-md font-label-md text-on-surface">
              {ex}
            </span>
          ))}
        </div>
      </ScrollReveal>

      <Callout variant="info" title="Sobre estos campos">
        Los campos concretos dependen de los requisitos institucionales.
      </Callout>
    </section>
  );
}
