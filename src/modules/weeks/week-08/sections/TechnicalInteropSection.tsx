import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { FlowChain } from "../../../../components/common/FlowChain";
import { interopDimensions, technicalFlow } from "../week08.data";

const dimension = interopDimensions.find((d) => d.id === "tecnica")!;

export function TechnicalInteropSection() {
  return (
    <section id="interoperabilidad-tecnica" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Interoperabilidad técnica" title={dimension.definition} />

      <div className="flex flex-wrap gap-xs">
        {["APIs", "Servicios", "Formatos estructurados", "Protocolos", "Mecanismos de intercambio"].map((item) => (
          <span key={item} className="rounded-full border border-outline-variant bg-surface-container-lowest px-3 py-1.5 text-label-md font-label-md text-on-surface">
            {item}
          </span>
        ))}
      </div>

      <p className="text-body-md font-body-md text-on-surface-variant">
        El objetivo no es profundizar en programación, sino que el archivista comprenda qué ocurre durante el
        intercambio.
      </p>

      <FlowChain steps={technicalFlow} />

      <Callout variant="warning" title="Ejemplo institucional">
        {dimension.institutionalExample}
      </Callout>
    </section>
  );
}
