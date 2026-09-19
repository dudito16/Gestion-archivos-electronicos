import { SectionHeading } from "../../../../../components/common/SectionHeading";
import { ComparisonMatrix } from "../../../../../components/common/ComparisonMatrix";
import { ZigzagFlow } from "../../../../../components/common/ZigzagFlow";
import { observedFlow, modeloFlowTable } from "../../integrativeProject.data";
import { ModeloChapterNav } from "./ModeloChapterNav";

export function ModeloCap04Flujo() {
  return (
    <section id="modelo-cap-4" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Modelo completo · Capítulo 4" title="4. Flujo documental actual" />

      <ZigzagFlow steps={observedFlow} perRow={4} />

      <ComparisonMatrix columns={["Documento", "Responsable", "Sistema", "Evidencia", "Observación"]} rows={modeloFlowTable} />

      <ModeloChapterNav currentId="modelo-cap-4" />
    </section>
  );
}
