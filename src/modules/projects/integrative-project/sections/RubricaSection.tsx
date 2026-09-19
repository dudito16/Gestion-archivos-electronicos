import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { RUBRIC_MAX_SCORE, rubricCriteria, rubricLevels } from "../integrativeProject.data";

const totalPoints = rubricCriteria.reduce((sum, c) => sum + c.points, 0);

export function RubricaSection() {
  return (
    <section id="rubrica" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="Rúbrica"
        title="¿Cómo se evaluará el proyecto?"
        description={
          <>
            La calificación máxima del proyecto es de <strong>{RUBRIC_MAX_SCORE} puntos</strong>.
            <br />
            <br />
            La evaluación se centrará en la calidad de la investigación, el uso de evidencias, la capacidad de
            análisis, la aplicación de los contenidos de las Semanas 1 a 6 y la pertinencia de la propuesta de
            mejora.
            <br />
            <br />
            La cantidad de páginas no determina la calificación.
          </>
        }
      />

      <div className="space-y-xs">
        {rubricCriteria.map((c, index) => (
          <div key={c.id} className="rounded-lg border border-outline-variant bg-surface-container-lowest p-md flex items-start gap-sm">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-container text-on-primary font-bold">{index + 1}</span>
            <div className="flex-1">
              <div className="flex items-center justify-between gap-sm flex-wrap">
                <p className="text-body-md font-body-md font-semibold text-on-surface">{c.label}</p>
                <span className="rounded-full bg-secondary-container text-on-secondary-container px-3 py-1 text-caption font-caption font-bold shrink-0">{c.points} pts</span>
              </div>
              <p className="text-caption font-caption text-on-surface-variant mt-0.5">{c.description}</p>
            </div>
          </div>
        ))}
        <div className="flex items-center justify-between rounded-lg bg-primary-container text-on-primary px-md py-sm font-label-md font-bold">
          <span>NOTA MÁXIMA</span>
          <span>{totalPoints} puntos</span>
        </div>
      </div>

      <div>
        <p className="text-label-md font-label-md font-semibold text-on-surface mb-sm">Niveles de desempeño</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-sm">
          {rubricLevels.map((level) => (
            <div key={level.id} className="rounded-lg border border-outline-variant bg-surface-container-low p-md">
              <p className="text-label-md font-label-md font-bold text-on-surface">{level.label}</p>
              <p className="text-caption font-caption text-primary-container font-semibold">{level.range} pts</p>
              <p className="text-caption font-caption text-on-surface-variant mt-1">{level.description}</p>
            </div>
          ))}
        </div>
      </div>

      <Callout variant="warning" title="Nota sobre la calificación">
        La nota máxima de este proyecto es de {RUBRIC_MAX_SCORE} puntos. Los diez criterios anteriores suman
        directamente {totalPoints} puntos: no se trata de una rúbrica de 100 puntos convertida a la escala vigesimal.
      </Callout>
    </section>
  );
}
