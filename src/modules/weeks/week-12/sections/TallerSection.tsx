import { SectionHeading } from "../../../../components/common/SectionHeading";
import { TallerLaboratorio } from "../taller/TallerLaboratorio";

/** Week 12's "Taller": "Diseño conceptual de un flujo OAIS para la preservación de expedientes electrónicos". */
export function TallerSection() {
  return (
    <section id="taller" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="Taller"
        title="Diseño conceptual de un flujo OAIS para la preservación de expedientes electrónicos"
        description="Aplica el modelo OAIS para explicar cómo se preparan, ingresan, conservan y ponen a disposición los documentos de una institución."
      />
      <TallerLaboratorio />
    </section>
  );
}
