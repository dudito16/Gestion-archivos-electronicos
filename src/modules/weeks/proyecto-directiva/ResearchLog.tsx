import { Pencil, Plus, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../../../components/ui/button";
import { logFields, type LogFieldKey } from "./project.data";
import { BITACORA_STORAGE_KEY, newId, readJson, writeJson } from "./storage";

type LogEntry = { id: string } & Record<LogFieldKey, string>;

const emptyDraft = (): Record<LogFieldKey, string> => ({
  fecha: new Date().toISOString().slice(0, 10),
  actividad: "",
  fuente: "",
  aporte: "",
  verificacion: "",
  decision: "",
  responsable: "",
});

const placeholders: Record<LogFieldKey, string> = {
  fecha: "",
  actividad: "Ej.: búsqueda de la estructura de directivas de la entidad",
  fuente: "Ej.: portal institucional / entrevista / herramienta de IA",
  aporte: "¿Qué información o idea se obtuvo?",
  verificacion: "¿Cómo y contra qué fuente original se comprobó?",
  decision: "¿Qué se aceptó, modificó o descartó, y por qué?",
  responsable: "Integrante que realizó la actividad",
};

/**
 * Bitácora de investigación y uso de IA — one shared log for the whole project (Semanas 16 y 17),
 * stored under its own key (`gae2.proyectoDirectiva.bitacora`). It records the research process,
 * not a superficial AI-use declaration: every entry asks for verification and the team's decision.
 */
export function ResearchLog() {
  const [entries, setEntries] = useState<LogEntry[]>(() => readJson<{ entries: LogEntry[] }>(BITACORA_STORAGE_KEY, { entries: [] }).entries);
  const [draft, setDraft] = useState(emptyDraft);
  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    writeJson(BITACORA_STORAGE_KEY, { entries });
  }, [entries]);

  const canSave = draft.actividad.trim() && draft.fuente.trim() && draft.verificacion.trim() && draft.responsable.trim();

  function save() {
    if (!canSave) return;
    if (editingId) {
      setEntries((prev) => prev.map((e) => (e.id === editingId ? { ...draft, id: editingId } : e)));
    } else {
      setEntries((prev) => [...prev, { ...draft, id: newId() }]);
    }
    setDraft(emptyDraft());
    setEditingId(null);
  }

  function edit(entry: LogEntry) {
    const { id, ...rest } = entry;
    setDraft(rest);
    setEditingId(id);
  }

  function remove(id: string) {
    if (!window.confirm("¿Eliminar este registro de la bitácora?")) return;
    setEntries((prev) => prev.filter((e) => e.id !== id));
    if (editingId === id) {
      setEditingId(null);
      setDraft(emptyDraft());
    }
  }

  return (
    <div className="space-y-md">
      <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-md space-y-sm">
        <p className="text-label-md font-label-md font-semibold text-on-surface">
          {editingId ? "Editar registro" : "Nuevo registro de la bitácora"}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-sm">
          {logFields.map((field) => (
            <div key={field.key} className={field.key === "aporte" || field.key === "verificacion" || field.key === "decision" ? "md:col-span-2" : ""}>
              <label htmlFor={`log-${field.key}`} className="text-caption font-caption font-semibold text-on-surface block mb-1">
                {field.label}
                {["actividad", "fuente", "verificacion", "responsable"].includes(field.key) && <span className="text-error"> *</span>}
              </label>
              {field.key === "fecha" ? (
                <input
                  id={`log-${field.key}`}
                  type="date"
                  value={draft.fecha}
                  onChange={(e) => setDraft((d) => ({ ...d, fecha: e.target.value }))}
                  className="w-full rounded-lg border border-outline-variant bg-surface-container-low p-xs text-body-md font-body-md text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container"
                />
              ) : (
                <textarea
                  id={`log-${field.key}`}
                  rows={field.key === "actividad" || field.key === "fuente" || field.key === "responsable" ? 1 : 2}
                  value={draft[field.key]}
                  placeholder={placeholders[field.key]}
                  onChange={(e) => setDraft((d) => ({ ...d, [field.key]: e.target.value }))}
                  className="w-full rounded-lg border border-outline-variant bg-surface-container-low p-xs text-body-md font-body-md text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container"
                />
              )}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-sm flex-wrap">
          <Button size="sm" onClick={save} disabled={!canSave}>
            <Plus size={16} /> {editingId ? "Guardar cambios" : "Agregar a la bitácora"}
          </Button>
          {editingId && (
            <Button
              size="sm"
              variant="ghost"
              onClick={() => {
                setEditingId(null);
                setDraft(emptyDraft());
              }}
            >
              Cancelar edición
            </Button>
          )}
          <span className="text-caption font-caption text-on-surface-variant">* Campos obligatorios: sin verificación no hay registro.</span>
        </div>
      </div>

      {entries.length === 0 ? (
        <p className="text-body-md font-body-md text-on-surface-variant italic">
          Aún no hay registros. Cada búsqueda, entrevista, consulta de norma o uso de IA debería quedar anotado aquí.
        </p>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-outline-variant bg-surface-container-lowest shadow-sm">
          <table className="w-full min-w-[60rem] border-collapse text-left">
            <thead>
              <tr className="bg-surface-container-low">
                {logFields.map((f) => (
                  <th key={f.key} className="p-sm text-caption font-caption font-semibold text-primary-container">
                    {f.label}
                  </th>
                ))}
                <th className="p-sm" aria-label="Acciones" />
              </tr>
            </thead>
            <tbody>
              {entries.map((entry) => (
                <tr key={entry.id} className="border-t border-outline-variant align-top">
                  {logFields.map((f) => (
                    <td key={f.key} className="p-sm text-caption font-caption text-on-surface whitespace-pre-line">
                      {entry[f.key] || "—"}
                    </td>
                  ))}
                  <td className="p-sm">
                    <div className="flex gap-1">
                      <Button size="icon" variant="ghost" aria-label="Editar registro" onClick={() => edit(entry)}>
                        <Pencil size={16} />
                      </Button>
                      <Button size="icon" variant="ghost" aria-label="Eliminar registro" onClick={() => remove(entry.id)}>
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <p className="text-caption font-caption text-on-surface-variant">
        La bitácora es la misma en las Semanas 16 y 17 y se guarda en este navegador. Antes de la entrega, transcríbanla
        al documento final (sección 11).
      </p>
    </div>
  );
}
