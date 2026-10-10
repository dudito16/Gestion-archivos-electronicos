import { CheckCircle2, AlertTriangle } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { cn } from "../../../../utils/cn";
import {
  sanGabrielDisclaimer,
  sanGabrielDocument,
  sanGabrielExpediente,
  sanGabrielFeedback,
  sanGabrielMatchHash,
  sanGabrielMismatchHash,
  sanGabrielOptions,
  sanGabrielQuestion,
  sanGabrielReferenceHash,
} from "../week10.data";

export function SanGabrielCaseSection() {
  const [showMismatch, setShowMismatch] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const currentHash = showMismatch ? sanGabrielMismatchHash : sanGabrielMatchHash;
  const matches = !showMismatch;
  const selected = sanGabrielOptions.find((o) => o.id === selectedOption);

  return (
    <section id="caso-san-gabriel" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Caso San Gabriel" title="Panel institucional de verificación" />

      <Badge variant="tertiary">⚠️ {sanGabrielDisclaimer}</Badge>

      <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg space-y-md font-mono">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-sm text-body-md">
          <p className="text-on-surface-variant">EXPEDIENTE: <span className="text-on-surface font-semibold">{sanGabrielExpediente}</span></p>
          <p className="text-on-surface-variant">DOCUMENTO: <span className="text-on-surface font-semibold">{sanGabrielDocument}</span></p>
          <p className="text-on-surface-variant">REFERENCIA: <span className="text-on-surface font-semibold">{sanGabrielReferenceHash}</span></p>
          <p className="text-on-surface-variant">ACTUAL: <span className="text-on-surface font-semibold">{currentHash}</span></p>
        </div>

        <div
          className={cn(
            "flex items-center gap-sm rounded-lg border-l-4 p-md font-sans",
            matches ? "border-tertiary-fixed-dim bg-tertiary-fixed/30" : "border-error bg-error-container/40",
          )}
        >
          {matches ? <CheckCircle2 className="text-tertiary shrink-0" size={20} /> : <AlertTriangle className="text-error shrink-0" size={20} />}
          <p className={cn("text-body-md font-body-md font-semibold", matches ? "text-on-tertiary-fixed-variant" : "text-on-error-container")}>
            Resultado: {matches ? "✓ COINCIDE" : "⚠ DIFERENCIA DETECTADA"}
          </p>
        </div>

        <div className="font-sans">
          <Button variant="secondary" size="sm" onClick={() => setShowMismatch((v) => !v)}>
            {showMismatch ? "Volver al escenario inicial" : "Cambiar escenario"}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {showMismatch && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="space-y-sm">
            <p className="text-body-lg font-body-lg font-semibold text-on-surface">{sanGabrielQuestion}</p>
            <div className="flex flex-col gap-xs">
              {sanGabrielOptions.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setSelectedOption(opt.id)}
                  disabled={Boolean(selectedOption)}
                  className={cn(
                    "text-left rounded-lg border px-md py-sm transition-colors",
                    selectedOption === opt.id ? "border-primary-container bg-secondary-container/50" : "border-outline-variant bg-surface-container-lowest hover:border-primary-container disabled:opacity-60",
                  )}
                >
                  {opt.label}
                </button>
              ))}
            </div>
            {selected && (
              <p className={cn("text-body-md font-body-md", selected.recommended ? "text-tertiary" : "text-error")}>{sanGabrielFeedback}</p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
