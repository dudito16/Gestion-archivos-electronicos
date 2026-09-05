import { Plus, Trash2 } from "lucide-react";
import { useId } from "react";
import { Button } from "../../../../../components/ui/button";
import { cn } from "../../../../../utils/cn";
import type { DynamicColumn } from "../activities.types";

/** Tailwind needs literal class names to keep them in the production build — no dynamic `grid-cols-${n}`. */
const gridClassByColumnCount: Record<number, string> = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-3",
};

interface DynamicFieldListProps {
  columns: DynamicColumn[];
  rows: Record<string, string>[];
  onChange: (rows: Record<string, string>[]) => void;
  minRows?: number;
  addLabel?: string;
  disabled?: boolean;
}

/** Generic add/remove-row builder — reused by every activity where the student proposes their own metadata fields. */
export function DynamicFieldList({ columns, rows, onChange, minRows = 1, addLabel = "Agregar campo", disabled }: DynamicFieldListProps) {
  const idBase = useId();

  function addRow() {
    const empty: Record<string, string> = {};
    for (const col of columns) empty[col.key] = "";
    onChange([...rows, empty]);
  }

  function removeRow(index: number) {
    if (rows.length <= minRows) return;
    onChange(rows.filter((_, i) => i !== index));
  }

  function updateCell(index: number, key: string, value: string) {
    onChange(rows.map((row, i) => (i === index ? { ...row, [key]: value } : row)));
  }

  return (
    <div className="space-y-sm">
      <div className="space-y-xs">
        {rows.map((row, index) => (
          <div key={`${idBase}-${index}`} className="rounded-lg border border-outline-variant bg-surface-container-low p-sm">
            <div className={cn("grid gap-xs", gridClassByColumnCount[Math.min(columns.length, 3)] ?? "grid-cols-1")}>
              {columns.map((col) => (
                <div key={col.key}>
                  <label className="text-caption font-caption font-semibold text-on-surface-variant mb-0.5 block">{col.label}</label>
                  <input
                    type="text"
                    value={row[col.key] ?? ""}
                    disabled={disabled}
                    onChange={(e) => updateCell(index, col.key, e.target.value)}
                    placeholder={col.placeholder}
                    className="w-full rounded-md border border-outline-variant bg-surface-container-lowest px-xs py-1.5 text-body-md text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container"
                  />
                </div>
              ))}
            </div>
            {rows.length > minRows && !disabled && (
              <button
                type="button"
                aria-label="Eliminar fila"
                onClick={() => removeRow(index)}
                className="mt-xs flex items-center gap-1 text-caption font-caption text-outline hover:text-error"
              >
                <Trash2 size={13} /> Quitar
              </button>
            )}
          </div>
        ))}
      </div>

      {!disabled && (
        <Button variant="secondary" size="sm" onClick={addRow}>
          <Plus size={16} /> {addLabel}
        </Button>
      )}
    </div>
  );
}
