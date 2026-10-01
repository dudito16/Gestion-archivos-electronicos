import { useState } from "react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { MultiSelectCheck } from "../../../../components/common/MultiSelectCheck";
import { whyItMattersCase, whyItMattersClosing, whyItMattersOptions, whyItMattersQuestion } from "../week07.data";

export function WhySecuritySection() {
  const [answered, setAnswered] = useState(false);

  return (
    <section id="por-que-importa" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="¿Por qué importa la seguridad?" title="Un único incidente puede afectar varios atributos a la vez" />

      <p className="rounded-lg border border-outline-variant bg-surface-container-low p-md text-body-md font-body-md text-on-surface italic">
        {whyItMattersCase}
      </p>

      <p className="text-body-lg font-body-lg font-semibold text-on-surface">{whyItMattersQuestion}</p>

      <MultiSelectCheck items={whyItMattersOptions} onComplete={() => setAnswered(true)} />

      {answered && (
        <Callout variant="info" title="Un incidente, varios problemas">
          {whyItMattersClosing}
        </Callout>
      )}
    </section>
  );
}
