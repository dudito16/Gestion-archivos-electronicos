import { ArrowDown } from "lucide-react";
import { ScrollReveal } from "../../../../components/common/ScrollReveal";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { finalDiagramGroup } from "../week04.data";

export function FinalDiagramSection() {
  return (
    <section id="diagrama-final" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Síntesis" title="Diagrama central" />

      <ScrollReveal>
        <div className="flex flex-col items-center gap-1">
          <span className="rounded-lg border border-outline-variant bg-surface-container-low px-4 py-2 text-label-md font-label-md font-semibold text-on-surface">
            Documento
          </span>
          <ArrowDown className="text-outline" size={16} />
          <span className="rounded-lg bg-primary-container px-4 py-2 text-label-md font-label-md font-bold text-on-primary uppercase tracking-wider">
            Metadatos
          </span>
          <ArrowDown className="text-outline" size={16} />
          <div className="w-full max-w-sm rounded-xl border border-outline-variant bg-surface-container-lowest p-md">
            <ul className="space-y-1">
              {finalDiagramGroup.map((item) => (
                <li key={item} className="text-body-md font-body-md text-on-surface text-center">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <ArrowDown className="text-outline" size={16} />
          <span className="rounded-lg border border-outline-variant bg-surface-container-low px-4 py-2 text-label-md font-label-md font-semibold text-on-surface">
            SGD
          </span>
          <ArrowDown className="text-outline" size={16} />
          <span className="rounded-lg border border-outline-variant bg-surface-container-low px-4 py-2 text-label-md font-label-md font-semibold text-on-surface">
            Ciclo de vida
          </span>
          <ArrowDown className="text-outline" size={16} />
          <span className="rounded-lg bg-secondary-container px-4 py-2 text-label-md font-label-md font-bold text-on-secondary-container uppercase tracking-wider">
            Archivo / Preservación
          </span>
        </div>
      </ScrollReveal>
    </section>
  );
}
