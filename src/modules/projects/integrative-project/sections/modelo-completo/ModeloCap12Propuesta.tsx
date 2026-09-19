import { SectionHeading } from "../../../../../components/common/SectionHeading";
import { ComparisonMatrix } from "../../../../../components/common/ComparisonMatrix";
import { ZigzagFlow } from "../../../../../components/common/ZigzagFlow";
import { proposalAfter, proposalBefore, modeloPropuestaTable } from "../../integrativeProject.data";
import { ModeloChapterNav } from "./ModeloChapterNav";

const beforeSteps = proposalBefore.map((label, i) => ({ id: `b${i}`, label }));
const afterSteps = proposalAfter.map((label, i) => ({ id: `a${i}`, label }));

export function ModeloCap12Propuesta() {
  return (
    <section id="modelo-cap-12" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Modelo completo · Capítulo 12" title="12. Propuesta de mejora" />

      <div>
        <p className="text-label-md font-label-md font-semibold text-on-surface mb-sm">Situación actual</p>
        <ZigzagFlow steps={beforeSteps} perRow={4} />
      </div>

      <div>
        <p className="text-label-md font-label-md font-semibold text-on-surface mb-sm">Situación propuesta</p>
        <ZigzagFlow steps={afterSteps} perRow={4} />
      </div>

      <ComparisonMatrix columns={["Mejora propuesta", "Beneficio esperado", "Justificación"]} rows={modeloPropuestaTable} />

      <ModeloChapterNav currentId="modelo-cap-12" />
    </section>
  );
}
