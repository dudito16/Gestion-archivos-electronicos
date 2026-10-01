import { useState } from "react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { MultiSelectCheck } from "../../../../components/common/MultiSelectCheck";
import { incidentCase, incidentIntro } from "../week07.data";

export function IncidentsSection() {
  const [answered, setAnswered] = useState(false);

  return (
    <section id="incidentes" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Gestión de incidentes" title="Un incidente documental no es solo un problema informático" description={incidentIntro} />

      <p className="rounded-lg border border-outline-variant bg-surface-container-low p-md text-body-md font-body-md text-on-surface italic">
        {incidentCase.scenario}
      </p>

      <p className="text-body-lg font-body-lg font-semibold text-on-surface">{incidentCase.prompt}</p>

      <MultiSelectCheck items={incidentCase.options} onComplete={() => setAnswered(true)} />

      {answered && (
        <Callout variant="info" title="Antes de corregir, conservar">
          {incidentCase.explanation}
        </Callout>
      )}
    </section>
  );
}
