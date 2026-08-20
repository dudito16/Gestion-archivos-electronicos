import { SectionHeading } from "../../../../components/common/SectionHeading";
import { VerticalTimeline } from "../../../../components/common/VerticalTimeline";
import { timelineSteps } from "../week01.data";

export function EvolutionSection() {
  return (
    <section id="introduccion" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="Introducción"
        title="De la carpeta de papel al archivo electrónico"
        description="La gestión documental no cambió de la noche a la mañana: cada capa tecnológica se apoyó en la anterior. Recorre la línea de tiempo para ver cómo llegamos hasta aquí."
      />
      <VerticalTimeline steps={timelineSteps} />
    </section>
  );
}
