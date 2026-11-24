import { Ban, Bot, CheckCircle2, Eye, Search, UserCheck } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "../../../components/common/SectionHeading";
import { Callout } from "../../../components/common/Callout";
import { Badge } from "../../../components/ui/badge";
import { cn } from "../../../utils/cn";
import { ChipList } from "./components";
import { aiAllowedUses, aiForbiddenInputs, aiObligations, milestones } from "./project.data";
import { ResearchLog } from "./ResearchLog";

/** Cronograma de avances — shared by both weeks; highlights the milestones of the current week. */
export function ScheduleSection({ week }: { week: 16 | 17 }) {
  const [activeId, setActiveId] = useState(milestones.find((m) => m.week === week)!.id);
  const active = milestones.find((m) => m.id === activeId)!;

  return (
    <section id="cronograma" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="Cronograma de avances"
        title="Un solo proyecto, seis entregas progresivas"
        description="Las Semanas 16 y 17 forman un único proyecto de investigación grupal. Selecciona un avance para ver qué debe presentarse, qué debe haberse investigado y qué revisará el docente."
      />

      <div className="relative">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-xs">
          {milestones.map((m, index) => {
            const isCurrentWeek = m.week === week;
            const isActive = m.id === activeId;
            return (
              <motion.button
                key={m.id}
                type="button"
                onClick={() => setActiveId(m.id)}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                aria-pressed={isActive}
                className={cn(
                  "rounded-xl border-2 p-sm text-left transition-colors flex flex-col gap-1",
                  isActive
                    ? "border-primary-container bg-secondary-container/60"
                    : isCurrentWeek
                      ? "border-outline-variant bg-surface-container-lowest hover:border-primary-container"
                      : "border-dashed border-outline-variant bg-surface-container-low opacity-80 hover:opacity-100",
                )}
              >
                <span className="text-caption font-caption font-semibold uppercase tracking-wider text-primary-container">Semana {m.week}</span>
                <span className="text-label-md font-label-md font-bold text-on-surface">{m.label}</span>
                <span className="text-caption font-caption text-on-surface-variant line-clamp-3">{m.summary}</span>
              </motion.button>
            );
          })}
        </div>
      </div>

      <motion.div
        key={active.id}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg space-y-md"
      >
        <div className="flex items-center gap-xs flex-wrap">
          <Badge variant="tertiary">Semana {active.week}</Badge>
          <p className="text-headline-md font-headline-md text-on-surface">{active.label}</p>
        </div>
        <p className="text-body-lg font-body-lg text-on-surface">{active.summary}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-sm">
          <MilestoneColumn title="Qué debe presentar" items={active.presentar} />
          <MilestoneColumn title="Qué debe haber investigado" items={active.investigado} />
          <MilestoneColumn title="Qué revisará el docente" items={active.revisaDocente} />
        </div>
      </motion.div>
    </section>
  );
}

function MilestoneColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-lg bg-surface-container-low p-md">
      <p className="text-label-md font-label-md font-bold text-primary-container mb-xs">{title}</p>
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-xs text-body-md font-body-md text-on-surface-variant">
            <CheckCircle2 size={16} className="shrink-0 mt-1 text-primary-container" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** "¿Pueden utilizar IA? Sí, pero deben demostrar su investigación." + bitácora — shared by both weeks. */
export function AiUseSection() {
  return (
    <section id="uso-ia" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="Uso responsable de IA"
        title="¿Pueden utilizar inteligencia artificial? Sí, pero deben demostrar su investigación."
        description="La IA puede acompañar el trabajo, pero no lo sustituye: la investigación, la verificación de fuentes, las decisiones y el dominio del contenido son del equipo y de cada integrante."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-md">
        <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg space-y-sm">
          <p className="flex items-center gap-xs text-label-md font-label-md font-bold text-primary-container">
            <Bot size={20} /> Se permite utilizar IA para
          </p>
          <ChipList items={aiAllowedUses} tone="accent" />
        </div>
        <div className="rounded-xl border border-error/50 bg-error-container/20 p-lg space-y-sm">
          <p className="flex items-center gap-xs text-label-md font-label-md font-bold text-error">
            <Ban size={20} /> Nunca carguen en herramientas de IA
          </p>
          <ChipList items={aiForbiddenInputs} />
        </div>
      </div>

      <div>
        <p className="text-body-lg font-body-lg font-semibold text-on-surface mb-sm">Sin embargo, el equipo deberá:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-sm">
          {aiObligations.map((o, index) => {
            const Icon = index === 0 ? Search : index < 3 ? Eye : index < 6 ? CheckCircle2 : UserCheck;
            return (
              <motion.div
                key={o.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                className="rounded-lg border border-outline-variant bg-surface-container-lowest p-md space-y-1"
              >
                <Icon size={20} className="text-primary-container" />
                <p className="text-label-md font-label-md font-semibold text-on-surface">{o.label}</p>
                <p className="text-caption font-caption text-on-surface-variant">{o.detail}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div id="bitacora" className="scroll-mt-24 space-y-sm">
        <p className="text-headline-md font-headline-md text-on-surface">Bitácora de investigación y uso de IA</p>
        <p className="text-body-md font-body-md text-on-surface-variant max-w-3xl">
          No es una declaración de uso de IA: es la evidencia del proceso de investigación. Registren cada fuente
          consultada, cada entrevista, cada comparación y cada uso de IA, indicando cómo lo verificaron y qué decidió el
          equipo.
        </p>
        <ResearchLog />
      </div>

      <Callout variant="warning" title="Una referencia que no consultaron no existe">
        Si una herramienta de IA sugiere una norma, un artículo o un numeral, el equipo debe localizar la fuente
        original, leerla y comprobar que dice lo que se afirma. Las referencias inventadas o no consultadas invalidan el
        sustento de la directiva.
      </Callout>
    </section>
  );
}
