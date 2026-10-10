import { SectionHeading } from "../../../../components/common/SectionHeading";
import { TallerLaboratorio } from "../taller/TallerLaboratorio";

/** Week 10's "Taller": a single professional-style case worked through a 5-step wizard. */
export function TallerSection() {
  return (
    <section id="taller" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="Taller"
        title="Laboratorio de Integridad Digital"
        description="Analiza un caso real de diferencia de hash siguiendo el recorrido profesional: detectar, interpretar, investigar, seleccionar control y justificar."
      />
      <TallerLaboratorio />
    </section>
  );
}
