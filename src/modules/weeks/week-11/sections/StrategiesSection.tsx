import { useState } from "react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { cn } from "../../../../utils/cn";
import { strategies } from "../week11.data";

export function StrategiesSection() {
  const [activeId, setActiveId] = useState(strategies[0].id);
  const active = strategies.find((s) => s.id === activeId)!;

  return (
    <section id="estrategias" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="Migración, normalización y emulación"
        title="Tres estrategias, propósitos distintos"
        description="Selecciona cada estrategia para repasar su definición, cuándo usarla, sus ventajas, riesgos y los controles que debe documentar."
      />

      <div className="flex gap-xs flex-wrap">
        {strategies.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setActiveId(s.id)}
            className={cn(
              "rounded-full border-2 px-4 py-2 text-label-md font-label-md font-semibold transition-colors",
              activeId === s.id ? "border-primary-container bg-secondary-container text-on-secondary-container" : "border-outline-variant bg-surface-container-lowest text-on-surface hover:border-primary-container",
            )}
          >
            {s.label}
          </button>
        ))}
      </div>

      <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg space-y-md">
        <p className="text-body-lg font-body-lg text-on-surface">{active.definition}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
          <div>
            <p className="text-label-md font-label-md font-bold text-primary-container mb-1">Objetivo</p>
            <p className="text-body-md font-body-md text-on-surface-variant">{active.objective}</p>
          </div>
          <div>
            <p className="text-label-md font-label-md font-bold text-primary-container mb-1">Cuándo se utiliza</p>
            <p className="text-body-md font-body-md text-on-surface-variant">{active.whenToUse}</p>
          </div>
          <div>
            <p className="text-label-md font-label-md font-bold text-tertiary mb-1">Ventajas</p>
            <ul className="space-y-1">
              {active.advantages.map((a) => (
                <li key={a} className="text-caption font-caption text-on-surface-variant">• {a}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-label-md font-label-md font-bold text-error mb-1">Riesgos o limitaciones</p>
            <ul className="space-y-1">
              {active.risks.map((r) => (
                <li key={r} className="text-caption font-caption text-on-surface-variant">• {r}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-lg bg-secondary-container/30 p-md">
          <p className="text-label-md font-label-md font-bold text-on-surface mb-1">Ejemplo archivístico</p>
          <p className="text-body-md font-body-md text-on-surface">{active.example}</p>
        </div>

        <div>
          <p className="text-label-md font-label-md font-bold text-on-surface mb-1">Controles a documentar</p>
          <ul className="space-y-1">
            {active.controls.map((c) => (
              <li key={c} className="text-caption font-caption text-on-surface-variant">• {c}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
