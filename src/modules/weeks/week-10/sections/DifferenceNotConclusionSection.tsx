import { CheckCircle2, XCircle } from "lucide-react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { FlowChain } from "../../../../components/common/FlowChain";
import { cn } from "../../../../utils/cn";
import { integrityCauses, investigationClosing, investigationFlow } from "../week10.data";

export function DifferenceNotConclusionSection() {
  return (
    <section id="diferencia-no-es-conclusion" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Una diferencia no es todavía una conclusión" title="De la señal técnica a la causa real" />

      <FlowChain steps={investigationFlow} />

      <div>
        <p className="text-body-lg font-body-lg font-semibold text-on-surface mb-sm">Posibles causas</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-xs">
          {integrityCauses.map((cause) => (
            <div
              key={cause.id}
              className={cn(
                "flex items-center gap-xs rounded-lg border px-md py-sm",
                cause.benign ? "border-tertiary-fixed-dim bg-tertiary-fixed/20" : "border-error bg-error-container/20",
              )}
            >
              {cause.benign ? <CheckCircle2 size={16} className="text-tertiary shrink-0" /> : <XCircle size={16} className="text-error shrink-0" />}
              <span className="text-label-md font-label-md text-on-surface">{cause.label}</span>
            </div>
          ))}
        </div>
        <p className="text-caption font-caption text-on-surface-variant mt-xs">
          Ninguna de estas causas se conoce de antemano: solo la investigación permite determinar cuál explica el caso.
        </p>
      </div>

      <Callout variant="warning" title="Una diferencia no es, por sí sola, un veredicto">
        {investigationClosing}
      </Callout>
    </section>
  );
}
