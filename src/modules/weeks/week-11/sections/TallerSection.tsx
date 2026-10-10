import { SectionHeading } from "../../../../components/common/SectionHeading";
import { TallerLaboratorio } from "../taller/TallerLaboratorio";

/** Week 11's "Taller": "Diseño preliminar de una estrategia de preservación digital para una institución pública". */
export function TallerSection() {
  return (
    <section id="taller" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="Taller"
        title="Diseño preliminar de una estrategia de preservación digital para una institución pública"
        description="Analiza un caso institucional completo y diseña una estrategia preliminar: riesgos, prioridad, estrategia, validación, política y plan."
      />
      <TallerLaboratorio />
    </section>
  );
}
