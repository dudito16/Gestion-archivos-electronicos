import { ScrollReveal } from "../../../../components/common/ScrollReveal";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { metadataTypes } from "../week04.data";

const type = metadataTypes.find((t) => t.id === "descriptivos")!;

export function DescriptiveSection() {
  return (
    <section id="descriptivos" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Tipo 1 de 4" title="Metadatos descriptivos" description={type.question} />

      <ScrollReveal>
        <div className="flex flex-wrap gap-xs">
          {type.examples.map((ex) => (
            <span key={ex} className="rounded-full border border-outline-variant bg-surface-container-low px-3 py-1.5 text-label-md font-label-md text-on-surface">
              {ex}
            </span>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg grid grid-cols-1 sm:grid-cols-3 gap-md">
          <div>
            <p className="text-caption font-caption font-bold uppercase tracking-wider text-on-surface-variant">Título</p>
            <p className="text-body-md font-body-md text-on-surface mt-1">Informe técnico</p>
          </div>
          <div>
            <p className="text-caption font-caption font-bold uppercase tracking-wider text-on-surface-variant">Tipo documental</p>
            <p className="text-body-md font-body-md text-on-surface mt-1">Informe</p>
          </div>
          <div>
            <p className="text-caption font-caption font-bold uppercase tracking-wider text-on-surface-variant">Asunto</p>
            <p className="text-body-md font-body-md text-on-surface mt-1">Digitalización documental</p>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
