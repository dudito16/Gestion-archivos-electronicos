import { ScrollReveal } from "../../../../components/common/ScrollReveal";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { compoundDocumentParts, metadataTypes, recordExpedienteDocs } from "../week04.data";

const type = metadataTypes.find((t) => t.id === "estructurales")!;

export function StructuralSection() {
  return (
    <section id="estructurales" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Tipo 3 de 4" title="Metadatos estructurales" description={type.question} />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
        <ScrollReveal direction="left">
          <div className="h-full rounded-xl border border-outline-variant bg-surface-container-lowest p-md">
            <p className="text-label-md font-label-md font-bold text-on-surface mb-sm">Expediente</p>
            <ul className="space-y-1">
              {recordExpedienteDocs.map((doc) => (
                <li key={doc} className="text-body-md font-body-md text-on-surface-variant pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-outline">
                  {doc}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
        <ScrollReveal direction="right">
          <div className="h-full rounded-xl border border-outline-variant bg-surface-container-lowest p-md">
            <p className="text-label-md font-label-md font-bold text-on-surface mb-sm">Documento compuesto</p>
            <ul className="space-y-1">
              {compoundDocumentParts.map((part) => (
                <li key={part} className="text-body-md font-body-md text-on-surface-variant pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-outline">
                  {part}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>

      <p className="text-body-md font-body-md text-on-surface-variant max-w-2xl">
        Los metadatos estructurales permiten representar relaciones y organización de partes.
      </p>
    </section>
  );
}
