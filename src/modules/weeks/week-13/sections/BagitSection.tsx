import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { bagitComponents, bagitDefinition, bagitExample, bagitScopeDisclaimer, bagitVerificationNote } from "../week13.data";

export function BagitSection() {
  return (
    <section id="bagit" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="BagIt" title="Empaquetar y transferir contenidos de forma verificable" description={bagitDefinition} />

      <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-md font-mono text-caption font-caption text-on-surface space-y-0.5">
        <p>mi_paquete/</p>
        {bagitComponents.map((c) => (
          <p key={c.id} className="pl-md">{c.code}</p>
        ))}
      </div>

      <div className="space-y-xs">
        {bagitComponents.map((c) => (
          <div key={c.id} className="rounded-lg border border-outline-variant bg-surface-container-low p-md">
            <code className="rounded bg-secondary-container/40 px-1.5 py-0.5 text-caption font-caption font-bold text-on-secondary-container">{c.code}</code>
            <span className="ml-2 text-label-md font-label-md font-bold text-on-surface">{c.label}</span>
            <p className="text-body-md font-body-md text-on-surface-variant mt-1">{c.description}</p>
          </div>
        ))}
      </div>

      <div className="rounded-lg bg-secondary-container/30 p-md">
        <p className="text-label-md font-label-md font-bold text-on-surface mb-1">Ejemplo</p>
        <p className="text-body-md font-body-md text-on-surface">{bagitExample}</p>
      </div>

      <p className="text-body-md font-body-md text-on-surface max-w-3xl">{bagitVerificationNote}</p>

      <Callout variant="warning" title="BagIt no sustituye a OAIS, PREMIS, METS ni Dublin Core">
        {bagitScopeDisclaimer}
      </Callout>
    </section>
  );
}
