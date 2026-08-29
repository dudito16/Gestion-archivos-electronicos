import { MousePointerClick } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { RadialLayout } from "../../../../components/common/RadialLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../../components/ui/tabs";
import { getIcon } from "../../../../utils/getIcon";
import { metadataTypes } from "../week04.data";
import type { MetadataTypeId } from "../week04.types";

export function TypesOverviewSection() {
  const [activeId, setActiveId] = useState<MetadataTypeId>(metadataTypes[0].id);
  const active = metadataTypes.find((t) => t.id === activeId) ?? metadataTypes[0];
  const ActiveIcon = getIcon(active.icon);

  return (
    <section id="tipos-metadatos" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="Cuatro tipos"
        title="Tipos de metadatos"
        description="Haz clic en cada tipo para ver su definición, finalidad, ejemplos y la pregunta que responde."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg items-start">
        <div className="lg:col-span-7">
          <RadialLayout
            center={{ label: "Metadatos", icon: "Tags" }}
            nodes={metadataTypes.map((t) => ({ id: t.id, label: t.label, icon: t.icon }))}
            activeId={activeId}
            onNodeClick={(id) => setActiveId(id as MetadataTypeId)}
          />
          <p className="mt-sm flex items-center justify-center gap-1 text-caption font-caption text-on-surface-variant lg:hidden">
            <MousePointerClick size={14} /> Toca un tipo para ver el detalle
          </p>
        </div>

        <div className="lg:col-span-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg shadow-sm"
            >
              <div className="flex items-center gap-xs mb-md">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary-container text-on-secondary-container">
                  <ActiveIcon size={20} />
                </div>
                <h3 className="text-headline-md font-headline-md text-on-surface">{active.label}</h3>
              </div>

              <Tabs defaultValue="definicion">
                <TabsList>
                  <TabsTrigger value="definicion">Definición</TabsTrigger>
                  <TabsTrigger value="finalidad">Finalidad</TabsTrigger>
                  <TabsTrigger value="ejemplos">Ejemplos</TabsTrigger>
                </TabsList>
                <TabsContent value="definicion" className="text-body-md font-body-md text-on-surface-variant">
                  {active.definition}
                </TabsContent>
                <TabsContent value="finalidad" className="text-body-md font-body-md text-on-surface-variant">
                  {active.purpose}
                </TabsContent>
                <TabsContent value="ejemplos">
                  <div className="flex flex-wrap gap-xs">
                    {active.examples.map((ex) => (
                      <span key={ex} className="rounded-full border border-outline-variant bg-surface-container-low px-3 py-1 text-caption font-caption text-on-surface">
                        {ex}
                      </span>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>

              <p className="text-caption font-caption text-primary-container italic mt-md">{active.question}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
