import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { sourceCategories } from "../integrativeProject.data";

export function FuentesSection() {
  return (
    <section id="fuentes" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Recursos y fuentes" title="Fuentes recomendadas" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
        {sourceCategories.map((cat) => (
          <div key={cat.id} className="rounded-lg border border-outline-variant bg-surface-container-lowest p-md">
            <p className="text-label-md font-label-md font-bold text-on-surface">{cat.label}</p>
            <p className="text-caption font-caption text-on-surface-variant mt-1">{cat.note}</p>
          </div>
        ))}
      </div>

      <Callout variant="warning" title="Sobre los enlaces">
        No se completa esta sección con enlaces inventados. Si el equipo incluye enlaces, deben ser URLs reales que
        ya existan en el proyecto o fuentes que puedan verificarse — nunca fuentes presentadas como consultadas sin
        haberlo sido.
      </Callout>
    </section>
  );
}
