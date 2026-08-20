import { FileText } from "lucide-react";
import { ScrollReveal } from "../../../../components/common/ScrollReveal";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { documentElements, documentExamples } from "../week02.data";

export function DocumentsComponentSection() {
  return (
    <section id="documentos" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Componente · Documentos" title="Documentos" />

      <ScrollReveal>
        <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg">
          <div className="flex items-center gap-xs mb-sm">
            <FileText className="text-primary-container" size={22} />
            <span className="text-label-md font-label-md font-bold uppercase tracking-wider text-on-surface">Documento</span>
          </div>
          <ul className="space-y-1 pl-2">
            {documentElements.map((el) => (
              <li key={el} className="text-body-md font-body-md text-on-surface-variant pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-outline">
                {el}
              </li>
            ))}
          </ul>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="flex flex-wrap gap-xs">
          {documentExamples.map((ex) => (
            <span key={ex} className="rounded-full border border-outline-variant bg-surface-container-low px-3 py-1 text-label-md font-label-md text-on-surface">
              {ex}
            </span>
          ))}
        </div>
      </ScrollReveal>

      <Callout variant="warning" title="Más allá de «archivo.pdf»">
        El SGD no debe considerar el documento solamente como un nombre de archivo, sino como un objeto documental
        relacionado con un proceso, con contenido, contexto, metadatos, relaciones y estado propios.
      </Callout>
    </section>
  );
}
