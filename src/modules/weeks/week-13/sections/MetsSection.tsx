import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { metsAmdSecNote, metsDefinition, metsDisclaimer, metsExample, metsSections } from "../week13.data";

export function MetsSection() {
  return (
    <section id="mets" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="METS" title="Estructurar objetos digitales complejos" description={metsDefinition} />

      <div className="space-y-xs">
        {metsSections.map((s) => (
          <div key={s.id} className="rounded-lg border border-outline-variant bg-surface-container-lowest p-md space-y-1">
            <div className="flex items-center gap-xs flex-wrap">
              <code className="rounded bg-secondary-container/40 px-2 py-0.5 text-caption font-caption font-bold text-on-secondary-container">{s.code}</code>
              <p className="text-label-md font-label-md font-bold text-on-surface">{s.label}</p>
            </div>
            <p className="text-body-md font-body-md text-on-surface-variant">{s.description}</p>
            <p className="text-caption font-caption text-on-surface italic">Ejemplo: {s.example}</p>
          </div>
        ))}
      </div>

      <p className="text-body-md font-body-md text-on-surface-variant max-w-3xl">{metsAmdSecNote}</p>

      <div className="rounded-lg bg-secondary-container/30 p-md">
        <p className="text-label-md font-label-md font-bold text-on-surface mb-1">Ejemplo integrador</p>
        <p className="text-body-md font-body-md text-on-surface">{metsExample}</p>
      </div>

      <Callout variant="warning" title="No es de uso universal ni obligatorio">
        {metsDisclaimer}
      </Callout>
    </section>
  );
}
