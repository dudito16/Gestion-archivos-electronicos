import { ScrollReveal } from "../../../../components/common/ScrollReveal";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { FlowChain } from "../../../../components/common/FlowChain";
import { documentFlow } from "../week05.data";

export function DocumentFlowSection() {
  return (
    <section id="flujo-documental" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="Síntesis"
        title="Flujo documental"
        description="Captura, registro y mantenimiento acompañan al documento durante todo su recorrido, sosteniendo sus cuatro requisitos hasta su disposición final."
      />
      <ScrollReveal>
        <FlowChain steps={documentFlow} />
      </ScrollReveal>
    </section>
  );
}
