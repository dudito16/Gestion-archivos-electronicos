import { ScrollReveal } from "../../../../components/common/ScrollReveal";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { FlowChain } from "../../../../components/common/FlowChain";
import { Callout } from "../../../../components/common/Callout";
import { classificationFlow } from "../week03.data";

export function ClassificationSection() {
  return (
    <section id="clasificacion" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="Organización documental"
        title="Clasificar no es simplemente ordenar carpetas"
        description="La clasificación relaciona documentos y expedientes con las funciones, actividades o estructura documental correspondiente."
      />

      <ScrollReveal>
        <FlowChain steps={classificationFlow} />
      </ScrollReveal>

      <Callout variant="info" title="Sobre las tablas de clasificación">
        No se presenta aquí una tabla de clasificación específica como oficial, al no disponer de esa fuente para
        esta institución.
      </Callout>
    </section>
  );
}
