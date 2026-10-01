import { useState } from "react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { DragDropClassifier } from "../../../../components/common/DragDropClassifier";
import { getIcon } from "../../../../utils/getIcon";
import { controlClassifySituations, controlTypes } from "../week07.data";

export function ControlsSection() {
  const [result, setResult] = useState<{ score: number; total: number } | null>(null);

  return (
    <section id="controles" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Controles de seguridad" title="Preventivos, detectivos y correctivos" />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-sm">
        {controlTypes.map((type) => {
          const Icon = getIcon(type.icon);
          return (
            <div key={type.id} className="rounded-lg border border-outline-variant bg-surface-container-lowest p-md space-y-1.5">
              <div className="flex items-center gap-xs">
                <Icon className="text-primary-container" size={18} />
                <p className="text-label-md font-label-md font-bold text-on-surface">{type.label}</p>
              </div>
              <p className="text-body-md font-body-md text-on-surface-variant">{type.definition}</p>
              <ul className="list-disc list-inside text-caption font-caption text-on-surface-variant">
                {type.examples.map((ex) => (
                  <li key={ex}>{ex}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <div>
        <p className="text-body-lg font-body-lg font-semibold text-on-surface mb-sm">¿Qué tipo de control es?</p>
        <DragDropClassifier
          items={controlClassifySituations}
          categories={controlTypes.map((t) => ({ id: t.id, label: t.label, icon: t.icon }))}
          onComplete={(score, total) => setResult({ score, total })}
        />
      </div>

      {result && (
        <p className="text-label-md font-label-md font-semibold text-on-surface">
          Resultado: {result.score}/{result.total} — recuerda: preventivo evita, detectivo identifica, correctivo recupera.
        </p>
      )}
    </section>
  );
}
