import { ScrollReveal } from "../../../../components/common/ScrollReveal";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { ComparisonMatrix } from "../../../../components/common/ComparisonMatrix";
import { Callout } from "../../../../components/common/Callout";
import { signatureComparisonColumns, signatureComparisonRows } from "../week06.data";

export function HandwrittenScannedSection() {
  return (
    <section id="firma-manuscrita" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="Firma manuscrita digitalizada"
        title="Una imagen no es lo mismo que un mecanismo criptográfico"
        description="Una persona firma físicamente un papel y luego se escanea. El resultado es una imagen de la firma incorporada a un archivo."
      />

      <Callout variant="warning" title="Riesgo principal">
        Una imagen de firma puede copiarse, recortarse o insertarse en cualquier otro documento sin dejar rastro. Por
        sí sola no permite verificar quién la aplicó ni si el documento fue alterado.
      </Callout>

      <ScrollReveal>
        <ComparisonMatrix columns={signatureComparisonColumns} rows={signatureComparisonRows} />
      </ScrollReveal>
    </section>
  );
}
