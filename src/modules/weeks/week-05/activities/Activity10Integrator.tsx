import { AnimatePresence, motion } from "framer-motion";
import { Plus, Trash2 } from "lucide-react";
import { useEffect, useId, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { ActivityShell } from "./components/ActivityShell";
import { OpenTextField, OpenAnswerDisclaimer } from "./components/OpenTextField";
import { FeedbackNote } from "./components/FeedbackNote";
import { activity9AttributeOptions, activity10MinRows, activity10ProblemSuggestions, activity10Scenario } from "./activities.data";
import { isMeaningfulText } from "./evaluate";
import { useWeek5Activities } from "./activitiesProgress";

interface ProblemRow {
  id: string;
  problema: string;
  atributo: string;
  control: string;
  justificacion: string;
}

interface Draft {
  rows: ProblemRow[];
  priorities: string;
}

const ID = "actividad-10" as const;

function emptyRow(id: string): ProblemRow {
  return { id, problema: "", atributo: "", control: "", justificacion: "" };
}

function initialRows(idBase: string): ProblemRow[] {
  return Array.from({ length: activity10MinRows }, (_, i) => emptyRow(`${idBase}-${i}`));
}

function isRowComplete(row: ProblemRow): boolean {
  return Boolean(row.problema.trim() && row.atributo && row.control.trim() && row.justificacion.trim());
}

export function Activity10Integrator() {
  const idBase = useId();
  const { getAnswer, setAnswer, markCompleted, isCompleted } = useWeek5Activities();
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

  function handleSubmit() {
    if (completeRows < activity10MinRows) {
      setError(`Completa las cuatro columnas de al menos ${activity10MinRows} problemas antes de enviar.`);
      return;
    }
    if (!isMeaningfulText(draft.priorities, 12)) {
      setError("Explica cuáles controles consideras prioritarios y por qué.");
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
      title="Caso integrador — Diseña los controles"
      objective="Actuar como responsable de gestión documental: identificar problemas, relacionarlos con los atributos y proponer controles justificados."
      instructions={
        <>
          Actúa como responsable de gestión documental. Identifica al menos {activity10MinRows} problemas,
          relaciona cada uno con el atributo afectado, propón un control y justifícalo.
        </>
      }
    >
      <p className="rounded-lg border border-outline-variant bg-surface-container-low p-md text-body-md font-body-md text-on-surface">
        {activity10Scenario}
      </p>

      <div>
        <p className="text-caption font-caption text-on-surface-variant mb-1">
          Problemas mencionados en el caso (toca uno para usarlo como punto de partida en una fila vacía):
        </p>
        <div className="flex flex-wrap gap-xs">
          {activity10ProblemSuggestions.map((suggestion) => (
            <button
              key={suggestion}
              type="button"
              disabled={submitted}
              onClick={() => {
                const target = draft.rows.find((r) => !r.problema.trim());
                if (target) updateRow(target.id, "problema", suggestion);
              }}
              className="rounded-full border border-outline-variant bg-surface-container-lowest px-3 py-1.5 text-caption font-caption text-on-surface hover:border-primary-container transition-colors"
            >
              {suggestion}
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
                  <button
                    type="button"
                    aria-label="Eliminar problema"
                    onClick={() => removeRow(row.id)}
                    className="text-outline hover:text-error"
                  >
                    <Trash2 size={16} />
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-xs">
                <div>
                  <label htmlFor={`act10-problema-${row.id}`} className="text-caption font-caption text-on-surface-variant mb-0.5 block">
                    Problema
                  </label>
                  <textarea
                    id={`act10-problema-${row.id}`}
                    rows={2}
                    value={row.problema}
                    disabled={submitted}
                    placeholder="Selecciona o escribe un problema"
                    onChange={(e) => updateRow(row.id, "problema", e.target.value)}
                    className="w-full rounded-md border border-outline-variant bg-surface-container-lowest px-xs py-1.5 text-body-md text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container disabled:opacity-80"
                  />
                </div>

                <div>
                  <label htmlFor={`act10-atributo-${row.id}`} className="text-caption font-caption text-on-surface-variant mb-0.5 block">
                    Atributo afectado
                  </label>
                  <select
                    id={`act10-atributo-${row.id}`}
                    value={row.atributo}
                    disabled={submitted}
                    onChange={(e) => updateRow(row.id, "atributo", e.target.value)}
                    className="w-full rounded-md border border-outline-variant bg-surface-container-lowest px-xs py-1.5 text-body-md text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container"
                  >
                    <option value="">Selecciona...</option>
                    {activity9AttributeOptions.map((opt) => (
                      <option key={opt.id} value={opt.id}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor={`act10-control-${row.id}`} className="text-caption font-caption text-on-surface-variant mb-0.5 block">
                    Control propuesto
                  </label>
                  <input
                    id={`act10-control-${row.id}`}
                    type="text"
                    value={row.control}
                    disabled={submitted}
                    placeholder="p. ej. Registro obligatorio al ingreso"
                    onChange={(e) => updateRow(row.id, "control", e.target.value)}
                    className="w-full rounded-md border border-outline-variant bg-surface-container-lowest px-xs py-1.5 text-body-md text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container disabled:opacity-80"
                  />
                </div>

                <div>
                  <label htmlFor={`act10-justificacion-${row.id}`} className="text-caption font-caption text-on-surface-variant mb-0.5 block">
                    Justificación
                  </label>
                  <input
                    id={`act10-justificacion-${row.id}`}
                    type="text"
                    value={row.justificacion}
                    disabled={submitted}
                    placeholder="¿Por qué este control resuelve el problema?"
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

      <p className="text-caption font-caption text-on-surface-variant">
        Problemas completos: {completeRows}/{draft.rows.length} (mínimo {activity10MinRows}).
      </p>

      <OpenTextField
        id="act10-priorities"
        label="¿Cuáles controles consideras prioritarios y por qué?"
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
        <AnimatePresence>
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="space-y-sm">
            <p className="text-body-lg font-body-lg font-semibold text-on-surface">
              Has construido una propuesta inicial de controles para fortalecer la gestión de documentos electrónicos.
            </p>
            <FeedbackNote kind="criterio">
              Un buen diagnóstico no se limita a listar problemas: los relaciona con el atributo que comprometen
              (autenticidad, fiabilidad, integridad o disponibilidad) y prioriza los controles según su impacto.
              En un caso real, esta propuesta sería el punto de partida para una política de gestión documental,
              no la solución completa — requeriría validarse con los responsables de cada proceso.
            </FeedbackNote>
          </motion.div>
        </AnimatePresence>
      )}
    </ActivityShell>
  );
}
