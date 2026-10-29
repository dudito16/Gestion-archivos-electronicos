import { useState } from "react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { cn } from "../../../../utils/cn";
import { aipClarification, dipClarification, informationPackages } from "../week12.data";

export function PackagesSection() {
  const [activeId, setActiveId] = useState(informationPackages[0].id);
  const active = informationPackages.find((p) => p.id === activeId)!;

  return (
    <section id="paquetes-informacion" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="Paquetes de información"
        title="SIP, AIP y DIP: tres momentos, tres paquetes distintos"
        description="Esta sección corresponde directamente al indicador de logro de la semana."
      />

      <div className="flex gap-xs flex-wrap">
        {informationPackages.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => setActiveId(p.id)}
            className={cn(
              "rounded-full border-2 px-4 py-2 text-label-md font-label-md font-semibold transition-colors uppercase",
              activeId === p.id ? "border-primary-container bg-secondary-container text-on-secondary-container" : "border-outline-variant bg-surface-container-lowest text-on-surface hover:border-primary-container",
            )}
          >
            {p.acronym}
          </button>
        ))}
      </div>

      <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg space-y-md">
        <p className="text-caption font-caption font-semibold uppercase tracking-wider text-primary-container">{active.fullName}</p>
        <p className="text-body-lg font-body-lg text-on-surface">{active.definition}</p>

        <div>
          <p className="text-label-md font-label-md font-bold text-primary-container mb-1">Finalidad</p>
          <p className="text-body-md font-body-md text-on-surface-variant">{active.purpose}</p>
        </div>

        <div>
          <p className="text-label-md font-label-md font-bold text-tertiary mb-1">Elementos</p>
          <ul className="space-y-1">
            {active.elements.map((el) => (
              <li key={el} className="text-caption font-caption text-on-surface-variant">• {el}</li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-label-md font-label-md font-bold text-on-surface mb-1">Relación con actores y funciones</p>
          <p className="text-body-md font-body-md text-on-surface-variant">{active.relation}</p>
        </div>

        <div className="rounded-lg bg-secondary-container/30 p-md">
          <p className="text-label-md font-label-md font-bold text-on-surface mb-1">Ejemplo</p>
          <p className="text-body-md font-body-md text-on-surface">{active.example}</p>
        </div>

        {active.id === "aip" && (
          <Callout variant="warning" title="El AIP no es una simple copia">
            {aipClarification}
          </Callout>
        )}
        {active.id === "dip" && (
          <Callout variant="warning" title="El DIP puede diferir del AIP">
            {dipClarification}
          </Callout>
        )}
      </div>
    </section>
  );
}
