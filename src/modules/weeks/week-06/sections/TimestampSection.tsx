import { Plus, ArrowDown } from "lucide-react";
import { ScrollReveal } from "../../../../components/common/ScrollReveal";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { timestampIdeas } from "../week06.data";

export function TimestampSection() {
  return (
    <section id="sellado-tiempo" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Sellado de tiempo" title="Evidencia asociada a un momento determinado" />

      <ScrollReveal>
        <div className="flex flex-col items-center gap-1 max-w-sm mx-auto text-center">
          <div className="flex items-center gap-xs">
            <span className="rounded-lg border border-outline-variant bg-surface-container-lowest px-4 py-2 text-label-md font-label-md font-semibold text-on-surface">Documento</span>
            <Plus className="text-outline" size={16} />
            <span className="rounded-lg border border-outline-variant bg-surface-container-lowest px-4 py-2 text-label-md font-label-md font-semibold text-on-surface">Firma</span>
            <Plus className="text-outline" size={16} />
            <span className="rounded-lg border border-outline-variant bg-surface-container-lowest px-4 py-2 text-label-md font-label-md font-semibold text-on-surface">Evidencia temporal</span>
          </div>
          <ArrowDown className="text-outline" size={18} />
          <span className="rounded-lg bg-primary-container text-on-primary px-4 py-2 text-label-md font-label-md font-semibold">
            Mayor contexto para la verificación
          </span>
        </div>
      </ScrollReveal>

      <div className="space-y-xs">
        {timestampIdeas.map((idea) => (
          <div key={idea} className="rounded-lg border border-outline-variant bg-surface-container-low p-sm text-body-md font-body-md text-on-surface">
            {idea}
          </div>
        ))}
      </div>

      <Callout variant="warning" title="No confundir con la firma digital">
        La firma vincula al firmante con el documento a través del certificado; el sellado de tiempo aporta evidencia
        de un momento temporal, pero no dice nada sobre la identidad del firmante. No profundizaremos aquí en la
        infraestructura técnica que lo sostiene.
      </Callout>
    </section>
  );
}
