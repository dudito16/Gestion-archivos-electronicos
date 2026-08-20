import { ScrollReveal } from "../../../../components/common/ScrollReveal";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { ComparisonMatrix } from "../../../../components/common/ComparisonMatrix";
import { Callout } from "../../../../components/common/Callout";
import { comparisonMatrix } from "../week01.data";

const columns = ["Documento Electrónico", "Documento Digital", "Documento Digitalizado", "Expediente Electrónico"];

export function ComparisonSection() {
  return (
    <section id="comparacion" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="Síntesis"
        title="Matriz comparativa"
        description="Los cuatro conceptos lado a lado, para fijar sus diferencias de un vistazo."
      />
      <ScrollReveal>
        <ComparisonMatrix columns={columns} rows={comparisonMatrix} />
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <Callout variant="warning" title="No confundir: formato de archivo con entidad documental">
          Un PDF, DOCX, TIFF o XML describe un formato o representación digital. Para comprender archivísticamente un
          documento debemos considerar también su origen, contexto, relación funcional y gestión.
        </Callout>
      </ScrollReveal>
    </section>
  );
}
