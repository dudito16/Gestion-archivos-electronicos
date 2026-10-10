import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { ComparisonMatrix } from "../../../../components/common/ComparisonMatrix";
import { strategies, strategyComparisonDisclaimer } from "../week11.data";

export function StrategyComparisonSection() {
  const columns = strategies.map((s) => s.label);
  const rows = [
    { criterion: "Definición", values: strategies.map((s) => s.definition) },
    { criterion: "Objetivo", values: strategies.map((s) => s.objective) },
    { criterion: "Cuándo se utiliza", values: strategies.map((s) => s.whenToUse) },
    { criterion: "Ventajas", values: strategies.map((s) => s.advantages.join("; ")) },
    { criterion: "Riesgos o limitaciones", values: strategies.map((s) => s.risks.join("; ")) },
    { criterion: "Ejemplo archivístico", values: strategies.map((s) => s.example) },
    { criterion: "Controles a documentar", values: strategies.map((s) => s.controls.join("; ")) },
  ];

  return (
    <section id="comparacion-estrategias" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Comparación de estrategias" title="Migración, normalización y emulación, lado a lado" />

      <ComparisonMatrix columns={columns} rows={rows} />

      <Callout variant="warning" title="Ninguna estrategia es universalmente superior">
        {strategyComparisonDisclaimer}
      </Callout>
    </section>
  );
}
