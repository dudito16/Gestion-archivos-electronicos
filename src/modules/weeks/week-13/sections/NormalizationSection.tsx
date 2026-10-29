import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { FlowChain } from "../../../../components/common/FlowChain";
import { normalizationCase, normalizationDefinition, normalizationSteps, normalizationWarning } from "../week13.data";

export function NormalizationSection() {
  return (
    <section id="normalizacion-formatos" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Normalización de formatos" title="Transformar con evaluación y control, no automáticamente" description={normalizationDefinition} />

      <FlowChain steps={normalizationSteps} />

      <div className="rounded-lg bg-secondary-container/30 p-md">
        <p className="text-label-md font-label-md font-bold text-on-surface mb-1">Caso didáctico</p>
        <p className="text-body-md font-body-md text-on-surface">{normalizationCase}</p>
      </div>

      <Callout variant="warning" title="No es una acción automática ni uniforme">
        {normalizationWarning}
      </Callout>
    </section>
  );
}
