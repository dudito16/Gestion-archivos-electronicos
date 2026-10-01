import { useState } from "react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { ZigzagFlow } from "../../../../components/common/ZigzagFlow";
import { cn } from "../../../../utils/cn";
import { qualityControlCorrectStage, qualityControlFlow, qualityControlOrganizational, qualityControlQuestion, qualityControlStages } from "../week08.data";

export function QualityControlSection() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="control-calidad" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Control de calidad de digitalización" title="Un flujo con puntos de verificación, no solo una captura" />

      <ZigzagFlow steps={qualityControlFlow} perRow={4} />

      <div>
        <p className="text-body-lg font-body-lg font-semibold text-on-surface mb-sm">Encuentra el punto de control</p>
        <p className="text-body-md font-body-md text-on-surface-variant mb-sm">{qualityControlQuestion}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-xs">
          {qualityControlStages.map((stage) => {
            const isSelected = selected === stage.id;
            const isCorrect = selected !== null && stage.id === qualityControlCorrectStage;
            return (
              <button
                key={stage.id}
                type="button"
                onClick={() => setSelected(stage.id)}
                disabled={selected !== null}
                className={cn(
                  "text-left rounded-lg border px-md py-sm transition-colors",
                  !selected && "border-outline-variant bg-surface-container-lowest hover:border-primary-container",
                  selected && isCorrect && "border-tertiary-fixed-dim bg-tertiary-fixed/30",
                  selected && isSelected && !isCorrect && "border-error bg-error-container/30",
                  selected && !isSelected && !isCorrect && "opacity-60 border-outline-variant",
                )}
              >
                <span className="text-label-md font-label-md font-bold text-on-surface">{stage.label}</span>
              </button>
            );
          })}
        </div>
        {selected && (
          <p className="text-body-md font-body-md text-on-surface-variant mt-sm">
            {qualityControlStages.find((s) => s.id === qualityControlCorrectStage)?.whatToCheck}
          </p>
        )}
      </div>

      <Callout variant="info" title="También es organizacional">
        {qualityControlOrganizational}
      </Callout>
    </section>
  );
}
