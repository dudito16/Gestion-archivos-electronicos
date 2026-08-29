import { Check, X } from "lucide-react";
import { practiceQuestions } from "./practice.data";
import { summarizeCorrectAnswer } from "./practice.scoring";
import type { QuestionResult } from "./practice.types";
import { cn } from "../../../../utils/cn";

interface Props {
  resultados: Record<number, QuestionResult>;
}

export function ReviewScreen({ resultados }: Props) {
  return (
    <div className="space-y-sm">
      {practiceQuestions.map((q) => {
        const result = resultados[q.id];
        if (!result) return null;
        return (
          <div key={q.id} className="rounded-lg border border-outline-variant bg-surface-container-lowest p-md space-y-1.5">
            <div className="flex items-center justify-between gap-sm flex-wrap">
              <p className="text-label-md font-label-md font-bold text-on-surface">
                Pregunta {q.id} — {q.category}
              </p>
              <span
                className={cn(
                  "flex items-center gap-1 rounded-full px-2 py-0.5 text-caption font-caption font-semibold",
                  result.correct ? "bg-tertiary-fixed/50 text-on-tertiary-fixed-variant" : "bg-error-container/60 text-on-error-container",
                )}
              >
                {result.correct ? <Check size={12} /> : <X size={12} />}
                {result.earnedPoints} / {q.points} pts
              </span>
            </div>
            <p className="text-caption font-caption text-on-surface-variant">
              <span className="font-semibold text-on-surface">Respuesta seleccionada:</span> {result.answerSummary}
            </p>
            <p className="text-caption font-caption text-on-surface-variant">
              <span className="font-semibold text-on-surface">Respuesta correcta:</span> {summarizeCorrectAnswer(q)}
            </p>
            {q.openQuestion && (
              <p className="text-caption font-caption text-on-surface-variant">
                <span className="font-semibold text-on-surface">Respuesta escrita por el grupo:</span>{" "}
                {result.openAnswer && result.openAnswer.length > 0 ? result.openAnswer : "(no registrada)"}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
