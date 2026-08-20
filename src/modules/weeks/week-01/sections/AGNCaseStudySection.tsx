import { SectionHeading } from "../../../../components/common/SectionHeading";
import { ProcessSteps, type ProcessStepItem } from "../../../../components/common/ProcessSteps";
import { Callout } from "../../../../components/common/Callout";
import { agnCaseSteps } from "../week01.data";

export function AGNCaseStudySection() {
  const steps: ProcessStepItem[] = agnCaseSteps.map((step) => ({
    id: step.id,
    order: step.order,
    title: step.action,
    fields: [
      { label: "Actor", value: step.actor },
      { label: "Documento", value: step.document },
      { label: "Resultado", value: step.result },
      { label: "Tiempo", value: step.time },
    ],
  }));

  return (
    <section id="caso-practico-agn" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="Caso práctico"
        title="Expediente institucional: transferencia documental"
        description="Sigue un expediente de transferencia documental, paso a paso, desde su ingreso hasta su archivo definitivo."
      />
      <Callout variant="info" title="Caso didáctico contextualizado al AGN">
        Este flujo es un caso didáctico construido con fines pedagógicos; no representa necesariamente la
        implementación interna real del Sistema de Gestión Documental del AGN.
      </Callout>
      <ProcessSteps steps={steps} />
    </section>
  );
}
