import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { cn } from "../../../../utils/cn";
import { FeedbackNote } from "../activities/components/FeedbackNote";
import { ActivityShell } from "../activities/components/ActivityShell";
import { taller5MinStages, taller5Stages } from "./taller.data";
import { useWeek6Taller } from "./tallerProgress";

interface RowValues {
  queOcurrio: string;
  evidencia: string;
}

type Draft = Record<string, RowValues>;

const ID = "taller-5" as const;

function emptyDraft(): Draft {
  const draft: Draft = {};
  for (const stage of taller5Stages) draft[stage.id] = { queOcurrio: "", evidencia: "" };
  return draft;
}

function isRowComplete(row: RowValues): boolean {
  return Boolean(row.queOcurrio.trim() && row.evidencia.trim());
}

export function Taller5Reconstruct() {
  const { getAnswer, setAnswer, markCompleted, isCompleted } = useWeek6Taller();
  const [draft, setDraft] = useState<Draft>(() => getAnswer(ID, emptyDraft()));
  const [submitted, setSubmitted] = useState(isCompleted(ID));
  const [error, setError] = useState<string | null>(null);

  useEffect(() => setAnswer(ID, draft), [draft, setAnswer]);

  const completeCount = taller5Stages.filter((s) => isRowComplete(draft[s.id])).length;

  function updateCell(stageId: string, key: keyof RowValues, value: string) {
    setDraft((d) => ({ ...d, [stageId]: { ...d[stageId], [key]: value } }));
  }

  function handleSubmit() {
    if (completeCount < taller5MinStages) {
      setError(`Completa ambas columnas de al menos ${taller5MinStages} etapas antes de enviar.`);
      return;
    }
    setError(null);
    markCompleted(ID);
    setSubmitted(true);
  }

  return (
    <ActivityShell
      id={ID}
      number={5}
      title="Reconstruye la trazabilidad de un documento"
      objective="Anotar, etapa por etapa, qué ocurrió y qué evidencia debería quedar en un documento firmado."
      instructions={<>Completa al menos {taller5MinStages} de las {taller5Stages.length} etapas.</>}
      done={isCompleted(ID)}
    >
      <div className="hidden sm:grid sm:grid-cols-[7rem_1fr_1fr] gap-xs px-xs">
        <span className="text-caption font-caption font-bold uppercase tracking-wider text-on-surface-variant">Etapa</span>
        <span className="text-caption font-caption font-bold uppercase tracking-wider text-on-surface-variant">¿Qué ocurrió?</span>
        <span className="text-caption font-caption font-bold uppercase tracking-wider text-on-surface-variant">Evidencia</span>
      </div>

      <div className="space-y-xs">
        {taller5Stages.map((stage) => {
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
                <label htmlFor={`taller5-${stage.id}-ocurre`} className="text-caption font-caption text-on-surface-variant mb-0.5 block sm:hidden">¿Qué ocurrió?</label>
                <textarea
                  id={`taller5-${stage.id}-ocurre`}
                  rows={2}
                  value={row.queOcurrio}
                  disabled={submitted}
                  placeholder="Qué sucede en esta etapa"
                  onChange={(e) => updateCell(stage.id, "queOcurrio", e.target.value)}
                  className="w-full rounded-md border border-outline-variant bg-surface-container-lowest px-xs py-1.5 text-body-md text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container disabled:opacity-80"
                />
              </div>
              <div>
                <label htmlFor={`taller5-${stage.id}-evidencia`} className="text-caption font-caption text-on-surface-variant mb-0.5 block sm:hidden">Evidencia</label>
                <textarea
                  id={`taller5-${stage.id}-evidencia`}
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

      <p className="text-caption font-caption text-on-surface-variant">Etapas completas: {completeCount}/{taller5Stages.length}.</p>

      {error && <p className="text-label-md font-label-md text-error">{error}</p>}

      {!submitted ? (
        <Button onClick={handleSubmit}>Enviar reconstrucción</Button>
      ) : (
        <AnimatePresence>
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}>
            <FeedbackNote kind="bien">
              Reconstruiste {completeCount} etapas. Cada una debería dejar un rastro reconocible — sin ese rastro, no
              es posible sostener después qué ocurrió con el documento ni cuándo.
            </FeedbackNote>
          </motion.div>
        </AnimatePresence>
      )}
    </ActivityShell>
  );
}
