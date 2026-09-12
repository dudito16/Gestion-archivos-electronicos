import { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { MAX_SCORE_5 } from "./practice5.data";
import { gradeBand, gradeMessage, scoreToGrade } from "./practice5.grade";
import { ReviewScreen5 } from "./ReviewScreen5";
import { ConfirmDialog5 } from "./ConfirmDialog5";
import type { Question5Result } from "./practice5.types";

interface Props {
  nombreCompleto: string;
  nombreGrupo: string;
  score: number;
  resultados: Record<number, Question5Result>;
  onRestart: () => void;
}

export function ResultsSummary5({ nombreCompleto, nombreGrupo, score, resultados, onRestart }: Props) {
  const [showReview, setShowReview] = useState(false);
  const [confirmingRestart, setConfirmingRestart] = useState(false);
  const nota = scoreToGrade(score);

  return (
    <div className="space-y-md">
      <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg space-y-sm">
        <p className="text-label-md font-label-md font-bold uppercase tracking-wider text-primary-container">Resultado de la Práctica Calificada 5</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-sm">
          <div>
            <p className="text-caption font-caption font-bold uppercase tracking-wider text-on-surface-variant">Nombre</p>
            <p className="text-body-lg font-body-lg text-on-surface">{nombreCompleto}</p>
          </div>
          <div>
            <p className="text-caption font-caption font-bold uppercase tracking-wider text-on-surface-variant">Grupo</p>
            <p className="text-body-lg font-body-lg text-on-surface">{nombreGrupo}</p>
          </div>
          <div>
            <p className="text-caption font-caption font-bold uppercase tracking-wider text-on-surface-variant">Puntaje</p>
            <p className="text-headline-md font-headline-md text-primary-container">
              {score} / {MAX_SCORE_5}
            </p>
          </div>
          <div>
            <p className="text-caption font-caption font-bold uppercase tracking-wider text-on-surface-variant">Nota</p>
            <p className="text-headline-md font-headline-md text-primary-container">{nota.toFixed(1)} / 20</p>
          </div>
        </div>
        <p className="text-caption font-caption font-semibold text-on-surface-variant">
          Interpretación orientativa: <span className="text-on-surface">{gradeBand(nota)}</span>
        </p>
        <p className="text-body-md font-body-md font-semibold text-on-surface">{gradeMessage(nota)}</p>
      </div>

      <div className="flex flex-wrap gap-sm">
        <Button variant="secondary" onClick={() => setShowReview((v) => !v)}>
          {showReview ? "Ocultar mis respuestas" : "Ver mis respuestas"}
        </Button>
        <Button asChild variant="secondary">
          <a href="#introduccion">Volver a Semana 5</a>
        </Button>
        <Button variant="ghost" onClick={() => setConfirmingRestart(true)}>
          Reiniciar práctica
        </Button>
      </div>

      {showReview && <ReviewScreen5 resultados={resultados} />}

      {confirmingRestart && (
        <ConfirmDialog5
          title="¿Reiniciar la práctica?"
          message="¿Estás seguro de que deseas reiniciar la Práctica Calificada 5? Se perderá el progreso actual."
          confirmLabel="Reiniciar"
          onConfirm={() => {
            setConfirmingRestart(false);
            onRestart();
          }}
          onCancel={() => setConfirmingRestart(false)}
        />
      )}
    </div>
  );
}
