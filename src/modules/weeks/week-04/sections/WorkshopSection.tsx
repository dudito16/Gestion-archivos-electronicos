import { Plus, Trash2 } from "lucide-react";
import { useId, useState } from "react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Button } from "../../../../components/ui/button";
import { Badge } from "../../../../components/ui/badge";
import { workshopGuideQuestions } from "../week04.data";
import type { WorkshopRow } from "../week04.types";

function emptyRow(id: string): WorkshopRow {
  return { id, field: "", definition: "", type: "", required: "Opcional", example: "" };
}

let rowCounter = 0;

/** Guided workshop: the student builds a metadata schema for an SGD, one field at a time. */
export function WorkshopSection() {
  const idBase = useId();
  const [rows, setRows] = useState<WorkshopRow[]>([emptyRow(`${idBase}-0`)]);

  function addRow() {
    rowCounter += 1;
    setRows((prev) => [...prev, emptyRow(`${idBase}-${rowCounter}`)]);
  }

  function removeRow(id: string) {
    setRows((prev) => (prev.length > 1 ? prev.filter((r) => r.id !== id) : prev));
  }

  function updateRow(id: string, field: keyof WorkshopRow, value: string) {
    setRows((prev) => prev.map((r) => (r.id === id ? { ...r, [field]: value } : r)));
  }

  return (
    <section id="taller" className="scroll-mt-24 space-y-lg">
      <div className="flex items-center gap-xs">
        <Badge variant="tertiary">Taller</Badge>
        <span className="text-caption font-caption text-on-surface-variant">Incluido en el sílabo</span>
      </div>
      <SectionHeading
        eyebrow="Actividad central de la semana"
        title="Diseño de una ficha básica de metadatos para un SGD"
        description="Objetivo: proponer campos básicos de metadatos para gestionar un documento dentro de un SGD."
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_18rem] gap-lg items-start">
        <div className="min-w-0 rounded-xl border border-outline-variant bg-surface-container-lowest p-lg space-y-md">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[42rem] border-collapse text-left">
              <thead>
                <tr className="bg-surface-container-low">
                  <th className="p-xs text-label-md font-label-md text-on-surface-variant">Campo</th>
                  <th className="p-xs text-label-md font-label-md text-on-surface-variant">Definición</th>
                  <th className="p-xs text-label-md font-label-md text-on-surface-variant">Tipo</th>
                  <th className="p-xs text-label-md font-label-md text-on-surface-variant">Obligatorio</th>
                  <th className="p-xs text-label-md font-label-md text-on-surface-variant">Ejemplo</th>
                  <th className="p-xs" aria-hidden />
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.id} className="border-t border-outline-variant">
                    <td className="p-xs">
                      <input
                        aria-label="Campo"
                        value={row.field}
                        onChange={(e) => updateRow(row.id, "field", e.target.value)}
                        placeholder="p. ej. Título"
                        className="w-full rounded-md border border-outline-variant bg-surface-container-low px-xs py-1.5 text-body-md text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container"
                      />
                    </td>
                    <td className="p-xs">
                      <input
                        aria-label="Definición"
                        value={row.definition}
                        onChange={(e) => updateRow(row.id, "definition", e.target.value)}
                        placeholder="¿Qué representa este campo?"
                        className="w-full rounded-md border border-outline-variant bg-surface-container-low px-xs py-1.5 text-body-md text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container"
                      />
                    </td>
                    <td className="p-xs">
                      <input
                        aria-label="Tipo de dato"
                        value={row.type}
                        onChange={(e) => updateRow(row.id, "type", e.target.value)}
                        placeholder="Texto, fecha…"
                        className="w-full rounded-md border border-outline-variant bg-surface-container-low px-xs py-1.5 text-body-md text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container"
                      />
                    </td>
                    <td className="p-xs">
                      <select
                        aria-label="Obligatorio"
                        value={row.required}
                        onChange={(e) => updateRow(row.id, "required", e.target.value)}
                        className="w-full rounded-md border border-outline-variant bg-surface-container-low px-xs py-1.5 text-body-md text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container"
                      >
                        <option>Obligatorio</option>
                        <option>Opcional</option>
                      </select>
                    </td>
                    <td className="p-xs">
                      <input
                        aria-label="Ejemplo"
                        value={row.example}
                        onChange={(e) => updateRow(row.id, "example", e.target.value)}
                        placeholder="Valor de ejemplo"
                        className="w-full rounded-md border border-outline-variant bg-surface-container-low px-xs py-1.5 text-body-md text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container"
                      />
                    </td>
                    <td className="p-xs">
                      <button
                        type="button"
                        aria-label="Eliminar campo"
                        onClick={() => removeRow(row.id)}
                        disabled={rows.length === 1}
                        className="text-outline hover:text-error disabled:opacity-30 disabled:hover:text-outline"
                      >
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Button variant="secondary" size="sm" onClick={addRow}>
            <Plus size={16} /> Agregar campo
          </Button>
        </div>

        <div className="rounded-xl border border-primary-container/40 bg-secondary-container/20 p-md space-y-sm">
          <p className="text-label-md font-label-md font-bold uppercase tracking-wider text-primary-container">
            Antes de agregar un campo, pregúntate
          </p>
          <ul className="space-y-1.5">
            {workshopGuideQuestions.map((q) => (
              <li key={q} className="text-body-md font-body-md text-on-surface-variant pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-primary-container">
                {q}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
