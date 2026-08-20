import { ScrollReveal } from "../../../../components/common/ScrollReveal";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { organizationComparison } from "../week03.data";

export function OrganizationSection() {
  return (
    <section id="organizacion" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Organización documental" title="Clasificación vs. organización" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
        <ScrollReveal direction="left">
          <div className="h-full rounded-lg border border-outline-variant bg-surface-container-lowest p-md">
            <p className="text-label-md font-label-md font-bold text-on-surface mb-1">Clasificación</p>
            <p className="text-body-md font-body-md text-on-surface-variant italic">¿Dónde pertenece?</p>
          </div>
        </ScrollReveal>
        <ScrollReveal direction="right">
          <div className="h-full rounded-lg border border-primary-container/50 bg-secondary-container/20 p-md">
            <p className="text-label-md font-label-md font-bold text-primary-container mb-1">Organización</p>
            <p className="text-body-md font-body-md text-on-surface-variant italic">¿Cómo mantenemos ordenados y relacionados los documentos?</p>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={0.15}>
        <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg">
          <p className="text-label-md font-label-md font-semibold text-on-surface-variant mb-sm">
            Ejemplo: {organizationComparison.document}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-sm">
            <div>
              <p className="text-caption font-caption font-bold uppercase tracking-wider text-on-surface-variant">Clasificación</p>
              <p className="text-body-md font-body-md text-on-surface mt-1">{organizationComparison.classification}</p>
            </div>
            <div>
              <p className="text-caption font-caption font-bold uppercase tracking-wider text-primary-container">Organización</p>
              <p className="text-body-md font-body-md text-on-surface mt-1">{organizationComparison.organization}</p>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
