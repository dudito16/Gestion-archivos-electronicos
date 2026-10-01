import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { cn } from "../../../../utils/cn";
import { getIcon } from "../../../../utils/getIcon";
import { attributes } from "../week07.data";
import type { AttributeId } from "../week07.types";

const mixedCases = [
  {
    id: "caso-1",
    text: "Un servidor es comprometido: se filtra información reservada y, además, se elimina el registro de auditoría que hubiera permitido investigar lo ocurrido.",
    affected: "Este caso compromete confidencialidad (filtración) y disponibilidad (registro eliminado) al mismo tiempo.",
  },
  {
    id: "caso-2",
    text: "Un usuario modifica un documento y luego consulta expedientes que no le corresponden con la misma sesión.",
    affected: "Este caso compromete integridad (modificación) y confidencialidad (consulta indebida) al mismo tiempo.",
  },
];

export function CIASelectorSection() {
  const [activeId, setActiveId] = useState<AttributeId>(attributes[0].id);
  const active = attributes.find((a) => a.id === activeId) ?? attributes[0];

  return (
    <section id="atributos-comparacion" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Confidencialidad, integridad y disponibilidad" title="Selecciona cada atributo para repasar sus características" />

      <div className="flex flex-wrap gap-xs">
        {attributes.map((attr) => {
          const Icon = getIcon(attr.icon);
          const isActive = activeId === attr.id;
          return (
            <button
              key={attr.id}
              type="button"
              onClick={() => setActiveId(attr.id)}
              className={cn(
                "flex items-center gap-xs rounded-lg border px-md py-sm text-label-md font-label-md font-semibold transition-colors",
                isActive
                  ? "border-primary-container bg-secondary-container text-on-secondary-container"
                  : "border-outline-variant bg-surface-container-lowest text-on-surface hover:border-primary-container",
              )}
            >
              <Icon size={18} />
              {attr.label}
            </button>
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
          className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg space-y-sm"
        >
          <p className="text-body-md font-body-md text-on-surface">{active.definition}</p>
          <p className="text-caption font-caption font-bold uppercase tracking-wider text-on-surface-variant">Ejemplo institucional</p>
          <p className="text-body-md font-body-md text-on-surface-variant">{active.institutionalExample}</p>
        </motion.div>
      </AnimatePresence>

      <div>
        <p className="text-label-md font-label-md font-semibold text-on-surface mb-sm">Cuando más de un atributo se ve comprometido</p>
        <div className="space-y-sm">
          {mixedCases.map((c) => (
            <div key={c.id} className="rounded-lg border border-outline-variant bg-surface-container-low p-md space-y-1.5">
              <p className="text-body-md font-body-md text-on-surface">{c.text}</p>
              <p className="text-caption font-caption text-on-surface-variant italic">{c.affected}</p>
            </div>
          ))}
        </div>
      </div>

      <Callout variant="info" title="No siempre es uno solo">
        Un mismo incidente puede comprometer varios atributos a la vez. Cuando eso ocurra, es importante decir
        explícitamente cuáles — no forzar la situación dentro de una sola categoría.
      </Callout>
    </section>
  );
}
