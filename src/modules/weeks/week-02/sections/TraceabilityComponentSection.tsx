import { Check } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { cn } from "../../../../utils/cn";
import { getIcon } from "../../../../utils/getIcon";
import { traceEvents } from "../week02.data";

const fields: { key: "user" | "date" | "time" | "action" | "status" | "origin" | "destination"; label: string }[] = [
  { key: "user", label: "Usuario" },
  { key: "date", label: "Fecha" },
  { key: "time", label: "Hora" },
  { key: "action", label: "Acción" },
  { key: "status", label: "Estado" },
  { key: "origin", label: "Origen" },
  { key: "destination", label: "Destino" },
];

export function TraceabilityComponentSection() {
  const [activeId, setActiveId] = useState(traceEvents[0].id);
  const active = traceEvents.find((e) => e.id === activeId) ?? traceEvents[0];

  return (
    <section id="trazabilidad" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="Componente · Trazabilidad"
        title="Trazabilidad"
        description="Haz clic en cada evento para ver la información asociada."
      />

      <div className="relative">
        <div className="absolute left-5 md:left-0 md:right-0 md:top-5 top-0 bottom-0 md:bottom-auto w-px md:w-auto md:h-px bg-outline-variant" aria-hidden />
        <ol className="flex flex-col md:flex-row md:flex-wrap gap-sm relative">
          {traceEvents.map((event) => {
            const Icon = getIcon(event.icon);
            const isActive = event.id === activeId;
            return (
              <li key={event.id}>
                <button
                  type="button"
                  onClick={() => setActiveId(event.id)}
                  className={cn(
                    "flex items-center gap-xs rounded-full border px-3 py-2 text-label-md font-label-md transition-colors",
                    isActive
                      ? "border-primary-container bg-secondary-container text-on-secondary-container font-semibold"
                      : "border-outline-variant bg-surface-container-lowest text-on-surface hover:border-primary-container",
                  )}
                >
                  {isActive ? <Check size={16} /> : <Icon size={16} />}
                  {event.label}
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
          transition={{ duration: 0.2 }}
          className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg"
        >
          <dl className="grid grid-cols-2 sm:grid-cols-4 gap-md">
            {fields.map((field) => (
              <div key={field.key}>
                <dt className="text-caption font-caption font-semibold uppercase tracking-wider text-on-surface-variant">
                  {field.label}
                </dt>
                <dd className="text-label-md font-label-md text-on-surface mt-0.5">{active[field.key]}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </AnimatePresence>

      <Callout variant="info" title="Más que un registro cronológico">
        La trazabilidad no es simplemente «un log». Permite reconstruir las acciones y estados relevantes asociados a
        un documento o expediente durante su gestión: quién intervino, cuándo y con qué resultado.
      </Callout>
    </section>
  );
}
