import { ScrollReveal } from "../../../../components/common/ScrollReveal";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { ZigzagFlow } from "../../../../components/common/ZigzagFlow";
import { Callout } from "../../../../components/common/Callout";
import { authorityFlow } from "../week06.data";

export function CertificateAuthoritySection() {
  return (
    <section id="autoridad-certificadora" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="Autoridad certificadora"
        title="¿Quién respalda un certificado digital?"
        description="Una autoridad certificadora participa en la emisión y gestión de certificados dentro del modelo de confianza correspondiente."
      />

      <ScrollReveal>
        <ZigzagFlow steps={authorityFlow} perRow={5} />
      </ScrollReveal>

      <Callout variant="info" title="Confianza, no magia">
        La autoridad certificadora es la que permite que un tercero confíe en que un certificado realmente
        corresponde a la identidad que declara. No inventaremos nombres de autoridades específicas: lo importante
        aquí es comprender el rol que cumplen dentro de la infraestructura de confianza.
      </Callout>
    </section>
  );
}
