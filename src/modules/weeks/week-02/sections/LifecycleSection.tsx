import { SectionHeading } from "../../../../components/common/SectionHeading";
import { VerticalTimeline } from "../../../../components/common/VerticalTimeline";
import { Callout } from "../../../../components/common/Callout";
import { lifecycleSteps } from "../week02.data";

export function LifecycleSection() {
  return (
    <section id="ciclo-vida" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Ciclo de vida" title="Ciclo de vida del documento electrónico" />

      <VerticalTimeline steps={lifecycleSteps} />

      <Callout variant="warning" title="Importante">
        El SGD puede apoyar distintas etapas del ciclo de vida documental, pero el ciclo de vida archivístico no debe
        confundirse con los estados internos de una aplicación.
      </Callout>
    </section>
  );
}
