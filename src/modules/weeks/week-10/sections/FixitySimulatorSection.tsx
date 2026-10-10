import { CheckCircle2, AlertTriangle } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Button } from "../../../../components/ui/button";
import { cn } from "../../../../utils/cn";
import {
  fixitySimDocument,
  fixitySimExpediente,
  fixitySimMatchHash,
  fixitySimMatchMessage,
  fixitySimMismatchHash,
  fixitySimMismatchMessage,
  fixitySimReferenceHash,
} from "../week10.data";

type SimState = "idle" | "match" | "mismatch";

export function FixitySimulatorSection() {
  const [state, setState] = useState<SimState>("idle");
  const currentHash = state === "mismatch" ? fixitySimMismatchHash : fixitySimMatchHash;

  return (
    <section id="simulador-fixity" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Simulador de fixity" title="Verifica la integridad de un expediente" />

      <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg space-y-md">
        <div className="rounded-lg border border-outline-variant bg-surface-container-low p-md text-center">
          <p className="text-caption font-caption text-on-surface-variant">Archivo</p>
          <p className="text-label-md font-label-md font-bold text-on-surface">{fixitySimExpediente} / {fixitySimDocument}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-sm max-w-xl mx-auto">
          <div className="rounded-lg border border-outline-variant bg-surface-container-low p-md text-center">
            <p className="text-caption font-caption font-semibold uppercase tracking-wider text-on-surface-variant">Hash de referencia</p>
            <p className="text-label-md font-label-md font-mono font-bold text-on-surface mt-1">{fixitySimReferenceHash}</p>
          </div>
          <div className="rounded-lg border border-outline-variant bg-surface-container-low p-md text-center">
            <p className="text-caption font-caption font-semibold uppercase tracking-wider text-on-surface-variant">Hash actual</p>
            <p className="text-label-md font-label-md font-mono font-bold text-on-surface mt-1">{state === "idle" ? "—" : currentHash}</p>
          </div>
        </div>

        <div className="flex justify-center gap-sm flex-wrap">
          <Button onClick={() => setState("match")}>Verificar integridad</Button>
          <Button variant="secondary" onClick={() => setState("mismatch")}>
            Simular diferencia
          </Button>
        </div>

        <AnimatePresence mode="wait">
          {state !== "idle" && (
            <motion.div
              key={state}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className={cn(
                "mx-auto max-w-xl flex items-center gap-sm rounded-lg border-l-4 p-md",
                state === "match" ? "border-tertiary-fixed-dim bg-tertiary-fixed/30" : "border-error bg-error-container/40",
              )}
            >
              {state === "match" ? <CheckCircle2 className="text-tertiary shrink-0" size={20} /> : <AlertTriangle className="text-error shrink-0" size={20} />}
              <p className={cn("text-body-md font-body-md font-semibold", state === "match" ? "text-on-tertiary-fixed-variant" : "text-on-error-container")}>
                {state === "match" ? `✓ COINCIDENCIA — ${fixitySimMatchMessage}` : `⚠ DIFERENCIA DETECTADA — ${fixitySimMismatchMessage}`}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
