import { useState } from "react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { SingleChoiceCheck } from "../../../../components/common/SingleChoiceCheck";
import { getIcon } from "../../../../utils/getIcon";
import { cn } from "../../../../utils/cn";
import { hashChangeExample, reliabilityCharacteristics } from "../week14.data";

export function ReliabilityCharacteristicsSection() {
  const [activeId, setActiveId] = useState(reliabilityCharacteristics[0].id);
  const active = reliabilityCharacteristics.find((c) => c.id === activeId)!;
  const ActiveIcon = getIcon(active.icon);

  const correctChar = reliabilityCharacteristics.find((c) => c.id === hashChangeExample.correctCharacteristicId)!;
  const distractorChars = hashChangeExample.distractorCharacteristicIds.map((id) => reliabilityCharacteristics.find((c) => c.id === id)!);
  const hashQuestionOptions = [
    { id: distractorChars[0].id, label: distractorChars[0].label },
    { id: correctChar.id, label: correctChar.label },
    { id: distractorChars[1].id, label: distractorChars[1].label },
  ];

  return (
    <section id="caracteristicas-confiabilidad" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="Módulo 2"
        title="Diez características de un repositorio confiable"
        description="Selecciona cada característica para revisar su definición, su importancia, un ejemplo, su riesgo y su medida de control."
      />

      <div className="flex gap-xs flex-wrap">
        {reliabilityCharacteristics.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => setActiveId(c.id)}
            className={cn(
              "rounded-full border-2 px-4 py-2 text-label-md font-label-md font-semibold transition-colors",
              activeId === c.id ? "border-primary-container bg-secondary-container text-on-secondary-container" : "border-outline-variant bg-surface-container-lowest text-on-surface hover:border-primary-container",
            )}
          >
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
        <p className="text-body-lg font-body-lg text-on-surface">{active.definition}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
          <div>
            <p className="text-label-md font-label-md font-bold text-primary-container mb-1">Importancia archivística</p>
            <p className="text-body-md font-body-md text-on-surface-variant">{active.importance}</p>
          </div>
          <div>
            <p className="text-label-md font-label-md font-bold text-on-surface mb-1">Ejemplo institucional</p>
            <p className="text-body-md font-body-md text-on-surface-variant">{active.example}</p>
          </div>
        </div>

        <div className="rounded-lg border-l-4 border-error bg-error-container/20 p-md">
          <p className="text-label-md font-label-md font-bold text-on-surface mb-1">Riesgo si no se cumple</p>
          <p className="text-body-md font-body-md text-on-surface">{active.risk}</p>
        </div>

        <div className="rounded-lg bg-secondary-container/30 p-md">
          <p className="text-label-md font-label-md font-bold text-on-surface mb-1">Medida de control</p>
          <p className="text-body-md font-body-md text-on-surface">{active.control}</p>
        </div>
      </div>

      <div>
        <p className="text-body-lg font-body-lg font-semibold text-on-surface mb-sm">Caso breve: un hash que cambió</p>
        <p className="rounded-lg border border-outline-variant bg-surface-container-low p-md text-body-md font-body-md text-on-surface mb-sm">
          {hashChangeExample.scenario}
        </p>
        <SingleChoiceCheck
          prompt={hashChangeExample.question}
          options={hashQuestionOptions}
          correctId={hashChangeExample.correctCharacteristicId}
          feedback={hashChangeExample.explanation}
        />
      </div>

      <Callout variant="warning" title="No son sinónimos">
        Integridad, autenticidad y trazabilidad están relacionadas pero no son lo mismo: un documento puede perder
        integridad sin que eso implique automáticamente que su autenticidad quede descartada — depende de si existe
        trazabilidad (un registro de eventos) que explique lo ocurrido.
      </Callout>
    </section>
  );
}
