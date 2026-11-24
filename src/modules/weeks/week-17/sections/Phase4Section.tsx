import { AlertTriangle, CheckCircle2, Circle } from "lucide-react";
import { useMemo } from "react";
import { Callout } from "../../../../components/common/Callout";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../../../components/ui/accordion";
import { Progress } from "../../../../components/ui/progress";
import { cn } from "../../../../utils/cn";
import { ChipList, PhaseBanner, ReflectionBox, ReviewToggle } from "../../proyecto-directiva/components";
import { useProjectStore } from "../../proyecto-directiva/projectStore";
import { readJson, WEEK16_STORAGE_KEY, type MatrixRow } from "../../proyecto-directiva/storage";
import { directiveSections, phase4Purpose, procedureExample, week17Phases } from "../week17.data";
import { AiAuditorActivity } from "../auditor/AiAuditorActivity";

function DirectiveSectionsGuide() {
  const { isReviewed, toggleReviewed, reviewedCount } = useProjectStore();
  const ids = directiveSections.map((s) => `dir-${s.id}`);
  const count = reviewedCount(ids);

  return (
    <div className="space-y-sm">
      <div className="space-y-1.5">
        <div className="flex items-center justify-between gap-sm">
          <span className="text-label-md font-label-md font-semibold text-on-surface">Apartados revisados por el equipo</span>
          <span className="text-label-md font-label-md font-semibold text-on-surface">
            {count}/{ids.length}
          </span>
        </div>
        <Progress value={Math.round((count / ids.length) * 100)} />
      </div>

      <Accordion type="single" collapsible className="rounded-xl border border-outline-variant bg-surface-container-lowest px-md">
        {directiveSections.map((s) => {
          const id = `dir-${s.id}`;
          const done = isReviewed(id);
          return (
            <AccordionItem key={s.id} value={s.id} id={`directiva-${s.id}`} className="scroll-mt-24">
              <AccordionTrigger>
                <span className="flex items-center gap-sm">
                  {done ? <CheckCircle2 size={18} className="text-tertiary shrink-0" /> : <Circle size={18} className="text-outline shrink-0" />}
                  <span className="text-primary-container font-bold">{s.number}</span>
                  <span>{s.title}</span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="space-y-sm">
                <p className="text-body-md font-body-md text-on-surface">{s.explanation}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-sm">
                  <div className="rounded-lg bg-surface-container-low p-md">
                    <p className="text-label-md font-label-md font-bold text-primary-container mb-1">Qué debe redactar el equipo</p>
                    <p className="text-body-md font-body-md text-on-surface-variant">{s.redactar}</p>
                  </div>
                  <div className="rounded-lg bg-surface-container-low p-md">
                    <p className="text-label-md font-label-md font-bold text-primary-container mb-1">Preguntas orientadoras</p>
                    <ul className="list-disc pl-5 space-y-1 text-body-md font-body-md text-on-surface-variant">
                      {s.preguntas.map((q) => (
                        <li key={q}>{q}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                {s.items && (
                  <div className="space-y-xs">
                    <p className="text-caption font-caption font-semibold text-on-surface">Elementos a considerar (según el caso)</p>
                    <ChipList items={s.items} />
                  </div>
                )}
                <div className="rounded-lg border-l-4 border-primary-container bg-secondary-container/30 p-md">
                  <p className="text-caption font-caption font-semibold uppercase tracking-wider text-primary-container">Ejemplo breve orientativo</p>
                  <p className="text-body-md font-body-md text-on-surface italic">{s.ejemplo}</p>
                </div>
                {s.warning && (
                  <p className="flex items-start gap-xs rounded-lg bg-error-container/40 p-sm text-body-md font-body-md text-on-error-container">
                    <AlertTriangle size={18} className="shrink-0 mt-0.5" /> {s.warning}
                  </p>
                )}
                <button
                  type="button"
                  onClick={() => toggleReviewed(id)}
                  aria-pressed={done}
                  className={cn(
                    "inline-flex items-center gap-xs rounded-full border px-3 py-1.5 text-caption font-caption font-semibold transition-colors",
                    done ? "border-tertiary-fixed-dim bg-tertiary-fixed/50 text-on-tertiary-fixed-variant" : "border-outline-variant text-on-surface hover:border-primary-container",
                  )}
                >
                  {done ? <CheckCircle2 size={14} /> : <Circle size={14} />} {done ? "Apartado revisado" : "Marcar apartado como revisado"}
                </button>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}

/** Read-only bridge to Semana 16: lists the team's risks so each one is answered by a disposition. */
function RiskCoverage() {
  const risks = useMemo(() => readJson<{ matrix: MatrixRow[] }>(WEEK16_STORAGE_KEY, { matrix: [] }).matrix, []);
  return (
    <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg space-y-sm">
      <p className="text-label-md font-label-md font-bold text-primary-container">Correspondencia riesgo → disposición</p>
      <p className="text-body-md font-body-md text-on-surface-variant">
        Cada riesgo de la matriz de la Semana 16 debe estar atendido por al menos una disposición o procedimiento.
      </p>
      {risks.length === 0 ? (
        <p className="text-body-md font-body-md text-on-surface-variant italic">
          No se encontró en este navegador la matriz de la Semana 16. Trabajen con la matriz de su documento: escriban junto a
          cada riesgo el número de la disposición que lo atiende.
        </p>
      ) : (
        <div className="space-y-sm">
          {risks.map((r, index) => (
            <div key={r.id} className="grid grid-cols-1 md:grid-cols-2 gap-sm items-start rounded-lg bg-surface-container-low p-sm">
              <div>
                <p className="text-caption font-caption font-semibold text-primary-container">Riesgo {index + 1}</p>
                <p className="text-body-md font-body-md text-on-surface">{r.problema}</p>
                <p className="text-caption font-caption text-on-surface-variant">Medida propuesta: {r.medida}</p>
              </div>
              <ReflectionBox id={`cobertura-${r.id}`} label="Disposición o procedimiento que lo atiende" rows={2} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function Phase4Section() {
  const phase = week17Phases[0];
  return (
    <section id="fase-4" className="scroll-mt-24 space-y-lg">
      <PhaseBanner phase={phase} purpose={phase4Purpose} week={17} />

      <SectionHeading
        eyebrow="Guía de apartados"
        title="Los diez apartados de la directiva"
        description="Cada apartado incluye una explicación, qué debe redactar el equipo, preguntas orientadoras y un ejemplo breve. Los ejemplos muestran la forma, nunca el contenido de su directiva."
      />
      <DirectiveSectionsGuide />

      <div className="space-y-sm">
        <p className="text-headline-md font-headline-md text-on-surface">{procedureExample.title}</p>
        <p className="text-body-md font-body-md text-on-surface-variant max-w-3xl">
          Un procedimiento es aplicable cuando indica responsable, actividad, orden, condición, control y evidencia. Las
          celdas «¿?» deben resolverse con las decisiones de su equipo.
        </p>
        <div className="overflow-x-auto rounded-xl border border-outline-variant bg-surface-container-lowest shadow-sm">
          <table className="w-full min-w-[52rem] border-collapse text-left">
            <thead>
              <tr className="bg-surface-container-low">
                {procedureExample.columns.map((c) => (
                  <th key={c} className="p-sm text-caption font-caption font-semibold text-primary-container">
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {procedureExample.rows.map((row) => (
                <tr key={row[0]} className="border-t border-outline-variant">
                  {row.map((cell, i) => (
                    <td key={`${row[0]}-${i}`} className={cn("p-sm text-caption font-caption", cell === "¿?" ? "text-outline italic" : "text-on-surface")}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <RiskCoverage />

      <Callout variant="info" title="Prueba de aplicabilidad">
        Lean cada disposición y pregúntense: ¿quién la ejecuta?, ¿cuándo?, ¿qué evidencia queda?, ¿cómo se verifica su
        cumplimiento? Si alguna pregunta no tiene respuesta, la disposición todavía no es aplicable.
      </Callout>

      <AiAuditorActivity />

      <ReviewToggle id={phase.id} />
    </section>
  );
}
