import { SectionHeading } from "../../../../components/common/SectionHeading";
import { WeekConnector } from "../../../../components/common/WeekConnector";
import { weekConnectionToWeek3 } from "../week02.data";

export function NextWeekConnectionSection() {
  return (
    <section id="conexion-semana-3" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="¿Qué sigue?" title="De la Semana 2 a la Semana 3" />

      <WeekConnector
        top={{ weekLabel: "Semana 2", question: weekConnectionToWeek3.currentQuestion }}
        bottom={{ weekLabel: "Semana 3", question: weekConnectionToWeek3.nextQuestion, answers: weekConnectionToWeek3.nextAnswers }}
        cta={{ label: "Ir a la Semana 3", href: "/semana/3" }}
      />
    </section>
  );
}
