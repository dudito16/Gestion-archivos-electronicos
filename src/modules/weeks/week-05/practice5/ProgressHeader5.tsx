import { Progress } from "../../../../components/ui/progress";
import { MAX_SCORE_5, TOTAL_QUESTIONS_5 } from "./practice5.data";

interface Props {
  currentIndex: number;
  answeredCount: number;
  score: number;
}

export function ProgressHeader5({ currentIndex, answeredCount, score }: Props) {
  const percent = Math.round((currentIndex / TOTAL_QUESTIONS_5) * 100);

  return (
    <div className="sticky top-16 z-30 -mx-md md:-mx-lg lg:-mx-xl px-md md:px-lg lg:px-xl py-sm bg-surface-container-lowest/95 backdrop-blur-sm border-b border-outline-variant space-y-1.5">
      <div className="flex items-center justify-between flex-wrap gap-xs">
        <span className="text-label-md font-label-md font-bold uppercase tracking-wider text-primary-container">
          Práctica calificada 5 · Pregunta {currentIndex + 1} de {TOTAL_QUESTIONS_5}
        </span>
        <span className="text-label-md font-label-md font-semibold text-on-surface">
          Respondidas: {answeredCount}/{TOTAL_QUESTIONS_5} · Puntaje: {score} / {MAX_SCORE_5}
        </span>
      </div>
      <Progress value={percent} />
    </div>
  );
}
