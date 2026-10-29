import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import {
  metadataContentContextDistinction,
  metadataExpedienteExample,
  metadataIntro,
  metadataOaisRelation,
  metadataRisk,
  metadataTypes,
} from "../week13.data";

export function MetadataSection() {
  return (
    <section id="metadatos" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Metadatos de preservación" title="¿Qué información necesitamos registrar sobre un documento digital?" description={metadataIntro} />

      <p className="text-body-md font-body-md text-on-surface max-w-3xl">{metadataContentContextDistinction}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-sm">
        {metadataTypes.map((type) => (
          <div key={type.id} className="rounded-xl border border-outline-variant bg-surface-container-lowest p-md space-y-1.5">
            <p className="text-label-md font-label-md font-bold text-primary-container">{type.label}</p>
            <p className="text-body-md font-body-md text-on-surface-variant">{type.description}</p>
            <p className="text-caption font-caption text-on-surface italic">Ejemplo: {type.example}</p>
          </div>
        ))}
      </div>

      <div className="rounded-lg bg-secondary-container/30 p-md">
        <p className="text-label-md font-label-md font-bold text-on-surface mb-1">Ejemplo integrador</p>
        <p className="text-body-md font-body-md text-on-surface">{metadataExpedienteExample}</p>
      </div>

      <p className="text-body-md font-body-md text-on-surface max-w-3xl">{metadataOaisRelation}</p>

      <Callout variant="warning" title="El riesgo de conservar sin metadatos suficientes">
        {metadataRisk}
      </Callout>
    </section>
  );
}
