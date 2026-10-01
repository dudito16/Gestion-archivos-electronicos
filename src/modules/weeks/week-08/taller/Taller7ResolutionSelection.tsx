import { AnimatePresence, motion } from "framer-motion";
import { Plus, Trash2 } from "lucide-react";
import { useEffect, useId, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { FeedbackNote } from "../activities/components/FeedbackNote";
import { ActivityShell } from "../activities/components/ActivityShell";
import { taller7CaseSuggestions, taller7MinRows, taller7Scenario } from "./taller.data";
import { useWeek8Taller } from "./tallerProgress";

interface CaseRow {
  id: string;
  documento: string;
  resolucion: string;
  justificacion: string;
}

const ID = "taller-7" as const;

function emptyRow(id: string): CaseRow {
  return { id, documento: "", resolucion: "", justificacion: "" };
}

function initialRows(idBase: string): CaseRow[] {
  return Array.from({ length: taller7MinRows }, (_, i) => emptyRow(`${idBase}-${i}`));
}

function isRowComplete(row: CaseRow): boolean {
  return Boolean(row.documento.trim() && row.resolucion.trim() && row.justificacion.trim());
}

export function Taller7ResolutionSelection() {
  const idBase = useId();
  const { getAnswer, setAnswer, markCompleted, isCompleted } = useWeek8Taller();
  const [rows, setRows] = useState<CaseRow[]>(() => getAnswer(ID, initialRows(idBase)));
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

  function updateRow(id: string, field: keyof CaseRow, value: string) {
    setRows((prev) => prev.map((r) => (r.id === id ? { ...r, [field]: value } : r)));
  }

  function applySuggestion(suggestion: string) {
    const target = rows.find((r) => !r.documento.trim());
    if (target) updateRow(target.id, "documento", suggestion);
  }

  function handleSubmit() {
    if (completeRows < taller7MinRows) {
      setError(`Completa las tres columnas de al menos ${taller7MinRows} casos antes de enviar.`);
      return;
    }
    setError(null);
    markCompleted(ID);
    setSubmitted(true);
  }

  return (
    <ActivityShell
      id={ID}
      number={7}
      title="Selección de resolución según caso"
      objective="Justificar la resolución de digitalización adecuada para distintos tipos de documento, sin aplicar un valor único."
      instructions={<>Completa documento, resolución propuesta y justificación para al menos {taller7MinRows} casos.</>}
      done={isCompleted(ID)}
    >
      <p className="rounded-lg border border-outline-variant bg-surface-container-low p-md text-body-md font-body-md text-on-surface">{taller7Scenario}</p>

      <div>
        <p className="text-caption font-caption text-on-surface-variant mb-1">Tipos de documento (toca uno para usarlo en una fila vacía):</p>
        <div className="flex flex-wrap gap-xs">
          {taller7CaseSuggestions.map((s) => (
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
                <span className="text-label-md font-label-md font-bold text-primary-container">Caso {index + 1}</span>
                {rows.length > 1 && !submitted && (
                  <button type="button" aria-label="Eliminar caso" onClick={() => removeRow(row.id)} className="text-outline hover:text-error">
                    <Trash2 size={16} />
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-xs">
                <div className="sm:col-span-2">
                  <label htmlFor={`taller7-doc-${row.id}`} className="text-caption font-caption text-on-surface-variant mb-0.5 block">Documento</label>
                  <textarea
                    id={`taller7-doc-${row.id}`}
                    rows={2}
                    value={row.documento}
                    disabled={submitted}
                    placeholder="Selecciona o escribe un tipo de documento"
                    onChange={(e) => updateRow(row.id, "documento", e.target.value)}
                    className="w-full rounded-md border border-outline-variant bg-surface-container-lowest px-xs py-1.5 text-body-md text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container disabled:opacity-80"
                  />
                </div>
                <div>
                  <label htmlFor={`taller7-res-${row.id}`} className="text-caption font-caption text-on-surface-variant mb-0.5 block">Resolución propuesta</label>
                  <input
                    id={`taller7-res-${row.id}`}
                    type="text"
                    value={row.resolucion}
                    disabled={submitted}
                    placeholder="p. ej. Alta resolución"
                    onChange={(e) => updateRow(row.id, "resolucion", e.target.value)}
                    className="w-full rounded-md border border-outline-variant bg-surface-container-lowest px-xs py-1.5 text-body-md text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container disabled:opacity-80"
                  />
                </div>
                <div>
                  <label htmlFor={`taller7-just-${row.id}`} className="text-caption font-caption text-on-surface-variant mb-0.5 block">Justificación</label>
                  <input
                    id={`taller7-just-${row.id}`}
                    type="text"
                    value={row.justificacion}
                    disabled={submitted}
                    placeholder="¿Por qué esa resolución?"
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
            <Plus size={16} /> Agregar otro caso
          </Button>
        )}
      </div>

      <p className="text-caption font-caption text-on-surface-variant">Casos completos: {completeRows}/{rows.length} (mínimo {taller7MinRows}).</p>

      {error && <p className="text-label-md font-label-md text-error">{error}</p>}

      {!submitted ? (
        <Button onClick={handleSubmit}>Enviar selección</Button>
      ) : (
        <FeedbackNote kind="criterio">
          No existe un único valor de DPI correcto para todos los casos: la resolución debe justificarse según el
          tipo de documento, su contenido, su finalidad y los requisitos institucionales.
        </FeedbackNote>
      )}
    </ActivityShell>
  );
}
