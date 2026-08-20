import { SectionHeading } from "../../../../components/common/SectionHeading";
import { InstantQuiz } from "../../../../components/common/InstantQuiz";
import { quizQuestions } from "../week01.data";
import { useWeek01Progress } from "../week01Progress";

export function QuizSection() {
  const { markComplete } = useWeek01Progress();

  return (
    <section id="quiz" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="Autoevaluación"
        title="Quiz: Gestión de Archivos Electrónicos"
        description="Diez preguntas para consolidar lo aprendido. Cada respuesta incluye una explicación."
      />
      <InstantQuiz questions={quizQuestions} onComplete={() => markComplete("quiz")} />
    </section>
  );
}
