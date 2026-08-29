import { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Callout } from "../../../../components/common/Callout";
import { MAX_SCORE } from "./practice.data";
import { gradeMessage, scoreToGrade } from "./practice.grade";
import { ReviewScreen } from "./ReviewScreen";
import { ConfirmDialog } from "./ConfirmDialog";
import type { QuestionResult } from "./practice.types";

interface Props {
  nombreCompleto: string;
  nombreGrupo: string;
  score: number;
  resultados: Record<number, QuestionResult>;
  onRestart: () => void;
}

export function ResultsSummary({ nombreCompleto, nombreGrupo, score, resultados, onRestart }: Props) {
  const [showReview, setShowReview] = useState(false);
  const [confirmingRestart, setConfirmingRestart] = useState(false);
  const nota = scoreToGrade(score);

  return (
    <div className="space-y-md">
      <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg space-y-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-sm">
          <div>
            <p className="text-caption font-caption font-bold uppercase tracking-wider text-on-surface-variant">Participante</p>
            <p className="text-body-lg font-body-lg text-on-surface">{nombreCompleto}</p>
          </div>
          <div>
            <p className="text-caption font-caption font-bold uppercase tracking-wider text-on-surface-variant">Grupo</p>
            <p className="text-body-lg font-body-lg text-on-surface">{nombreGrupo}</p>
          </div>
          <div>
            <p className="text-caption font-caption font-bold uppercase tracking-wider text-on-surface-variant">Puntaje</p>
            <p className="text-headline-md font-headline-md text-primary-container">{score} / {MAX_SCORE}</p>
          </div>
          <div>
            <p className="text-caption font-caption font-bold uppercase tracking-wider text-on-surface-variant">Nota</p>
            <p className="text-headline-md font-headline-md text-primary-container">{nota.toFixed(1)} / 20</p>
          </div>
        </div>
        <p className="text-body-md font-body-md font-semibold text-on-surface">{gradeMessage(nota)}</p>
      </div>

      <Callout variant="info" title="Respuestas abiertas registradas para revisión docente">
        Las respuestas de las preguntas 12, 16, 18 y 20 no afectan tu puntaje; quedan guardadas para que el docente
        las revise.
      </Callout>

      <div className="flex flex-wrap gap-sm">
        <Button variant="secondary" onClick={() => setShowReview((v) => !v)}>
          {showReview ? "Ocultar mis respuestas" : "Ver mis respuestas"}
        </Button>
        <Button asChild variant="secondary">
          <a href="#introduccion">Volver a Semana 3</a>
        </Button>
        <Button variant="ghost" onClick={() => setConfirmingRestart(true)}>
          Reiniciar práctica
        </Button>
      </div>

      {showReview && <ReviewScreen resultados={resultados} />}

      {confirmingRestart && (
        <ConfirmDialog
          title="¿Reiniciar la práctica?"
          message="¿Estás seguro de que deseas reiniciar la práctica? Se perderá el progreso actual."
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
