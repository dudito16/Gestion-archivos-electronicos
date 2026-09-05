import { ScrollReveal } from "../../../../components/common/ScrollReveal";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { FlowChain } from "../../../../components/common/FlowChain";
import { captureElements, captureFlow } from "../week05.data";

export function CaptureSection() {
  return (
    <section id="captura" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="Proceso 1 de 3"
        title="Captura"
        description="Incorporar un documento al sistema de gestión documental es el punto de partida para que pueda sostener sus cuatro requisitos."
      />

      <ScrollReveal>
        <FlowChain steps={captureFlow} />
      </ScrollReveal>

      <div className="flex flex-wrap gap-xs">
        {captureElements.map((el) => (
          <span key={el} className="rounded-full border border-outline-variant bg-surface-container-low px-3 py-1.5 text-label-md font-label-md text-on-surface">
            {el}
          </span>
        ))}
      </div>
    </section>
  );
}
