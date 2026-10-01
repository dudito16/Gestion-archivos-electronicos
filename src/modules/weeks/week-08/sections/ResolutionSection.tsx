import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { resolutionComparisonGood, resolutionComparisonLow, resolutionExplanation, resolutionNoUniversalRule } from "../week08.data";

export function ResolutionSection() {
  return (
    <section id="resolucion" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Resolución" title="DPI/PPI: cuánto detalle captura una imagen digitalizada" />

      <p className="text-body-md font-body-md text-on-surface max-w-3xl">{resolutionExplanation}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-sm">
        <div className="rounded-lg border border-error/60 bg-error-container/20 p-md">
          <p className="text-label-md font-label-md font-bold text-on-error-container mb-1">{resolutionComparisonLow.label}</p>
          <p className="text-body-md font-body-md text-on-error-container">{resolutionComparisonLow.description}</p>
        </div>
        <div className="rounded-lg border border-tertiary-fixed-dim/60 bg-tertiary-fixed/15 p-md">
          <p className="text-label-md font-label-md font-bold text-on-tertiary-fixed-variant mb-1">{resolutionComparisonGood.label}</p>
          <p className="text-body-md font-body-md text-on-tertiary-fixed-variant">{resolutionComparisonGood.description}</p>
        </div>
      </div>

      <Callout variant="info" title="No existe un único valor universal">
        {resolutionNoUniversalRule}
      </Callout>
    </section>
  );
}
