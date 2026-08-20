import { ScrollReveal } from "../../../../components/common/ScrollReveal";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { FlowChain } from "../../../../components/common/FlowChain";
import { Callout } from "../../../../components/common/Callout";
import { agnConceptualFlow } from "../week03.data";

export function AGNCaseSection() {
  return (
    <section id="caso-agn" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Ejemplo contextualizado al AGN" title="Aplicación al contexto del Archivo General de la Nación" />

      <p className="text-body-md font-body-md text-on-surface-variant max-w-2xl">
        La gestión documental institucional contempla procesos de recepción, emisión, notificación y archivo. Estos
        flujos documentales pueden ejecutarse mediante el SGD y otros sistemas de la entidad.
      </p>

      <ScrollReveal>
        <FlowChain steps={agnConceptualFlow} />
      </ScrollReveal>

      <Callout variant="info" title="Flujo conceptual con fines educativos">
        No representa necesariamente la implementación técnica exacta del SGD institucional.
      </Callout>
    </section>
  );
}
