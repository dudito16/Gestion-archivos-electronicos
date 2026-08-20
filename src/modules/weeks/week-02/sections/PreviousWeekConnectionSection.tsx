import { SectionHeading } from "../../../../components/common/SectionHeading";
import { WeekConnector } from "../../../../components/common/WeekConnector";
import { weekConnectionFromWeek1 } from "../week02.data";

export function PreviousWeekConnectionSection() {
  return (
    <section id="conexion-semana-1" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Continuidad" title="De la Semana 1 a la Semana 2" />

      <WeekConnector
        top={{ weekLabel: "Semana 1", question: weekConnectionFromWeek1.currentQuestion, answers: weekConnectionFromWeek1.currentAnswers }}
        bottom={{ weekLabel: "Semana 2", question: weekConnectionFromWeek1.nextQuestion, title: weekConnectionFromWeek1.nextTitle }}
      />
    </section>
  );
}
