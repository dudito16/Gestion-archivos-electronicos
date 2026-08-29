import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { agnExampleFields } from "../week04.data";

export function AGNExampleSection() {
  return (
    <section id="ejemplo-agn" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Ejemplo contextualizado al AGN" title="Un documento institucional en un proceso documental" />

      <Callout variant="warning" title="EJEMPLO DIDÁCTICO — NO REPRESENTA EL ESQUEMA INTERNO DEL SGD">
        Este ejemplo no afirma que estos campos constituyan el esquema interno real del SGD del AGN; ilustra
        conceptualmente qué tipo de información suele acompañar a un documento institucional.
      </Callout>

      <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg">
        <p className="text-label-md font-label-md font-bold uppercase tracking-wider text-on-surface-variant mb-sm">
          Documento
        </p>
        <div className="flex flex-wrap gap-xs">
          {agnExampleFields.map((f) => (
            <span key={f} className="rounded-full border border-outline-variant bg-surface-container-low px-3 py-1.5 text-label-md font-label-md text-on-surface">
              {f}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
