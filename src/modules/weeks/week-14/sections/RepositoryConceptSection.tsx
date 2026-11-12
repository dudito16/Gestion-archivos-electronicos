import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Badge } from "../../../../components/ui/badge";
import { Callout } from "../../../../components/common/Callout";
import { SingleChoiceCheck } from "../../../../components/common/SingleChoiceCheck";
import {
  backupVsRepositoryDistinction,
  institutionalExampleModule1,
  module1ParticipationQuestion,
  repositoryConceptDefinition,
  storageTiers,
  storageVsPreservationDistinction,
  whyNotEnoughExplanation,
} from "../week14.data";

export function RepositoryConceptSection() {
  return (
    <section id="repositorios-confiables" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Módulo 1" title="¿Qué es un repositorio digital confiable?" description={repositoryConceptDefinition} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-sm">
        {storageTiers.map((tier, i) => (
          <div
            key={tier.id}
            className={
              i === storageTiers.length - 1
                ? "rounded-xl border-2 border-primary-container bg-secondary-container/20 p-md"
                : "rounded-xl border border-outline-variant bg-surface-container-lowest p-md"
            }
          >
            <p className="text-label-md font-label-md font-bold text-on-surface mb-1 uppercase">{tier.label}</p>
            <p className="text-caption font-caption text-on-surface-variant">{tier.description}</p>
          </div>
        ))}
      </div>

      <p className="text-body-md font-body-md text-on-surface max-w-3xl">{storageVsPreservationDistinction}</p>
      <p className="text-body-md font-body-md text-on-surface max-w-3xl">{backupVsRepositoryDistinction}</p>

      <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg space-y-sm">
        <Badge variant="tertiary">Ejemplo institucional</Badge>
        <p className="text-body-md font-body-md text-on-surface">{institutionalExampleModule1}</p>
        <p className="text-body-md font-body-md text-on-surface-variant">{whyNotEnoughExplanation}</p>
      </div>

      <div>
        <p className="text-body-lg font-body-lg font-semibold text-on-surface mb-sm">Actividad de participación</p>
        <SingleChoiceCheck
          prompt={module1ParticipationQuestion.prompt}
          options={module1ParticipationQuestion.options}
          correctId={module1ParticipationQuestion.correctId}
          feedback={module1ParticipationQuestion.feedback}
        />
      </div>

      <Callout variant="info" title="Una responsabilidad, no solo un servidor">
        Las instituciones necesitan repositorios confiables porque la conservación de documentos electrónicos con valor
        probatorio, administrativo o histórico es una obligación que debe sostenerse en el tiempo, más allá de quién
        administre el servidor en un momento dado.
      </Callout>
    </section>
  );
}
