import { Check, X } from "lucide-react";
import { practice14Questions } from "./practice14.data";
import { cn } from "../../../../utils/cn";
import type { Question14Result, Verdict14 } from "./practice14.types";

interface Props {
  resultados: Record<number, Question14Result>;
}

const verdictStyle: Record<Verdict14, { icon: typeof Check; classes: string; label: string }> = {
  correct: { icon: Check, classes: "bg-tertiary-fixed/50 text-on-tertiary-fixed-variant", label: "Correcto" },
  incorrect: { icon: X, classes: "bg-error-container/60 text-on-error-container", label: "Incorrecto" },
};

export function ReviewScreen14({ resultados }: Props) {
  return (
    <div className="space-y-sm">
      {practice14Questions.map((q) => {
        const result = resultados[q.id];
        if (!result) return null;
        const style = verdictStyle[result.verdict];
        const Icon = style.icon;
        return (
          <div key={q.id} className="rounded-lg border border-outline-variant bg-surface-container-lowest p-md space-y-1.5">
            <div className="flex items-center justify-between gap-sm flex-wrap">
              <p className="text-label-md font-label-md font-bold text-on-surface">
                Pregunta {q.id} — {q.category}
              </p>
              <span className={cn("flex items-center gap-1 rounded-full px-2 py-0.5 text-caption font-caption font-semibold", style.classes)}>
                <Icon size={12} />
                {style.label} · {result.earnedPoints} / {q.points} pts
              </span>
            </div>
            <p className="text-caption font-caption text-on-surface-variant">
              <span className="font-semibold text-on-surface">Tu respuesta:</span> {result.answerSummary}
            </p>
            <p className="text-caption font-caption text-on-surface-variant">
              <span className="font-semibold text-on-surface">Criterio esperado:</span> {q.expectedSummary}
            </p>
            <p className="text-caption font-caption text-on-surface-variant italic">{result.feedback}</p>
          </div>
        );
      })}
    </div>
  );
}
