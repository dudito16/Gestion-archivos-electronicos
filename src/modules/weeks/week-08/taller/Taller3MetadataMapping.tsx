import { AnimatePresence, motion } from "framer-motion";
import { Plus, Trash2 } from "lucide-react";
import { useEffect, useId, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { FeedbackNote } from "../activities/components/FeedbackNote";
import { ActivityShell } from "../activities/components/ActivityShell";
import { taller3FieldSuggestions, taller3MinRows, taller3Scenario } from "./taller.data";
import { useWeek8Taller } from "./tallerProgress";

interface FieldRow {
  id: string;
  campoA: string;
  campoB: string;
  equivalente: string;
  justificacion: string;
}

const ID = "taller-3" as const;

function emptyRow(id: string): FieldRow {
  return { id, campoA: "", campoB: "", equivalente: "", justificacion: "" };
}

function initialRows(idBase: string): FieldRow[] {
  return Array.from({ length: taller3MinRows }, (_, i) => emptyRow(`${idBase}-${i}`));
}

function isRowComplete(row: FieldRow): boolean {
  return Boolean(row.campoA.trim() && row.campoB.trim() && row.equivalente && row.justificacion.trim());
}

export function Taller3MetadataMapping() {
  const idBase = useId();
  const { getAnswer, setAnswer, markCompleted, isCompleted } = useWeek8Taller();
  const [rows, setRows] = useState<FieldRow[]>(() => getAnswer(ID, initialRows(idBase)));
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

  function updateRow(id: string, field: keyof FieldRow, value: string) {
    setRows((prev) => prev.map((r) => (r.id === id ? { ...r, [field]: value } : r)));
  }

  function applySuggestion(suggestion: string) {
    const [campoA, campoB] = suggestion.split(" ↔ ");
    const target = rows.find((r) => !r.campoA.trim());
    if (target) {
      updateRow(target.id, "campoA", campoA);
      updateRow(target.id, "campoB", campoB);
    }
  }

  function handleSubmit() {
    if (completeRows < taller3MinRows) {
      setError(`Completa las cuatro columnas de al menos ${taller3MinRows} correspondencias antes de enviar.`);
      return;
    }
    setError(null);
    markCompleted(ID);
    setSubmitted(true);
  }

  return (
    <ActivityShell
      id={ID}
      number={3}
      title="Correspondencia de metadatos"
      objective="Establecer y evaluar correspondencias semánticas entre campos de dos sistemas distintos."
      instructions={<>Completa al menos {taller3MinRows} correspondencias, indicando si son equivalentes y por qué.</>}
      done={isCompleted(ID)}
    >
      <p className="rounded-lg border border-outline-variant bg-surface-container-low p-md text-body-md font-body-md text-on-surface">{taller3Scenario}</p>

      <div>
        <p className="text-caption font-caption text-on-surface-variant mb-1">Campos mencionados en semanas anteriores (toca uno para usarlo en una fila vacía):</p>
        <div className="flex flex-wrap gap-xs">
          {taller3FieldSuggestions.map((s) => (
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
                <span className="text-label-md font-label-md font-bold text-primary-container">Correspondencia {index + 1}</span>
                {rows.length > 1 && !submitted && (
                  <button type="button" aria-label="Eliminar correspondencia" onClick={() => removeRow(row.id)} className="text-outline hover:text-error">
                    <Trash2 size={16} />
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-xs">
                <div>
                  <label htmlFor={`taller3-campoA-${row.id}`} className="text-caption font-caption text-on-surface-variant mb-0.5 block">Campo — Sistema A</label>
                  <input
                    id={`taller3-campoA-${row.id}`}
                    type="text"
                    value={row.campoA}
                    disabled={submitted}
                    placeholder="p. ej. Código de expediente"
                    onChange={(e) => updateRow(row.id, "campoA", e.target.value)}
                    className="w-full rounded-md border border-outline-variant bg-surface-container-lowest px-xs py-1.5 text-body-md text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container disabled:opacity-80"
                  />
                </div>
                <div>
                  <label htmlFor={`taller3-campoB-${row.id}`} className="text-caption font-caption text-on-surface-variant mb-0.5 block">Campo — Sistema B</label>
                  <input
                    id={`taller3-campoB-${row.id}`}
                    type="text"
                    value={row.campoB}
                    disabled={submitted}
                    placeholder="p. ej. Número de expediente"
                    onChange={(e) => updateRow(row.id, "campoB", e.target.value)}
                    className="w-full rounded-md border border-outline-variant bg-surface-container-lowest px-xs py-1.5 text-body-md text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container disabled:opacity-80"
                  />
                </div>
                <div>
                  <label htmlFor={`taller3-equiv-${row.id}`} className="text-caption font-caption text-on-surface-variant mb-0.5 block">¿Son equivalentes?</label>
                  <select
                    id={`taller3-equiv-${row.id}`}
                    value={row.equivalente}
                    disabled={submitted}
                    onChange={(e) => updateRow(row.id, "equivalente", e.target.value)}
                    className="w-full rounded-md border border-outline-variant bg-surface-container-lowest px-xs py-1.5 text-body-md text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container"
                  >
                    <option value="">Selecciona...</option>
                    <option value="si">Sí</option>
                    <option value="no">No</option>
                    <option value="parcial">Parcialmente</option>
                  </select>
                </div>
                <div>
                  <label htmlFor={`taller3-just-${row.id}`} className="text-caption font-caption text-on-surface-variant mb-0.5 block">Justificación</label>
                  <input
                    id={`taller3-just-${row.id}`}
                    type="text"
                    value={row.justificacion}
                    disabled={submitted}
                    placeholder="¿Por qué son o no equivalentes?"
                    onChange={(e) => updateRow(row.id, "justificacion", e.target.value)}
                    className="w-full rounded-md border border-outline-variant bg-surface-container-lowest px-xs py-1.5 text-body-md text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container disabled:opacity-80"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {!submitted && (
          <Button variant="secondary" size="sm" onClick={addRow}>
            <Plus size={16} /> Agregar otra correspondencia
          </Button>
        )}
      </div>

      <p className="text-caption font-caption text-on-surface-variant">Correspondencias completas: {completeRows}/{rows.length} (mínimo {taller3MinRows}).</p>

      {error && <p className="text-label-md font-label-md text-error">{error}</p>}

      {!submitted ? (
        <Button onClick={handleSubmit}>Enviar correspondencias</Button>
      ) : (
        <FeedbackNote kind="criterio">
          No todas las correspondencias que parecen obvias son equivalentes exactas — "fecha de creación" y "fecha de
          registro", por ejemplo, suelen representar momentos distintos del proceso.
        </FeedbackNote>
      )}
    </ActivityShell>
  );
}
