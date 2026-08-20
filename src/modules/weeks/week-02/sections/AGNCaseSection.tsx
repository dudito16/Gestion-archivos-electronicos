import { ScrollReveal } from "../../../../components/common/ScrollReveal";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { FlowChain } from "../../../../components/common/FlowChain";
import { AnimatedFolder } from "../../../../components/common/AnimatedFolder";
import { Callout } from "../../../../components/common/Callout";
import { agnConceptualFlow, agnDocumentCaseDocs } from "../week02.data";

export function AGNCaseSection() {
  return (
    <section id="caso-agn" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Ejemplo didáctico contextualizado al AGN" title="SGD en el contexto del Archivo General de la Nación" />

      <ScrollReveal>
        <FlowChain steps={agnConceptualFlow} />
      </ScrollReveal>

      <Callout variant="info" title="Flujo conceptual">
        Flujo conceptual para fines académicos; no representa necesariamente la implementación técnica exacta del SGD
        institucional.
      </Callout>

      <ScrollReveal delay={0.1}>
        <div className="space-y-sm">
          <p className="text-label-md font-label-md font-bold uppercase tracking-wider text-on-surface-variant">
            Caso documental
          </p>
          <p className="text-body-md font-body-md text-on-surface-variant max-w-2xl">
            Los documentos relacionados con un trámite pueden formar parte de un expediente, manteniendo sus
            relaciones documentales y contextuales.
          </p>
          <AnimatedFolder label="Expediente" docs={agnDocumentCaseDocs} />
        </div>
      </ScrollReveal>
    </section>
  );
}
