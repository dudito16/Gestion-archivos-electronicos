import { Workflow } from "lucide-react";
import { ScrollReveal } from "../../../../components/common/ScrollReveal";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { FlowChain } from "../../../../components/common/FlowChain";
import { recordsManagementDefinition, recordsManagementLink } from "../week05.data";

export function RecordsManagementSection() {
  return (
    <section id="gestion-documentos" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Concepto central" title="Gestión de documentos" />

      <ScrollReveal>
        <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg shadow-sm flex items-start gap-sm">
          <Workflow className="text-primary-container shrink-0 mt-1" size={24} />
          <p className="text-body-lg font-body-lg text-on-surface">{recordsManagementDefinition}</p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <FlowChain steps={recordsManagementLink} />
      </ScrollReveal>
    </section>
  );
}
