import { useState } from "react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { ZigzagFlow } from "../../../../components/common/ZigzagFlow";
import { MultiSelectCheck } from "../../../../components/common/MultiSelectCheck";
import { documentExchangeFlow, documentExchangeOptions, documentExchangeQuestion } from "../week08.data";

export function DocumentExchangeSection() {
  const [answered, setAnswered] = useState(false);

  return (
    <section id="intercambio-documentos" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Intercambio de documentos" title="Qué ocurre cuando un documento viaja de una entidad a otra" />

      <ZigzagFlow steps={documentExchangeFlow} perRow={6} />

      <p className="text-body-lg font-body-lg font-semibold text-on-surface">{documentExchangeQuestion}</p>

      <MultiSelectCheck items={documentExchangeOptions} onComplete={() => setAnswered(true)} />

      {answered && (
        <Callout variant="info" title="Todo, menos la apariencia">
          Casi todo lo relacionado con el contenido, el contexto y la gestión del documento debe conservarse. El
          diseño visual, en cambio, no forma parte de lo que hace a un documento gestionable como evidencia.
        </Callout>
      )}
    </section>
  );
}
