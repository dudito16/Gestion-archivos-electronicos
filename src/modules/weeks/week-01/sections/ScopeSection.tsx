import { SectionHeading } from "../../../../components/common/SectionHeading";
import { ProcessSteps, type ProcessStepItem } from "../../../../components/common/ProcessSteps";
import { scopeStages } from "../week01.data";

export function ScopeSection() {
  const steps: ProcessStepItem[] = scopeStages.map((stage) => ({
    id: stage.id,
    order: stage.order,
    title: stage.title,
    subtitle: stage.whatHappens,
    fields: [
      { label: "Quién participa", value: stage.who },
      { label: "Documentos", value: stage.documents },
      { label: "Metadatos generados", value: stage.metadata },
    ],
  }));

  return (
    <section id="alcance" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="Alcance"
        title="Nueve etapas, un mismo expediente"
        description="La gestión documental electrónica cubre todo el recorrido del documento, no solo su firma. Explora qué ocurre, quién interviene y qué metadatos se generan en cada etapa."
      />
      <ProcessSteps steps={steps} />
    </section>
  );
}
