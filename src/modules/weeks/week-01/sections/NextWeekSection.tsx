import { SectionHeading } from "../../../../components/common/SectionHeading";
import { WeekConnector } from "../../../../components/common/WeekConnector";
import { nextWeekData } from "../week01.data";

export function NextWeekSection() {
  return (
    <section id="siguiente-semana" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="¿Qué sigue?" title={`Semana ${nextWeekData.nextWeekNumber}: ${nextWeekData.nextWeekTitle}`} />

      <WeekConnector
        top={{ weekLabel: "Semana 1", question: nextWeekData.currentQuestion, answers: nextWeekData.currentAnswer }}
        bottom={{ weekLabel: `Semana ${nextWeekData.nextWeekNumber}`, question: nextWeekData.nextQuestion, title: nextWeekData.nextWeekTitle }}
        cta={{ label: `Ir a la Semana ${nextWeekData.nextWeekNumber}`, href: `/semana/${nextWeekData.nextWeekNumber}` }}
      />
    </section>
  );
}
