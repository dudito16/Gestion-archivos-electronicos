import { SectionHeading } from "../../../../components/common/SectionHeading";
import { SingleChoiceCheck } from "../../../../components/common/SingleChoiceCheck";
import { analysisQuestion } from "../week04.data";

export function AnalysisActivitySection() {
  return (
    <section id="actividad-analisis" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Actividad de análisis" title={analysisQuestion.prompt} />
      <SingleChoiceCheck
        prompt="Elige una opción."
        options={analysisQuestion.options}
        correctId={analysisQuestion.correctId}
        feedback={analysisQuestion.feedback}
      />
    </section>
  );
}
