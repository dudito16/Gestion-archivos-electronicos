import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { cn } from "../../../../utils/cn";
import { traceabilityEvents } from "../integrativeProject.data";

export function Paso9Trazabilidad() {
  const [activeId, setActiveId] = useState(traceabilityEvents[0].id);
  const active = traceabilityEvents.find((e) => e.id === activeId) ?? traceabilityEvents[0];

  return (
    <section id="paso-9-trazabilidad" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Caso modelo · Paso 09" title="Reconstruyamos la trazabilidad" description="Selecciona cada evento de la línea de tiempo." />

      <div className="relative pl-6">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-outline-variant" aria-hidden />
        <ol className="space-y-xs">
          {traceabilityEvents.map((event) => {
            const isActive = event.id === activeId;
            return (
              <li key={event.id} className="relative">
                <span className={cn("absolute -left-6 top-2 h-3 w-3 rounded-full ring-4 ring-surface-container-lowest", isActive ? "bg-primary-container" : "bg-outline-variant")} />
                <button
                  type="button"
                  onClick={() => setActiveId(event.id)}
                  className={cn(
                    "w-full text-left rounded-lg border px-md py-sm transition-colors",
                    isActive ? "border-primary-container bg-secondary-container/40" : "border-outline-variant bg-surface-container-lowest hover:border-primary-container",
                  )}
                >
                  <span className="text-caption font-caption font-bold text-primary-container">{event.time}</span>
                  <span className="ml-2 text-body-md font-body-md font-semibold text-on-surface">{event.event}</span>
                </button>
              </li>
            );
          })}
        </ol>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg"
        >
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-sm text-body-md font-body-md">
            <div><dt className="text-caption font-caption font-bold uppercase tracking-wider text-on-surface-variant">Fecha/hora</dt><dd className="text-on-surface">{active.time}</dd></div>
            <div><dt className="text-caption font-caption font-bold uppercase tracking-wider text-on-surface-variant">Evento</dt><dd className="text-on-surface">{active.event}</dd></div>
            <div><dt className="text-caption font-caption font-bold uppercase tracking-wider text-on-surface-variant">Responsable</dt><dd className="text-on-surface">{active.responsible}</dd></div>
            <div><dt className="text-caption font-caption font-bold uppercase tracking-wider text-on-surface-variant">Documento</dt><dd className="text-on-surface">{active.document}</dd></div>
            <div className="sm:col-span-2"><dt className="text-caption font-caption font-bold uppercase tracking-wider text-on-surface-variant">Resultado</dt><dd className="text-on-surface">{active.result}</dd></div>
          </dl>
        </motion.div>
      </AnimatePresence>

      <p className="text-body-md font-body-md text-on-surface-variant">
        La trazabilidad permite reconstruir, evento por evento, el recorrido completo de un documento — quién
        intervino, cuándo y con qué resultado.
      </p>
    </section>
  );
}
