import { ScrollReveal } from "../../../../components/common/ScrollReveal";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { FlowChain } from "../../../../components/common/FlowChain";
import { scenarioWithSGD, scenarioWithoutSGD } from "../week02.data";

export function ExampleScenariosSection() {
  return (
    <section id="ejemplo" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="En la práctica" title="El mismo trámite, con y sin SGD" />

      <ScrollReveal>
        <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg space-y-sm">
          <p className="text-label-md font-label-md font-bold uppercase tracking-wider text-on-surface-variant">
            Escenario A · Sin SGD
          </p>
          <FlowChain steps={scenarioWithoutSGD} />
          <p className="text-body-md font-body-md text-error font-medium">Información fragmentada.</p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="rounded-xl border border-primary-container/50 bg-secondary-container/20 p-lg space-y-sm">
          <p className="text-label-md font-label-md font-bold uppercase tracking-wider text-primary-container">
            Escenario B · Con SGD
          </p>
          <FlowChain steps={scenarioWithSGD} />
          <p className="text-body-md font-body-md text-tertiary font-medium">Proceso gestionado.</p>
        </div>
      </ScrollReveal>
    </section>
  );
}
