import { ArrowDown } from "lucide-react";
import { ScrollReveal } from "../../../../components/common/ScrollReveal";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { registrationElements } from "../week03.data";

export function RegistrationSection() {
  return (
    <section id="registro" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="Proceso 2 de 5"
        title="Registro"
        description="El registro permite incorporar información necesaria para identificar y controlar el documento dentro del sistema."
      />

      <ScrollReveal>
        <div className="flex flex-col items-center gap-sm">
          <div className="flex flex-wrap justify-center gap-xs max-w-2xl">
            {registrationElements.map((el, index) => (
              <span key={el} className="rounded-full border border-outline-variant bg-surface-container-low px-3 py-1.5 text-label-md font-label-md text-on-surface">
                {el}
                {index < registrationElements.length - 1 && <span className="ml-1 text-outline">+</span>}
              </span>
            ))}
          </div>
          <ArrowDown className="text-outline" size={18} />
          <span className="rounded-lg bg-secondary-container px-4 py-2 text-label-md font-label-md font-bold text-on-secondary-container uppercase tracking-wider">
            Registro
          </span>
        </div>
      </ScrollReveal>
    </section>
  );
}
