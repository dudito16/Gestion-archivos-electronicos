import { CheckCircle2, FileSignature, Gavel, Layers, ListChecks, ScrollText } from "lucide-react";
import { ScrollReveal } from "../../../../components/common/ScrollReveal";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { FlowChain } from "../../../../components/common/FlowChain";
import { Callout } from "../../../../components/common/Callout";
import { electronicDocument } from "../week01.data";

export function ElectronicDocumentSection() {
  const doc = electronicDocument;

  return (
    <section id="documento-electronico" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Los cuatro conceptos · 1 de 4" title="Documento Electrónico" />

      <ScrollReveal>
        <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg shadow-sm space-y-lg">
          <div className="flex items-start gap-sm">
            <FileSignature className="text-primary-container shrink-0 mt-1" size={24} />
            <p className="text-body-lg font-body-lg text-on-surface">{doc.definition}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
            <InfoBlock icon={CheckCircle2} title="Características" items={doc.characteristics} />
            <InfoBlock icon={Layers} title="Elementos" items={doc.elements} />
            <InfoBlock icon={ScrollText} title="Normativa aplicable" items={doc.normativa} />
            <InfoBlock icon={ListChecks} title="Casos de uso" items={doc.useCases} />
          </div>

          <div className="flex items-start gap-sm rounded-lg border-l-4 border-primary-container bg-secondary-container/30 p-md">
            <Gavel className="text-primary-container shrink-0 mt-1" size={20} />
            <div>
              <p className="text-label-md font-label-md font-semibold text-on-surface mb-1">Valor jurídico</p>
              <p className="text-body-md font-body-md text-on-surface-variant">{doc.legalValue}</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="space-y-sm">
          <p className="text-label-md font-label-md font-semibold text-on-surface-variant">
            Ejemplo didáctico: ciclo de un memorando generado en un entorno institucional
          </p>
          <FlowChain steps={doc.agnFlow} />
          <Callout variant="info" title="Caso didáctico">
            Caso didáctico basado en el contexto de gestión documental institucional del AGN; no describe un flujo
            interno real ni certificado.
          </Callout>
        </div>
      </ScrollReveal>
    </section>
  );
}

function InfoBlock({ icon: Icon, title, items }: { icon: typeof CheckCircle2; title: string; items: string[] }) {
  return (
    <div>
      <div className="flex items-center gap-xs mb-xs">
        <Icon className="text-primary-container" size={18} />
        <h4 className="text-label-md font-label-md font-semibold text-on-surface">{title}</h4>
      </div>
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item} className="text-body-md font-body-md text-on-surface-variant pl-5 relative before:content-['—'] before:absolute before:left-0 before:text-outline">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
