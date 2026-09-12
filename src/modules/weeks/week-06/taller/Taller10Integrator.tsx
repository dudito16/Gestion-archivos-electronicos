import { AnimatePresence, motion } from "framer-motion";
import { Plus, Trash2 } from "lucide-react";
import { useEffect, useId, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { FeedbackNote } from "../activities/components/FeedbackNote";
import { ActivityShell } from "../activities/components/ActivityShell";
import { OpenTextField, OpenAnswerDisclaimer } from "../activities/components/OpenTextField";
import { taller10MinRows, taller10ProblemSuggestions, taller10Scenario } from "./taller.data";
import { isMeaningfulText } from "../activities/evaluate";
import { useWeek6Taller } from "./tallerProgress";

const ASPECT_OPTIONS = [
  { id: "identidad", label: "Identidad / certificado" },
  { id: "integridad", label: "Integridad" },
  { id: "trazabilidad", label: "Trazabilidad" },
  { id: "registro", label: "Registro" },
  { id: "tiempo", label: "Evidencia temporal" },
];

interface ProblemRow {
  id: string;
  problema: string;
  aspecto: string;
  accion: string;
  justificacion: string;
}

interface Draft {
  rows: ProblemRow[];
  priorities: string;
}

const ID = "taller-10" as const;

function emptyRow(id: string): ProblemRow {
  return { id, problema: "", aspecto: "", accion: "", justificacion: "" };
}

function initialRows(idBase: string): ProblemRow[] {
  return Array.from({ length: taller10MinRows }, (_, i) => emptyRow(`${idBase}-${i}`));
}

function isRowComplete(row: ProblemRow): boolean {
  return Boolean(row.problema.trim() && row.aspecto && row.accion.trim() && row.justificacion.trim());
}

export function Taller10Integrator() {
  const idBase = useId();
  const { getAnswer, setAnswer, markCompleted, isCompleted } = useWeek6Taller();
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
      setError(`Completa las cuatro columnas de al menos ${taller10MinRows} problemas antes de enviar.`);
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
      title="Caso integrador — Responsable de verificación documental"
      objective="Actuar como responsable de verificación documental: identificar problemas, relacionarlos con el aspecto afectado y proponer acciones."
      instructions={<>Identifica al menos {taller10MinRows} problemas, relaciona cada uno con el aspecto que afecta, propón una acción y justifícala.</>}
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
                <div>
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
                  <label htmlFor={`taller10-aspecto-${row.id}`} className="text-caption font-caption text-on-surface-variant mb-0.5 block">Aspecto afectado</label>
                  <select
                    id={`taller10-aspecto-${row.id}`}
                    value={row.aspecto}
                    disabled={submitted}
                    onChange={(e) => updateRow(row.id, "aspecto", e.target.value)}
                    className="w-full rounded-md border border-outline-variant bg-surface-container-lowest px-xs py-1.5 text-body-md text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container"
                  >
                    <option value="">Selecciona...</option>
                    {ASPECT_OPTIONS.map((opt) => (
                      <option key={opt.id} value={opt.id}>{opt.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor={`taller10-accion-${row.id}`} className="text-caption font-caption text-on-surface-variant mb-0.5 block">Acción propuesta</label>
                  <input
                    id={`taller10-accion-${row.id}`}
                    type="text"
                    value={row.accion}
                    disabled={submitted}
                    placeholder="p. ej. Revisar vigencia antes de aceptar"
                    onChange={(e) => updateRow(row.id, "accion", e.target.value)}
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
                    placeholder="¿Por qué esta acción resuelve el problema?"
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
        label="De todas tus propuestas, ¿cuál acción priorizarías primero y por qué?"
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
          Un buen diagnóstico relaciona cada problema con el aspecto que compromete (identidad, integridad,
          trazabilidad, registro o evidencia temporal) y prioriza acciones según su impacto — exactamente el
          criterio que aplicaría un responsable de verificación documental.
        </FeedbackNote>
      )}
    </ActivityShell>
  );
}
