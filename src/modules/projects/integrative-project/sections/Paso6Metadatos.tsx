import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { cn } from "../../../../utils/cn";
import { metadataCategoryLabels, metadataFields } from "../integrativeProject.data";

export function Paso6Metadatos() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = metadataFields.find((f) => f.id === activeId);

  return (
    <section id="paso-6-metadatos" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="Caso modelo · Paso 06"
        title="Identifiquemos los metadatos"
        description="Documento: INFORME TÉCNICO N.º 015-2026-GA. Selecciona un metadato y descubre para qué sirve."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-xs">
        {metadataFields.map((field) => (
          <button
            key={field.id}
            type="button"
            onClick={() => setActiveId(field.id)}
            className={cn(
              "text-left rounded-lg border px-md py-sm transition-colors",
              activeId === field.id
                ? "border-primary-container bg-secondary-container/50"
                : "border-outline-variant bg-surface-container-lowest hover:border-primary-container",
            )}
          >
            <p className="text-caption font-caption font-bold uppercase tracking-wider text-on-surface-variant">{field.label}</p>
            <p className="text-body-md font-body-md text-on-surface">{field.value}</p>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>
            <Callout variant="info" title={`${active.label} — función: ${active.category}`}>
              {metadataCategoryLabels[active.category]}
            </Callout>
          </motion.div>
        )}
      </AnimatePresence>

      <Callout variant="warning" title="Nota académica">
        Estos datos son ficticios y se muestran únicamente con fines educativos — no representan información real
        de ninguna institución.
      </Callout>
      <p className="text-caption font-caption text-on-surface-variant">Conecta con la Semana 4: identificación, contexto, responsabilidad, relación, estado y trazabilidad.</p>
    </section>
  );
}
