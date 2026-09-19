import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { cn } from "../../../../utils/cn";
import { getIcon } from "../../../../utils/getIcon";
import { caseDocuments } from "../integrativeProject.data";

export function Paso2Documentos() {
  const [activeId, setActiveId] = useState(caseDocuments[0].id);
  const active = caseDocuments.find((d) => d.id === activeId) ?? caseDocuments[0];

  return (
    <section id="paso-2-documentos" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="Caso modelo · Paso 02"
        title="Identifiquemos los documentos"
        description="Selecciona cada documento para ver quién lo genera, para qué sirve y con qué otros se relaciona."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg items-start">
        <div className="lg:col-span-7 flex flex-wrap gap-xs">
          {caseDocuments.map((doc) => {
            const Icon = getIcon(doc.icon);
            const isActive = doc.id === activeId;
            return (
              <button
                key={doc.id}
                type="button"
                onClick={() => setActiveId(doc.id)}
                className={cn(
                  "flex items-center gap-xs rounded-lg border px-md py-sm text-label-md font-label-md font-semibold transition-colors",
                  isActive
                    ? "border-primary-container bg-secondary-container text-on-secondary-container"
                    : "border-outline-variant bg-surface-container-lowest text-on-surface hover:border-primary-container",
                )}
              >
                <Icon size={18} />
                {doc.label}
              </button>
            );
          })}
        </div>

        <div className="lg:col-span-5 rounded-xl border border-outline-variant bg-surface-container-lowest p-md">
          <p className="text-label-md font-label-md font-semibold text-on-surface mb-1">EXPEDIENTE</p>
          <ul className="space-y-1 text-body-md font-body-md text-on-surface-variant">
            {caseDocuments.map((doc, index) => (
              <li key={doc.id} className={cn("pl-md border-l-2", doc.id === activeId ? "border-primary-container text-primary font-semibold" : "border-outline-variant")}>
                {index === caseDocuments.length - 1 ? "└─ " : "├─ "}
                {doc.label}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
          className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg"
        >
          <p className="text-headline-md font-headline-md text-on-surface mb-sm">{active.label}</p>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-sm">
            <div>
              <dt className="text-caption font-caption font-bold uppercase tracking-wider text-on-surface-variant">Quién lo genera</dt>
              <dd className="text-body-md font-body-md text-on-surface mt-0.5">{active.generatedBy}</dd>
            </div>
            <div>
              <dt className="text-caption font-caption font-bold uppercase tracking-wider text-on-surface-variant">Para qué sirve</dt>
              <dd className="text-body-md font-body-md text-on-surface mt-0.5">{active.purpose}</dd>
            </div>
            <div>
              <dt className="text-caption font-caption font-bold uppercase tracking-wider text-on-surface-variant">En qué momento aparece</dt>
              <dd className="text-body-md font-body-md text-on-surface mt-0.5">{active.moment}</dd>
            </div>
            <div>
              <dt className="text-caption font-caption font-bold uppercase tracking-wider text-on-surface-variant">Se relaciona con</dt>
              <dd className="text-body-md font-body-md text-on-surface mt-0.5">{active.relatesTo}</dd>
            </div>
          </dl>
        </motion.div>
      </AnimatePresence>

      <Callout variant="info" title="Documento electrónico vs. expediente electrónico (Semana 1)">
        Cada elemento de la lista (solicitud, informe, memorando...) es un <strong>documento electrónico</strong>
        individual. El <strong>expediente electrónico</strong> es la agrupación ordenada de todos esos documentos en
        torno a un mismo trámite — en este caso, EXP-2026-0087.
      </Callout>
    </section>
  );
}
