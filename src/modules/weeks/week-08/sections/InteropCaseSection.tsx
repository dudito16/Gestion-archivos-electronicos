import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Check, X } from "lucide-react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Badge } from "../../../../components/ui/badge";
import { cn } from "../../../../utils/cn";
import { fieldMappings, interopCaseIntro } from "../week08.data";

export function InteropCaseSection() {
  const [revealed, setRevealed] = useState<Set<string>>(new Set());

  function reveal(id: string) {
    setRevealed((prev) => new Set(prev).add(id));
  }

  return (
    <section id="caso-interoperabilidad" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Caso de interoperabilidad" title="Dos sistemas, dos nomenclaturas" />
      <Badge variant="outline">Municipalidad Distrital de San Gabriel — simulación académica</Badge>

      <p className="rounded-lg border border-outline-variant bg-surface-container-low p-md text-body-md font-body-md text-on-surface">{interopCaseIntro}</p>

      <p className="text-body-md font-body-md text-on-surface-variant">
        Toca cada correspondencia para analizar si es semánticamente válida.
      </p>

      <div className="space-y-xs">
        {fieldMappings.map((mapping) => {
          const isRevealed = revealed.has(mapping.id);
          return (
            <button
              key={mapping.id}
              type="button"
              onClick={() => reveal(mapping.id)}
              className={cn(
                "w-full text-left rounded-lg border p-md transition-colors",
                isRevealed
                  ? mapping.valid
                    ? "border-tertiary-fixed-dim bg-tertiary-fixed/20"
                    : "border-error bg-error-container/30"
                  : "border-outline-variant bg-surface-container-lowest hover:border-primary-container",
              )}
            >
              <div className="flex items-center justify-between gap-sm">
                <div className="flex items-center gap-sm flex-wrap">
                  <span className="text-label-md font-label-md font-semibold text-on-surface">{mapping.systemAField}</span>
                  <span className="text-primary-container">↕</span>
                  <span className="text-label-md font-label-md font-semibold text-on-surface">{mapping.systemBField}</span>
                </div>
                {isRevealed && (mapping.valid ? <Check size={18} className="text-tertiary shrink-0" /> : <X size={18} className="text-error shrink-0" />)}
              </div>
              <AnimatePresence>
                {isRevealed && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="text-caption font-caption text-on-surface-variant mt-1.5"
                  >
                    {mapping.note}
                  </motion.p>
                )}
              </AnimatePresence>
            </button>
          );
        })}
      </div>
    </section>
  );
}
