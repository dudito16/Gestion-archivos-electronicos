import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { FlowChain } from "../../../../components/common/FlowChain";
import { comparisonModels, repositoryOaisClarification, transferCriteria, transferExample } from "../week12.data";

export function RelationSection() {
  return (
    <section id="relacion-oais-sgd-repositorio" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Relación OAIS–SGD–repositorio" title="Cuatro conceptos que no deben confundirse" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-sm">
        {comparisonModels.map((model) => (
          <div key={model.id} className="rounded-lg border border-outline-variant bg-surface-container-lowest p-md">
            <p className="text-label-md font-label-md font-bold text-primary-container mb-1">{model.label}</p>
            <p className="text-caption font-caption text-on-surface-variant">{model.description}</p>
          </div>
        ))}
      </div>

      <Callout variant="warning" title="Un repositorio no implementa OAIS automáticamente">
        {repositoryOaisClarification}
      </Callout>

      <div>
        <p className="text-body-lg font-body-lg font-semibold text-on-surface mb-sm">Ejemplo de transferencia conceptual</p>
        <FlowChain steps={transferExample} />
      </div>

      <p className="text-body-md font-body-md text-on-surface max-w-3xl">{transferCriteria}</p>
    </section>
  );
}
