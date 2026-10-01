import { AnimatePresence, motion } from "framer-motion";
import { Plus, Trash2 } from "lucide-react";
import { useEffect, useId, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { FeedbackNote } from "../activities/components/FeedbackNote";
import { ActivityShell } from "../activities/components/ActivityShell";
import { OpenTextField, OpenAnswerDisclaimer } from "../activities/components/OpenTextField";
import { taller3MinRows, taller3ProblemSuggestions, taller3Scenario } from "./taller.data";
import { isMeaningfulText } from "../activities/evaluate";
import { useWeek7Taller } from "./tallerProgress";

interface RiskRow {
  id: string;
  problema: string;
  amenaza: string;
  vulnerabilidad: string;
  riesgo: string;
}

interface Draft {
  rows: RiskRow[];
  priority: string;
}

const ID = "taller-3" as const;

function emptyRow(id: string): RiskRow {
  return { id, problema: "", amenaza: "", vulnerabilidad: "", riesgo: "" };
}

function initialRows(idBase: string): RiskRow[] {
  return Array.from({ length: taller3MinRows }, (_, i) => emptyRow(`${idBase}-${i}`));
}

function isRowComplete(row: RiskRow): boolean {
  return Boolean(row.problema.trim() && row.amenaza.trim() && row.vulnerabilidad.trim() && row.riesgo.trim());
}

export function Taller3RiskMap() {
  const idBase = useId();
  const { getAnswer, setAnswer, markCompleted, isCompleted } = useWeek7Taller();
  const [draft, setDraft] = useState<Draft>(() => getAnswer(ID, { rows: initialRows(idBase), priority: "" }));
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

  function updateRow(id: string, field: keyof RiskRow, value: string) {
    setDraft((d) => ({ ...d, rows: d.rows.map((r) => (r.id === id ? { ...r, [field]: value } : r)) }));
  }

  function applySuggestion(suggestion: string) {
    const target = draft.rows.find((r) => !r.problema.trim());
    if (target) updateRow(target.id, "problema", suggestion);
  }

  function handleSubmit() {
    if (completeRows < taller3MinRows) {
      setError(`Completa las cuatro columnas de al menos ${taller3MinRows} riesgos antes de enviar.`);
      return;
    }
    if (!isMeaningfulText(draft.priority, 10)) {
      setError("Explica cuál riesgo priorizarías y por qué.");
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
      title="Mapa de riesgos documentales"
      objective="Construir un mapa de riesgos identificando problema, amenaza, vulnerabilidad y riesgo resultante."
      instructions={<>Identifica al menos {taller3MinRows} riesgos a partir del caso.</>}
      done={isCompleted(ID)}
    >
      <p className="rounded-lg border border-outline-variant bg-surface-container-low p-md text-body-md font-body-md text-on-surface">{taller3Scenario}</p>

      <div>
        <p className="text-caption font-caption text-on-surface-variant mb-1">Problemas mencionados en el caso (toca uno para usarlo en una fila vacía):</p>
        <div className="flex flex-wrap gap-xs">
          {taller3ProblemSuggestions.map((s) => (
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
                <span className="text-label-md font-label-md font-bold text-primary-container">Riesgo {index + 1}</span>
                {draft.rows.length > 1 && !submitted && (
                  <button type="button" aria-label="Eliminar riesgo" onClick={() => removeRow(row.id)} className="text-outline hover:text-error">
                    <Trash2 size={16} />
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-xs">
                <div>
                  <label htmlFor={`taller3-problema-${row.id}`} className="text-caption font-caption text-on-surface-variant mb-0.5 block">Problema</label>
                  <textarea
                    id={`taller3-problema-${row.id}`}
                    rows={2}
                    value={row.problema}
                    disabled={submitted}
                    placeholder="Selecciona o escribe un problema"
                    onChange={(e) => updateRow(row.id, "problema", e.target.value)}
                    className="w-full rounded-md border border-outline-variant bg-surface-container-lowest px-xs py-1.5 text-body-md text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container disabled:opacity-80"
                  />
                </div>
                <div>
                  <label htmlFor={`taller3-amenaza-${row.id}`} className="text-caption font-caption text-on-surface-variant mb-0.5 block">Amenaza</label>
                  <input
                    id={`taller3-amenaza-${row.id}`}
                    type="text"
                    value={row.amenaza}
                    disabled={submitted}
                    placeholder="p. ej. Acceso no autorizado"
                    onChange={(e) => updateRow(row.id, "amenaza", e.target.value)}
                    className="w-full rounded-md border border-outline-variant bg-surface-container-lowest px-xs py-1.5 text-body-md text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container disabled:opacity-80"
                  />
                </div>
                <div>
                  <label htmlFor={`taller3-vulnerabilidad-${row.id}`} className="text-caption font-caption text-on-surface-variant mb-0.5 block">Vulnerabilidad</label>
                  <input
                    id={`taller3-vulnerabilidad-${row.id}`}
                    type="text"
                    value={row.vulnerabilidad}
                    disabled={submitted}
                    placeholder="p. ej. Falta de revisión periódica"
                    onChange={(e) => updateRow(row.id, "vulnerabilidad", e.target.value)}
                    className="w-full rounded-md border border-outline-variant bg-surface-container-lowest px-xs py-1.5 text-body-md text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container disabled:opacity-80"
                  />
                </div>
                <div>
                  <label htmlFor={`taller3-riesgo-${row.id}`} className="text-caption font-caption text-on-surface-variant mb-0.5 block">Riesgo resultante</label>
                  <input
                    id={`taller3-riesgo-${row.id}`}
                    type="text"
                    value={row.riesgo}
                    disabled={submitted}
                    placeholder="p. ej. Pérdida de información sin posibilidad de recuperación"
                    onChange={(e) => updateRow(row.id, "riesgo", e.target.value)}
                    className="w-full rounded-md border border-outline-variant bg-surface-container-lowest px-xs py-1.5 text-body-md text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container disabled:opacity-80"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {!submitted && (
          <Button variant="secondary" size="sm" onClick={addRow}>
            <Plus size={16} /> Agregar otro riesgo
          </Button>
        )}
      </div>

      <p className="text-caption font-caption text-on-surface-variant">Riesgos completos: {completeRows}/{draft.rows.length} (mínimo {taller3MinRows}).</p>

      <OpenTextField
        id="taller3-priority"
        label="De todos los riesgos identificados, ¿cuál priorizarías primero y por qué?"
        value={draft.priority}
        onChange={(v) => setDraft((d) => ({ ...d, priority: v }))}
        rows={3}
        disabled={submitted}
      />
      <OpenAnswerDisclaimer />

      {error && <p className="text-label-md font-label-md text-error">{error}</p>}

      {!submitted ? (
        <Button onClick={handleSubmit}>Enviar mapa de riesgos</Button>
      ) : (
        <FeedbackNote kind="criterio">
          Un buen mapa de riesgos distingue el problema observado, la amenaza que lo origina, la vulnerabilidad que lo
          permite y el riesgo concreto que resulta — y prioriza según el impacto potencial, no según lo más fácil de
          resolver.
        </FeedbackNote>
      )}
    </ActivityShell>
  );
}
