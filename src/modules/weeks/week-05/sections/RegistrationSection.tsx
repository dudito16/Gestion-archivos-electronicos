import { ScrollReveal } from "../../../../components/common/ScrollReveal";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { registrationElements } from "../week05.data";

export function RegistrationSection() {
  return (
    <section id="registro" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="Proceso 2 de 3"
        title="Registro"
        description="El registro deja constancia formal de la existencia del documento dentro del sistema, mediante un asiento que no puede alterarse."
      />
      <ScrollReveal>
        <div className="flex flex-wrap gap-xs">
          {registrationElements.map((el) => (
            <span key={el} className="rounded-full bg-secondary-container px-3 py-1.5 text-label-md font-label-md text-on-secondary-container">
              {el}
            </span>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
