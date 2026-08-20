import { ArrowDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { cn } from "../../../../utils/cn";
import { getIcon } from "../../../../utils/getIcon";
import { architectureBlocks } from "../week02.data";

const rows = Array.from(new Set(architectureBlocks.map((b) => b.row))).sort((a, b) => a - b);

export function ArchitectureSection() {
  const [activeId, setActiveId] = useState(architectureBlocks[0].id);
  const active = architectureBlocks.find((b) => b.id === activeId) ?? architectureBlocks[0];

  return (
    <section id="arquitectura" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="Modelo conceptual"
        title="Arquitectura funcional del SGD"
        description="Haz clic en cada bloque para ver su función."
      />

      <div className="flex flex-col items-center gap-1">
        {rows.map((row, rowIndex) => {
          const blocks = architectureBlocks.filter((b) => b.row === row);
          return (
            <div key={row} className="flex flex-col items-center gap-1 w-full">
              <div className={cn("flex flex-wrap justify-center gap-xs w-full", blocks.length > 1 && "max-w-2xl")}>
                {blocks.map((block) => {
                  const Icon = getIcon(block.icon);
                  const isActive = block.id === activeId;
                  return (
                    <motion.button
                      key={block.id}
                      type="button"
                      onClick={() => setActiveId(block.id)}
                      initial={{ opacity: 0, y: -10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{ duration: 0.3, delay: rowIndex * 0.08 }}
                      className={cn(
                        "flex items-center gap-xs rounded-lg border px-4 py-2.5 text-label-md font-label-md font-semibold transition-colors",
                        isActive
                          ? "border-primary-container bg-secondary-container text-on-secondary-container"
                          : "border-outline-variant bg-surface-container-lowest text-on-surface hover:border-primary-container",
                      )}
                    >
                      <Icon size={16} />
                      {block.label}
                    </motion.button>
                  );
                })}
              </div>
              {rowIndex < rows.length - 1 && (
                <ArrowDown className="text-outline shrink-0" size={16} />
              )}
            </div>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <Callout variant="info" title={active.label}>
            {active.description}
          </Callout>
        </motion.div>
      </AnimatePresence>

      <Callout variant="warning" title="Aclaración">
        Este es un modelo conceptual de arquitectura funcional, construido con fines didácticos. No representa
        necesariamente la arquitectura técnica interna actual del SGD del AGN.
      </Callout>
    </section>
  );
}
