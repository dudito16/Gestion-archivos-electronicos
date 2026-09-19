import { SectionHeading } from "../../../../../components/common/SectionHeading";
import { ComparisonMatrix } from "../../../../../components/common/ComparisonMatrix";
import { modeloAtributosTable } from "../../integrativeProject.data";
import { ModeloChapterNav } from "./ModeloChapterNav";

export function ModeloCap07Atributos() {
  return (
    <section id="modelo-cap-7" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Modelo completo · Capítulo 7" title="7. Análisis de los atributos del documento" description="Autenticidad, fiabilidad, integridad y disponibilidad aplicadas al caso, no solo definidas." />

      <ComparisonMatrix columns={["Situación", "Evidencia", "Riesgo", "Análisis"]} rows={modeloAtributosTable} />

      <ModeloChapterNav currentId="modelo-cap-7" />
    </section>
  );
}
