import { AnimatePresence, motion } from "framer-motion";
import { Plus, Trash2 } from "lucide-react";
import { useEffect, useId, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { FeedbackNote } from "../activities/components/FeedbackNote";
import { ActivityShell } from "../activities/components/ActivityShell";
import { taller5ControlTypeOptions, taller5MinRows, taller5ProblemSuggestions } from "./taller.data";
import { useWeek7Taller } from "./tallerProgress";

interface ControlRow {
  id: string;
  problema: string;
  tipo: string;
  accion: string;
}

const ID = "taller-5" as const;

function emptyRow(id: string): ControlRow {
  return { id, problema: "", tipo: "", accion: "" };
}

function initialRows(idBase: string): ControlRow[] {
  return Array.from({ length: taller5MinRows }, (_, i) => emptyRow(`${idBase}-${i}`));
}

function isRowComplete(row: ControlRow): boolean {
  return Boolean(row.problema.trim() && row.tipo && row.accion.trim());
}

export function Taller5ControlsMatrix() {
  const idBase = useId();
  const { getAnswer, setAnswer, markCompleted, isCompleted } = useWeek7Taller();
  const [rows, setRows] = useState<ControlRow[]>(() => getAnswer(ID, initialRows(idBase)));
  const [submitted, setSubmitted] = useState(isCompleted(ID));
  const [error, setError] = useState<string | null>(null);

  useEffect(() => setAnswer(ID, rows), [rows, setAnswer]);

  const completeRows = rows.filter(isRowComplete).length;

  function addRow() {
    setRows((prev) => [...prev, emptyRow(`${idBase}-${prev.length}-${Date.now()}`)]);
  }

  function removeRow(id: string) {
    setRows((prev) => (prev.length > 1 ? prev.filter((r) => r.id !== id) : prev));
  }

  function updateRow(id: string, field: keyof ControlRow, value: string) {
    setRows((prev) => prev.map((r) => (r.id === id ? { ...r, [field]: value } : r)));
  }

  function applySuggestion(suggestion: string) {
    const target = rows.find((r) => !r.problema.trim());
    if (target) updateRow(target.id, "problema", suggestion);
  }

  function handleSubmit() {
    if (completeRows < taller5MinRows) {
      setError(`Completa las tres columnas de al menos ${taller5MinRows} problemas antes de enviar.`);
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
      title="Matriz de controles"
      objective="Proponer, para distintos problemas de seguridad, el tipo de control adecuado y una acción concreta."
      instructions={<>Completa problema, tipo de control y acción propuesta para al menos {taller5MinRows} problemas.</>}
      done={isCompleted(ID)}
    >
      <div>
        <p className="text-caption font-caption text-on-surface-variant mb-1">Problemas frecuentes (toca uno para usarlo en una fila vacía):</p>
        <div className="flex flex-wrap gap-xs">
          {taller5ProblemSuggestions.map((s) => (
            <button
              key={s}
              type="button"
              disabled={submitted}
              onClick={() => applySuggestion(s)}
              className="rounded-full border border-outline-variant bg-surface-container-lowest px-3 py-1.5 text-caption font-caption text-on-surface hover:border-primary-container transition-colors"
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-sm">
        <AnimatePresence initial={false}>
          {rows.map((row, index) => (
            <motion.div
              key={row.id}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, height: 0 }}
              className="rounded-lg border border-outline-variant bg-surface-container-low p-sm space-y-xs"
            >
              <div className="flex items-center justify-between">
                <span className="text-label-md font-label-md font-bold text-primary-container">Problema {index + 1}</span>
                {rows.length > 1 && !submitted && (
                  <button type="button" aria-label="Eliminar fila" onClick={() => removeRow(row.id)} className="text-outline hover:text-error">
                    <Trash2 size={16} />
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-xs">
                <div className="sm:col-span-2">
                  <label htmlFor={`taller5-problema-${row.id}`} className="text-caption font-caption text-on-surface-variant mb-0.5 block">Problema</label>
                  <textarea
                    id={`taller5-problema-${row.id}`}
                    rows={2}
                    value={row.problema}
                    disabled={submitted}
                    placeholder="Selecciona o escribe un problema"
                    onChange={(e) => updateRow(row.id, "problema", e.target.value)}
                    className="w-full rounded-md border border-outline-variant bg-surface-container-lowest px-xs py-1.5 text-body-md text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container disabled:opacity-80"
                  />
                </div>
                <div>
                  <label htmlFor={`taller5-tipo-${row.id}`} className="text-caption font-caption text-on-surface-variant mb-0.5 block">Tipo de control</label>
                  <select
                    id={`taller5-tipo-${row.id}`}
                    value={row.tipo}
                    disabled={submitted}
                    onChange={(e) => updateRow(row.id, "tipo", e.target.value)}
                    className="w-full rounded-md border border-outline-variant bg-surface-container-lowest px-xs py-1.5 text-body-md text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container"
                  >
                    <option value="">Selecciona...</option>
                    {taller5ControlTypeOptions.map((opt) => (
                      <option key={opt.id} value={opt.id}>{opt.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor={`taller5-accion-${row.id}`} className="text-caption font-caption text-on-surface-variant mb-0.5 block">Acción propuesta</label>
                  <input
                    id={`taller5-accion-${row.id}`}
                    type="text"
                    value={row.accion}
                    disabled={submitted}
                    placeholder="p. ej. Exigir cambio periódico de contraseñas"
                    onChange={(e) => updateRow(row.id, "accion", e.target.value)}
                    className="w-full rounded-md border border-outline-variant bg-surface-container-lowest px-xs py-1.5 text-body-md text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container disabled:opacity-80"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {!submitted && (
          <Button variant="secondary" size="sm" onClick={addRow}>
            <Plus size={16} /> Agregar otro problema
          </Button>
        )}
      </div>

      <p className="text-caption font-caption text-on-surface-variant">Problemas completos: {completeRows}/{rows.length} (mínimo {taller5MinRows}).</p>

      {error && <p className="text-label-md font-label-md text-error">{error}</p>}

      {!submitted ? (
        <Button onClick={handleSubmit}>Enviar matriz de controles</Button>
      ) : (
        <FeedbackNote kind="criterio">
          Un buen control no solo se clasifica correctamente (preventivo, detectivo o correctivo): también debe
          traducirse en una acción concreta y verificable, no en una intención general.
        </FeedbackNote>
      )}
    </ActivityShell>
  );
}
