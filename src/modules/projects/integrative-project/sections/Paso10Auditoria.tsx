import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { cn } from "../../../../utils/cn";
import { auditImprovements, auditRows } from "../integrativeProject.data";

const resultStyles: Record<string, string> = {
  Sí: "bg-tertiary-fixed/50 text-on-tertiary-fixed-variant",
  Parcial: "bg-secondary-container text-on-secondary-container",
  No: "bg-error-container/60 text-on-error-container",
};

export function Paso10Auditoria() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = auditImprovements.find((i) => i.id === selectedId);

  return (
    <section id="paso-10-auditoria" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Caso modelo · Paso 10" title="Auditoría del caso" />

      <div className="overflow-x-auto rounded-xl border border-outline-variant bg-surface-container-lowest">
        <table className="w-full min-w-[32rem] border-collapse text-left">
          <thead>
            <tr className="bg-surface-container-low">
              <th className="p-sm text-label-md font-label-md text-on-surface-variant">Elemento</th>
              <th className="p-sm text-label-md font-label-md text-on-surface-variant">Resultado</th>
              <th className="p-sm text-label-md font-label-md text-on-surface-variant">Observación</th>
            </tr>
          </thead>
          <tbody>
            {auditRows.map((row) => (
              <tr key={row.element} className="border-t border-outline-variant">
                <td className="p-sm text-body-md font-body-md font-semibold text-on-surface">{row.element}</td>
                <td className="p-sm">
                  <span className={cn("rounded-full px-2.5 py-1 text-caption font-caption font-semibold", resultStyles[row.result])}>{row.result}</span>
                </td>
                <td className="p-sm text-body-md font-body-md text-on-surface-variant">{row.observation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <p className="text-body-lg font-body-lg font-semibold text-on-surface mb-sm">¿Qué mejorarías?</p>
        <div className="flex flex-wrap gap-xs">
          {auditImprovements.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedId(item.id)}
              className={cn(
                "rounded-full border px-3 py-2 text-caption font-caption font-medium transition-colors",
                selectedId === item.id
                  ? "border-primary-container bg-secondary-container text-on-secondary-container"
                  : "border-outline-variant bg-surface-container-lowest text-on-surface hover:border-primary-container",
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
        <AnimatePresence>
          {selected && (
            <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="mt-sm">
              <Callout variant="info" title={selected.label}>
                {selected.explanation}
              </Callout>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
