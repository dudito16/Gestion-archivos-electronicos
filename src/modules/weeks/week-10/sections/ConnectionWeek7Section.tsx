import { ArrowRight } from "lucide-react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { connectionWeek7, connectionWeek7Closing } from "../week10.data";

export function ConnectionWeek7Section() {
  return (
    <section id="conexion-semana-7" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Conexión con la Semana 7" title="De la seguridad a la integridad" />

      <div className="flex flex-wrap items-center gap-1 justify-center">
        {connectionWeek7.map((step, index) => (
          <div key={step.id} className="flex items-center gap-1">
            <span className="rounded-lg bg-surface-container-low text-on-surface-variant px-3 py-2 text-caption font-caption text-center max-w-[10rem]">{step.label}</span>
            {index < connectionWeek7.length - 1 && <ArrowRight className="text-outline shrink-0" size={14} />}
          </div>
        ))}
      </div>

      <Callout variant="info" title="Aplicación al Proyecto Integrador">
        {connectionWeek7Closing}
      </Callout>
    </section>
  );
}
