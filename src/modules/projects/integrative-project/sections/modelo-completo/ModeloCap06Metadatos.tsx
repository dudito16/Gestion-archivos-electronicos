import { SectionHeading } from "../../../../../components/common/SectionHeading";
import { ComparisonMatrix } from "../../../../../components/common/ComparisonMatrix";
import { modeloMetadatosTable } from "../../integrativeProject.data";
import { ModeloChapterNav } from "./ModeloChapterNav";

export function ModeloCap06Metadatos() {
  return (
    <section id="modelo-cap-6" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Modelo completo · Capítulo 6" title="6. Ficha de metadatos" description="Campo — valor, con su propósito y su justificación." />

      <ComparisonMatrix columns={["Propósito", "Justificación"]} rows={modeloMetadatosTable} />

      <ModeloChapterNav currentId="modelo-cap-6" />
    </section>
  );
}
