import { SectionHeading } from "../../../../../components/common/SectionHeading";
import { ComparisonMatrix } from "../../../../../components/common/ComparisonMatrix";
import { modeloAuditoriaTable } from "../../integrativeProject.data";
import { ModeloChapterNav } from "./ModeloChapterNav";

export function ModeloCap11Auditoria() {
  return (
    <section id="modelo-cap-11" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Modelo completo · Capítulo 11" title="11. Análisis de auditoría" description="Elemento — resultado, hallazgo, riesgo y recomendación." />

      <ComparisonMatrix columns={["Resultado", "Hallazgo", "Riesgo", "Recomendación"]} rows={modeloAuditoriaTable} />

      <ModeloChapterNav currentId="modelo-cap-11" />
    </section>
  );
}
