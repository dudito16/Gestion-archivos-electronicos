import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { digitizationDistinctions, digitizationIntro } from "../week08.data";

export function DigitizationIntroSection() {
  return (
    <section id="digitalizacion" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Digitalización" title="Interoperar no basta si el documento se digitalizó mal" />

      <Callout variant="warning" title="Transición">
        {digitizationIntro}
      </Callout>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-sm">
        <div className="rounded-lg border border-primary-container bg-secondary-container/30 p-md">
          <p className="text-label-md font-label-md font-bold text-on-surface mb-1">Digitalización</p>
          <p className="text-caption font-caption text-on-surface-variant">{digitizationDistinctions.digitalizacion}</p>
        </div>
        <div className="rounded-lg border border-outline-variant bg-surface-container-lowest p-md">
          <p className="text-label-md font-label-md font-bold text-on-surface mb-1">Documento digital</p>
          <p className="text-caption font-caption text-on-surface-variant">{digitizationDistinctions.documentoDigital}</p>
        </div>
        <div className="rounded-lg border border-outline-variant bg-surface-container-lowest p-md">
          <p className="text-label-md font-label-md font-bold text-on-surface mb-1">Documento digitalizado</p>
          <p className="text-caption font-caption text-on-surface-variant">{digitizationDistinctions.documentoDigitalizado}</p>
        </div>
      </div>

      <p className="text-caption font-caption text-on-surface-variant italic">Esta distinción se trabajó en la Semana 1.</p>
    </section>
  );
}
