import { useState } from "react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { professionalCaseData } from "../week01.data";

/** Open-ended professional case (no single graded answer) — the learner drafts a reasoned response and self-checks it against the rubric. */
export function ProfessionalCaseSection() {
  const [response, setResponse] = useState("");

  return (
    <section id="caso-profesional" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="Actividad profesional"
        title="Caso: 10 000 archivos PDF"
        description="Un ejercicio de análisis, no de memorización. Elabora una respuesta argumentada."
      />

      <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg space-y-lg">
        <p className="text-body-lg font-body-lg text-on-surface whitespace-pre-line">{professionalCaseData.scenario}</p>

        <Callout variant="info" title={professionalCaseData.question}>
          Debes identificar: {professionalCaseData.mustIdentify.join(" · ")}.
        </Callout>

        <div>
          <label htmlFor="professional-case-response" className="text-label-md font-label-md font-semibold text-on-surface mb-xs block">
            Tu respuesta argumentada
          </label>
          <textarea
            id="professional-case-response"
            value={response}
            onChange={(event) => setResponse(event.target.value)}
            rows={6}
            placeholder="Redacta aquí tu análisis del caso…"
            className="w-full rounded-lg border border-outline-variant bg-surface-container-low p-sm text-body-md font-body-md text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container"
          />
        </div>

        <div>
          <p className="text-label-md font-label-md font-semibold text-on-surface mb-sm">Rúbrica de autoevaluación</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-sm">
            {professionalCaseData.rubric.map((item) => (
              <div key={item.criterion} className="rounded-lg border border-outline-variant bg-surface-container-low p-sm text-center">
                <p className="text-headline-md font-headline-md text-primary-container">{item.weight}%</p>
                <p className="text-caption font-caption text-on-surface-variant mt-1">{item.criterion}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
