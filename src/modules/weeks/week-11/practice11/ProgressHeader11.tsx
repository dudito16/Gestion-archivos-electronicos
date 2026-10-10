import { Progress } from "../../../../components/ui/progress";
import { MAX_SCORE_11, TOTAL_QUESTIONS_11 } from "./practice11.data";

interface Props {
  currentIndex: number;
  answeredCount: number;
  score: number;
}

export function ProgressHeader11({ currentIndex, answeredCount, score }: Props) {
  const percent = Math.round((currentIndex / TOTAL_QUESTIONS_11) * 100);
  const scorePercent = Math.round((score / MAX_SCORE_11) * 100);

  return (
    <div className="sticky top-16 z-30 -mx-md md:-mx-lg lg:-mx-xl px-md md:px-lg lg:px-xl py-sm bg-surface-container-lowest/95 backdrop-blur-sm border-b border-outline-variant space-y-1.5">
      <div className="flex items-center justify-between flex-wrap gap-xs">
        <span className="text-label-md font-label-md font-bold uppercase tracking-wider text-primary-container">
          Práctica calificada 11 · Pregunta {currentIndex + 1} de {TOTAL_QUESTIONS_11}
        </span>
        <span className="text-label-md font-label-md font-semibold text-on-surface">
          Respondidas: {answeredCount}/{TOTAL_QUESTIONS_11} · Puntaje: {score} / {MAX_SCORE_11} ({scorePercent}/100)
        </span>
      </div>
      <Progress value={percent} />
    </div>
  );
}
