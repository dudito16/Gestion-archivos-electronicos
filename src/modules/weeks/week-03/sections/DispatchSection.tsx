import { ScrollReveal } from "../../../../components/common/ScrollReveal";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { FlowChain } from "../../../../components/common/FlowChain";
import { Callout } from "../../../../components/common/Callout";
import { dispatchData } from "../week03.data";

export function DispatchSection() {
  return (
    <section id="despacho" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Proceso 4 de 5" title="Despacho" description={dispatchData.intro} />

      <div className="flex flex-wrap gap-xs">
        {dispatchData.examples.map((ex) => (
          <span key={ex} className="rounded-full border border-outline-variant bg-surface-container-low px-3 py-1 text-label-md font-label-md text-on-surface">
            {ex}
          </span>
        ))}
      </div>

      <ScrollReveal>
        <FlowChain steps={dispatchData.flow} />
      </ScrollReveal>

      <Callout variant="warning" title="Sobre los canales institucionales">
        No debe asumirse que un canal específico es el utilizado por una institución si no está documentado; los
        ejemplos anteriores son conceptuales.
      </Callout>
    </section>
  );
}
