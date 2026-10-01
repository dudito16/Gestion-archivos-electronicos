import { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { MAX_SCORE_7 } from "./practice7.data";
import { gradeBand, gradeMessage, scoreToGrade } from "./practice7.grade";
import { ReviewScreen7 } from "./ReviewScreen7";
import { ConfirmDialog7 } from "./ConfirmDialog7";
import type { Question7Result } from "./practice7.types";

interface Props {
  nombreCompleto: string;
  nombreGrupo: string;
  score: number;
  resultados: Record<number, Question7Result>;
  onRestart: () => void;
}

export function ResultsSummary7({ nombreCompleto, nombreGrupo, score, resultados, onRestart }: Props) {
  const [showReview, setShowReview] = useState(false);
  const [confirmingRestart, setConfirmingRestart] = useState(false);
  const nota = scoreToGrade(score);

  return (
    <div className="space-y-md">
      <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg space-y-sm">
        <p className="text-label-md font-label-md font-bold uppercase tracking-wider text-primary-container">Resultado de la Práctica Calificada 7</p>
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
              {score} / {MAX_SCORE_7}
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
          <a href="#introduccion">Volver a Semana 7</a>
        </Button>
        <Button variant="ghost" onClick={() => setConfirmingRestart(true)}>
          Reiniciar práctica
        </Button>
      </div>

      {showReview && <ReviewScreen7 resultados={resultados} />}

      {confirmingRestart && (
        <ConfirmDialog7
          title="¿Reiniciar la práctica?"
          message="¿Estás seguro de que deseas reiniciar la Práctica Calificada 7? Se perderá el progreso actual."
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
