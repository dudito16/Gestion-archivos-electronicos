import { Workflow } from "lucide-react";
import { ScrollReveal } from "../../../../components/common/ScrollReveal";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { FlowChain } from "../../../../components/common/FlowChain";
import { Callout } from "../../../../components/common/Callout";
import { processDefinition, processDefinitionFlow } from "../week03.data";

export function ProcessDefinitionSection() {
  return (
    <section id="proceso-documental" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Concepto central" title="¿Qué es un proceso documental?" />

      <ScrollReveal>
        <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg shadow-sm flex items-start gap-sm">
          <Workflow className="text-primary-container shrink-0 mt-1" size={24} />
          <p className="text-body-lg font-body-lg text-on-surface">{processDefinition}</p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <FlowChain steps={processDefinitionFlow} />
      </ScrollReveal>

      <Callout variant="info" title="Contexto institucional">
        El proceso documental debe entenderse en relación con las funciones y procedimientos de la organización.
      </Callout>
    </section>
  );
}
