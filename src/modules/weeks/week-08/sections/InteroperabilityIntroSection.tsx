import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { interopDimensionsIntro, interopFullDefinition, interopSimpleDefinition } from "../week08.data";

export function InteroperabilityIntroSection() {
  return (
    <section id="que-es-interoperabilidad" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="¿Qué es interoperabilidad?" title={'Más que "dos sistemas que se conectan"'} />

      <div className="rounded-lg border border-outline-variant bg-surface-container-low p-md">
        <p className="text-caption font-caption font-bold uppercase tracking-wider text-on-surface-variant mb-1">Explicación insuficiente</p>
        <p className="text-body-lg font-body-lg text-on-surface-variant line-through decoration-error">{interopSimpleDefinition}</p>
      </div>

      <Callout variant="info" title="Definición completa">
        {interopFullDefinition}
      </Callout>

      <p className="text-body-md font-body-md text-on-surface max-w-3xl">{interopDimensionsIntro}</p>
    </section>
  );
}
