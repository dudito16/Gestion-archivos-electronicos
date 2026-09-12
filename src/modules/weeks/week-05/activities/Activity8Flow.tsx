import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { cn } from "../../../../utils/cn";
import { ActivityShell } from "./components/ActivityShell";
import { FeedbackNote } from "./components/FeedbackNote";
import { activity8MinStages, activity8Stages } from "./activities.data";
import { useWeek5Activities } from "./activitiesProgress";

interface RowValues {
  queOcurre: string;
  control: string;
  evidencia: string;
}

type Draft = Record<string, RowValues>;

const ID = "actividad-8" as const;

function emptyDraft(): Draft {
  const draft: Draft = {};
  for (const stage of activity8Stages) draft[stage.id] = { queOcurre: "", control: "", evidencia: "" };
  return draft;
}

function isRowComplete(row: RowValues): boolean {
  return Boolean(row.queOcurre.trim() && row.control.trim() && row.evidencia.trim());
}

export function Activity8Flow() {
  const { getAnswer, setAnswer, markCompleted, isCompleted } = useWeek5Activities();
  const [draft, setDraft] = useState<Draft>(() => getAnswer(ID, emptyDraft()));
  const [submitted, setSubmitted] = useState(isCompleted(ID));
  const [error, setError] = useState<string | null>(null);

  useEffect(() => setAnswer(ID, draft), [draft, setAnswer]);

  const completeCount = activity8Stages.filter((s) => isRowComplete(draft[s.id])).length;

  function updateCell(stageId: string, key: keyof RowValues, value: string) {
    setDraft((d) => ({ ...d, [stageId]: { ...d[stageId], [key]: value } }));
  }

  function handleSubmit() {
    if (completeCount < activity8MinStages) {
      setError(`Completa las tres columnas de al menos ${activity8MinStages} etapas antes de enviar.`);
      return;
    }
    setError(null);
    markCompleted(ID);
    setSubmitted(true);
  }

  return (
    <ActivityShell
      id={ID}
      number={8}
      title="Analiza el flujo documental"
      objective="Analizar un flujo documental completo identificando qué ocurre, qué control aplicaría y qué evidencia debería quedar en cada etapa."
      instructions={
        <>
          Recepción → Registro → Revisión → Derivación → Atención → Respuesta → Archivo. Completa al menos{" "}
          {activity8MinStages} de las {activity8Stages.length} etapas: qué ocurre (incluye qué documento
          interviene), qué control sería importante y qué evidencia debería quedar.
        </>
      }
    >
      <div className="hidden sm:grid sm:grid-cols-[7rem_1fr_1fr_1fr] gap-xs px-xs">
        <span className="text-caption font-caption font-bold uppercase tracking-wider text-on-surface-variant">Etapa</span>
        <span className="text-caption font-caption font-bold uppercase tracking-wider text-on-surface-variant">¿Qué ocurre?</span>
        <span className="text-caption font-caption font-bold uppercase tracking-wider text-on-surface-variant">Control</span>
        <span className="text-caption font-caption font-bold uppercase tracking-wider text-on-surface-variant">Evidencia</span>
      </div>

      <div className="space-y-xs">
        {activity8Stages.map((stage) => {
          const row = draft[stage.id];
          const complete = isRowComplete(row);
          return (
            <div
              key={stage.id}
              className={cn(
                "grid grid-cols-1 sm:grid-cols-[7rem_1fr_1fr_1fr] gap-xs items-start rounded-lg border p-sm",
                complete ? "border-tertiary-fixed-dim bg-tertiary-fixed/10" : "border-outline-variant bg-surface-container-low",
              )}
            >
              <div className="flex items-center sm:pt-2">
                <span className="text-label-md font-label-md font-bold text-on-surface">{stage.label}</span>
              </div>

              <div>
                <label htmlFor={`act8-${stage.id}-ocurre`} className="text-caption font-caption text-on-surface-variant mb-0.5 block sm:hidden">
                  ¿Qué ocurre?
                </label>
                <textarea
                  id={`act8-${stage.id}-ocurre`}
                  rows={2}
                  value={row.queOcurre}
                  disabled={submitted}
                  placeholder="Qué sucede y qué documento interviene"
                  onChange={(e) => updateCell(stage.id, "queOcurre", e.target.value)}
                  className="w-full rounded-md border border-outline-variant bg-surface-container-lowest px-xs py-1.5 text-body-md text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container disabled:opacity-80"
                />
              </div>

              <div>
                <label htmlFor={`act8-${stage.id}-control`} className="text-caption font-caption text-on-surface-variant mb-0.5 block sm:hidden">
                  Control
                </label>
                <textarea
                  id={`act8-${stage.id}-control`}
                  rows={2}
                  value={row.control}
                  disabled={submitted}
                  placeholder="Qué control sería importante"
                  onChange={(e) => updateCell(stage.id, "control", e.target.value)}
                  className="w-full rounded-md border border-outline-variant bg-surface-container-lowest px-xs py-1.5 text-body-md text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container disabled:opacity-80"
                />
              </div>

              <div>
                <label htmlFor={`act8-${stage.id}-evidencia`} className="text-caption font-caption text-on-surface-variant mb-0.5 block sm:hidden">
                  Evidencia
                </label>
                <textarea
                  id={`act8-${stage.id}-evidencia`}
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

      <p className="text-caption font-caption text-on-surface-variant">
        Etapas completas: {completeCount}/{activity8Stages.length}. No se exigen respuestas idénticas entre
        estudiantes.
      </p>

      {error && <p className="text-label-md font-label-md text-error">{error}</p>}

      {!submitted ? (
        <Button onClick={handleSubmit}>Enviar análisis del flujo</Button>
      ) : (
        <AnimatePresence>
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}>
            <FeedbackNote kind="bien">
              Analizaste {completeCount} etapas del flujo. En cualquier procedimiento administrativo, cada paso
              debería dejar un rastro reconocible: qué ocurrió, qué documento lo respalda, qué control se aplicó y
              qué evidencia queda disponible para revisar después — eso es lo que sostiene el flujo completo como
              un proceso auditable, no solo la suma de trámites individuales.
            </FeedbackNote>
          </motion.div>
        </AnimatePresence>
      )}
    </ActivityShell>
  );
}
