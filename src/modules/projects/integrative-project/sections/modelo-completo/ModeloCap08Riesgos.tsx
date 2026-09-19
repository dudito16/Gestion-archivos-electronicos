import { SectionHeading } from "../../../../../components/common/SectionHeading";
import { ComparisonMatrix } from "../../../../../components/common/ComparisonMatrix";
import { modeloRiesgosTable } from "../../integrativeProject.data";
import { ModeloChapterNav } from "./ModeloChapterNav";

export function ModeloCap08Riesgos() {
  return (
    <section id="modelo-cap-8" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Modelo completo · Capítulo 8" title="8. Matriz de riesgos y controles" />

      <ComparisonMatrix columns={["Evidencia", "Atributo afectado", "Riesgo", "Control actual", "Propuesta"]} rows={modeloRiesgosTable} />

      <p className="text-caption font-caption text-on-surface-variant text-center">PROBLEMA → RIESGO → CONTROL → PROPUESTA</p>

      <ModeloChapterNav currentId="modelo-cap-8" />
    </section>
  );
}
