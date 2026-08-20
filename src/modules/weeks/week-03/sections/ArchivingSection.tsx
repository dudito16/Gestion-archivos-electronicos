import { ScrollReveal } from "../../../../components/common/ScrollReveal";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { FlowChain } from "../../../../components/common/FlowChain";
import { archivingFlow } from "../week03.data";

export function ArchivingSection() {
  return (
    <section id="archivo" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="Proceso 5 de 5"
        title="Archivo"
        description="El archivo constituye una etapa de gestión que permite mantener los documentos y expedientes organizados y controlados conforme a las reglas y criterios archivísticos aplicables."
      />

      <ScrollReveal>
        <FlowChain steps={archivingFlow} />
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg flex flex-wrap items-center justify-center gap-sm text-center">
          <span className="rounded-full border border-outline-variant px-4 py-2 text-label-md font-label-md text-on-surface-variant">
            Mover archivo
          </span>
          <span className="text-headline-md font-headline-md text-error">≠</span>
          <span className="rounded-full bg-secondary-container px-4 py-2 text-label-md font-label-md font-semibold text-on-secondary-container">
            Gestionar archivísticamente
          </span>
        </div>
      </ScrollReveal>
    </section>
  );
}
