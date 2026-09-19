import { ArrowDown, PartyPopper } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Button } from "../../../../components/ui/button";
import { weekConnectionSummary } from "../integrativeProject.data";

export function Paso12Sintesis() {
  const [revealed, setRevealed] = useState(false);

  return (
    <section id="paso-12-sintesis" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Caso modelo · Paso 12" title="¿Qué aprendemos del caso?" description="Cómo se conectaron las Semanas 1 a 6." />

      <div className="flex flex-col items-center gap-1 max-w-md mx-auto">
        {weekConnectionSummary.map((item) => (
          <div key={item.week} className="flex flex-col items-center w-full">
            <div className="w-full rounded-lg border border-outline-variant bg-surface-container-lowest px-md py-sm text-center">
              <p className="text-caption font-caption font-bold uppercase tracking-wider text-primary-container">{item.label}</p>
              <p className="text-body-md font-body-md text-on-surface">{item.concept}</p>
            </div>
            <ArrowDown size={16} className="text-outline my-1" />
          </div>
        ))}
        <div className="w-full rounded-lg bg-primary-container text-on-primary px-md py-sm text-center font-semibold">
          Proyecto: Diagnóstico + propuesta de mejora
        </div>
      </div>

      <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg text-center space-y-sm">
        <p className="text-body-lg font-body-lg font-semibold text-on-surface">Construye mentalmente el recorrido del documento</p>
        <p className="text-caption font-caption text-on-surface-variant">Actividad de cierre, no calificada.</p>
        {!revealed ? (
          <Button onClick={() => setRevealed(true)}>Ver el recorrido completo</Button>
        ) : (
          <AnimatePresence>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-body-md font-body-md text-on-surface-variant flex items-center justify-center gap-xs">
              <PartyPopper size={18} className="text-tertiary" /> Recepción → Registro → Derivación → Elaboración → Revisión → Firma → Verificación → Trazabilidad → Archivo
            </motion.p>
          </AnimatePresence>
        )}
      </div>
    </section>
  );
}
