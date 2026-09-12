import { useState } from "react";
import { Button } from "../../../../../components/ui/button";
import { cn } from "../../../../../utils/cn";
import { OpenTextField, OpenAnswerDisclaimer } from "../../activities/components/OpenTextField";
import type { AnswerValue6, StageFlowQuestion } from "../practice6.types";

interface Props {
  question: StageFlowQuestion;
  disabled: boolean;
  onCheck: (value: AnswerValue6) => void;
}

const FIELD_KEYS = ["a", "b", "c"] as const;

function emptyRows(question: StageFlowQuestion): Record<string, Record<string, string>> {
  const rows: Record<string, Record<string, string>> = {};
  for (const stage of question.stages) rows[stage.id] = { a: "", b: "", c: "" };
  return rows;
}

function isStageComplete(row: Record<string, string> | undefined): boolean {
  return Boolean(row && FIELD_KEYS.every((k) => row[k]?.trim()));
}

/** Fixed-stage flow annotator: unlike matrixBuilder, rows can't be added/removed — every stage of the process is always visible. */
export function StageFlowView6({ question, disabled, onCheck }: Props) {
  const [rows, setRows] = useState<Record<string, Record<string, string>>>(() => emptyRows(question));
  const [criticalStageId, setCriticalStageId] = useState<string | null>(null);
  const [criticalJustification, setCriticalJustification] = useState("");

  const completeCount = question.stages.filter((s) => isStageComplete(rows[s.id])).length;
  const canCheck = completeCount >= question.minStages && Boolean(criticalStageId) && criticalJustification.trim().length > 0;

  function updateCell(stageId: string, key: (typeof FIELD_KEYS)[number], value: string) {
    setRows((prev) => ({ ...prev, [stageId]: { ...prev[stageId], [key]: value } }));
  }

  return (
    <div className="space-y-md">
      <div className="hidden sm:grid sm:grid-cols-[7rem_1fr_1fr_1fr] gap-xs px-xs">
        <span className="text-caption font-caption font-bold uppercase tracking-wider text-on-surface-variant">Etapa</span>
        {question.fieldLabels.map((label) => (
          <span key={label} className="text-caption font-caption font-bold uppercase tracking-wider text-on-surface-variant">
            {label}
          </span>
        ))}
      </div>

      <div className="space-y-xs">
        {question.stages.map((stage) => {
          const row = rows[stage.id];
          const complete = isStageComplete(row);
          return (
            <div
              key={stage.id}
              className={cn(
                "grid grid-cols-1 sm:grid-cols-[7rem_1fr_1fr_1fr] gap-xs items-start rounded-lg border p-sm",
                complete ? "border-tertiary-fixed-dim bg-tertiary-fixed/10" : "border-outline-variant bg-surface-container-low",
              )}
            >
              <div className="flex items-center sm:pt-2">
                <span className="text-label-md font-label-md font-bold text-on-surface">{stage.label}</span>
              </div>
              {FIELD_KEYS.map((key, index) => (
                <div key={key}>
                  <label htmlFor={`sf6-${question.id}-${stage.id}-${key}`} className="text-caption font-caption text-on-surface-variant mb-0.5 block sm:hidden">
                    {question.fieldLabels[index]}
                  </label>
                  <textarea
                    id={`sf6-${question.id}-${stage.id}-${key}`}
                    rows={2}
                    value={row[key] ?? ""}
                    disabled={disabled}
                    placeholder={question.fieldLabels[index]}
                    onChange={(e) => updateCell(stage.id, key, e.target.value)}
                    className="w-full rounded-md border border-outline-variant bg-surface-container-lowest px-xs py-1.5 text-body-md text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container disabled:opacity-80"
                  />
                </div>
              ))}
            </div>
          );
        })}
      </div>

      <p className="text-caption font-caption text-on-surface-variant">
        Etapas completas: {completeCount}/{question.stages.length} (mínimo {question.minStages}).
      </p>

      <div>
        <label htmlFor={`sf6-critical-${question.id}`} className="text-label-md font-label-md font-semibold text-on-surface mb-1 block">
          Etapa crítica
        </label>
        <select
          id={`sf6-critical-${question.id}`}
          value={criticalStageId ?? ""}
          disabled={disabled}
          onChange={(e) => setCriticalStageId(e.target.value || null)}
          className="w-full sm:w-64 rounded-lg border border-outline-variant bg-surface-container-low px-sm py-2 text-body-md font-body-md text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container"
        >
          <option value="">Selecciona...</option>
          {question.stages.map((s) => (
            <option key={s.id} value={s.id}>
              {s.label}
            </option>
          ))}
        </select>
      </div>

      <OpenTextField
        id={`sf6-justify-${question.id}`}
        label={question.criticalPrompt}
        value={criticalJustification}
        onChange={setCriticalJustification}
        rows={3}
        disabled={disabled}
      />
      <OpenAnswerDisclaimer />

      <Button
        disabled={!canCheck || disabled}
        onClick={() => onCheck({ kind: "stageFlow", rows, criticalStageId, criticalJustification })}
      >
        Comprobar respuesta
      </Button>
    </div>
  );
}
