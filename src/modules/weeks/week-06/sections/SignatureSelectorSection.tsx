import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { OpenTextField, OpenAnswerDisclaimer } from "../activities/components/OpenTextField";
import { cn } from "../../../../utils/cn";
import { getIcon } from "../../../../utils/getIcon";
import { signatureTypes } from "../week06.data";
import type { SignatureTypeId } from "../week06.types";

/** "Tres formas de firmar" — a purely exploratory selector (not graded), reflection question included. */
export function SignatureSelectorSection() {
  const [activeId, setActiveId] = useState<SignatureTypeId>(signatureTypes[0].id);
  const [reflection, setReflection] = useState("");
  const active = signatureTypes.find((s) => s.id === activeId) ?? signatureTypes[0];

  return (
    <section id="comparacion" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Tres formas de firmar" title="Selecciona cada tipo para ver sus características" />

      <div className="flex flex-wrap gap-xs">
        {signatureTypes.map((type) => {
          const Icon = getIcon(type.icon);
          const isActive = activeId === type.id;
          return (
            <button
              key={type.id}
              type="button"
              onClick={() => setActiveId(type.id)}
              className={cn(
                "flex items-center gap-xs rounded-lg border px-md py-sm text-label-md font-label-md font-semibold transition-colors",
                isActive
                  ? "border-primary-container bg-secondary-container text-on-secondary-container"
                  : "border-outline-variant bg-surface-container-lowest text-on-surface hover:border-primary-container",
              )}
            >
              <Icon size={18} />
              {type.label}
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
          <div>
            <p className="text-caption font-caption font-bold uppercase tracking-wider text-on-surface-variant">Qué es</p>
            <p className="text-body-md font-body-md text-on-surface">{active.whatItIs}</p>
          </div>
          <div>
            <p className="text-caption font-caption font-bold uppercase tracking-wider text-on-surface-variant">Cómo se obtiene</p>
            <p className="text-body-md font-body-md text-on-surface">{active.howObtained}</p>
          </div>
          <div>
            <p className="text-caption font-caption font-bold uppercase tracking-wider text-on-surface-variant">Qué demuestra</p>
            <p className="text-body-md font-body-md text-on-surface">{active.whatItProves}</p>
          </div>
          <div>
            <p className="text-caption font-caption font-bold uppercase tracking-wider text-on-surface-variant">Riesgos</p>
            <p className="text-body-md font-body-md text-on-surface">{active.risks}</p>
          </div>
          <div>
            <p className="text-caption font-caption font-bold uppercase tracking-wider text-on-surface-variant">Contexto de uso</p>
            <p className="text-body-md font-body-md text-on-surface">{active.context}</p>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="rounded-xl border border-primary-container/40 bg-secondary-container/20 p-md space-y-sm">
        <OpenTextField
          id="signature-selector-reflection"
          label="¿Por qué no deben considerarse equivalentes?"
          value={reflection}
          onChange={setReflection}
          rows={3}
        />
        <OpenAnswerDisclaimer />
      </div>
    </section>
  );
}
