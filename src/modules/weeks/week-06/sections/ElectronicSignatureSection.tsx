import { ArrowDown } from "lucide-react";
import { ScrollReveal } from "../../../../components/common/ScrollReveal";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { electronicSignatureExamples } from "../week06.data";

export function ElectronicSignatureSection() {
  return (
    <section id="firma-electronica" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="Firma electrónica"
        title="¿Qué es una firma electrónica?"
        description="Un concepto amplio: cualquier mecanismo electrónico utilizado para manifestar identificación, aceptación o aprobación."
      />

      <ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-xs">
          {electronicSignatureExamples.map((example) => (
            <div key={example} className="rounded-lg border border-outline-variant bg-surface-container-low p-sm text-body-md font-body-md text-on-surface">
              {example}
            </div>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="flex flex-col items-center gap-1 max-w-sm mx-auto">
          <span className="rounded-lg border border-outline-variant bg-surface-container-lowest px-4 py-2 text-label-md font-label-md font-semibold text-on-surface">
            Firma electrónica — concepto amplio
          </span>
          <ArrowDown className="text-outline" size={18} />
          <span className="rounded-lg bg-primary-container text-on-primary px-4 py-2 text-label-md font-label-md font-semibold">
            Firma digital — mecanismo específico basado en tecnología criptográfica y certificados
          </span>
        </div>
      </ScrollReveal>

      <Callout variant="warning" title="No toda firma electrónica es una firma digital">
        La firma digital es un tipo particular de firma electrónica, pero no todo mecanismo electrónico de
        identificación o aprobación cumple con la tecnología y las garantías que una firma digital ofrece.
      </Callout>
    </section>
  );
}
