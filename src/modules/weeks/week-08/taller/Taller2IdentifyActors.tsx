import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { cn } from "../../../../utils/cn";
import { FeedbackNote } from "../activities/components/FeedbackNote";
import { ActivityShell } from "../activities/components/ActivityShell";
import { taller2Roles } from "./taller.data";
import { useWeek8Taller } from "./tallerProgress";

interface RowValues {
  responsabilidad: string;
  riesgo: string;
}

type Draft = Record<string, RowValues>;

const ID = "taller-2" as const;

function emptyDraft(): Draft {
  const draft: Draft = {};
  for (const role of taller2Roles) draft[role.id] = { responsabilidad: "", riesgo: "" };
  return draft;
}

function isRowComplete(row: RowValues): boolean {
  return Boolean(row.responsabilidad.trim() && row.riesgo.trim());
}

export function Taller2IdentifyActors() {
  const { getAnswer, setAnswer, markCompleted, isCompleted } = useWeek8Taller();
  const [draft, setDraft] = useState<Draft>(() => getAnswer(ID, emptyDraft()));
  const [submitted, setSubmitted] = useState(isCompleted(ID));
  const [error, setError] = useState<string | null>(null);

  useEffect(() => setAnswer(ID, draft), [draft, setAnswer]);

  const completeCount = taller2Roles.filter((r) => isRowComplete(draft[r.id])).length;

  function updateCell(roleId: string, key: keyof RowValues, value: string) {
    setDraft((d) => ({ ...d, [roleId]: { ...d[roleId], [key]: value } }));
  }

  function handleSubmit() {
    if (completeCount < taller2Roles.length) {
      setError("Completa ambas columnas de los tres actores antes de enviar.");
      return;
    }
    setError(null);
    markCompleted(ID);
    setSubmitted(true);
  }

  return (
    <ActivityShell
      id={ID}
      number={2}
      title="Identificación de actores"
      objective="Definir la responsabilidad de cada actor en un intercambio documental y el riesgo si no la cumple."
      instructions={<>Completa ambas columnas de los tres actores.</>}
      done={isCompleted(ID)}
    >
      <div className="hidden sm:grid sm:grid-cols-[9rem_1fr_1fr] gap-xs px-xs">
        <span className="text-caption font-caption font-bold uppercase tracking-wider text-on-surface-variant">Actor</span>
        <span className="text-caption font-caption font-bold uppercase tracking-wider text-on-surface-variant">Responsabilidad</span>
        <span className="text-caption font-caption font-bold uppercase tracking-wider text-on-surface-variant">Riesgo si no se cumple</span>
      </div>

      <div className="space-y-xs">
        {taller2Roles.map((role) => {
          const row = draft[role.id];
          const complete = isRowComplete(row);
          return (
            <div
              key={role.id}
              className={cn(
                "grid grid-cols-1 sm:grid-cols-[9rem_1fr_1fr] gap-xs items-start rounded-lg border p-sm",
                complete ? "border-tertiary-fixed-dim bg-tertiary-fixed/10" : "border-outline-variant bg-surface-container-low",
              )}
            >
              <div className="flex items-center sm:pt-2">
                <span className="text-label-md font-label-md font-bold text-on-surface">{role.label}</span>
              </div>
              <div>
                <label htmlFor={`taller2-${role.id}-resp`} className="text-caption font-caption text-on-surface-variant mb-0.5 block sm:hidden">Responsabilidad</label>
                <textarea
                  id={`taller2-${role.id}-resp`}
                  rows={2}
                  value={row.responsabilidad}
                  disabled={submitted}
                  placeholder="p. ej. Confirmar que el expediente llegó completo"
                  onChange={(e) => updateCell(role.id, "responsabilidad", e.target.value)}
                  className="w-full rounded-md border border-outline-variant bg-surface-container-lowest px-xs py-1.5 text-body-md text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container disabled:opacity-80"
                />
              </div>
              <div>
                <label htmlFor={`taller2-${role.id}-riesgo`} className="text-caption font-caption text-on-surface-variant mb-0.5 block sm:hidden">Riesgo si no se cumple</label>
                <textarea
                  id={`taller2-${role.id}-riesgo`}
                  rows={2}
                  value={row.riesgo}
                  disabled={submitted}
                  placeholder="p. ej. El expediente queda sin atender"
                  onChange={(e) => updateCell(role.id, "riesgo", e.target.value)}
                  className="w-full rounded-md border border-outline-variant bg-surface-container-lowest px-xs py-1.5 text-body-md text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container disabled:opacity-80"
                />
              </div>
            </div>
          );
        })}
      </div>

      <p className="text-caption font-caption text-on-surface-variant">Actores completos: {completeCount}/{taller2Roles.length}.</p>

      {error && <p className="text-label-md font-label-md text-error">{error}</p>}

      {!submitted ? (
        <Button onClick={handleSubmit}>Enviar mapa de actores</Button>
      ) : (
        <AnimatePresence>
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}>
            <FeedbackNote kind="bien">
              Un intercambio documental involucra responsabilidades concretas en cada entidad — no solo "enviar" y
              "recibir", sino confirmar, continuar el trámite y, si corresponde, dar soporte técnico.
            </FeedbackNote>
          </motion.div>
        </AnimatePresence>
      )}
    </ActivityShell>
  );
}
