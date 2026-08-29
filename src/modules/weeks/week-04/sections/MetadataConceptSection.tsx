import { Tags } from "lucide-react";
import { ScrollReveal } from "../../../../components/common/ScrollReveal";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { metadataConceptFull, metadataConceptShort } from "../week04.data";

export function MetadataConceptSection() {
  return (
    <section id="que-son-metadatos" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Concepto central" title="¿Qué son los metadatos?" />

      <Callout variant="info" title="Una primera aproximación">
        Suele decirse que un metadato es "{metadataConceptShort}". Esta idea es útil como punto de partida, pero
        insuficiente por sí sola.
      </Callout>

      <ScrollReveal>
        <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg shadow-sm flex items-start gap-sm">
          <Tags className="text-primary-container shrink-0 mt-1" size={24} />
          <p className="text-body-lg font-body-lg text-on-surface">{metadataConceptFull}</p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="flex flex-wrap items-center justify-center gap-sm text-center">
          <span className="rounded-lg border border-outline-variant bg-surface-container-low px-4 py-2 text-label-md font-label-md font-semibold text-on-surface">
            Documento
          </span>
          <span className="text-headline-md font-headline-md text-outline">+</span>
          <span className="rounded-lg border border-outline-variant bg-surface-container-low px-4 py-2 text-label-md font-label-md font-semibold text-on-surface">
            Información sobre el documento
          </span>
          <span className="text-headline-md font-headline-md text-outline">=</span>
          <span className="rounded-lg bg-secondary-container px-4 py-2 text-label-md font-label-md font-bold text-on-secondary-container uppercase tracking-wider">
            Contexto documental
          </span>
        </div>
      </ScrollReveal>
    </section>
  );
}
