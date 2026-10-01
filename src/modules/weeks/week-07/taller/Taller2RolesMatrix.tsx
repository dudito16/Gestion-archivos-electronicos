import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { cn } from "../../../../utils/cn";
import { FeedbackNote } from "../activities/components/FeedbackNote";
import { ActivityShell } from "../activities/components/ActivityShell";
import { taller2Roles } from "./taller.data";
import { useWeek7Taller } from "./tallerProgress";

interface RowValues {
  puede: string;
  noPuede: string;
}

type Draft = Record<string, RowValues>;

const ID = "taller-2" as const;

function emptyDraft(): Draft {
  const draft: Draft = {};
  for (const role of taller2Roles) draft[role.id] = { puede: "", noPuede: "" };
  return draft;
}

function isRowComplete(row: RowValues): boolean {
  return Boolean(row.puede.trim() && row.noPuede.trim());
}

export function Taller2RolesMatrix() {
  const { getAnswer, setAnswer, markCompleted, isCompleted } = useWeek7Taller();
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
      setError("Completa ambas columnas de los tres roles antes de enviar.");
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
      title="Matriz de usuarios, roles y permisos"
      objective="Definir, para cada rol, qué debería y qué no debería poder hacer en el sistema de gestión documental."
      instructions={<>Completa ambas columnas de los tres roles.</>}
      done={isCompleted(ID)}
    >
      <div className="hidden sm:grid sm:grid-cols-[7rem_1fr_1fr] gap-xs px-xs">
        <span className="text-caption font-caption font-bold uppercase tracking-wider text-on-surface-variant">Rol</span>
        <span className="text-caption font-caption font-bold uppercase tracking-wider text-on-surface-variant">Qué debería poder hacer</span>
        <span className="text-caption font-caption font-bold uppercase tracking-wider text-on-surface-variant">Qué NO debería poder hacer</span>
      </div>

      <div className="space-y-xs">
        {taller2Roles.map((role) => {
          const row = draft[role.id];
          const complete = isRowComplete(row);
          return (
            <div
              key={role.id}
              className={cn(
                "grid grid-cols-1 sm:grid-cols-[7rem_1fr_1fr] gap-xs items-start rounded-lg border p-sm",
                complete ? "border-tertiary-fixed-dim bg-tertiary-fixed/10" : "border-outline-variant bg-surface-container-low",
              )}
            >
              <div className="flex items-center sm:pt-2">
                <span className="text-label-md font-label-md font-bold text-on-surface">{role.label}</span>
              </div>
              <div>
                <label htmlFor={`taller2-${role.id}-puede`} className="text-caption font-caption text-on-surface-variant mb-0.5 block sm:hidden">Qué debería poder hacer</label>
                <textarea
                  id={`taller2-${role.id}-puede`}
                  rows={2}
                  value={row.puede}
                  disabled={submitted}
                  placeholder="p. ej. Consultar expedientes de su unidad"
                  onChange={(e) => updateCell(role.id, "puede", e.target.value)}
                  className="w-full rounded-md border border-outline-variant bg-surface-container-lowest px-xs py-1.5 text-body-md text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container disabled:opacity-80"
                />
              </div>
              <div>
                <label htmlFor={`taller2-${role.id}-no-puede`} className="text-caption font-caption text-on-surface-variant mb-0.5 block sm:hidden">Qué NO debería poder hacer</label>
                <textarea
                  id={`taller2-${role.id}-no-puede`}
                  rows={2}
                  value={row.noPuede}
                  disabled={submitted}
                  placeholder="p. ej. Eliminar documentos sin autorización"
                  onChange={(e) => updateCell(role.id, "noPuede", e.target.value)}
                  className="w-full rounded-md border border-outline-variant bg-surface-container-lowest px-xs py-1.5 text-body-md text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container disabled:opacity-80"
                />
              </div>
            </div>
          );
        })}
      </div>

      <p className="text-caption font-caption text-on-surface-variant">Roles completos: {completeCount}/{taller2Roles.length}.</p>

      {error && <p className="text-label-md font-label-md text-error">{error}</p>}

      {!submitted ? (
        <Button onClick={handleSubmit}>Enviar matriz</Button>
      ) : (
        <AnimatePresence>
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}>
            <FeedbackNote kind="bien">
              No existe una matriz universal: lo importante es que cada límite que definiste responda a la función real
              del rol, no a la conveniencia del momento.
            </FeedbackNote>
          </motion.div>
        </AnimatePresence>
      )}
    </ActivityShell>
  );
}
