import { Database } from "lucide-react";
import { ScrollReveal } from "../../../../components/common/ScrollReveal";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { getIcon } from "../../../../utils/getIcon";
import { sgdConvergingElements, sgdDefinition } from "../week02.data";

export function SGDDefinitionSection() {
  return (
    <section id="sgd" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Concepto central" title="¿Qué es un Sistema de Gestión Documental?" />

      <ScrollReveal>
        <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg shadow-sm flex items-start gap-sm">
          <Database className="text-primary-container shrink-0 mt-1" size={24} />
          <p className="text-body-lg font-body-lg text-on-surface">{sgdDefinition}</p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <p className="text-label-md font-label-md font-semibold text-on-surface-variant text-center">
          Un SGD no es solamente software.
        </p>
      </ScrollReveal>

      <div className="flex flex-col items-center gap-sm">
        <div className="flex flex-wrap justify-center gap-xs max-w-2xl">
          {sgdConvergingElements.map((el, index) => {
            const Icon = getIcon(el.icon);
            return (
              <ScrollReveal key={el.id} delay={index * 0.06} direction="none">
                <span className="flex items-center gap-1 rounded-full border border-outline-variant bg-surface-container-low px-3 py-1.5 text-label-md font-label-md text-on-surface">
                  <Icon size={15} className="text-primary-container" />
                  {el.label}
                </span>
              </ScrollReveal>
            );
          })}
        </div>
        <ScrollReveal delay={0.3}>
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-container text-on-primary shadow-md">
            <Database size={28} />
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.35}>
          <span className="text-label-md font-label-md font-bold text-on-surface uppercase tracking-wider">
            Sistema de Gestión Documental
          </span>
        </ScrollReveal>
      </div>
    </section>
  );
}
