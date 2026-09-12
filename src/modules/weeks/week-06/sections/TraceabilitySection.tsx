import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { cn } from "../../../../utils/cn";
import { getIcon } from "../../../../utils/getIcon";
import { traceabilityStages } from "../week06.data";

/** Interactive traceability timeline — click a stage to reveal what happened, who, when, and what evidence remained. */
export function TraceabilitySection() {
  const [activeId, setActiveId] = useState(traceabilityStages[0].id);
  const active = traceabilityStages.find((s) => s.id === activeId) ?? traceabilityStages[0];

  return (
    <section id="trazabilidad" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="Trazabilidad"
        title="El flujo documental, etapa por etapa"
        description="Conecta con la Semana 5: toca una etapa para ver qué ocurrió, quién intervino, cuándo y qué evidencia quedó."
      />

      <div className="flex flex-wrap items-center gap-1 px-1 py-2">
        {traceabilityStages.map((stage, index) => {
          const Icon = getIcon(stage.icon);
          const isActive = stage.id === activeId;
          return (
            <div key={stage.id} className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setActiveId(stage.id)}
                className={cn(
                  "flex flex-col items-center gap-1 rounded-lg border px-3 py-2 w-24 transition-colors",
                  isActive
                    ? "border-primary-container bg-secondary-container text-on-secondary-container"
                    : "border-outline-variant bg-surface-container-lowest text-on-surface hover:border-primary-container",
                )}
              >
                <Icon size={18} />
                <span className="text-caption font-caption font-semibold text-center leading-tight">{stage.label}</span>
              </button>
              {index < traceabilityStages.length - 1 && <span className="text-outline shrink-0 hidden sm:inline">→</span>}
            </div>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
          className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg"
        >
          <p className="text-headline-md font-headline-md text-on-surface mb-sm">{active.label}</p>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-sm">
            <div>
              <dt className="text-caption font-caption font-bold uppercase tracking-wider text-on-surface-variant">Qué ocurrió</dt>
              <dd className="text-body-md font-body-md text-on-surface mt-0.5">{active.whatHappened}</dd>
            </div>
            <div>
              <dt className="text-caption font-caption font-bold uppercase tracking-wider text-on-surface-variant">Quién intervino</dt>
              <dd className="text-body-md font-body-md text-on-surface mt-0.5">{active.who}</dd>
            </div>
            <div>
              <dt className="text-caption font-caption font-bold uppercase tracking-wider text-on-surface-variant">Cuándo</dt>
              <dd className="text-body-md font-body-md text-on-surface mt-0.5">{active.when}</dd>
            </div>
            <div>
              <dt className="text-caption font-caption font-bold uppercase tracking-wider text-on-surface-variant">Qué documento</dt>
              <dd className="text-body-md font-body-md text-on-surface mt-0.5">{active.document}</dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-caption font-caption font-bold uppercase tracking-wider text-on-surface-variant">Qué evidencia quedó</dt>
              <dd className="text-body-md font-body-md text-on-surface mt-0.5">{active.evidence}</dd>
            </div>
          </dl>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
