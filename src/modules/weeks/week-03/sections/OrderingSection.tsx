import { CircleCheck, CircleX } from "lucide-react";
import { ScrollReveal } from "../../../../components/common/ScrollReveal";
import { Callout } from "../../../../components/common/Callout";
import { orderingAfter, orderingBefore } from "../week03.data";

export function OrderingSection() {
  return (
    <section id="ordenamiento" className="scroll-mt-24 space-y-lg">
      <h3 className="text-headline-md font-headline-md text-on-surface">Ordenamiento digital</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
        <ScrollReveal direction="left">
          <div className="h-full rounded-xl border border-outline-variant bg-surface-container-lowest p-lg">
            <div className="flex items-center gap-xs mb-sm">
              <CircleX className="text-error" size={20} />
              <p className="text-label-md font-label-md font-bold uppercase tracking-wider text-on-surface-variant">Sin orden</p>
            </div>
            <ul className="space-y-1 font-mono text-body-md text-on-surface-variant">
              {orderingBefore.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right">
          <div className="h-full rounded-xl border border-primary-container/50 bg-secondary-container/20 p-lg">
            <div className="flex items-center gap-xs mb-sm">
              <CircleCheck className="text-tertiary" size={20} />
              <p className="text-label-md font-label-md font-bold uppercase tracking-wider text-primary-container">Con organización</p>
            </div>
            <ul className="space-y-1 font-mono text-body-md text-on-surface">
              {orderingAfter.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>

      <p className="text-body-lg font-body-lg text-on-surface text-center max-w-2xl mx-auto">
        El ordenamiento debe responder al contexto y a criterios documentales, no solamente al nombre del archivo.
      </p>

      <Callout variant="warning" title="Ejemplo didáctico">
        Estos nombres son ejemplos didácticos; no se presentan como una nomenclatura oficial del AGN.
      </Callout>
    </section>
  );
}
