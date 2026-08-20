import { SectionHeading } from "../../../../components/common/SectionHeading";
import { SingleChoiceCheck } from "../../../../components/common/SingleChoiceCheck";
import { priorKnowledgeQuestion } from "../week01.data";
import { useWeek01Progress } from "../week01Progress";

/** Opens the module with a scenario question rather than a definition — activates prior knowledge before the theory. */
export function PriorKnowledgeSection() {
  const { markComplete } = useWeek01Progress();

  return (
    <section id="activacion" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="Antes de empezar"
        title="Activación de conocimientos previos"
        description="Responde con lo que ya sabes de Gestión de Archivos Electrónicos I. No hay una única forma correcta de razonarlo — lo importante es el análisis."
      />
      <SingleChoiceCheck
        prompt={priorKnowledgeQuestion.prompt}
        options={priorKnowledgeQuestion.options}
        correctId={priorKnowledgeQuestion.correctId}
        feedback={priorKnowledgeQuestion.feedback}
        onAnswer={() => markComplete("activacion")}
      />
    </section>
  );
}
