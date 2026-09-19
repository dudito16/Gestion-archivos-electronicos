import { Check, X } from "lucide-react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { doDo, dontDo } from "../integrativeProject.data";

export function QueHacerYNoHacerSection() {
  return (
    <section id="que-hacer" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Antes de empezar a escribir" title="Qué sí y qué no deben hacer" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
        <div className="rounded-xl border border-error/40 bg-error-container/20 p-lg space-y-2">
          <p className="text-headline-md font-headline-md text-on-error-container">🚫 No</p>
          <ul className="space-y-1.5">
            {dontDo.map((item) => (
              <li key={item} className="flex items-start gap-xs text-body-md font-body-md text-on-error-container">
                <X size={16} className="shrink-0 mt-0.5" /> {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-tertiary-fixed-dim bg-tertiary-fixed/20 p-lg space-y-2">
          <p className="text-headline-md font-headline-md text-on-tertiary-fixed-variant">✅ Sí</p>
          <ul className="space-y-1.5">
            {doDo.map((item) => (
              <li key={item} className="flex items-start gap-xs text-body-md font-body-md text-on-tertiary-fixed-variant">
                <Check size={16} className="shrink-0 mt-0.5" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
