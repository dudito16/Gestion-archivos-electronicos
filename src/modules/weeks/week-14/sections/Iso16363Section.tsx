import { useState } from "react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { cn } from "../../../../utils/cn";
import {
  auditDefinition,
  auditEvidenceExamples,
  auditScopes,
  certificationDefinition,
  iso16363Definition,
  iso16363Purpose,
} from "../week14.data";

export function Iso16363Section() {
  const [activeId, setActiveId] = useState(auditScopes[0].id);
  const active = auditScopes.find((s) => s.id === activeId)!;

  return (
    <section id="iso-16363" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Módulo 3" title="ISO 16363:2025 — Auditoría y certificación" description={iso16363Definition} />

      <p className="text-body-md font-body-md text-on-surface max-w-3xl">{iso16363Purpose}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-sm">
        <div className="rounded-lg border border-outline-variant bg-surface-container-lowest p-md">
          <p className="text-label-md font-label-md font-bold text-primary-container mb-1">Auditoría</p>
          <p className="text-body-md font-body-md text-on-surface-variant">{auditDefinition}</p>
        </div>
        <div className="rounded-lg border border-outline-variant bg-surface-container-lowest p-md">
          <p className="text-label-md font-label-md font-bold text-primary-container mb-1">Certificación</p>
          <p className="text-body-md font-body-md text-on-surface-variant">{certificationDefinition}</p>
        </div>
      </div>

      <div>
        <p className="text-label-md font-label-md font-bold text-on-surface mb-sm">Ejemplos de evidencias que se revisan</p>
        <div className="flex flex-wrap gap-xs">
          {auditEvidenceExamples.map((ev) => (
            <span key={ev} className="rounded-full border border-outline-variant bg-surface-container-low px-3 py-1.5 text-caption font-caption text-on-surface">
              {ev}
            </span>
          ))}
        </div>
      </div>

      <div>
        <p className="text-body-lg font-body-lg font-semibold text-on-surface mb-sm">Tres ámbitos de evaluación</p>
        <div className="flex gap-xs flex-wrap">
          {auditScopes.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setActiveId(s.id)}
              className={cn(
                "rounded-full border-2 px-4 py-2 text-label-md font-label-md font-semibold transition-colors",
                activeId === s.id ? "border-primary-container bg-secondary-container text-on-secondary-container" : "border-outline-variant bg-surface-container-lowest text-on-surface hover:border-primary-container",
              )}
            >
              {s.letter}. {s.label}
            </button>
          ))}
        </div>

        <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg space-y-sm mt-sm">
          <p className="text-caption font-caption font-semibold uppercase tracking-wider text-primary-container">Ámbito {active.letter}</p>
          <p className="text-body-lg font-body-lg text-on-surface">{active.description}</p>
          <div className="flex flex-wrap gap-xs">
            {active.items.map((item) => (
              <span key={item} className="rounded-lg bg-secondary-container/30 px-3 py-1.5 text-caption font-caption text-on-surface">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <Callout variant="warning" title="No se afirma ninguna certificación por un ejercicio didáctico">
        Verifica siempre en el catálogo oficial de ISO la edición vigente y el detalle de los criterios de ISO
        16363:2025 antes de citarlos formalmente; este módulo no inventa numerales ni requisitos normativos. Completar
        las actividades de esta semana constituye una autoevaluación académica — nunca una auditoría formal ni una
        certificación de ningún repositorio real.
      </Callout>
    </section>
  );
}
