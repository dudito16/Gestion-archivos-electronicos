import { ScrollReveal } from "../../../../components/common/ScrollReveal";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { requirements } from "../week05.data";

const req = requirements.find((r) => r.id === "autenticidad")!;

export function AuthenticitySection() {
  return (
    <section id="autenticidad" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Requisito 1 de 4" title="Autenticidad" description={req.question} />
      <ScrollReveal>
        <p className="text-body-lg font-body-lg text-on-surface max-w-2xl">{req.definition}</p>
      </ScrollReveal>
      <Callout variant="info" title="Ejemplo">
        {req.example}
      </Callout>
    </section>
  );
}
