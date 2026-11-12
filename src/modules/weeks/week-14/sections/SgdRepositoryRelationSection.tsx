import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { FlowChain } from "../../../../components/common/FlowChain";
import {
  repositoryDefinitionModule6,
  sgdDefinitionModule6,
  sgdRepositoryComplementarity,
  sgdToRepositoryFlow,
  transferCriteria,
  week13ApplicationNote,
} from "../week14.data";

export function SgdRepositoryRelationSection() {
  return (
    <section id="relacion-sgd-repositorio" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Módulo 6" title="Relación entre el SGD y el repositorio de preservación" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-sm">
        <div className="rounded-xl border-2 border-primary-container bg-secondary-container/20 p-md">
          <p className="text-label-md font-label-md font-bold text-on-surface mb-1">SGD</p>
          <p className="text-body-md font-body-md text-on-surface">{sgdDefinitionModule6}</p>
        </div>
        <div className="rounded-xl border border-outline-variant bg-surface-container-low p-md">
          <p className="text-label-md font-label-md font-bold text-on-surface mb-1">Repositorio de preservación</p>
          <p className="text-body-md font-body-md text-on-surface">{repositoryDefinitionModule6}</p>
        </div>
      </div>

      <Callout variant="info" title="Se complementan, no se sustituyen">
        {sgdRepositoryComplementarity}
      </Callout>

      <div>
        <p className="text-body-lg font-body-lg font-semibold text-on-surface mb-sm">Flujo conceptual de transferencia</p>
        <FlowChain steps={sgdToRepositoryFlow} />
      </div>

      <div>
        <p className="text-body-lg font-body-lg font-semibold text-on-surface mb-sm">Criterios para transferir</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-xs">
          {transferCriteria.map((c) => (
            <div key={c.id} className="flex items-center justify-between gap-xs rounded-lg border border-outline-variant bg-surface-container-low p-md">
              <span className="text-body-md font-body-md text-on-surface">{c.label}</span>
              {c.relatedStandard && (
                <span className="rounded-full bg-secondary-container/40 px-2 py-0.5 text-caption font-caption font-semibold text-on-secondary-container shrink-0">
                  {c.relatedStandard}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <Callout variant="warning" title="Aplicación, no repetición, de la Semana 13">
        {week13ApplicationNote}
      </Callout>
    </section>
  );
}
