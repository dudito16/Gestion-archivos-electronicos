import { ScrollReveal } from "../../../../components/common/ScrollReveal";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { FlowChain } from "../../../../components/common/FlowChain";
import { problemFlow, problemIntro } from "../week05.data";

export function ProblemSection() {
  return (
    <section id="problema" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Punto de partida" title="¿Qué problema resuelve ISO 15489-1:2016?" />

      <ScrollReveal>
        <p className="text-body-lg font-body-lg text-on-surface max-w-2xl">{problemIntro}</p>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <FlowChain steps={problemFlow} />
      </ScrollReveal>
    </section>
  );
}
