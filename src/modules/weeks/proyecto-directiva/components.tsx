import { Check, CheckCircle2, Circle, Lightbulb, Save } from "lucide-react";
import { motion } from "framer-motion";
import { useState, type ReactNode } from "react";
import { Button } from "../../../components/ui/button";
import { Badge } from "../../../components/ui/badge";
import { Progress } from "../../../components/ui/progress";
import { Callout } from "../../../components/common/Callout";
import { cn } from "../../../utils/cn";
import { getIcon } from "../../../utils/getIcon";
import { useProjectStore } from "./projectStore";

/* -------------------------------------------------------------------------------------------------
 * Shared presentation pieces for the Semanas 16-17 project. They compose the course's existing
 * primitives (SectionHeading, Callout, Button, Badge, Progress, Accordion) — no duplicated primitives.
 * ------------------------------------------------------------------------------------------------- */

export interface PhaseMeta {
  id: string;
  number: number;
  title: string;
  anchor: string;
}

/** Big "Fase N" banner that opens each phase; includes the per-phase "revisada" toggle. */
export function PhaseBanner({ phase, purpose, week }: { phase: PhaseMeta; purpose: string; week: 16 | 17 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.4 }}
      className="rounded-xl bg-gradient-to-br from-primary-container to-on-primary-fixed-variant p-lg text-white flex flex-col md:flex-row md:items-center gap-md"
    >
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white/15 text-headline-lg font-headline-lg font-bold">
        {phase.number}
      </div>
      <div className="flex-1 space-y-1">
        <p className="text-caption font-caption font-semibold uppercase tracking-wider text-white/80">
          Fase {phase.number} · Semana {week}
        </p>
        <h2 className="text-headline-lg font-headline-lg">{phase.title}</h2>
        <p className="text-body-md font-body-md text-white/90 max-w-3xl">
          <strong>Propósito:</strong> {purpose}
        </p>
      </div>
    </motion.div>
  );
}

/** Lets the team mark a phase as "revisada" — a reading aid, never a grade. */
export function ReviewToggle({ id, label = "Marcar esta fase como revisada" }: { id: string; label?: string }) {
  const { isReviewed, toggleReviewed } = useProjectStore();
  const done = isReviewed(id);
  return (
    <button
      type="button"
      onClick={() => toggleReviewed(id)}
      aria-pressed={done}
      className={cn(
        "inline-flex items-center gap-xs rounded-full border-2 px-4 py-2 text-label-md font-label-md font-semibold transition-colors",
        done
          ? "border-tertiary-fixed-dim bg-tertiary-fixed/50 text-on-tertiary-fixed-variant"
          : "border-outline-variant bg-surface-container-lowest text-on-surface hover:border-primary-container",
      )}
    >
      {done ? <CheckCircle2 size={18} /> : <Circle size={18} />}
      {done ? "Fase revisada" : label}
    </button>
  );
}

/** Overview of the week's phases with reviewed/pending state, linking to each phase. */
export function PhaseProgressPanel({ phases, week }: { phases: PhaseMeta[]; week: 16 | 17 }) {
  const { isReviewed, reviewedCount } = useProjectStore();
  const count = reviewedCount(phases.map((p) => p.id));
  const percent = Math.round((count / phases.length) * 100);
  return (
    <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-md space-y-sm">
      <div className="flex items-center justify-between gap-sm flex-wrap">
        <p className="text-label-md font-label-md font-semibold text-on-surface">Fases revisadas en la Semana {week}</p>
        <span className="text-label-md font-label-md font-semibold text-on-surface">
          {count}/{phases.length}
        </span>
      </div>
      <Progress value={percent} />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-xs">
        {phases.map((phase) => {
          const done = isReviewed(phase.id);
          return (
            <a
              key={phase.id}
              href={`#${phase.anchor}`}
              className={cn(
                "flex items-center gap-xs rounded-lg border px-md py-sm text-label-md font-label-md transition-colors",
                done
                  ? "border-tertiary-fixed-dim bg-tertiary-fixed/30 text-on-tertiary-fixed-variant"
                  : "border-outline-variant bg-surface-container-low text-on-surface hover:border-primary-container",
              )}
            >
              {done ? <CheckCircle2 size={16} className="shrink-0" /> : <Circle size={16} className="shrink-0 text-outline" />}
              <span>
                Fase {phase.number}: {phase.title}
              </span>
            </a>
          );
        })}
      </div>
      <p className="text-caption font-caption text-on-surface-variant italic">
        Este indicador solo orienta la lectura del equipo. No es una calificación.
      </p>
    </div>
  );
}

/** Open reflection / working-notes field, persisted in the week's store. No automatic grading. */
export function ReflectionBox({
  id,
  label,
  placeholder,
  rows = 4,
  helper,
}: {
  id: string;
  label: string;
  placeholder?: string;
  rows?: number;
  helper?: string;
}) {
  const { getNote, setNote } = useProjectStore();
  const value = getNote(id);
  const fieldId = `field-${id}`;
  return (
    <div className="space-y-1">
      <label htmlFor={fieldId} className="text-label-md font-label-md font-semibold text-on-surface block">
        {label}
      </label>
      {helper && <p className="text-caption font-caption text-on-surface-variant">{helper}</p>}
      <textarea
        id={fieldId}
        value={value}
        onChange={(e) => setNote(id, e.target.value)}
        rows={rows}
        placeholder={placeholder}
        className="w-full rounded-lg border border-outline-variant bg-surface-container-low p-sm text-body-md font-body-md text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container"
      />
      {value.trim().length > 0 && (
        <p className="flex items-center gap-1 text-caption font-caption text-on-surface-variant">
          <Save size={12} /> Guardado en este navegador.
        </p>
      )}
    </div>
  );
}

/** Reflection activity card: prompt + persisted answer, framed as reflection (no right answer). */
export function ReflectionActivity({ id, title, prompt, placeholder }: { id: string; title: string; prompt: string; placeholder?: string }) {
  return (
    <div className="rounded-xl border-2 border-dashed border-primary-container/50 bg-secondary-container/20 p-lg space-y-sm">
      <div className="flex items-center gap-xs flex-wrap">
        <Badge variant="tertiary">Actividad de reflexión</Badge>
        <p className="text-label-md font-label-md font-semibold text-on-surface">{title}</p>
      </div>
      <p className="text-body-lg font-body-lg text-on-surface">{prompt}</p>
      <ReflectionBox id={id} label="Tu reflexión" placeholder={placeholder} rows={4} />
      <p className="text-caption font-caption text-on-surface-variant italic">
        No hay una respuesta correcta única: compártela con tu equipo y úsala como punto de partida de la investigación.
      </p>
    </div>
  );
}

/** Answers first, hints later: hints unlock only after the team writes something. */
export function HintReveal({ noteIds, title, hints }: { noteIds: string[]; title: string; hints: string[] }) {
  const { getNote } = useProjectStore();
  const [open, setOpen] = useState(false);
  const wrote = noteIds.some((id) => getNote(id).trim().length >= 20);
  return (
    <div className="space-y-sm">
      {!open ? (
        <div className="flex items-center gap-sm flex-wrap">
          <Button size="sm" onClick={() => setOpen(true)} disabled={!wrote}>
            <Lightbulb size={16} /> Ver guía de análisis
          </Button>
          {!wrote && (
            <span className="text-caption font-caption text-on-surface-variant">
              Escribe primero tu análisis (al menos unas líneas) para desbloquear las pistas.
            </span>
          )}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-lg border-l-4 border-primary-container bg-secondary-container/30 p-md space-y-xs"
        >
          <p className="text-label-md font-label-md font-semibold text-on-surface">{title}</p>
          <ul className="list-disc pl-5 space-y-1 text-body-md font-body-md text-on-surface-variant">
            {hints.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
          <p className="text-caption font-caption text-on-surface-variant italic">
            Las pistas orientan la reflexión; no reemplazan la investigación ni constituyen la solución del caso.
          </p>
        </motion.div>
      )}
    </div>
  );
}

/** Small list of chips (evidences, examples, standards). */
export function ChipList({ items, tone = "neutral" }: { items: string[]; tone?: "neutral" | "accent" }) {
  return (
    <div className="flex flex-wrap gap-xs">
      {items.map((item) => (
        <span
          key={item}
          className={cn(
            "rounded-full border px-3 py-1.5 text-caption font-caption",
            tone === "accent"
              ? "border-primary-container/40 bg-secondary-container/40 text-on-secondary-container"
              : "border-outline-variant bg-surface-container-low text-on-surface",
          )}
        >
          {item}
        </span>
      ))}
    </div>
  );
}

/** Numbered step list for instructions. */
export function NumberedSteps({ steps }: { steps: string[] }) {
  return (
    <ol className="space-y-xs">
      {steps.map((step, index) => (
        <motion.li
          key={step}
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.3, delay: (index % 8) * 0.04 }}
          className="flex items-start gap-sm rounded-lg border border-outline-variant bg-surface-container-lowest p-sm"
        >
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-container text-on-primary text-caption font-bold">
            {index + 1}
          </span>
          <span className="text-body-md font-body-md text-on-surface pt-0.5">{step}</span>
        </motion.li>
      ))}
    </ol>
  );
}

/** Grid of question cards (preguntas orientadoras). */
export function QuestionGrid({ questions }: { questions: string[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-xs">
      {questions.map((q, index) => (
        <motion.div
          key={q}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.3, delay: (index % 6) * 0.04 }}
          className="rounded-lg border border-outline-variant bg-surface-container-lowest p-sm flex items-start gap-xs"
        >
          <span className="text-primary-container font-bold shrink-0">¿?</span>
          <span className="text-body-md font-body-md text-on-surface">{q}</span>
        </motion.div>
      ))}
    </div>
  );
}

export interface GuideBlock {
  investigar: string[];
  preguntas: string[];
  aplicar: string;
  producto: string;
}

/** The four-part research guide used by every Fase 3 referente: investigar · preguntas · aplicar · producto. */
export function ResearchGuide({ guide }: { guide: GuideBlock }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-sm">
      <GuideCard icon="FileSearch" title="1. Qué deben investigar">
        <ChipList items={guide.investigar} />
      </GuideCard>
      <GuideCard icon="HelpCircle" title="2. Preguntas orientadoras">
        <ul className="list-disc pl-5 space-y-1 text-body-md font-body-md text-on-surface-variant">
          {guide.preguntas.map((q) => (
            <li key={q}>{q}</li>
          ))}
        </ul>
      </GuideCard>
      <GuideCard icon="Landmark" title="3. Qué deben aplicar a su institución">
        <p className="text-body-md font-body-md text-on-surface-variant">{guide.aplicar}</p>
      </GuideCard>
      <GuideCard icon="ClipboardList" title="4. Producto que deben generar" accent>
        <p className="text-body-md font-body-md text-on-surface">{guide.producto}</p>
      </GuideCard>
    </div>
  );
}

export function GuideCard({ icon, title, children, accent }: { icon: string; title: string; children: ReactNode; accent?: boolean }) {
  const Icon = getIcon(icon);
  return (
    <div
      className={cn(
        "rounded-xl border p-md space-y-xs",
        accent ? "border-primary-container bg-secondary-container/30" : "border-outline-variant bg-surface-container-lowest",
      )}
    >
      <p className="flex items-center gap-xs text-label-md font-label-md font-bold text-primary-container">
        <Icon size={18} /> {title}
      </p>
      {children}
    </div>
  );
}

export interface DeliverableItem {
  id: string;
  label: string;
  detail?: string;
}

/** Persisted deliverables checklist — lets the team see what is done and what is missing (not a grade). */
export function DeliverablesChecklist({ items, title }: { items: DeliverableItem[]; title: string }) {
  const { isChecked, toggleChecked, checkedCount } = useProjectStore();
  const count = checkedCount(items.map((i) => i.id));
  const percent = Math.round((count / items.length) * 100);
  return (
    <div className="space-y-sm">
      <div className="space-y-1.5">
        <div className="flex items-center justify-between gap-sm">
          <span className="text-label-md font-label-md font-semibold text-on-surface">{title}</span>
          <span className="text-label-md font-label-md font-semibold text-on-surface">
            {count}/{items.length}
          </span>
        </div>
        <Progress value={percent} />
      </div>
      <div className="space-y-xs">
        {items.map((item, index) => {
          const checked = isChecked(item.id);
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => toggleChecked(item.id)}
              aria-pressed={checked}
              className={cn(
                "w-full flex items-start gap-sm rounded-lg border px-md py-sm text-left transition-colors",
                checked ? "border-tertiary-fixed-dim bg-tertiary-fixed/30" : "border-outline-variant bg-surface-container-lowest hover:border-primary-container",
              )}
            >
              <span
                className={cn(
                  "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 transition-colors",
                  checked ? "border-tertiary-fixed-dim bg-tertiary-fixed-dim text-on-tertiary-fixed" : "border-outline-variant",
                )}
              >
                {checked && <Check size={14} />}
              </span>
              <span className="flex-1">
                <span className={cn("block text-body-md font-body-md font-semibold", checked ? "text-on-tertiary-fixed-variant" : "text-on-surface")}>
                  {index + 1}. {item.label}
                </span>
                {item.detail && <span className="block text-caption font-caption text-on-surface-variant mt-0.5">{item.detail}</span>}
              </span>
              <span className={cn("text-caption font-caption shrink-0", checked ? "text-tertiary font-semibold" : "text-outline")}>
                {checked ? "Listo" : "Pendiente"}
              </span>
            </button>
          );
        })}
      </div>
      <p className="text-caption font-caption text-on-surface-variant italic">
        Tu avance se guarda automáticamente en este navegador. Marcar un ítem no equivale a una calificación: el docente
        revisará la calidad de cada producto.
      </p>
    </div>
  );
}

/** Standing privacy warning for anything involving institutional information. */
export function PrivacyNotice() {
  return (
    <Callout variant="warning" title="Privacidad y autorización">
      No utilicen expedientes reservados, datos personales ni capturas de sistemas institucionales sin autorización
      expresa. Si un documento contiene información sensible, describan su tipo y características sin reproducir su
      contenido, o trabajen con un ejemplo simulado.
    </Callout>
  );
}
