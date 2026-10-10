import { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Progress } from "../../../../components/ui/progress";
import { MAX_SCORE_11, TOTAL_QUESTIONS_11 } from "./practice11.data";
import { gradeBand, gradeMessage, scoreToGrade } from "./practice11.grade";
import { ReviewScreen11 } from "./ReviewScreen11";
import { ConfirmDialog11 } from "./ConfirmDialog11";
import type { Question11Result } from "./practice11.types";

interface Props {
  nombreCompleto: string;
  nombreGrupo: string;
  score: number;
  resultados: Record<number, Question11Result>;
  onRestart: () => void;
}

export function ResultsSummary11({ nombreCompleto, nombreGrupo, score, resultados, onRestart }: Props) {
  const [showReview, setShowReview] = useState(false);
  const [confirmingRestart, setConfirmingRestart] = useState(false);
  const nota = scoreToGrade(score);
  const percent = Math.round((score / MAX_SCORE_11) * 100);
  const correctCount = Object.values(resultados).filter((r) => r.verdict === "correct").length;

  return (
    <div className="space-y-md">
      <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg space-y-sm text-center">
        <p className="text-label-md font-label-md font-bold uppercase tracking-wider text-primary-container">PRÁCTICA FINALIZADA</p>
        <p className="text-display-lg font-display-lg text-primary-container">{score} / {MAX_SCORE_11}</p>
        <p className="text-headline-md font-headline-md text-on-surface">{percent} / 100</p>
        <Progress value={percent} />
        <p className="text-caption font-caption text-on-surface-variant">Preguntas correctas: {correctCount}/{TOTAL_QUESTIONS_11}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-sm pt-sm text-left">
          <div>
            <p className="text-caption font-caption font-bold uppercase tracking-wider text-on-surface-variant">Nombre</p>
            <p className="text-body-lg font-body-lg text-on-surface">{nombreCompleto}</p>
          </div>
          <div>
            <p className="text-caption font-caption font-bold uppercase tracking-wider text-on-surface-variant">Grupo</p>
            <p className="text-body-lg font-body-lg text-on-surface">{nombreGrupo}</p>
          </div>
          <div>
            <p className="text-caption font-caption font-bold uppercase tracking-wider text-on-surface-variant">Nota (sobre 20)</p>
            <p className="text-headline-md font-headline-md text-primary-container">{nota.toFixed(1)} / 20</p>
          </div>
          <div>
            <p className="text-caption font-caption font-bold uppercase tracking-wider text-on-surface-variant">Desempeño</p>
            <p className="text-body-lg font-body-lg text-on-surface">{gradeBand(nota)}</p>
          </div>
        </div>
        <p className="text-body-md font-body-md font-semibold text-on-surface">{gradeMessage(nota)}</p>
      </div>

      <div className="flex flex-wrap gap-sm">
        <Button variant="secondary" onClick={() => setShowReview((v) => !v)}>
          {showReview ? "Ocultar mis respuestas" : "Ver mis respuestas"}
        </Button>
        <Button asChild variant="secondary">
          <a href="#introduccion">Volver a Semana 11</a>
        </Button>
        <Button variant="ghost" onClick={() => setConfirmingRestart(true)}>
          Reiniciar práctica
        </Button>
      </div>

      {showReview && <ReviewScreen11 resultados={resultados} />}

      {confirmingRestart && (
        <ConfirmDialog11
          title="¿Reiniciar la práctica?"
          message="¿Estás seguro de que deseas reiniciar la Práctica Calificada 11? Se perderá el progreso actual."
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
