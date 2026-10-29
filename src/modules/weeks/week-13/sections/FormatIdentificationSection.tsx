import { Badge } from "../../../../components/ui/badge";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import {
  formatIdentificationCase,
  formatIdentificationDefinition,
  formatIdentificationDisclaimer,
  formatIdentificationDistinctions,
} from "../week13.data";

export function FormatIdentificationSection() {
  return (
    <section id="identificacion-formatos" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Identificación de formatos" title="¿Qué formato tiene realmente este archivo?" description={formatIdentificationDefinition} />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-sm">
        {formatIdentificationDistinctions.map((d) => (
          <div key={d.id} className="rounded-lg border border-outline-variant bg-surface-container-lowest p-md">
            <p className="text-label-md font-label-md font-bold text-on-surface mb-1">{d.label}</p>
            <p className="text-caption font-caption text-on-surface-variant">{d.description}</p>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg space-y-sm">
        <Badge variant="tertiary">🧪 Caso simulado</Badge>
        <p className="text-label-md font-label-md font-bold text-on-surface">{formatIdentificationCase.label}</p>
        <p className="text-body-md font-body-md text-on-surface">{formatIdentificationCase.description}</p>
      </div>

      <Callout variant="warning" title="Resultados simulados">
        {formatIdentificationDisclaimer}
      </Callout>
    </section>
  );
}
