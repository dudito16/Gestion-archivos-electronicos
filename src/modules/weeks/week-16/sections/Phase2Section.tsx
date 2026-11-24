import { ArrowRight, Pencil, Plus, Trash2 } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Progress } from "../../../../components/ui/progress";
import { cn } from "../../../../utils/cn";
import { ChipList, HintReveal, PhaseBanner, ReflectionBox, ReviewToggle } from "../../proyecto-directiva/components";
import { useProjectStore } from "../../proyecto-directiva/projectStore";
import { newId, type MatrixRow } from "../../proyecto-directiva/storage";
import { caseHints, caseQuestions, caseScenario, matrixFields, phase2Purpose, riskExamples, week16Phases } from "../week16.data";

const MIN_RISKS = 5;
type FieldKey = (typeof matrixFields)[number]["key"];
const emptyRow = (): Omit<MatrixRow, "id"> => ({ problema: "", causa: "", consecuencia: "", evidencia: "", medida: "" });

/** Visual orientation of the matrix columns: click a column to see what information it requires. */
function MatrixGuide() {
  const [active, setActive] = useState<FieldKey>("problema");
  const field = matrixFields.find((f) => f.key === active)!;
  return (
    <div className="space-y-sm">
      <div className="flex flex-col md:flex-row md:items-stretch gap-xs">
        {matrixFields.map((f, index) => (
          <div key={f.key} className="flex flex-col md:flex-row items-center gap-xs flex-1">
            <button
              type="button"
              onClick={() => setActive(f.key)}
              aria-pressed={active === f.key}
              className={cn(
                "w-full rounded-lg border-2 px-md py-sm text-center transition-colors",
                active === f.key
                  ? "border-primary-container bg-secondary-container text-on-secondary-container"
                  : "border-outline-variant bg-surface-container-lowest text-on-surface hover:border-primary-container",
              )}
            >
              <span className="block text-label-md font-label-md font-bold">{f.label}</span>
              <span className="block text-caption font-caption text-on-surface-variant">{f.question}</span>
            </button>
            {index < matrixFields.length - 1 && <ArrowRight size={16} className="text-outline shrink-0 rotate-90 md:rotate-0" />}
          </div>
        ))}
      </div>
      <motion.div key={field.key} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="rounded-lg bg-surface-container-low p-md">
        <p className="text-label-md font-label-md font-semibold text-on-surface">
          {field.label}: {field.question}
        </p>
        <p className="text-body-md font-body-md text-on-surface-variant mt-1">{field.hint}</p>
      </motion.div>
    </div>
  );
}

/** Simple working form to register the team's matrix rows (persisted under the Semana 16 key). */
function RiskMatrixBuilder() {
  const { matrix, setMatrix } = useProjectStore();
  const [draft, setDraft] = useState(emptyRow);
  const [editingId, setEditingId] = useState<string | null>(null);
  const complete = matrixFields.every((f) => draft[f.key].trim().length > 0);
  const count = matrix.length;

  function save() {
    if (!complete) return;
    if (editingId) setMatrix(matrix.map((r) => (r.id === editingId ? { ...draft, id: editingId } : r)));
    else setMatrix([...matrix, { ...draft, id: newId() }]);
    setDraft(emptyRow());
    setEditingId(null);
  }

  function remove(id: string) {
    if (!window.confirm("¿Eliminar este riesgo de la matriz?")) return;
    setMatrix(matrix.filter((r) => r.id !== id));
  }

  return (
    <div className="space-y-md">
      <div className="space-y-1.5">
        <div className="flex items-center justify-between gap-sm">
          <span className="text-label-md font-label-md font-semibold text-on-surface">Riesgos registrados por el equipo</span>
          <span className={cn("text-label-md font-label-md font-semibold", count >= MIN_RISKS ? "text-tertiary" : "text-on-surface")}>
            {count}/{MIN_RISKS} mínimo
          </span>
        </div>
        <Progress value={Math.min(100, (count / MIN_RISKS) * 100)} />
      </div>

      <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-md space-y-sm">
        <p className="text-label-md font-label-md font-semibold text-on-surface">{editingId ? "Editar riesgo" : "Registrar un riesgo"}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-sm">
          {matrixFields.map((f) => (
            <div key={f.key} className={f.key === "medida" ? "md:col-span-2" : ""}>
              <label htmlFor={`matrix-${f.key}`} className="text-caption font-caption font-semibold text-on-surface block mb-1">
                {f.label} <span className="font-normal text-on-surface-variant">— {f.question}</span>
              </label>
              <textarea
                id={`matrix-${f.key}`}
                rows={2}
                value={draft[f.key]}
                onChange={(e) => setDraft((d) => ({ ...d, [f.key]: e.target.value }))}
                className="w-full rounded-lg border border-outline-variant bg-surface-container-low p-xs text-body-md font-body-md text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container"
              />
            </div>
          ))}
        </div>
        <div className="flex items-center gap-sm flex-wrap">
          <Button size="sm" onClick={save} disabled={!complete}>
            <Plus size={16} /> {editingId ? "Guardar cambios" : "Agregar a la matriz"}
          </Button>
          {editingId && (
            <Button
              size="sm"
              variant="ghost"
              onClick={() => {
                setEditingId(null);
                setDraft(emptyRow());
              }}
            >
              Cancelar edición
            </Button>
          )}
          {!complete && <span className="text-caption font-caption text-on-surface-variant">Completa los cinco campos: un riesgo sin evidencia o sin medida no está sustentado.</span>}
        </div>
      </div>

      {count > 0 && (
        <div className="overflow-x-auto rounded-xl border border-outline-variant bg-surface-container-lowest shadow-sm">
          <table className="w-full min-w-[56rem] border-collapse text-left">
            <thead>
              <tr className="bg-surface-container-low">
                <th className="p-sm text-caption font-caption font-semibold text-on-surface-variant">N.°</th>
                {matrixFields.map((f) => (
                  <th key={f.key} className="p-sm text-caption font-caption font-semibold text-primary-container">
                    {f.label}
                  </th>
                ))}
                <th className="p-sm" aria-label="Acciones" />
              </tr>
            </thead>
            <tbody>
              {matrix.map((row, index) => (
                <tr key={row.id} className="border-t border-outline-variant align-top">
                  <td className="p-sm text-caption font-caption font-bold text-on-surface">{index + 1}</td>
                  {matrixFields.map((f) => (
                    <td key={f.key} className="p-sm text-caption font-caption text-on-surface whitespace-pre-line">
                      {row[f.key]}
                    </td>
                  ))}
                  <td className="p-sm">
                    <div className="flex gap-1">
                      <Button
                        size="icon"
                        variant="ghost"
                        aria-label="Editar riesgo"
                        onClick={() => {
                          const { id, ...rest } = row;
                          setDraft(rest);
                          setEditingId(id);
                        }}
                      >
                        <Pencil size={16} />
                      </Button>
                      <Button size="icon" variant="ghost" aria-label="Eliminar riesgo" onClick={() => remove(row.id)}>
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
      <p className="text-caption font-caption text-on-surface-variant italic">
        La matriz se guarda en este navegador como borrador de trabajo. No se califica automáticamente: el docente revisará
        la coherencia y el sustento de cada fila en el documento del equipo.
      </p>
    </div>
  );
}

export function Phase2Section() {
  const phase = week16Phases[1];
  return (
    <section id="fase-2" className="scroll-mt-24 space-y-lg">
      <PhaseBanner phase={phase} purpose={phase2Purpose} week={16} />

      <div className="space-y-sm">
        <SectionHeading
          eyebrow="Instrucciones"
          title="Identificar como mínimo cinco problemas o riesgos"
          description="Cada riesgo debe estar relacionado con la gestión y preservación de los documentos electrónicos de su institución y sustentado con evidencia."
        />
        <p className="text-label-md font-label-md font-semibold text-on-surface">Ejemplos de orientación (no son respuestas para copiar)</p>
        <ChipList items={riskExamples} />
        <Callout variant="warning" title="Un ejemplo no es un hallazgo">
          Un riesgo solo entra en la matriz si el equipo encontró evidencia de que existe en su institución. Copiar la lista
          de ejemplos sin investigar no constituye un diagnóstico.
        </Callout>
      </div>

      <div className="space-y-sm">
        <SectionHeading eyebrow="Matriz de diagnóstico" title="Problema → causa → consecuencia → evidencia → medida" description="Selecciona cada columna para ver qué información debe reunir el equipo." />
        <MatrixGuide />
      </div>

      <RiskMatrixBuilder />

      <Callout variant="info" title="Requisito pedagógico">
        Mínimo cinco riesgos. Las medidas no aparecen prefabricadas en esta página: deben investigarse y justificarse, porque
        en la Semana 17 cada medida se convertirá en una disposición de la directiva.
      </Callout>

      <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg space-y-md">
        <div className="flex items-center gap-xs flex-wrap">
          <Badge variant="tertiary">Actividad de análisis</Badge>
          <p className="text-label-md font-label-md font-semibold text-on-surface">Caso: carpetas compartidas y un único servidor</p>
        </div>
        <p className="text-body-lg font-body-lg text-on-surface border-l-4 border-primary-container pl-md">{caseScenario}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-sm">
          {caseQuestions.map((q) => (
            <ReflectionBox key={q.id} id={q.id} label={q.label} rows={3} />
          ))}
        </div>
        <HintReveal noteIds={caseQuestions.map((q) => q.id)} title="Guía de análisis" hints={caseHints} />
      </div>

      <ReviewToggle id={phase.id} />
    </section>
  );
}
