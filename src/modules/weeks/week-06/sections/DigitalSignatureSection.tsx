import { ScrollReveal } from "../../../../components/common/ScrollReveal";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { FlowChain } from "../../../../components/common/FlowChain";
import { Callout } from "../../../../components/common/Callout";
import { digitalSignatureFlow, digitalSignatureVerifyFlow } from "../week06.data";

export function DigitalSignatureSection() {
  return (
    <section id="firma-digital" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="Firma digital"
        title="Un mecanismo criptográfico dentro de una infraestructura de confianza"
        description="Vincula un documento con un certificado y permite comprobar, técnicamente, su origen e integridad."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
        <div className="rounded-lg border border-outline-variant bg-surface-container-low p-md">
          <p className="text-label-md font-label-md font-semibold text-on-surface mb-1">¿Para qué sirve?</p>
          <p className="text-body-md font-body-md text-on-surface-variant">
            Permite verificar quién firmó (identidad, a través del certificado) y detectar si el documento fue
            alterado después de firmarse (integridad).
          </p>
        </div>
        <div className="rounded-lg border border-outline-variant bg-surface-container-low p-md">
          <p className="text-label-md font-label-md font-semibold text-on-surface mb-1">Relación con el certificado</p>
          <p className="text-body-md font-body-md text-on-surface-variant">
            La firma se genera con una clave privada asociada a un certificado; ese certificado es lo que permite
            atribuir la firma a una identidad concreta.
          </p>
        </div>
      </div>

      <div>
        <p className="text-label-md font-label-md font-bold uppercase tracking-wider text-primary-container mb-sm">Proceso conceptual: firmar</p>
        <ScrollReveal>
          <FlowChain steps={digitalSignatureFlow} />
        </ScrollReveal>
      </div>

      <div>
        <p className="text-label-md font-label-md font-bold uppercase tracking-wider text-primary-container mb-sm">Proceso conceptual: verificar</p>
        <ScrollReveal>
          <FlowChain steps={digitalSignatureVerifyFlow} />
        </ScrollReveal>
      </div>

      <Callout variant="info" title="El hash, de forma conceptual">
        Un "valor resumen" (hash) es una huella digital del documento: si el contenido cambia, ese valor cambia
        también, lo que permite detectar alteraciones. No profundizaremos en su funcionamiento matemático ni en
        checksum/fixity — eso corresponde a contenidos posteriores del curso.
      </Callout>
    </section>
  );
}
