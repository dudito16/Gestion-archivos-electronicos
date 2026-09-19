import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { orientationQuestions, presentationTopics, professorQuestions } from "../integrativeProject.data";

export function OrientacionYDefensaSection() {
  return (
    <section id="orientacion-y-defensa" className="scroll-mt-24 space-y-xl">
      <div className="space-y-lg">
        <SectionHeading eyebrow="Preguntas de orientación" title="Preguntas que deben hacerse durante la investigación" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
          {orientationQuestions.map((q, index) => (
            <p key={q} className="flex items-start gap-xs text-body-md font-body-md text-on-surface-variant">
              <span className="text-caption font-caption font-bold text-primary-container shrink-0">{index + 1}.</span>
              {q}
            </p>
          ))}
        </div>
      </div>

      <div className="space-y-lg">
        <SectionHeading eyebrow="Presentación del proyecto" title="Guía para la presentación final" description="Cada equipo deberá poder explicar:" />
        <div className="flex flex-wrap gap-xs">
          {presentationTopics.map((t, index) => (
            <span key={t} className="rounded-full border border-outline-variant bg-surface-container-lowest px-3 py-1.5 text-caption font-caption font-medium text-on-surface">
              {index + 1}. {t}
            </span>
          ))}
        </div>
        <Callout variant="info" title="No solo diapositivas">
          No se exige una presentación basada exclusivamente en diapositivas. El equipo debe poder defender sus
          decisiones mostrando las evidencias.
        </Callout>
      </div>

      <div className="space-y-lg">
        <SectionHeading eyebrow="Preparar la defensa" title="Preguntas que el docente podría hacer" />
        <div className="space-y-xs">
          {professorQuestions.map((q) => (
            <p key={q} className="rounded-lg border border-outline-variant bg-surface-container-low p-sm text-body-md font-body-md text-on-surface italic">
              "{q}"
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
