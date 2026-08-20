import { ScrollReveal } from "../../../../components/common/ScrollReveal";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { FlowChain } from "../../../../components/common/FlowChain";
import { Callout } from "../../../../components/common/Callout";
import { processesFlow } from "../week02.data";

export function ProcessesComponentSection() {
  return (
    <section id="procesos" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Componente · Procesos" title="Procesos" />

      <ScrollReveal>
        <FlowChain steps={processesFlow} />
      </ScrollReveal>

      <p className="text-body-lg font-body-lg text-on-surface text-center max-w-2xl mx-auto">
        El documento no está aislado. Forma parte de un proceso.
      </p>

      <Callout variant="info" title="Este es solo un adelanto">
        Cada uno de estos procesos —recepción, registro, derivación, atención y archivo— se desarrolla con mayor
        profundidad en la Semana 3.
      </Callout>
    </section>
  );
}
