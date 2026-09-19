import { ScrollReveal } from "../../../../components/common/ScrollReveal";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { FlowChain } from "../../../../components/common/FlowChain";
import { Callout } from "../../../../components/common/Callout";
import { signatureAnalysis, signatureFlow } from "../integrativeProject.data";

const flowSteps = signatureFlow.map((label, i) => ({ id: `s${i}`, label }));

export function Paso8Firma() {
  return (
    <section id="paso-8-firma" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Caso modelo · Paso 08" title="Analicemos la firma" description="Nivel conceptual de la Semana 6 — sin criptografía avanzada." />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
        <div className="rounded-lg border border-outline-variant bg-surface-container-low p-md">
          <p className="text-label-md font-label-md font-semibold text-on-surface mb-1">Tipo de firma</p>
          <p className="text-body-md font-body-md text-on-surface-variant">{signatureAnalysis.type}</p>
        </div>
        <div className="rounded-lg border border-outline-variant bg-surface-container-low p-md">
          <p className="text-label-md font-label-md font-semibold text-on-surface mb-1">Quién firma</p>
          <p className="text-body-md font-body-md text-on-surface-variant">{signatureAnalysis.signer}</p>
        </div>
        <div className="rounded-lg border border-outline-variant bg-surface-container-low p-md">
          <p className="text-label-md font-label-md font-semibold text-on-surface mb-1">Qué evidencia queda</p>
          <p className="text-body-md font-body-md text-on-surface-variant">{signatureAnalysis.evidence}</p>
        </div>
        <div className="rounded-lg border border-outline-variant bg-surface-container-low p-md">
          <p className="text-label-md font-label-md font-semibold text-on-surface mb-1">Relación con el certificado</p>
          <p className="text-body-md font-body-md text-on-surface-variant">{signatureAnalysis.certificate}</p>
        </div>
        <div className="rounded-lg border border-outline-variant bg-surface-container-low p-md">
          <p className="text-label-md font-label-md font-semibold text-on-surface mb-1">Verificar la firma</p>
          <p className="text-body-md font-body-md text-on-surface-variant">{signatureAnalysis.verification}</p>
        </div>
        <div className="rounded-lg border border-outline-variant bg-surface-container-low p-md">
          <p className="text-label-md font-label-md font-semibold text-on-surface mb-1">Validar la firma</p>
          <p className="text-body-md font-body-md text-on-surface-variant">{signatureAnalysis.validation}</p>
        </div>
      </div>

      <ScrollReveal>
        <FlowChain steps={flowSteps} />
      </ScrollReveal>

      <Callout variant="warning" title="Contexto, no solo firma">
        {signatureAnalysis.contextNote}
      </Callout>
    </section>
  );
}
