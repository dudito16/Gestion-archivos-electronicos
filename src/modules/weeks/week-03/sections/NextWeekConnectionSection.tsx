import { SectionHeading } from "../../../../components/common/SectionHeading";
import { WeekConnector } from "../../../../components/common/WeekConnector";
import { nextWeekConnection } from "../week03.data";

export function NextWeekConnectionSection() {
  return (
    <section id="conexion-semana-4" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="¿Qué veremos después?" title="De la Semana 3 a la Semana 4" />
      <WeekConnector
        top={{ weekLabel: "Semana 3", question: nextWeekConnection.currentQuestion, answers: nextWeekConnection.currentAnswers }}
        bottom={{ weekLabel: "Semana 4", question: nextWeekConnection.nextQuestion, title: nextWeekConnection.nextTitle }}
        cta={{ label: "Ir a la Semana 4", href: "/semana/4" }}
      />
    </section>
  );
}
