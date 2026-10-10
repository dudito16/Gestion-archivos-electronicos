import { ArrowRight, Plus } from "lucide-react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { controlComposition, controlCompositionClosing, riskControlPairs } from "../week10.data";

export function ControlsSection() {
  return (
    <section id="controles" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Controles" title="Hash no es el único control" />

      <div className="space-y-xs">
        {riskControlPairs.map((pair) => (
          <div key={pair.risk} className="flex items-center gap-sm rounded-lg border border-outline-variant bg-surface-container-lowest p-md flex-wrap">
            <span className="rounded-full bg-error-container/40 text-on-error-container px-3 py-1.5 text-caption font-caption font-medium">{pair.risk}</span>
            <ArrowRight className="text-outline shrink-0" size={16} />
            <span className="rounded-full bg-tertiary-fixed/40 text-on-tertiary-fixed-variant px-3 py-1.5 text-caption font-caption font-medium">{pair.control}</span>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg">
        <p className="text-body-lg font-body-lg font-semibold text-on-surface text-center mb-sm">La integridad se sostiene con una combinación de controles</p>
        <div className="flex items-center justify-center flex-wrap gap-xs">
          {controlComposition.map((item, index) => (
            <div key={item} className="flex items-center gap-xs">
              <span className="rounded-lg bg-secondary-container px-3 py-2 text-label-md font-label-md font-semibold text-on-secondary-container">{item}</span>
              {index < controlComposition.length - 1 && <Plus className="text-outline shrink-0" size={16} />}
            </div>
          ))}
        </div>
      </div>

      <Callout variant="info" title="Una herramienta, no una solución única">
        {controlCompositionClosing}
      </Callout>
    </section>
  );
}
