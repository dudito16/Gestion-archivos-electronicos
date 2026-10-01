import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { cn } from "../../../../utils/cn";
import { auditLogEvents, auditLogQuestion, traceabilityAuditIntro } from "../week07.data";

export function TraceabilityAuditSection() {
  const [selected, setSelected] = useState<string | null>(null);

  const selectedEvent = auditLogEvents.find((e) => e.id === selected);

  return (
    <section id="trazabilidad-auditoria" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Trazabilidad y auditoría" title="Reconstruir quién hizo qué, cuándo y con qué resultado" description={traceabilityAuditIntro} />

      <div>
        <p className="text-body-lg font-body-lg font-semibold text-on-surface mb-sm">{auditLogQuestion}</p>
        <div className="space-y-xs">
          {auditLogEvents.map((event) => {
            const isSelected = selected === event.id;
            return (
              <button
                key={event.id}
                type="button"
                onClick={() => setSelected(event.id)}
                className={cn(
                  "w-full text-left flex items-center gap-sm rounded-lg border px-md py-sm transition-colors",
                  isSelected ? "border-primary-container bg-secondary-container/40" : "border-outline-variant bg-surface-container-lowest hover:border-primary-container",
                )}
              >
                <span className="text-caption font-caption font-bold text-primary-container">{event.time}</span>
                <span className="text-body-md font-body-md text-on-surface">{event.user} — {event.action}</span>
                {event.document !== "—" && <span className="text-caption font-caption text-on-surface-variant">({event.document})</span>}
              </button>
            );
          })}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {selectedEvent && (
          <motion.div key={selectedEvent.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>
            {selectedEvent.suspicious ? (
              <Callout variant="warning" title="Requiere revisión">
                El evento de las {selectedEvent.time} corresponde a una consulta fuera del horario habitual del
                usuario, sin relación evidente con las acciones anteriores del mismo día. Este patrón amerita revisión
                adicional, no necesariamente confirma un mal uso.
              </Callout>
            ) : (
              <Callout variant="info" title="Evento dentro de lo esperado">
                Este evento se ajusta al flujo habitual: ocurre dentro de un horario normal y guarda relación con las
                demás acciones registradas ese día.
              </Callout>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
