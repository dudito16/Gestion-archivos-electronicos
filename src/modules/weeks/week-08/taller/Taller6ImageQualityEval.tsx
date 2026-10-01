import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { cn } from "../../../../utils/cn";
import { FeedbackNote } from "../activities/components/FeedbackNote";
import { ActivityShell } from "../activities/components/ActivityShell";
import { taller6Images } from "./taller.data";
import { useWeek8Taller } from "./tallerProgress";

interface RowValues {
  orientacion: string;
  legibilidad: string;
}

type Draft = Record<string, RowValues>;

const ID = "taller-6" as const;

function emptyDraft(): Draft {
  const draft: Draft = {};
  for (const img of taller6Images) draft[img.id] = { orientacion: "", legibilidad: "" };
  return draft;
}

function isRowComplete(row: RowValues): boolean {
  return Boolean(row.orientacion.trim() && row.legibilidad.trim());
}

export function Taller6ImageQualityEval() {
  const { getAnswer, setAnswer, markCompleted, isCompleted } = useWeek8Taller();
  const [draft, setDraft] = useState<Draft>(() => getAnswer(ID, emptyDraft()));
  const [submitted, setSubmitted] = useState(isCompleted(ID));
  const [error, setError] = useState<string | null>(null);

  useEffect(() => setAnswer(ID, draft), [draft, setAnswer]);

  const completeCount = taller6Images.filter((img) => isRowComplete(draft[img.id])).length;

  function updateCell(imgId: string, key: keyof RowValues, value: string) {
    setDraft((d) => ({ ...d, [imgId]: { ...d[imgId], [key]: value } }));
  }

  function handleSubmit() {
    if (completeCount < taller6Images.length) {
      setError("Completa ambas columnas de las tres imágenes antes de enviar.");
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
      title="Evaluación de calidad de imágenes"
      objective="Evaluar la calidad de digitalización de distintos tipos de material, considerando sus necesidades particulares."
      instructions={<>Para cada imagen, describe qué revisarías en orientación/encuadre y en legibilidad.</>}
      done={isCompleted(ID)}
    >
      <div className="hidden sm:grid sm:grid-cols-[12rem_1fr_1fr] gap-xs px-xs">
        <span className="text-caption font-caption font-bold uppercase tracking-wider text-on-surface-variant">Material</span>
        <span className="text-caption font-caption font-bold uppercase tracking-wider text-on-surface-variant">Orientación / encuadre</span>
        <span className="text-caption font-caption font-bold uppercase tracking-wider text-on-surface-variant">Legibilidad</span>
      </div>

      <div className="space-y-xs">
        {taller6Images.map((img) => {
          const row = draft[img.id];
          const complete = isRowComplete(row);
          return (
            <div
              key={img.id}
              className={cn(
                "grid grid-cols-1 sm:grid-cols-[12rem_1fr_1fr] gap-xs items-start rounded-lg border p-sm",
                complete ? "border-tertiary-fixed-dim bg-tertiary-fixed/10" : "border-outline-variant bg-surface-container-low",
              )}
            >
              <div className="flex items-center sm:pt-2">
                <span className="text-label-md font-label-md font-bold text-on-surface">{img.label}</span>
              </div>
              <div>
                <label htmlFor={`taller6-${img.id}-orient`} className="text-caption font-caption text-on-surface-variant mb-0.5 block sm:hidden">Orientación / encuadre</label>
                <textarea
                  id={`taller6-${img.id}-orient`}
                  rows={2}
                  value={row.orientacion}
                  disabled={submitted}
                  placeholder="Qué revisarías en este material"
                  onChange={(e) => updateCell(img.id, "orientacion", e.target.value)}
                  className="w-full rounded-md border border-outline-variant bg-surface-container-lowest px-xs py-1.5 text-body-md text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container disabled:opacity-80"
                />
              </div>
              <div>
                <label htmlFor={`taller6-${img.id}-legib`} className="text-caption font-caption text-on-surface-variant mb-0.5 block sm:hidden">Legibilidad</label>
                <textarea
                  id={`taller6-${img.id}-legib`}
                  rows={2}
                  value={row.legibilidad}
                  disabled={submitted}
                  placeholder="Qué nivel de detalle necesita este material"
                  onChange={(e) => updateCell(img.id, "legibilidad", e.target.value)}
                  className="w-full rounded-md border border-outline-variant bg-surface-container-lowest px-xs py-1.5 text-body-md text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container disabled:opacity-80"
                />
              </div>
            </div>
          );
        })}
      </div>

      <p className="text-caption font-caption text-on-surface-variant">Materiales completos: {completeCount}/{taller6Images.length}.</p>

      {error && <p className="text-label-md font-label-md text-error">{error}</p>}

      {!submitted ? (
        <Button onClick={handleSubmit}>Enviar evaluación</Button>
      ) : (
        <AnimatePresence>
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}>
            <FeedbackNote kind="bien">
              Un manuscrito antiguo, un oficio mecanografiado y una fotografía institucional tienen necesidades de
              calidad distintas — no existe un único criterio de evaluación válido para los tres.
            </FeedbackNote>
          </motion.div>
        </AnimatePresence>
      )}
    </ActivityShell>
  );
}
