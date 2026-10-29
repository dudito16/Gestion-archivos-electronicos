import { Badge } from "../../../../components/ui/badge";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import {
  formatValidationAbsoluteClaimWarning,
  formatValidationCase,
  formatValidationDefinition,
  formatValidationVsIdentification,
} from "../week13.data";

export function FormatValidationSection() {
  return (
    <section id="validacion-formatos" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Validación de formatos" title="Identificar no es lo mismo que validar" description={formatValidationDefinition} />

      <p className="text-body-md font-body-md text-on-surface max-w-3xl">{formatValidationVsIdentification}</p>

      <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg space-y-sm">
        <Badge variant="tertiary">🧪 Caso simulado</Badge>
        <p className="text-label-md font-label-md font-bold text-on-surface">{formatValidationCase.label}</p>
        <p className="text-body-md font-body-md text-on-surface">{formatValidationCase.description}</p>
      </div>

      <Callout variant="warning" title="Identificar no demuestra validez ni conformidad">
        {formatValidationAbsoluteClaimWarning}
      </Callout>
    </section>
  );
}
