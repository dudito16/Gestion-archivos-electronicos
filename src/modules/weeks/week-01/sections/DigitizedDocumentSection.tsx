import { CircleCheck, CircleX } from "lucide-react";
import { ScrollReveal } from "../../../../components/common/ScrollReveal";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { FlowChain } from "../../../../components/common/FlowChain";
import { Callout } from "../../../../components/common/Callout";
import { digitization } from "../week01.data";

export function DigitizedDocumentSection() {
  return (
    <section id="documento-digitalizado" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Los cuatro conceptos · 3 de 4" title="Documento Digitalizado" />

      <ScrollReveal>
        <FlowChain steps={digitization.flow} />
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
        <ScrollReveal direction="left">
          <div className="h-full rounded-xl border border-outline-variant bg-surface-container-lowest p-md">
            <div className="flex items-center gap-xs mb-xs">
              <CircleCheck className="text-tertiary" size={20} />
              <h4 className="text-label-md font-label-md font-semibold text-on-surface">Ventajas</h4>
            </div>
            <ul className="space-y-1">
              {digitization.advantages.map((item) => (
                <li key={item} className="text-body-md font-body-md text-on-surface-variant pl-5 relative before:content-['—'] before:absolute before:left-0 before:text-outline">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right">
          <div className="h-full rounded-xl border border-outline-variant bg-surface-container-lowest p-md">
            <div className="flex items-center gap-xs mb-xs">
              <CircleX className="text-error" size={20} />
              <h4 className="text-label-md font-label-md font-semibold text-on-surface">Limitaciones</h4>
            </div>
            <ul className="space-y-1">
              {digitization.limitations.map((item) => (
                <li key={item} className="text-body-md font-body-md text-on-surface-variant pl-5 relative before:content-['—'] before:absolute before:left-0 before:text-outline">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>

      <Callout variant="info" title="¿Cuándo conserva valor archivístico?">
        {digitization.whenValid}
      </Callout>
    </section>
  );
}
