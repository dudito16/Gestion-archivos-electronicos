import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { SingleChoiceCheck } from "../../../../components/common/SingleChoiceCheck";
import { priorKnowledgeBridge, priorKnowledgeIntro, priorKnowledgeQuestions } from "../week13.data";

/** "Saberes previos" — brief, non-graded reflection questions before new content. */
export function PriorKnowledgeSection() {
  return (
    <section id="saberes-previos" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Saberes previos" title="Antes de empezar, ¿qué recuerdas?" description={priorKnowledgeIntro} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-md">
        {priorKnowledgeQuestions.map((q) => (
          <SingleChoiceCheck key={q.id} prompt={q.prompt} options={q.options} correctId={q.correctId} feedback={q.feedback} />
        ))}
      </div>

      <Callout variant="info" title="El puente hacia esta semana">
        {priorKnowledgeBridge}
      </Callout>
    </section>
  );
}
