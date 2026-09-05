import { MousePointerClick } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { RadialLayout } from "../../../../components/common/RadialLayout";
import { Callout } from "../../../../components/common/Callout";
import { getIcon } from "../../../../utils/getIcon";
import { requirements } from "../week05.data";
import type { RequirementId } from "../week05.types";

export function RequirementsOverviewSection() {
  const [activeId, setActiveId] = useState<RequirementId>(requirements[0].id);
  const active = requirements.find((r) => r.id === activeId) ?? requirements[0];
  const ActiveIcon = getIcon(active.icon);

  return (
    <section id="requisitos" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="Los cuatro requisitos"
        title="¿Qué hace confiable a un documento?"
        description="Haz clic en cada requisito para ver su definición, su finalidad y un ejemplo."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg items-start">
        <div className="lg:col-span-7">
          <RadialLayout
            center={{ label: "Documento confiable", icon: "FileText" }}
            nodes={requirements.map((r) => ({ id: r.id, label: r.label, icon: r.icon }))}
            activeId={activeId}
            onNodeClick={(id) => setActiveId(id as RequirementId)}
          />
          <p className="mt-sm flex items-center justify-center gap-1 text-caption font-caption text-on-surface-variant lg:hidden">
            <MousePointerClick size={14} /> Toca un requisito para ver el detalle
          </p>
        </div>

        <div className="lg:col-span-5 space-y-sm">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg shadow-sm space-y-sm"
            >
              <div className="flex items-center gap-xs">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary-container text-on-secondary-container">
                  <ActiveIcon size={20} />
                </div>
                <h3 className="text-headline-md font-headline-md text-on-surface">{active.label}</h3>
              </div>
              <p className="text-caption font-caption text-primary-container italic">{active.question}</p>
              <p className="text-body-md font-body-md text-on-surface-variant">{active.definition}</p>
            </motion.div>
          </AnimatePresence>

          <Callout variant="warning" title="Riesgo si falta">
            {active.risk}
          </Callout>
        </div>
      </div>
    </section>
  );
}
