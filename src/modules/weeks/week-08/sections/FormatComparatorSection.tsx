import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { ComparisonMatrix } from "../../../../components/common/ComparisonMatrix";
import { formatComparisonDisclaimer, formatComparisonRows } from "../week08.data";

const columns = ["Tipo", "Compresión", "Uso posible", "Consideración"];
const rows = formatComparisonRows.map((r) => ({ criterion: r.format, values: [r.type, r.compression, r.use, r.consideration] }));

export function FormatComparatorSection() {
  return (
    <section id="comparador-formatos" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Comparador de formatos" title="Un punto de partida, no una regla absoluta" />

      <ComparisonMatrix columns={columns} rows={rows} />

      <Callout variant="warning" title="No es una regla absoluta">
        {formatComparisonDisclaimer}
      </Callout>
    </section>
  );
}
