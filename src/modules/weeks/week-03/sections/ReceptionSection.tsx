import { ScrollReveal } from "../../../../components/common/ScrollReveal";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { FlowChain } from "../../../../components/common/FlowChain";
import { receptionData } from "../week03.data";

export function ReceptionSection() {
  return (
    <section id="recepcion" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Proceso 1 de 5" title="Recepción" description={receptionData.intro} />

      <div className="flex flex-wrap gap-xs">
        {receptionData.examples.map((ex) => (
          <span key={ex} className="rounded-full border border-outline-variant bg-surface-container-low px-3 py-1 text-label-md font-label-md text-on-surface">
            {ex}
          </span>
        ))}
      </div>

      <ScrollReveal>
        <FlowChain steps={receptionData.flow} />
      </ScrollReveal>
    </section>
  );
}
