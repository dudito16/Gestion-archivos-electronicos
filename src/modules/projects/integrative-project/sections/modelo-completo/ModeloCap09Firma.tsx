import { SectionHeading } from "../../../../../components/common/SectionHeading";
import { ComparisonMatrix } from "../../../../../components/common/ComparisonMatrix";
import { modeloFirmaTable } from "../../integrativeProject.data";
import { ModeloChapterNav } from "./ModeloChapterNav";

export function ModeloCap09Firma() {
  return (
    <section id="modelo-cap-9" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Modelo completo · Capítulo 9" title="9. Análisis de la firma" />

      <ComparisonMatrix columns={["Resultado", "Evidencia"]} rows={modeloFirmaTable} />

      <ModeloChapterNav currentId="modelo-cap-9" />
    </section>
  );
}
