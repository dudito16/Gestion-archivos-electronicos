import { motion } from "framer-motion";
import { Button } from "../../../../components/ui/button";
import { MAX_SCORE_5 } from "./practice5.data";
import { gradeMessage, scoreToGrade } from "./practice5.grade";

interface Props {
  nombreCompleto: string;
  nombreGrupo: string;
  score: number;
  onContinue: () => void;
}

export function ResultsModal5({ nombreCompleto, nombreGrupo, score, onContinue }: Props) {
  const nota = scoreToGrade(score);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-md" role="dialog" aria-modal="true">
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="w-full max-w-md rounded-xl bg-surface-container-lowest p-xl shadow-md text-center space-y-md"
      >
        <p className="text-headline-md font-headline-md text-on-surface">🎉 PRÁCTICA CALIFICADA 5 FINALIZADA</p>
        <p className="text-body-lg font-body-lg text-on-surface">Felicitaciones, {nombreCompleto}.</p>
        <p className="text-body-md font-body-md text-on-surface-variant">
          Has finalizado la Práctica Calificada 5. Revisa la retroalimentación de tus respuestas para identificar los aspectos que puedes mejorar.
        </p>

        <div className="rounded-lg border border-outline-variant bg-surface-container-low p-md space-y-1 text-left">
          <p className="text-caption font-caption font-bold uppercase tracking-wider text-on-surface-variant">Estudiante</p>
          <p className="text-body-md font-body-md text-on-surface">{nombreCompleto}</p>
          <p className="text-caption font-caption font-bold uppercase tracking-wider text-on-surface-variant pt-1">Grupo</p>
          <p className="text-body-md font-body-md text-on-surface">{nombreGrupo}</p>
          <div className="flex justify-between pt-2">
            <span className="text-label-md font-label-md font-semibold text-on-surface">Puntaje</span>
            <span className="text-label-md font-label-md font-bold text-primary-container">
              {score} / {MAX_SCORE_5}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-label-md font-label-md font-semibold text-on-surface">Nota</span>
            <span className="text-label-md font-label-md font-bold text-primary-container">{nota.toFixed(1)} / 20</span>
          </div>
        </div>

        <p className="text-body-md font-body-md font-semibold text-on-surface">{gradeMessage(nota)}</p>

        <Button onClick={onContinue}>Continuar</Button>
      </motion.div>
    </div>
  );
}
