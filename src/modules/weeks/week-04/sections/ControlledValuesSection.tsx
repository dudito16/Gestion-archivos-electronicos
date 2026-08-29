import { CircleCheck, CircleX } from "lucide-react";
import { ScrollReveal } from "../../../../components/common/ScrollReveal";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { controlledValues, uncontrolledValues } from "../week04.data";

export function ControlledValuesSection() {
  return (
    <section id="valores-controlados" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Buenas prácticas" title="Valores controlados" description="Ejemplo: el campo Estado" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
        <ScrollReveal direction="left">
          <div className="h-full rounded-xl border border-outline-variant bg-surface-container-lowest p-lg">
            <div className="flex items-center gap-xs mb-sm">
              <CircleX className="text-error" size={20} />
              <p className="text-label-md font-label-md font-bold uppercase tracking-wider text-on-surface-variant">No controlado</p>
            </div>
            <div className="flex flex-wrap gap-xs">
              {uncontrolledValues.map((v) => (
                <span key={v} className="rounded-full border border-outline-variant bg-surface-container-low px-3 py-1 text-label-md font-label-md text-on-surface-variant">
                  {v}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right">
          <div className="h-full rounded-xl border border-primary-container/50 bg-secondary-container/20 p-lg">
            <div className="flex items-center gap-xs mb-sm">
              <CircleCheck className="text-tertiary" size={20} />
              <p className="text-label-md font-label-md font-bold uppercase tracking-wider text-primary-container">Controlado</p>
            </div>
            <div className="flex flex-wrap gap-xs">
              {controlledValues.map((v) => (
                <span key={v} className="rounded-full bg-secondary-container px-3 py-1 text-label-md font-label-md text-on-secondary-container">
                  {v}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>

      <Callout variant="warning" title="Ejemplo didáctico">
        Los valores mostrados son ejemplos didácticos. Cada institución debe definir sus propios valores de acuerdo
        con sus procesos.
      </Callout>
    </section>
  );
}
