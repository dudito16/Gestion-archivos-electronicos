import { SectionHeading } from "../../../../components/common/SectionHeading";
import { TallerLaboratorio } from "../taller/TallerLaboratorio";

/** Week 13's "Taller": "Organización y documentación de un paquete de preservación digital". */
export function TallerSection() {
  return (
    <section id="taller" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="Taller"
        title="Organización y documentación de un paquete de preservación digital"
        description="Aplica PREMIS, METS, Dublin Core y BagIt para describir, estructurar, empaquetar y documentar un expediente electrónico."
      />
      <TallerLaboratorio />
    </section>
  );
}
