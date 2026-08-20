import { ScrollReveal } from "../../../../components/common/ScrollReveal";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { FlowChain } from "../../../../components/common/FlowChain";
import { issuanceData } from "../week03.data";

export function IssuanceSection() {
  return (
    <section id="emision" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Proceso 3 de 5" title="Emisión" description={issuanceData.intro} />

      <div className="flex flex-wrap gap-xs">
        {issuanceData.examples.map((ex) => (
          <span key={ex} className="rounded-full border border-outline-variant bg-surface-container-low px-3 py-1 text-label-md font-label-md text-on-surface">
            {ex}
          </span>
        ))}
      </div>

      <ScrollReveal>
        <FlowChain steps={issuanceData.flow} />
      </ScrollReveal>
    </section>
  );
}
