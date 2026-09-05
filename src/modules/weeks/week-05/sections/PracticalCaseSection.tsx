import { SectionHeading } from "../../../../components/common/SectionHeading";
import { SingleChoiceCheck } from "../../../../components/common/SingleChoiceCheck";
import { practicalCase } from "../week05.data";

export function PracticalCaseSection() {
  return (
    <section id="caso-practico" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Caso práctico" title="Un documento con firma, pero con dudas" />
      <SingleChoiceCheck
        prompt={practicalCase.scenario + "\n\n" + practicalCase.question}
        options={practicalCase.options}
        correctId={practicalCase.correctId}
        feedback={practicalCase.feedback}
      />
    </section>
  );
}
