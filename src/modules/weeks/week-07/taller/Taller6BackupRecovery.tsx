import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { cn } from "../../../../utils/cn";
import { FeedbackNote } from "../activities/components/FeedbackNote";
import { ActivityShell } from "../activities/components/ActivityShell";
import { taller6MinStages, taller6Stages } from "./taller.data";
import { useWeek7Taller } from "./tallerProgress";

interface RowValues {
  queHacer: string;
  evidencia: string;
}

type Draft = Record<string, RowValues>;

const ID = "taller-6" as const;

function emptyDraft(): Draft {
  const draft: Draft = {};
  for (const stage of taller6Stages) draft[stage.id] = { queHacer: "", evidencia: "" };
  return draft;
}

function isRowComplete(row: RowValues): boolean {
  return Boolean(row.queHacer.trim() && row.evidencia.trim());
}

export function Taller6BackupRecovery() {
  const { getAnswer, setAnswer, markCompleted, isCompleted } = useWeek7Taller();
  const [draft, setDraft] = useState<Draft>(() => getAnswer(ID, emptyDraft()));
  const [submitted, setSubmitted] = useState(isCompleted(ID));
  const [error, setError] = useState<string | null>(null);

  useEffect(() => setAnswer(ID, draft), [draft, setAnswer]);

  const completeCount = taller6Stages.filter((s) => isRowComplete(draft[s.id])).length;

  function updateCell(stageId: string, key: keyof RowValues, value: string) {
    setDraft((d) => ({ ...d, [stageId]: { ...d[stageId], [key]: value } }));
  }

  function handleSubmit() {
    if (completeCount < taller6MinStages) {
      setError(`Completa ambas columnas de al menos ${taller6MinStages} etapas antes de enviar.`);
      return;
    }
    setError(null);
    markCompleted(ID);
    setSubmitted(true);
  }

  return (
    <ActivityShell
      id={ID}
      number={6}
      title="Análisis de respaldo y recuperación"
      objective="Anotar, etapa por etapa, qué hacer y qué evidencia debería quedar al recuperar información perdida."
      instructions={<>Completa al menos {taller6MinStages} de las {taller6Stages.length} etapas.</>}
      done={isCompleted(ID)}
    >
      <div className="hidden sm:grid sm:grid-cols-[7rem_1fr_1fr] gap-xs px-xs">
        <span className="text-caption font-caption font-bold uppercase tracking-wider text-on-surface-variant">Etapa</span>
        <span className="text-caption font-caption font-bold uppercase tracking-wider text-on-surface-variant">¿Qué hacer?</span>
        <span className="text-caption font-caption font-bold uppercase tracking-wider text-on-surface-variant">Evidencia</span>
      </div>

      <div className="space-y-xs">
        {taller6Stages.map((stage) => {
          const row = draft[stage.id];
          const complete = isRowComplete(row);
          return (
            <div
              key={stage.id}
              className={cn(
                "grid grid-cols-1 sm:grid-cols-[7rem_1fr_1fr] gap-xs items-start rounded-lg border p-sm",
                complete ? "border-tertiary-fixed-dim bg-tertiary-fixed/10" : "border-outline-variant bg-surface-container-low",
              )}
            >
              <div className="flex items-center sm:pt-2">
                <span className="text-label-md font-label-md font-bold text-on-surface">{stage.label}</span>
              </div>
              <div>
                <label htmlFor={`taller6-${stage.id}-hacer`} className="text-caption font-caption text-on-surface-variant mb-0.5 block sm:hidden">¿Qué hacer?</label>
                <textarea
                  id={`taller6-${stage.id}-hacer`}
                  rows={2}
                  value={row.queHacer}
                  disabled={submitted}
                  placeholder="Qué se hace en esta etapa"
                  onChange={(e) => updateCell(stage.id, "queHacer", e.target.value)}
                  className="w-full rounded-md border border-outline-variant bg-surface-container-lowest px-xs py-1.5 text-body-md text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container disabled:opacity-80"
                />
              </div>
              <div>
                <label htmlFor={`taller6-${stage.id}-evidencia`} className="text-caption font-caption text-on-surface-variant mb-0.5 block sm:hidden">Evidencia</label>
                <textarea
                  id={`taller6-${stage.id}-evidencia`}
                  rows={2}
                  value={row.evidencia}
                  disabled={submitted}
                  placeholder="Qué evidencia debería quedar"
                  onChange={(e) => updateCell(stage.id, "evidencia", e.target.value)}
                  className="w-full rounded-md border border-outline-variant bg-surface-container-lowest px-xs py-1.5 text-body-md text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container disabled:opacity-80"
                />
              </div>
            </div>
          );
        })}
      </div>

      <p className="text-caption font-caption text-on-surface-variant">Etapas completas: {completeCount}/{taller6Stages.length}.</p>

      {error && <p className="text-label-md font-label-md text-error">{error}</p>}

      {!submitted ? (
        <Button onClick={handleSubmit}>Enviar análisis</Button>
      ) : (
        <AnimatePresence>
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}>
            <FeedbackNote kind="bien">
              Completaste {completeCount} etapas. Un respaldo que nunca se prueba no es una garantía: solo la prueba de
              restauración confirma que la recuperación realmente funciona cuando se necesita.
            </FeedbackNote>
          </motion.div>
        </AnimatePresence>
      )}
    </ActivityShell>
  );
}
