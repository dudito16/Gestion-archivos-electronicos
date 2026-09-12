import { AnimatePresence, motion } from "framer-motion";
import { Plus, Trash2 } from "lucide-react";
import { useId, useState } from "react";
import { Button } from "../../../../../components/ui/button";
import { OpenTextField, OpenAnswerDisclaimer } from "../../activities/components/OpenTextField";
import type { AnswerValue5, MatrixBuilderQuestion } from "../practice5.types";

interface Props {
  question: MatrixBuilderQuestion;
  disabled: boolean;
  onCheck: (value: AnswerValue5) => void;
}

interface Row {
  id: string;
  values: Record<string, string>;
}

function emptyRow(id: string, question: MatrixBuilderQuestion): Row {
  const values: Record<string, string> = {};
  for (const col of question.columns) values[col.key] = "";
  return { id, values };
}

function isRowComplete(row: Row, question: MatrixBuilderQuestion): boolean {
  return question.columns.every((c) => row.values[c.key]?.trim());
}

/** Free add/remove row builder with mixed text/select columns, plus one or more closing open questions. */
export function MatrixBuilderView5({ question, disabled, onCheck }: Props) {
  const idBase = useId();
  const [rows, setRows] = useState<Row[]>(() =>
    Array.from({ length: question.minRows }, (_, i) => emptyRow(`${idBase}-${i}`, question)),
  );
  const [closingAnswers, setClosingAnswers] = useState<string[]>(() => question.closingQuestions.map(() => ""));

  const completeRows = rows.filter((r) => isRowComplete(r, question)).length;
  const closingOk = closingAnswers.every((a) => a.trim().length > 0);
  const canCheck = completeRows >= question.minRows && closingOk;

  function addRow() {
    if (disabled) return;
    setRows((prev) => [...prev, emptyRow(`${idBase}-${prev.length}-${Date.now()}`, question)]);
  }

  function removeRow(id: string) {
    if (disabled) return;
    setRows((prev) => (prev.length > 1 ? prev.filter((r) => r.id !== id) : prev));
  }

  function updateCell(id: string, key: string, value: string) {
    setRows((prev) => prev.map((r) => (r.id === id ? { ...r, values: { ...r.values, [key]: value } } : r)));
  }

  function updateClosing(index: number, value: string) {
    setClosingAnswers((prev) => {
      const next = [...prev];
      next[index] = value;
      return next;
    });
  }

  function applyChip(suggestion: string) {
    if (disabled || !question.chipColumnKey) return;
    const target = rows.find((r) => !r.values[question.chipColumnKey!]?.trim());
    if (target) updateCell(target.id, question.chipColumnKey, suggestion);
  }

  return (
    <div className="space-y-md">
      {question.chipSuggestions && question.chipSuggestions.length > 0 && (
        <div>
          <p className="text-caption font-caption text-on-surface-variant mb-1">Problemas mencionados en el caso (toca uno para usarlo en una fila vacía):</p>
          <div className="flex flex-wrap gap-xs">
            {question.chipSuggestions.map((s) => (
              <button
                key={s}
                type="button"
                disabled={disabled}
                onClick={() => applyChip(s)}
                className="rounded-full border border-outline-variant bg-surface-container-lowest px-3 py-1.5 text-caption font-caption text-on-surface hover:border-primary-container transition-colors"
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      )}

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
                <span className="text-label-md font-label-md font-bold text-primary-container">Fila {index + 1}</span>
                {rows.length > 1 && !disabled && (
                  <button type="button" aria-label="Eliminar fila" onClick={() => removeRow(row.id)} className="text-outline hover:text-error">
                    <Trash2 size={16} />
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-xs">
                {question.columns.map((col) => (
                  <div key={col.key}>
                    <label htmlFor={`mb5-${row.id}-${col.key}`} className="text-caption font-caption text-on-surface-variant mb-0.5 block">
                      {col.label}
                    </label>
                    {col.type === "select" ? (
                      <select
                        id={`mb5-${row.id}-${col.key}`}
                        value={row.values[col.key] ?? ""}
                        disabled={disabled}
                        onChange={(e) => updateCell(row.id, col.key, e.target.value)}
                        className="w-full rounded-md border border-outline-variant bg-surface-container-lowest px-xs py-1.5 text-body-md text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container"
                      >
                        <option value="">Selecciona...</option>
                        {col.options?.map((opt) => (
                          <option key={opt.id} value={opt.id}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        id={`mb5-${row.id}-${col.key}`}
                        type="text"
                        value={row.values[col.key] ?? ""}
                        disabled={disabled}
                        placeholder={col.placeholder}
                        onChange={(e) => updateCell(row.id, col.key, e.target.value)}
                        className="w-full rounded-md border border-outline-variant bg-surface-container-lowest px-xs py-1.5 text-body-md text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container disabled:opacity-80"
                      />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {!disabled && (
          <Button variant="secondary" size="sm" onClick={addRow}>
            <Plus size={16} /> {question.addLabel ?? "Agregar fila"}
          </Button>
        )}
      </div>

      <p className="text-caption font-caption text-on-surface-variant">
        Filas completas: {completeRows}/{rows.length} (mínimo {question.minRows}).
      </p>

      {question.closingQuestions.length > 0 && (
        <div className="space-y-sm pt-sm border-t border-outline-variant">
          {question.closingQuestions.map((q, index) => (
            <OpenTextField
              key={q}
              id={`mb5-closing-${index}`}
              label={q}
              value={closingAnswers[index] ?? ""}
              onChange={(v) => updateClosing(index, v)}
              rows={2}
              disabled={disabled}
            />
          ))}
          <OpenAnswerDisclaimer />
        </div>
      )}

      <Button disabled={!canCheck || disabled} onClick={() => onCheck({ kind: "matrixBuilder", rows: rows.map((r) => r.values), closingAnswers })}>
        Enviar respuesta
      </Button>
    </div>
  );
}
