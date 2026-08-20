import { MousePointerClick } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { RadialLayout } from "../../../../components/common/RadialLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../../components/ui/tabs";
import { Callout } from "../../../../components/common/Callout";
import { getIcon } from "../../../../utils/getIcon";
import { sgdComponents } from "../week02.data";

export function ComponentsSection() {
  const [activeId, setActiveId] = useState<string>(sgdComponents[0].id);
  const active = sgdComponents.find((c) => c.id === activeId) ?? sgdComponents[0];
  const ActiveIcon = getIcon(active.icon);

  return (
    <section id="componentes" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="Visión de conjunto"
        title="Componentes del SGD"
        description="Haz clic en cada componente para conocer su definición, finalidad, un ejemplo y la pregunta clave que responde."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg items-start">
        <div className="lg:col-span-7">
          <RadialLayout
            center={{ label: "Sistema de Gestión Documental", icon: "Database" }}
            nodes={sgdComponents.map((c) => ({ id: c.id, label: c.label, icon: c.icon }))}
            activeId={activeId}
            onNodeClick={setActiveId}
          />
          <p className="mt-sm flex items-center justify-center gap-1 text-caption font-caption text-on-surface-variant lg:hidden">
            <MousePointerClick size={14} /> Toca un componente para ver el detalle
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
                  <TabsTrigger value="ejemplo">Ejemplo</TabsTrigger>
                </TabsList>
                <TabsContent value="definicion" className="text-body-md font-body-md text-on-surface-variant">
                  {active.definition}
                </TabsContent>
                <TabsContent value="finalidad" className="text-body-md font-body-md text-on-surface-variant">
                  {active.purpose}
                </TabsContent>
                <TabsContent value="ejemplo" className="text-body-md font-body-md text-on-surface-variant">
                  {active.example}
                </TabsContent>
              </Tabs>
            </motion.div>
          </AnimatePresence>

          <Callout variant="info" title="Pregunta clave">
            {active.keyQuestion}
          </Callout>
        </div>
      </div>
    </section>
  );
}
