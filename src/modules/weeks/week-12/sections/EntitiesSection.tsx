import { useState } from "react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { cn } from "../../../../utils/cn";
import { externalActors, externalActorsClarification, oaisEntities } from "../week12.data";

export function EntitiesSection() {
  const [activeId, setActiveId] = useState(oaisEntities[0].id);
  const active = oaisEntities.find((e) => e.id === activeId)!;

  return (
    <section id="entidades-funcionales" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="Entidades funcionales"
        title="Seis funciones, seis responsabilidades distintas"
        description="Selecciona cada entidad para repasar su definición, sus actividades, la información que gestiona y un ejemplo práctico."
      />

      <div className="flex gap-xs flex-wrap">
        {oaisEntities.map((e) => (
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
          <div>
            <p className="text-label-md font-label-md font-bold text-primary-container mb-1">Función principal</p>
            <p className="text-body-md font-body-md text-on-surface-variant">{active.mainFunction}</p>
          </div>
          <div>
            <p className="text-label-md font-label-md font-bold text-primary-container mb-1">Información que gestiona</p>
            <p className="text-body-md font-body-md text-on-surface-variant">{active.managedInfo}</p>
          </div>
          <div>
            <p className="text-label-md font-label-md font-bold text-tertiary mb-1">Actividades</p>
            <ul className="space-y-1">
              {active.activities.map((a) => (
                <li key={a} className="text-caption font-caption text-on-surface-variant">• {a}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-label-md font-label-md font-bold text-on-surface mb-1">Relación con otras entidades</p>
            <p className="text-body-md font-body-md text-on-surface-variant">{active.relation}</p>
          </div>
        </div>

        <div className="rounded-lg bg-secondary-container/30 p-md">
          <p className="text-label-md font-label-md font-bold text-on-surface mb-1">Ejemplo práctico</p>
          <p className="text-body-md font-body-md text-on-surface">{active.example}</p>
        </div>

        <div className="rounded-lg border-l-4 border-error bg-error-container/20 p-md">
          <p className="text-label-md font-label-md font-bold text-on-surface mb-1">Consecuencia de una gestión deficiente</p>
          <p className="text-body-md font-body-md text-on-surface">{active.poorManagementConsequence}</p>
        </div>
      </div>

      <div>
        <p className="text-body-lg font-body-lg font-semibold text-on-surface mb-sm">Actores externos</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-sm">
          {externalActors.map((actor) => (
            <div key={actor.id} className="rounded-lg border border-outline-variant bg-surface-container-low p-md">
              <p className="text-label-md font-label-md font-bold text-on-surface mb-1">{actor.label}</p>
              <p className="text-caption font-caption text-on-surface-variant">{actor.description}</p>
            </div>
          ))}
        </div>
      </div>

      <Callout variant="info" title="No son entidades funcionales internas">
        {externalActorsClarification}
      </Callout>
    </section>
  );
}
