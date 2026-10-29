import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { ComparisonMatrix } from "../../../../components/common/ComparisonMatrix";
import { standardsComparisonRows, standardsComplementarity } from "../week13.data";

export function StandardsComparisonSection() {
  return (
    <section id="comparacion-estandares" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Relación entre estándares" title="PREMIS, METS y Dublin Core, lado a lado" />

      <ComparisonMatrix columns={["PREMIS", "METS", "Dublin Core"]} rows={standardsComparisonRows} />

      <Callout variant="warning" title="Una arquitectura didáctica posible, no una obligación universal">
        {standardsComplementarity}
      </Callout>
    </section>
  );
}
