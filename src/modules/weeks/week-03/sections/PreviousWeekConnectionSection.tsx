import { SectionHeading } from "../../../../components/common/SectionHeading";
import { WeekConnector } from "../../../../components/common/WeekConnector";
import { lifecycleConnectionToWeek2 } from "../week03.data";

export function PreviousWeekConnectionSection() {
  return (
    <section id="conexion-semana-2" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Recordemos" title="De la Semana 2 a la Semana 3" />
      <WeekConnector
        top={{ weekLabel: "Semana 2", question: lifecycleConnectionToWeek2.currentQuestion, answers: lifecycleConnectionToWeek2.currentAnswers }}
        bottom={{ weekLabel: "Semana 3", question: lifecycleConnectionToWeek2.nextQuestion }}
      />
    </section>
  );
}
