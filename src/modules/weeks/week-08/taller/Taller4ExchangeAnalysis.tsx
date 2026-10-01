import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { cn } from "../../../../utils/cn";
import { FeedbackNote } from "../activities/components/FeedbackNote";
import { ActivityShell } from "../activities/components/ActivityShell";
import { taller4MinStages, taller4Stages } from "./taller.data";
import { useWeek8Taller } from "./tallerProgress";

interface RowValues {
  seConservo: string;
  evidencia: string;
}

type Draft = Record<string, RowValues>;

const ID = "taller-4" as const;

function emptyDraft(): Draft {
  const draft: Draft = {};
  for (const stage of taller4Stages) draft[stage.id] = { seConservo: "", evidencia: "" };
  return draft;
}

function isRowComplete(row: RowValues): boolean {
  return Boolean(row.seConservo.trim() && row.evidencia.trim());
}

export function Taller4ExchangeAnalysis() {
  const { getAnswer, setAnswer, markCompleted, isCompleted } = useWeek8Taller();
  const [draft, setDraft] = useState<Draft>(() => getAnswer(ID, emptyDraft()));
  const [submitted, setSubmitted] = useState(isCompleted(ID));
  const [error, setError] = useState<string | null>(null);

  useEffect(() => setAnswer(ID, draft), [draft, setAnswer]);

  const completeCount = taller4Stages.filter((s) => isRowComplete(draft[s.id])).length;

  function updateCell(stageId: string, key: keyof RowValues, value: string) {
    setDraft((d) => ({ ...d, [stageId]: { ...d[stageId], [key]: value } }));
  }

  function handleSubmit() {
    if (completeCount < taller4MinStages) {
      setError(`Completa ambas columnas de al menos ${taller4MinStages} elementos antes de enviar.`);
      return;
    }
    setError(null);
    markCompleted(ID);
    setSubmitted(true);
  }

  return (
    <ActivityShell
      id={ID}
      number={4}
      title="Análisis de intercambio de expediente"
      objective="Evaluar, elemento por elemento, qué se conserva (o no) al intercambiar un expediente completo."
      instructions={<>Completa al menos {taller4MinStages} de los {taller4Stages.length} elementos del expediente.</>}
      done={isCompleted(ID)}
    >
      <div className="hidden sm:grid sm:grid-cols-[8rem_1fr_1fr] gap-xs px-xs">
        <span className="text-caption font-caption font-bold uppercase tracking-wider text-on-surface-variant">Elemento</span>
        <span className="text-caption font-caption font-bold uppercase tracking-wider text-on-surface-variant">¿Se conservó?</span>
        <span className="text-caption font-caption font-bold uppercase tracking-wider text-on-surface-variant">Evidencia / justificación</span>
      </div>

      <div className="space-y-xs">
        {taller4Stages.map((stage) => {
          const row = draft[stage.id];
          const complete = isRowComplete(row);
          return (
            <div
              key={stage.id}
              className={cn(
                "grid grid-cols-1 sm:grid-cols-[8rem_1fr_1fr] gap-xs items-start rounded-lg border p-sm",
                complete ? "border-tertiary-fixed-dim bg-tertiary-fixed/10" : "border-outline-variant bg-surface-container-low",
              )}
            >
              <div className="flex items-center sm:pt-2">
                <span className="text-label-md font-label-md font-bold text-on-surface">{stage.label}</span>
              </div>
              <div>
                <label htmlFor={`taller4-${stage.id}-conservo`} className="text-caption font-caption text-on-surface-variant mb-0.5 block sm:hidden">¿Se conservó?</label>
                <textarea
                  id={`taller4-${stage.id}-conservo`}
                  rows={2}
                  value={row.seConservo}
                  disabled={submitted}
                  placeholder="Sí / No / Parcialmente, y qué ocurrió"
                  onChange={(e) => updateCell(stage.id, "seConservo", e.target.value)}
                  className="w-full rounded-md border border-outline-variant bg-surface-container-lowest px-xs py-1.5 text-body-md text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container disabled:opacity-80"
                />
              </div>
              <div>
                <label htmlFor={`taller4-${stage.id}-evidencia`} className="text-caption font-caption text-on-surface-variant mb-0.5 block sm:hidden">Evidencia / justificación</label>
                <textarea
                  id={`taller4-${stage.id}-evidencia`}
                  rows={2}
                  value={row.evidencia}
                  disabled={submitted}
                  placeholder="Qué evidencia respalda tu respuesta"
                  onChange={(e) => updateCell(stage.id, "evidencia", e.target.value)}
                  className="w-full rounded-md border border-outline-variant bg-surface-container-lowest px-xs py-1.5 text-body-md text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container disabled:opacity-80"
                />
              </div>
            </div>
          );
        })}
      </div>

      <p className="text-caption font-caption text-on-surface-variant">Elementos completos: {completeCount}/{taller4Stages.length}.</p>

      {error && <p className="text-label-md font-label-md text-error">{error}</p>}

      {!submitted ? (
        <Button onClick={handleSubmit}>Enviar análisis</Button>
      ) : (
        <AnimatePresence>
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}>
            <FeedbackNote kind="bien">
              Intercambiar un expediente exige conservar más que los archivos: también sus metadatos, sus relaciones,
              su orden y su historial — sin eso, el expediente pierde contexto aunque los documentos lleguen.
            </FeedbackNote>
          </motion.div>
        </AnimatePresence>
      )}
    </ActivityShell>
  );
}
