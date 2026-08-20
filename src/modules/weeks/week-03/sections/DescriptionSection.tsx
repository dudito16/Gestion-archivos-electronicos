import { ArrowDown } from "lucide-react";
import { ScrollReveal } from "../../../../components/common/ScrollReveal";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { descriptionElements, diffTableRows } from "../week03.data";

export function DescriptionSection() {
  return (
    <section id="descripcion" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="Organización documental"
        title="Descripción"
        description="La descripción permite representar información sobre los documentos y agrupaciones documentales para facilitar su identificación, comprensión y recuperación."
      />

      <ScrollReveal>
        <div className="flex flex-col items-center gap-sm">
          <span className="rounded-lg border border-outline-variant bg-surface-container-low px-4 py-2 text-label-md font-label-md font-semibold text-on-surface">
            Expediente
          </span>
          <ArrowDown className="text-outline" size={18} />
          <div className="flex flex-wrap justify-center gap-xs max-w-2xl">
            {descriptionElements.map((el) => (
              <span key={el} className="rounded-full bg-secondary-container px-3 py-1.5 text-label-md font-label-md text-on-secondary-container">
                {el}
              </span>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <Callout variant="info" title="Alcance de esta semana">
        Esta semana solo introduce la función de la descripción dentro del SGD; las normas descriptivas se
        desarrollarán en semanas posteriores.
      </Callout>

      <div className="pt-sm">
        <p className="text-label-md font-label-md font-bold uppercase tracking-wider text-on-surface-variant mb-sm">
          Diferencia clave
        </p>
        <div className="overflow-x-auto rounded-xl border border-outline-variant bg-surface-container-lowest shadow-sm">
          <table className="w-full min-w-[28rem] border-collapse text-left">
            <thead>
              <tr className="bg-surface-container-low">
                <th className="p-sm text-label-md font-label-md text-on-surface-variant">Concepto</th>
                <th className="p-sm text-label-md font-label-md text-primary-container">Pregunta</th>
              </tr>
            </thead>
            <tbody>
              {diffTableRows.map((row) => (
                <tr key={row.concept} className="border-t border-outline-variant">
                  <th scope="row" className="p-sm text-label-md font-label-md font-semibold text-on-surface">
                    {row.concept}
                  </th>
                  <td className="p-sm text-body-md font-body-md text-on-surface-variant">{row.question}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
