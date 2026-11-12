import { useState } from "react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { Button } from "../../../../components/ui/button";
import { getIcon } from "../../../../utils/getIcon";
import { cn } from "../../../../utils/cn";
import { architectureComponents, architectureIntro, sameBuildingRiskExample, storageStrategies } from "../week14.data";

export function ArchitectureStorageSection() {
  const [activeId, setActiveId] = useState(architectureComponents[0].id);
  const active = architectureComponents.find((c) => c.id === activeId)!;
  const ActiveIcon = getIcon(active.icon);
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <section id="arquitectura-almacenamiento" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Módulo 4" title="Arquitectura y almacenamiento" description={architectureIntro} />

      <div className="flex gap-xs flex-wrap">
        {architectureComponents.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => setActiveId(c.id)}
            className={cn(
              "flex items-center gap-1 rounded-full border-2 px-3 py-1.5 text-caption font-caption font-semibold transition-colors",
              activeId === c.id ? "border-primary-container bg-secondary-container text-on-secondary-container" : "border-outline-variant bg-surface-container-lowest text-on-surface hover:border-primary-container",
            )}
          >
            <span className="rounded-full bg-surface-container-low px-1.5 text-on-surface-variant">{c.order}</span>
            {c.label}
          </button>
        ))}
      </div>

      <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg space-y-md">
        <div className="flex items-center gap-xs">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary-container text-on-secondary-container shrink-0">
            <ActiveIcon size={20} />
          </div>
          <p className="text-headline-md font-headline-md text-on-surface">{active.label}</p>
        </div>
        <p className="text-body-lg font-body-lg text-on-surface">{active.does}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-sm">
          <div>
            <p className="text-label-md font-label-md font-bold text-primary-container mb-1">Recibe</p>
            <p className="text-caption font-caption text-on-surface-variant">{active.receives}</p>
          </div>
          <div>
            <p className="text-label-md font-label-md font-bold text-primary-container mb-1">Produce</p>
            <p className="text-caption font-caption text-on-surface-variant">{active.produces}</p>
          </div>
          <div>
            <p className="text-label-md font-label-md font-bold text-tertiary mb-1">Riesgo que controla</p>
            <p className="text-caption font-caption text-on-surface-variant">{active.risksControlled}</p>
          </div>
        </div>
      </div>

      <div>
        <p className="text-body-lg font-body-lg font-semibold text-on-surface mb-sm">Estrategias de almacenamiento</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-sm">
          {storageStrategies.map((s) => (
            <div key={s.id} className="rounded-lg border border-outline-variant bg-surface-container-low p-md">
              <p className="text-label-md font-label-md font-bold text-on-surface mb-1">{s.label}</p>
              <p className="text-caption font-caption text-on-surface-variant">{s.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg space-y-sm">
        <p className="text-body-md font-body-md text-on-surface">{sameBuildingRiskExample.scenario}</p>
        <p className="text-body-lg font-body-lg font-semibold text-on-surface">{sameBuildingRiskExample.question}</p>
        {!showAnswer ? (
          <Button size="sm" onClick={() => setShowAnswer(true)}>
            Ver explicación
          </Button>
        ) : (
          <Callout variant="warning" title="Dos copias en el mismo edificio no son redundancia real">
            {sameBuildingRiskExample.explanation}
          </Callout>
        )}
      </div>
    </section>
  );
}
