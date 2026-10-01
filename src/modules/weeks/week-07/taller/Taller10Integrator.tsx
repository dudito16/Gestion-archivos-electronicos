import { AnimatePresence, motion } from "framer-motion";
import { Plus, Trash2 } from "lucide-react";
import { useEffect, useId, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { FeedbackNote } from "../activities/components/FeedbackNote";
import { ActivityShell } from "../activities/components/ActivityShell";
import { OpenTextField, OpenAnswerDisclaimer } from "../activities/components/OpenTextField";
import { taller10AttributeOptions, taller10MinRows, taller10ProblemSuggestions, taller10Scenario } from "./taller.data";
import { isMeaningfulText } from "../activities/evaluate";
import { useWeek7Taller } from "./tallerProgress";

interface ProblemRow {
  id: string;
  problema: string;
  atributo: string;
  riesgo: string;
  controlActual: string;
  mejora: string;
  evidencia: string;
}

interface Draft {
  rows: ProblemRow[];
  priorities: string;
}

const ID = "taller-10" as const;

function emptyRow(id: string): ProblemRow {
  return { id, problema: "", atributo: "", riesgo: "", controlActual: "", mejora: "", evidencia: "" };
}

function initialRows(idBase: string): ProblemRow[] {
  return Array.from({ length: taller10MinRows }, (_, i) => emptyRow(`${idBase}-${i}`));
}

function isRowComplete(row: ProblemRow): boolean {
  return Boolean(row.problema.trim() && row.atributo && row.riesgo.trim() && row.controlActual.trim() && row.mejora.trim() && row.evidencia.trim());
}

export function Taller10Integrator() {
  const idBase = useId();
  const { getAnswer, setAnswer, markCompleted, isCompleted } = useWeek7Taller();
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
    const target = draft.rows.find((r) => !r.problema.trim());
    if (target) updateRow(target.id, "problema", suggestion);
  }

  function handleSubmit() {
    if (completeRows < taller10MinRows) {
      setError(`Completa las seis columnas de al menos ${taller10MinRows} problemas antes de enviar.`);
      return;
    }
    if (!isMeaningfulText(draft.priorities, 12)) {
      setError("Explica cuál mejora priorizarías y por qué.");
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
      title="Caso integrador — Matriz de seguridad documental"
      objective="Construir una matriz integradora de seguridad: problema, atributo afectado, riesgo, control actual, mejora propuesta y evidencia."
      instructions={<>Identifica al menos {taller10MinRows} problemas y completa las seis columnas de cada uno.</>}
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
                  <label htmlFor={`taller10-problema-${row.id}`} className="text-caption font-caption text-on-surface-variant mb-0.5 block">Problema</label>
                  <textarea
                    id={`taller10-problema-${row.id}`}
                    rows={2}
                    value={row.problema}
                    disabled={submitted}
                    placeholder="Selecciona o escribe un problema"
                    onChange={(e) => updateRow(row.id, "problema", e.target.value)}
                    className="w-full rounded-md border border-outline-variant bg-surface-container-lowest px-xs py-1.5 text-body-md text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container disabled:opacity-80"
                  />
                </div>
                <div>
                  <label htmlFor={`taller10-atributo-${row.id}`} className="text-caption font-caption text-on-surface-variant mb-0.5 block">Atributo afectado</label>
                  <select
                    id={`taller10-atributo-${row.id}`}
                    value={row.atributo}
                    disabled={submitted}
                    onChange={(e) => updateRow(row.id, "atributo", e.target.value)}
                    className="w-full rounded-md border border-outline-variant bg-surface-container-lowest px-xs py-1.5 text-body-md text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container"
                  >
                    <option value="">Selecciona...</option>
                    {taller10AttributeOptions.map((opt) => (
                      <option key={opt.id} value={opt.id}>{opt.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor={`taller10-riesgo-${row.id}`} className="text-caption font-caption text-on-surface-variant mb-0.5 block">Riesgo</label>
                  <input
                    id={`taller10-riesgo-${row.id}`}
                    type="text"
                    value={row.riesgo}
                    disabled={submitted}
                    placeholder="p. ej. Pérdida de trazabilidad"
                    onChange={(e) => updateRow(row.id, "riesgo", e.target.value)}
                    className="w-full rounded-md border border-outline-variant bg-surface-container-lowest px-xs py-1.5 text-body-md text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container disabled:opacity-80"
                  />
                </div>
                <div>
                  <label htmlFor={`taller10-control-${row.id}`} className="text-caption font-caption text-on-surface-variant mb-0.5 block">Control actual</label>
                  <input
                    id={`taller10-control-${row.id}`}
                    type="text"
                    value={row.controlActual}
                    disabled={submitted}
                    placeholder="p. ej. Ninguno"
                    onChange={(e) => updateRow(row.id, "controlActual", e.target.value)}
                    className="w-full rounded-md border border-outline-variant bg-surface-container-lowest px-xs py-1.5 text-body-md text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container disabled:opacity-80"
                  />
                </div>
                <div>
                  <label htmlFor={`taller10-mejora-${row.id}`} className="text-caption font-caption text-on-surface-variant mb-0.5 block">Mejora propuesta</label>
                  <input
                    id={`taller10-mejora-${row.id}`}
                    type="text"
                    value={row.mejora}
                    disabled={submitted}
                    placeholder="p. ej. Revisión periódica de permisos"
                    onChange={(e) => updateRow(row.id, "mejora", e.target.value)}
                    className="w-full rounded-md border border-outline-variant bg-surface-container-lowest px-xs py-1.5 text-body-md text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container disabled:opacity-80"
                  />
                </div>
              </div>
              <div>
                <label htmlFor={`taller10-evidencia-${row.id}`} className="text-caption font-caption text-on-surface-variant mb-0.5 block">Evidencia que verificaría la mejora</label>
                <input
                  id={`taller10-evidencia-${row.id}`}
                  type="text"
                  value={row.evidencia}
                  disabled={submitted}
                  placeholder="p. ej. Registro de revisiones periódicas de acceso"
                  onChange={(e) => updateRow(row.id, "evidencia", e.target.value)}
                  className="w-full rounded-md border border-outline-variant bg-surface-container-lowest px-xs py-1.5 text-body-md text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container disabled:opacity-80"
                />
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
        label="De todas tus propuestas, ¿cuál mejora priorizarías primero y por qué?"
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
          Una matriz de seguridad completa conecta cada problema con el atributo que compromete, el riesgo resultante,
          el control que existe (o no) hoy, la mejora propuesta y la evidencia que permitiría verificar que esa mejora
          funciona — exactamente el criterio que aplicaría un responsable de seguridad documental.
        </FeedbackNote>
      )}
    </ActivityShell>
  );
}
