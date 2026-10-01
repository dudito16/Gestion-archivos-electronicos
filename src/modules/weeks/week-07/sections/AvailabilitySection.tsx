import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { SingleChoiceCheck } from "../../../../components/common/SingleChoiceCheck";
import { attributes, availabilityCase, availabilityOptions } from "../week07.data";

const availability = attributes.find((a) => a.id === "disponibilidad")!;
const correct = availabilityOptions.find((o) => o.correct)!;

export function AvailabilitySection() {
  return (
    <section id="disponibilidad" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Disponibilidad" title={availability.definition} />

      <div>
        <p className="text-label-md font-label-md font-semibold text-on-surface mb-sm">Ejemplos</p>
        <div className="flex flex-wrap gap-xs">
          {availability.examples.map((example) => (
            <span key={example} className="rounded-full border border-outline-variant bg-surface-container-lowest px-3 py-1.5 text-label-md font-label-md text-on-surface">
              {example}
            </span>
          ))}
        </div>
      </div>

      <Callout variant="warning" title="En una universidad">
        {availability.institutionalExample}
      </Callout>

      <div>
        <p className="text-body-lg font-body-lg font-semibold text-on-surface mb-sm">El sistema está caído</p>
        <SingleChoiceCheck
          prompt={availabilityCase}
          options={availabilityOptions.map((o) => ({ id: o.id, label: o.label }))}
          correctId={correct.id}
          feedback={correct.feedback}
        />
      </div>
    </section>
  );
}
