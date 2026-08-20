import { SectionHeading } from "../../../../components/common/SectionHeading";
import { SingleChoiceCheck } from "../../../../components/common/SingleChoiceCheck";
import { activity4Case } from "../week03.data";

export function Activity4Section() {
  return (
    <section id="actividad-4" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Actividad 4" title="Clasificación" />
      <SingleChoiceCheck
        prompt={activity4Case.prompt}
        options={activity4Case.options}
        correctId={activity4Case.correctId}
        feedback={activity4Case.feedback}
      />
    </section>
  );
}
