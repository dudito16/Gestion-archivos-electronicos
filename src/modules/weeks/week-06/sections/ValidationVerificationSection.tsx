import { ScrollReveal } from "../../../../components/common/ScrollReveal";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { validationVsVerification } from "../week06.data";

export function ValidationVerificationSection() {
  const { verification, validation } = validationVsVerification;

  return (
    <section id="validacion-verificacion" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="Validación y verificación"
        title="Dos preguntas distintas ante una firma"
        description="Conceptual y práctico: no una definición legal absoluta."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
        <ScrollReveal>
          <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg space-y-sm h-full">
            <p className="text-headline-md font-headline-md text-on-surface">{verification.label}</p>
            <p className="text-caption font-caption text-primary-container italic">{verification.question}</p>
            <p className="text-body-md font-body-md text-on-surface-variant">{verification.description}</p>
            <p className="text-caption font-caption text-on-surface-variant"><span className="font-semibold text-on-surface">Ejemplo: </span>{verification.example}</p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg space-y-sm h-full">
            <p className="text-headline-md font-headline-md text-on-surface">{validation.label}</p>
            <p className="text-caption font-caption text-primary-container italic">{validation.question}</p>
            <p className="text-body-md font-body-md text-on-surface-variant">{validation.description}</p>
            <p className="text-caption font-caption text-on-surface-variant"><span className="font-semibold text-on-surface">Ejemplo: </span>{validation.example}</p>
          </div>
        </ScrollReveal>
      </div>

      <Callout variant="info" title="Complementarias, no intercambiables">
        Un documento puede pasar la verificación técnica y, aun así, no ser válido para un trámite específico (por
        ejemplo, si el certificado está vencido o revocado). Verificar y validar responden preguntas distintas.
      </Callout>
    </section>
  );
}
