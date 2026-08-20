import { SectionHeading } from "../../../../components/common/SectionHeading";
import { AnimatedFolder } from "../../../../components/common/AnimatedFolder";
import { electronicFileDocs } from "../week01.data";

export function ElectronicFileSection() {
  return (
    <section id="expediente" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="Los cuatro conceptos · 4 de 4"
        title="Expediente Electrónico"
        description="Un expediente agrupa documentos electrónicos relacionados con un mismo asunto. Haz clic en la carpeta para abrirla."
      />
      <AnimatedFolder label="Expediente de Transferencia Documental" docs={electronicFileDocs} />
    </section>
  );
}
