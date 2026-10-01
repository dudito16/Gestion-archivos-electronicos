import { AnimatePresence, motion } from "framer-motion";
import { Plus, Trash2 } from "lucide-react";
import { useEffect, useId, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { FeedbackNote } from "../activities/components/FeedbackNote";
import { ActivityShell } from "../activities/components/ActivityShell";
import { OpenTextField, OpenAnswerDisclaimer } from "../activities/components/OpenTextField";
import { taller10MinRows, taller10ProblemSuggestions, taller10Scenario, taller8FormatOptions } from "./taller.data";
import { isMeaningfulText } from "../activities/evaluate";
import { useWeek8Taller } from "./tallerProgress";

interface ProblemRow {
  id: string;
  documento: string;
  finalidad: string;
  riesgo: string;
  criterioDigitalizacion: string;
  formato: string;
  controlCalidad: string;
  justificacion: string;
}

interface Draft {
  rows: ProblemRow[];
  priorities: string;
}

const ID = "taller-10" as const;

function emptyRow(id: string): ProblemRow {
  return { id, documento: "", finalidad: "", riesgo: "", criterioDigitalizacion: "", formato: "", controlCalidad: "", justificacion: "" };
}

function initialRows(idBase: string): ProblemRow[] {
  return Array.from({ length: taller10MinRows }, (_, i) => emptyRow(`${idBase}-${i}`));
}

function isRowComplete(row: ProblemRow): boolean {
  return Boolean(
    row.documento.trim() && row.finalidad.trim() && row.riesgo.trim() && row.criterioDigitalizacion.trim() && row.formato && row.controlCalidad.trim() && row.justificacion.trim(),
  );
}

export function Taller10Integrator() {
  const idBase = useId();
  const { getAnswer, setAnswer, markCompleted, isCompleted } = useWeek8Taller();
  const [draft, setDraft] = useState<Draft>(() => getAnswer(ID, { rows: initialRows(idBase), priorities: "" }));
  const [submitted, setSubmitted] = useState(isCompleted(ID));
  const [error, setError] = useState<string | null>(null);

  useEffect(() => setAnswer(ID, draft), [draft, setAnswer]);

  const completeRows = draft.rows.filter(isRowComplete).length;

  function addRow() {
    setDraft((d) => ({ ...d, rows: [...d.rows, emptyRow(`${idBase}-${d.rows.length}-${Date.now()}`)] }));
  }

  function removeRow(id: string) {
    setDraft((d) => (d.rows.length > 1 ? { ...d, rows: d.rows.filter((r) => r.id !== id) } : d));
  }

  function updateRow(id: string, field: keyof ProblemRow, value: string) {
    setDraft((d) => ({ ...d, rows: d.rows.map((r) => (r.id === id ? { ...r, [field]: value } : r)) }));
  }

  function applySuggestion(suggestion: string) {
    const target = draft.rows.find((r) => !r.documento.trim());
    if (target) updateRow(target.id, "documento", suggestion);
  }

  function handleSubmit() {
    if (completeRows < taller10MinRows) {
      setError(`Completa las siete columnas de al menos ${taller10MinRows} problemas antes de enviar.`);
      return;
    }
    if (!isMeaningfulText(draft.priorities, 12)) {
      setError("Explica cuál acción priorizarías y por qué.");
      return;
    }
    setError(null);
    markCompleted(ID);
    setSubmitted(true);
  }

  return (
    <ActivityShell
      id={ID}
      number={10}
      title="Caso integrador — Matriz de interoperabilidad y digitalización"
      objective="Construir una matriz integradora: documento, finalidad, riesgo, criterio de digitalización, formato, control de calidad y justificación."
      instructions={<>Identifica al menos {taller10MinRows} problemas y completa las siete columnas de cada uno.</>}
      done={isCompleted(ID)}
    >
      <p className="rounded-lg border border-outline-variant bg-surface-container-low p-md text-body-md font-body-md text-on-surface">{taller10Scenario}</p>

      <div>
        <p className="text-caption font-caption text-on-surface-variant mb-1">Problemas mencionados en el caso (toca uno para usarlo en una fila vacía):</p>
        <div className="flex flex-wrap gap-xs">
          {taller10ProblemSuggestions.map((s) => (
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
          {draft.rows.map((row, index) => (
            <motion.div
              key={row.id}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, height: 0 }}
              className="rounded-lg border border-outline-variant bg-surface-container-low p-sm space-y-xs"
            >
              <div className="flex items-center justify-between">
                <span className="text-label-md font-label-md font-bold text-primary-container">Problema {index + 1}</span>
                {draft.rows.length > 1 && !submitted && (
                  <button type="button" aria-label="Eliminar problema" onClick={() => removeRow(row.id)} className="text-outline hover:text-error">
                    <Trash2 size={16} />
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-xs">
                <div className="sm:col-span-2">
                  <label htmlFor={`taller10-documento-${row.id}`} className="text-caption font-caption text-on-surface-variant mb-0.5 block">Documento / Problema</label>
                  <textarea
                    id={`taller10-documento-${row.id}`}
                    rows={2}
                    value={row.documento}
                    disabled={submitted}
                    placeholder="Selecciona o escribe un problema"
                    onChange={(e) => updateRow(row.id, "documento", e.target.value)}
                    className="w-full rounded-md border border-outline-variant bg-surface-container-lowest px-xs py-1.5 text-body-md text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container disabled:opacity-80"
                  />
                </div>
                <div>
                  <label htmlFor={`taller10-finalidad-${row.id}`} className="text-caption font-caption text-on-surface-variant mb-0.5 block">Finalidad</label>
                  <input
                    id={`taller10-finalidad-${row.id}`}
                    type="text"
                    value={row.finalidad}
                    disabled={submitted}
                    placeholder="p. ej. Intercambio con otra entidad"
                    onChange={(e) => updateRow(row.id, "finalidad", e.target.value)}
                    className="w-full rounded-md border border-outline-variant bg-surface-container-lowest px-xs py-1.5 text-body-md text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container disabled:opacity-80"
                  />
                </div>
                <div>
                  <label htmlFor={`taller10-riesgo-${row.id}`} className="text-caption font-caption text-on-surface-variant mb-0.5 block">Riesgo</label>
                  <input
                    id={`taller10-riesgo-${row.id}`}
                    type="text"
                    value={row.riesgo}
                    disabled={submitted}
                    placeholder="p. ej. Pérdida de legibilidad"
                    onChange={(e) => updateRow(row.id, "riesgo", e.target.value)}
                    className="w-full rounded-md border border-outline-variant bg-surface-container-lowest px-xs py-1.5 text-body-md text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container disabled:opacity-80"
                  />
                </div>
                <div>
                  <label htmlFor={`taller10-criterio-${row.id}`} className="text-caption font-caption text-on-surface-variant mb-0.5 block">Criterio de digitalización</label>
                  <input
                    id={`taller10-criterio-${row.id}`}
                    type="text"
                    value={row.criterioDigitalizacion}
                    disabled={submitted}
                    placeholder="p. ej. Alta resolución, color"
                    onChange={(e) => updateRow(row.id, "criterioDigitalizacion", e.target.value)}
                    className="w-full rounded-md border border-outline-variant bg-surface-container-lowest px-xs py-1.5 text-body-md text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container disabled:opacity-80"
                  />
                </div>
                <div>
                  <label htmlFor={`taller10-formato-${row.id}`} className="text-caption font-caption text-on-surface-variant mb-0.5 block">Formato</label>
                  <select
                    id={`taller10-formato-${row.id}`}
                    value={row.formato}
                    disabled={submitted}
                    onChange={(e) => updateRow(row.id, "formato", e.target.value)}
                    className="w-full rounded-md border border-outline-variant bg-surface-container-lowest px-xs py-1.5 text-body-md text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container"
                  >
                    <option value="">Selecciona...</option>
                    {taller8FormatOptions.map((opt) => (
                      <option key={opt.id} value={opt.id}>{opt.label}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-xs">
                <div>
                  <label htmlFor={`taller10-control-${row.id}`} className="text-caption font-caption text-on-surface-variant mb-0.5 block">Control de calidad</label>
                  <input
                    id={`taller10-control-${row.id}`}
                    type="text"
                    value={row.controlCalidad}
                    disabled={submitted}
                    placeholder="p. ej. Revisión de orientación y legibilidad"
                    onChange={(e) => updateRow(row.id, "controlCalidad", e.target.value)}
                    className="w-full rounded-md border border-outline-variant bg-surface-container-lowest px-xs py-1.5 text-body-md text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container disabled:opacity-80"
                  />
                </div>
                <div>
                  <label htmlFor={`taller10-justificacion-${row.id}`} className="text-caption font-caption text-on-surface-variant mb-0.5 block">Justificación</label>
                  <input
                    id={`taller10-justificacion-${row.id}`}
                    type="text"
                    value={row.justificacion}
                    disabled={submitted}
                    placeholder="¿Por qué esta decisión resuelve el problema?"
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
            <Plus size={16} /> Agregar otro problema
          </Button>
        )}
      </div>

      <p className="text-caption font-caption text-on-surface-variant">Problemas completos: {completeRows}/{draft.rows.length} (mínimo {taller10MinRows}).</p>

      <OpenTextField
        id="taller10-priorities"
        label="De todas tus propuestas, ¿cuál priorizarías primero y por qué?"
        value={draft.priorities}
        onChange={(v) => setDraft((d) => ({ ...d, priorities: v }))}
        rows={4}
        disabled={submitted}
      />
      <OpenAnswerDisclaimer />

      {error && <p className="text-label-md font-label-md text-error">{error}</p>}

      {!submitted ? (
        <Button onClick={handleSubmit}>Finalizar taller</Button>
      ) : (
        <FeedbackNote kind="criterio">
          Una matriz completa conecta cada problema con su finalidad, su riesgo, el criterio técnico de digitalización,
          el formato elegido, el control de calidad y la justificación — exactamente el criterio que aplicaría un
          responsable de interoperabilidad y digitalización documental.
        </FeedbackNote>
      )}
    </ActivityShell>
  );
}
