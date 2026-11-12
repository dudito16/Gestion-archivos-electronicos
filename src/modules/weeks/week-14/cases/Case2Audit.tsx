import { useState } from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Callout } from "../../../../components/common/Callout";
import { cn } from "../../../../utils/cn";
import { case2ClosingNote, case2Disclaimer, case2Intro, case2Rows, type AuditMatrixRowData } from "./cases.data";

function RowPicker({
  options,
  value,
  correctId,
  checked,
  disabled,
  onSelect,
}: {
  options: { id: string; label: string }[];
  value: string | null;
  correctId: string;
  checked: boolean;
  disabled: boolean;
  onSelect: (id: string) => void;
}) {
  return (
    <div className="flex flex-col gap-1">
      {options.map((opt) => {
        const isSelected = value === opt.id;
        const isRight = checked && isSelected && opt.id === correctId;
        const isWrong = checked && isSelected && opt.id !== correctId;
        return (
          <button
            key={opt.id}
            type="button"
            disabled={disabled}
            onClick={() => onSelect(opt.id)}
            className={cn(
              "rounded-lg border px-sm py-1.5 text-left text-caption font-caption transition-colors",
              isRight && "border-tertiary-fixed-dim bg-tertiary-fixed/40",
              isWrong && "border-error bg-error-container/40",
              !checked && isSelected && "border-primary-container bg-secondary-container/50",
              !checked && !isSelected && "border-outline-variant bg-surface-container-lowest hover:border-primary-container",
            )}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}

function AuditRow({ row }: { row: AuditMatrixRowData }) {
  const [risk, setRisk] = useState<string | null>(null);
  const [compliance, setCompliance] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);

  return (
    <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-md space-y-sm">
      <p className="text-label-md font-label-md font-bold text-primary-container">{row.scopeLabel}</p>
      <p className="text-body-md font-body-md text-on-surface"><span className="font-semibold">Situación encontrada:</span> {row.situation}</p>
      <p className="text-caption font-caption text-on-surface-variant"><span className="font-semibold">Evidencia:</span> {row.evidence}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-sm pt-xs">
        <div>
          <p className="text-label-md font-label-md text-on-surface-variant mb-1">Riesgo</p>
          <RowPicker options={row.riskOptions} value={risk} correctId={row.correctRiskId} checked={checked} disabled={checked} onSelect={setRisk} />
        </div>
        <div>
          <p className="text-label-md font-label-md text-on-surface-variant mb-1">Nivel de cumplimiento</p>
          <RowPicker options={row.complianceOptions} value={compliance} correctId={row.correctComplianceId} checked={checked} disabled={checked} onSelect={setCompliance} />
        </div>
      </div>

      {!checked ? (
        <Button size="sm" disabled={!risk || !compliance} onClick={() => setChecked(true)}>
          Comprobar fila
        </Button>
      ) : (
        <p className="rounded-lg bg-secondary-container/30 p-sm text-caption font-caption text-on-surface">
          <span className="font-semibold">Recomendación:</span> {row.recommendation}
        </p>
      )}
    </div>
  );
}

/** Caso 2 — "Auditoría institucional": matriz interactiva sobre los tres ámbitos de ISO 16363. */
export function Case2Audit() {
  return (
    <div className="space-y-md">
      <Badge variant="tertiary">⚠️ {case2Disclaimer}</Badge>
      <p className="text-body-md font-body-md text-on-surface">{case2Intro}</p>

      <div className="space-y-sm">
        {case2Rows.map((row) => (
          <AuditRow key={row.id} row={row} />
        ))}
      </div>

      <Callout variant="warning" title="Autoevaluación académica, no certificación">
        {case2ClosingNote}
      </Callout>
    </div>
  );
}
