import { useState } from "react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { cn } from "../../../../utils/cn";
import {
  premisDefinition,
  premisEntities,
  premisEntitiesRelation,
  premisEventExamples,
  premisSoftwareDisclaimer,
} from "../week13.data";

export function PremisSection() {
  const [activeId, setActiveId] = useState(premisEntities[0].id);
  const active = premisEntities.find((e) => e.id === activeId)!;

  return (
    <section id="premis" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="PREMIS 3.0" title="Un vocabulario para registrar la preservación" description={premisDefinition} />

      <div className="flex gap-xs flex-wrap">
        {premisEntities.map((e) => (
          <button
            key={e.id}
            type="button"
            onClick={() => setActiveId(e.id)}
            className={cn(
              "rounded-full border-2 px-4 py-2 text-label-md font-label-md font-semibold transition-colors",
              activeId === e.id ? "border-primary-container bg-secondary-container text-on-secondary-container" : "border-outline-variant bg-surface-container-lowest text-on-surface hover:border-primary-container",
            )}
          >
            {e.label}
          </button>
        ))}
      </div>

      <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg space-y-md">
        <p className="text-caption font-caption font-semibold uppercase tracking-wider text-primary-container">{active.englishName}</p>
        <p className="text-body-lg font-body-lg text-on-surface">{active.definition}</p>

        <div>
          <p className="text-label-md font-label-md font-bold text-primary-container mb-1">Información que registra</p>
          <p className="text-body-md font-body-md text-on-surface-variant">{active.managedInfo}</p>
        </div>

        <div className="rounded-lg bg-secondary-container/30 p-md">
          <p className="text-label-md font-label-md font-bold text-on-surface mb-1">Ejemplo</p>
          <p className="text-body-md font-body-md text-on-surface">{active.example}</p>
        </div>
      </div>

      <Callout variant="info" title="Cómo se relacionan entre sí">
        {premisEntitiesRelation}
      </Callout>

      <div>
        <p className="text-body-lg font-body-lg font-semibold text-on-surface mb-sm">Ejemplos de eventos de preservación</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-xs">
          {premisEventExamples.map((ev) => (
            <div key={ev.id} className="rounded-lg border border-outline-variant bg-surface-container-low p-md">
              <p className="text-label-md font-label-md font-bold text-on-surface">{ev.label}</p>
              <p className="text-caption font-caption text-on-surface-variant">{ev.description}</p>
            </div>
          ))}
        </div>
      </div>

      <Callout variant="warning" title="PREMIS no ejecuta la preservación por sí solo">
        {premisSoftwareDisclaimer}
      </Callout>
    </section>
  );
}
