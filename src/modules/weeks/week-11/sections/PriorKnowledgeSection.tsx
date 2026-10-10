import { SectionHeading } from "../../../../components/common/SectionHeading";
import { SingleChoiceCheck } from "../../../../components/common/SingleChoiceCheck";
import { priorKnowledgeIntro, priorKnowledgeQuestions } from "../week11.data";

/** "Recuperación de saberes previos" — brief, non-graded reflection questions before new content. */
export function PriorKnowledgeSection() {
  return (
    <section id="saberes-previos" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Recuperación de saberes previos" title="Antes de empezar, ¿qué recuerdas?" description={priorKnowledgeIntro} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-md">
        {priorKnowledgeQuestions.map((q) => (
          <SingleChoiceCheck key={q.id} prompt={q.prompt} options={q.options} correctId={q.correctId} feedback={q.feedback} />
        ))}
      </div>
    </section>
  );
}
