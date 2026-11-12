import { SectionHeading } from "../../../../components/common/SectionHeading";
import { TallerLaboratorio } from "../taller/TallerLaboratorio";

/** Week 14's "Taller": "Evaluación de la confiabilidad de un repositorio digital institucional". */
export function TallerSection() {
  return (
    <section id="taller" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="Taller"
        title="Evaluación de la confiabilidad de un repositorio digital institucional"
        description="Elabora un diagnóstico de confiabilidad considerando las siete dimensiones organizacionales, tecnológicas y de relación con el SGD."
      />
      <TallerLaboratorio />
    </section>
  );
}
