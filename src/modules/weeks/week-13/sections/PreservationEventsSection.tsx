import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { preservationEventDefinition, preservationEventFields, preservationEventVsFile, preservationEvents } from "../week13.data";

export function PreservationEventsSection() {
  return (
    <section id="eventos-preservacion" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Eventos de preservación" title="Documentar lo que le ocurre a un objeto digital" description={preservationEventDefinition} />

      <p className="text-body-md font-body-md text-on-surface max-w-3xl">{preservationEventFields}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-xs">
        {preservationEvents.map((ev) => (
          <div key={ev.id} className="rounded-lg border border-outline-variant bg-surface-container-lowest p-md space-y-1">
            <p className="text-label-md font-label-md font-bold text-on-surface">{ev.label}</p>
            <p className="text-caption font-caption text-on-surface-variant">{ev.description}</p>
            <code className="text-caption font-caption text-primary-container">{ev.premisField}</code>
          </div>
        ))}
      </div>

      <Callout variant="info" title="El evento no es el archivo">
        {preservationEventVsFile}
      </Callout>
    </section>
  );
}
