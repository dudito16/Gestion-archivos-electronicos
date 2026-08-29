import { ScrollReveal } from "../../../../components/common/ScrollReveal";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { metadataTypes } from "../week04.data";

const type = metadataTypes.find((t) => t.id === "preservacion")!;

export function PreservationSection() {
  return (
    <section id="preservacion" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Tipo 4 de 4" title="Metadatos de preservación" description={type.question} />

      <ScrollReveal>
        <div className="flex flex-wrap gap-xs">
          {type.examples.map((ex) => (
            <span key={ex} className="rounded-full border border-outline-variant bg-surface-container-low px-3 py-1.5 text-label-md font-label-md text-on-surface">
              {ex}
            </span>
          ))}
        </div>
      </ScrollReveal>

      <Callout variant="info" title="PREMIS será estudiado posteriormente">
        Esta semana solo introduce el concepto de metadatos de preservación; el estándar PREMIS se desarrolla en la
        Semana 13.
      </Callout>
    </section>
  );
}
