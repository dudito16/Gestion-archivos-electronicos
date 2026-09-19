import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { cn } from "../../../../utils/cn";
import { flowRiskOptions, flowRiskQuestion, reconstructedFlow } from "../integrativeProject.data";

export function Paso5Flujo() {
  const [activeId, setActiveId] = useState(reconstructedFlow[0].id);
  const active = reconstructedFlow.find((s) => s.id === activeId) ?? reconstructedFlow[0];
  const [answered, setAnswered] = useState<string | null>(null);

  return (
    <section id="paso-5-flujo" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Caso modelo · Paso 05" title="Reconstruyamos el flujo documental" description="Explora cada etapa del flujo." />

      <div className="flex flex-wrap items-center gap-1">
        {reconstructedFlow.map((stage, index) => (
          <div key={stage.id} className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setActiveId(stage.id)}
              className={cn(
                "rounded-lg border px-3 py-1.5 text-caption font-caption font-semibold transition-colors",
                stage.id === activeId
                  ? "border-primary-container bg-secondary-container text-on-secondary-container"
                  : "border-outline-variant bg-surface-container-lowest text-on-surface hover:border-primary-container",
              )}
            >
              {stage.label}
            </button>
            {index < reconstructedFlow.length - 1 && <span className="text-outline shrink-0 hidden sm:inline">→</span>}
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg"
        >
          <p className="text-headline-md font-headline-md text-on-surface mb-sm">{active.label}</p>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-sm text-body-md font-body-md">
            <div><dt className="text-caption font-caption font-bold uppercase tracking-wider text-on-surface-variant">Documento</dt><dd className="text-on-surface">{active.document}</dd></div>
            <div><dt className="text-caption font-caption font-bold uppercase tracking-wider text-on-surface-variant">Responsable</dt><dd className="text-on-surface">{active.responsible}</dd></div>
            <div><dt className="text-caption font-caption font-bold uppercase tracking-wider text-on-surface-variant">Sistema</dt><dd className="text-on-surface">{active.system}</dd></div>
            <div><dt className="text-caption font-caption font-bold uppercase tracking-wider text-on-surface-variant">Acción</dt><dd className="text-on-surface">{active.action}</dd></div>
            <div className="sm:col-span-2"><dt className="text-caption font-caption font-bold uppercase tracking-wider text-on-surface-variant">Evidencia</dt><dd className="text-on-surface">{active.evidence}</dd></div>
          </dl>
        </motion.div>
      </AnimatePresence>

      <div className="rounded-xl border border-primary-container/40 bg-secondary-container/20 p-lg space-y-sm">
        <p className="text-body-lg font-body-lg font-semibold text-on-surface">{flowRiskQuestion}</p>
        <div className="flex flex-wrap gap-xs">
          {flowRiskOptions.map((opt) => {
            const isSelected = answered === opt.id;
            const showResult = answered !== null;
            return (
              <button
                key={opt.id}
                type="button"
                disabled={showResult}
                onClick={() => setAnswered(opt.id)}
                className={cn(
                  "rounded-lg border px-md py-sm text-label-md font-label-md font-medium transition-colors",
                  !showResult && "border-outline-variant bg-surface-container-lowest text-on-surface hover:border-primary-container",
                  showResult && opt.correct && "border-tertiary-fixed-dim bg-tertiary-fixed/50",
                  showResult && isSelected && !opt.correct && "border-error bg-error-container/50",
                  showResult && !isSelected && !opt.correct && "opacity-60",
                )}
              >
                {opt.label}
              </button>
            );
          })}
        </div>
        {answered && (
          <Callout variant={flowRiskOptions.find((o) => o.id === answered)?.correct ? "success" : "warning"} title="Retroalimentación">
            {flowRiskOptions.find((o) => o.id === answered)?.feedback}
          </Callout>
        )}
        <p className="text-caption font-caption text-on-surface-variant italic">Actividad demostrativa, no calificada.</p>
      </div>
    </section>
  );
}
