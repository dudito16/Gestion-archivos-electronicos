import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { statePeruDisclaimer, statePeruIntro } from "../week08.data";

export function StatePeruInteropSection() {
  return (
    <section id="estado-peruano" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Interoperabilidad en el Estado peruano" title="Parte de la transformación digital del Estado" />

      <p className="text-body-md font-body-md text-on-surface max-w-3xl">{statePeruIntro}</p>

      <Callout variant="info" title="Aviso académico">
        {statePeruDisclaimer}
      </Callout>
    </section>
  );
}
