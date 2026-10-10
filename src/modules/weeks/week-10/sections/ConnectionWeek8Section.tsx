import { ArrowRight } from "lucide-react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { connectionWeek8, connectionWeek8Closing } from "../week10.data";

export function ConnectionWeek8Section() {
  return (
    <section id="conexion-semana-8" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Conexión con la Semana 8" title="Del documento digital a su verificación" />

      <div className="flex flex-wrap items-center gap-1 justify-center">
        {connectionWeek8.map((step, index) => (
          <div key={step.id} className="flex items-center gap-1">
            <span className="rounded-lg bg-surface-container-low text-on-surface-variant px-3 py-2 text-caption font-caption text-center max-w-[9rem]">{step.label}</span>
            {index < connectionWeek8.length - 1 && <ArrowRight className="text-outline shrink-0" size={14} />}
          </div>
        ))}
      </div>

      <Callout variant="info" title="Digitalizar bien no basta">
        {connectionWeek8Closing}
      </Callout>
    </section>
  );
}
