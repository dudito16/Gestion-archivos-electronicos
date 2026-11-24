import { ArrowRight, BookOpenCheck, Check, ClipboardCopy, Plus, Trash2, XCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Callout } from "../../../../components/common/Callout";
import { FlowChain } from "../../../../components/common/FlowChain";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { cn } from "../../../../utils/cn";
import { newId, readJson, writeJson } from "../../proyecto-directiva/storage";
import {
  aiCanBeWrong,
  auditorFlow,
  auditorIntro,
  auditorPrompt,
  AUDITOR_STORAGE_KEY,
  decisionOptions,
  didacticExample,
  evaluationFields,
  inputsExample,
  inputsToProvide,
  interpretSteps,
  logReminderItems,
  privacyText,
  type Decision,
} from "./aiAuditor.data";

/* ---------------------------------------------------------------- helpers */

function BlockTitle({ letter, title }: { letter: string; title: string }) {
  return (
    <div className="flex items-center gap-sm">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary-container text-on-secondary-container text-caption font-bold">{letter}</span>
      <h3 className="text-headline-md font-headline-md text-on-surface">{title}</h3>
    </div>
  );
}

async function copyText(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    // fall through to the legacy path
  }
  try {
    const area = document.createElement("textarea");
    area.value = text;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.opacity = "0";
    document.body.appendChild(area);
    area.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(area);
    return ok;
  } catch {
    return false;
  }
}

/* ---------------------------------------------------------------- C. prompt */

function PromptBlock() {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  async function handleCopy() {
    const ok = await copyText(auditorPrompt);
    setStatus(ok ? "copied" : "error");
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setStatus("idle"), 3000);
  }

  return (
    <div className="rounded-xl border border-outline-variant bg-surface-container-lowest shadow-sm overflow-hidden">
      <div className="flex items-center justify-between gap-sm flex-wrap border-b border-outline-variant bg-surface-container-low px-md py-sm">
        <span className="text-label-md font-label-md font-semibold text-on-surface">Prompt modelo · revisión crítica de una disposición</span>
        <div className="flex items-center gap-sm">
          <span role="status" aria-live="polite" className="text-caption font-caption">
            {status === "copied" && (
              <span className="inline-flex items-center gap-1 text-tertiary font-semibold">
                <Check size={14} /> Prompt copiado
              </span>
            )}
            {status === "error" && (
              <span className="inline-flex items-center gap-1 text-error font-semibold">
                <XCircle size={14} /> No se pudo copiar: selecciónalo manualmente
              </span>
            )}
          </span>
          <Button size="sm" onClick={handleCopy} aria-label="Copiar prompt">
            {status === "copied" ? <Check size={16} /> : <ClipboardCopy size={16} />}
            {status === "copied" ? "Copiado" : "Copiar prompt"}
          </Button>
        </div>
      </div>
      <pre
        tabIndex={0}
        aria-label="Texto del prompt modelo"
        className="max-h-[28rem] overflow-y-auto whitespace-pre-wrap break-words p-md text-caption font-caption leading-relaxed text-on-surface font-mono"
      >
        {auditorPrompt}
      </pre>
      <p className="border-t border-outline-variant bg-surface-container-low px-md py-xs text-caption font-caption text-on-surface-variant">
        Después de pegarlo, reemplaza cada «[Completar]» con la información de una sola disposición.
      </p>
    </div>
  );
}

/* ---------------------------------------------------------------- E. evaluation matrix */

type EvalRow = { id: string; observacion: string; decision: Decision | ""; justificacion: string; fuente: string; cambio: string };

const emptyEvalRow = (): EvalRow => ({ id: newId(), observacion: "", decision: "", justificacion: "", fuente: "", cambio: "" });

/**
 * Light working matrix to document the team's decisions on each AI observation.
 * Isolated key `gae2.week17.auditorIA` — never touches the Semana 17 project store or earlier weeks. Not graded.
 */
function EvaluationMatrix() {
  const [rows, setRows] = useState<EvalRow[]>(() => readJson<{ rows: EvalRow[] }>(AUDITOR_STORAGE_KEY, { rows: [] }).rows);

  useEffect(() => {
    writeJson(AUDITOR_STORAGE_KEY, { rows });
  }, [rows]);

  const update = (id: string, key: keyof EvalRow, value: string) => setRows((prev) => prev.map((r) => (r.id === id ? { ...r, [key]: value } : r)));

  const remove = (id: string) => {
    if (!window.confirm("¿Eliminar esta fila de la matriz?")) return;
    setRows((prev) => prev.filter((r) => r.id !== id));
  };

  const inputClass =
    "w-full rounded-lg border border-outline-variant bg-surface-container-low p-xs text-caption font-caption text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container";

  return (
    <div className="space-y-sm">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-xs">
        {evaluationFields.map((f) => (
          <div key={f.key} className="rounded-lg bg-surface-container-low p-sm">
            <p className="text-caption font-caption font-bold text-primary-container">{f.label}</p>
            <p className="text-caption font-caption text-on-surface-variant mt-0.5">{f.howTo}</p>
            {f.key === "decision" && (
              <div className="flex flex-wrap gap-1 mt-1">
                {decisionOptions.map((d) => (
                  <Badge key={d} variant="outline">
                    {d}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {rows.length > 0 && (
        <div className="space-y-xs">
          {rows.map((row, index) => (
            <div key={row.id} className="rounded-xl border border-outline-variant bg-surface-container-lowest p-sm space-y-xs">
              <div className="flex items-center justify-between">
                <span className="text-caption font-caption font-bold text-on-surface">Observación {index + 1}</span>
                <Button size="icon" variant="ghost" aria-label={`Eliminar observación ${index + 1}`} onClick={() => remove(row.id)}>
                  <Trash2 size={16} />
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-xs">
                {evaluationFields.map((f) => {
                  const fieldId = `auditor-${row.id}-${f.key}`;
                  return (
                    <div key={f.key}>
                      <label htmlFor={fieldId} className="text-caption font-caption font-semibold text-on-surface-variant block mb-0.5">
                        {f.label}
                      </label>
                      {f.key === "decision" ? (
                        <select id={fieldId} value={row.decision} onChange={(e) => update(row.id, "decision", e.target.value)} className={inputClass}>
                          <option value="">Seleccionar…</option>
                          {decisionOptions.map((d) => (
                            <option key={d} value={d}>
                              {d}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <textarea id={fieldId} rows={3} value={row[f.key]} onChange={(e) => update(row.id, f.key, e.target.value)} className={inputClass} />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="flex items-center gap-sm flex-wrap">
        <Button size="sm" variant="secondary" onClick={() => setRows((prev) => [...prev, emptyEvalRow()])}>
          <Plus size={16} /> Agregar observación
        </Button>
        <span className="text-caption font-caption text-on-surface-variant italic">
          Borrador de trabajo guardado en este navegador. No se califica: sirve para documentar la revisión del equipo.
        </span>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- activity */

/** Semana 17 · Fase 4 — Auditor técnico de la propuesta de preservación digital con IA (blocks A–H). */
export function AiAuditorActivity() {
  return (
    <div id="auditor-ia" className="scroll-mt-24 rounded-xl border-2 border-primary-container/40 bg-gradient-to-br from-surface-container-lowest to-surface-container-low p-md md:p-lg space-y-xl">
      {/* A */}
      <div className="space-y-md">
        <div className="flex items-center gap-xs flex-wrap">
          <Badge variant="tertiary">Actividad con IA</Badge>
          <Badge variant="outline">No calificable</Badge>
        </div>
        <SectionHeading eyebrow="Auditor técnico de la propuesta con IA" title="¿Tu disposición realmente puede aplicarse?" />
        <div className="space-y-sm max-w-3xl">
          {auditorIntro.map((p) => (
            <p key={p.slice(0, 24)} className="text-body-md font-body-md text-on-surface-variant">
              {p}
            </p>
          ))}
        </div>
        <FlowChain steps={auditorFlow} />
      </div>

      {/* B */}
      <div className="space-y-sm">
        <BlockTitle letter="B" title="¿Qué debes proporcionar a la IA?" />
        <p className="text-body-md font-body-md text-on-surface-variant max-w-3xl">
          No es necesario introducir toda la investigación. Trabaja con información relevante y limitada a la disposición que
          estás revisando: una disposición por consulta.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-xs">
          {inputsToProvide.map((item, index) => (
            <div key={item.id} className="rounded-lg border border-outline-variant bg-surface-container-lowest p-sm">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-container text-on-primary text-caption font-bold mb-1">{index + 1}</span>
              <p className="text-label-md font-label-md font-semibold text-on-surface">{item.label}</p>
              <p className="text-caption font-caption text-on-surface-variant mt-0.5">{item.detail}</p>
            </div>
          ))}
        </div>
        <div className="rounded-lg border-l-4 border-primary-container bg-secondary-container/30 p-md">
          <p className="text-label-md font-label-md font-semibold text-on-surface mb-1">{inputsExample.title}</p>
          <ul className="list-disc pl-5 space-y-0.5 text-body-md font-body-md text-on-surface-variant">
            {inputsExample.items.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* G — shown before the prompt so it is read before using any external tool */}
      <Callout variant="info" title="Privacidad y uso responsable de IA">
        <div className="space-y-1">
          {privacyText.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
      </Callout>

      {/* C */}
      <div className="space-y-sm">
        <BlockTitle letter="C" title="Prompt modelo para copiar" />
        <PromptBlock />
      </div>

      {/* D */}
      <div className="space-y-sm">
        <BlockTitle letter="D" title="¿Cómo interpretar la respuesta de la IA?" />
        <p className="text-body-md font-body-md text-on-surface-variant max-w-3xl">
          El resultado de la IA no es una validación oficial ni una certificación: es un insumo para la revisión del equipo.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-xs">
          {interpretSteps.map((s, index) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="relative rounded-lg border border-outline-variant bg-surface-container-lowest p-sm"
            >
              <p className="text-caption font-caption font-bold uppercase tracking-wider text-primary-container">
                {index + 1}. {s.label}
              </p>
              <p className="text-caption font-caption text-on-surface-variant mt-0.5">{s.text}</p>
            </motion.div>
          ))}
        </div>
        <Callout variant="warning" title="La IA puede equivocarse">
          {aiCanBeWrong}
        </Callout>
      </div>

      {/* E */}
      <div className="space-y-sm">
        <BlockTitle letter="E" title="Matriz de evaluación de las observaciones de IA" />
        <p className="text-body-md font-body-md text-on-surface-variant max-w-3xl">
          Documenta qué hizo el equipo con cada observación. Cada columna explica qué información registrar.
        </p>
        <EvaluationMatrix />
      </div>

      {/* F */}
      <div className="space-y-sm">
        <BlockTitle letter="F" title="Ejemplo didáctico" />
        <Badge variant="outline">Caso ficticio · solo orientador</Badge>
        <div className="rounded-lg bg-surface-container-low p-md">
          <p className="text-caption font-caption font-semibold uppercase tracking-wider text-primary-container">Problema</p>
          <p className="text-body-md font-body-md text-on-surface">{didacticExample.problema}</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-sm items-stretch">
          <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-md space-y-xs">
            <p className="text-caption font-caption font-semibold uppercase tracking-wider text-on-surface-variant">Borrador inicial</p>
            <p className="text-body-lg font-body-lg text-on-surface italic">«{didacticExample.borrador}»</p>
            <p className="text-caption font-caption font-semibold text-on-surface">Demasiado general:</p>
            <ul className="space-y-0.5">
              {didacticExample.fallas.map((f) => (
                <li key={f} className="flex items-start gap-xs text-caption font-caption text-on-surface-variant">
                  <XCircle size={14} className="shrink-0 mt-0.5 text-error" /> {f}
                </li>
              ))}
            </ul>
          </div>
          <span className="flex items-center justify-center text-primary-container">
            <ArrowRight size={22} className="rotate-90 lg:rotate-0" />
          </span>
          <div className="rounded-xl border border-primary-container/50 bg-secondary-container/20 p-md space-y-xs">
            <p className="text-caption font-caption font-semibold uppercase tracking-wider text-primary-container">Ejemplo de mejora didáctica</p>
            <p className="text-body-md font-body-md text-on-surface italic">«{didacticExample.mejora}»</p>
          </div>
        </div>
        <p className={cn("text-caption font-caption text-on-surface-variant italic")}>
          {didacticExample.nota} No es una disposición oficial del AGN ni de ninguna institución.
        </p>
      </div>

      {/* H */}
      <div className="space-y-sm">
        <BlockTitle letter="H" title="Registro en la bitácora" />
        <p className="text-body-md font-body-md text-on-surface-variant max-w-3xl">
          Esta actividad no reemplaza la bitácora del proyecto. Registra cada revisión con IA en la bitácora general,
          incluyendo:
        </p>
        <div className="flex flex-wrap gap-xs">
          {logReminderItems.map((i) => (
            <span key={i} className="rounded-full border border-outline-variant bg-surface-container-lowest px-3 py-1.5 text-caption font-caption text-on-surface">
              {i}
            </span>
          ))}
        </div>
        <Button asChild variant="secondary" size="sm" className="whitespace-normal text-left h-auto">
          <a href="#bitacora">
            <BookOpenCheck size={16} /> Ir a la bitácora de investigación y uso de IA
          </a>
        </Button>
      </div>
    </div>
  );
}
