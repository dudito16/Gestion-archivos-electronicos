import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { FlowChain } from "../../../../components/common/FlowChain";
import { oaisFlow, oaisFlowDisclaimer, oaisFlowSupportNote } from "../week12.data";

export function OaisFlowSection() {
  return (
    <section id="flujo-oais" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Flujo de funcionamiento OAIS" title="De la producción al acceso" />

      <FlowChain steps={oaisFlow} />

      <Callout variant="info" title="Administración y Planificación: soporte continuo, no etapas lineales">
        {oaisFlowSupportNote}
      </Callout>

      <Callout variant="warning" title="Un flujo conceptual">
        {oaisFlowDisclaimer}
      </Callout>
    </section>
  );
}
