import { MousePointerClick } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { RadialLayout } from "../../../../components/common/RadialLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../../components/ui/tabs";
import { getIcon } from "../../../../utils/getIcon";
import { conceptNodes, conceptualDimensions } from "../week01.data";

export function ConceptDiagramSection() {
  const [activeId, setActiveId] = useState<string>(conceptNodes[0].id);
  const active = conceptNodes.find((node) => node.id === activeId) ?? conceptNodes[0];
  const ActiveIcon = getIcon(active.icon);

  return (
    <section id="conceptos" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="Concepto central"
        title="¿Qué abarca la Gestión de Archivos Electrónicos?"
        description="Haz clic en cada elemento del diagrama para conocer su definición, su importancia y un ejemplo real."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg items-start">
        <div className="lg:col-span-7">
          <RadialLayout
            center={{ label: "Gestión de Archivos Electrónicos", icon: "Workflow" }}
            nodes={conceptNodes.map((n) => ({ id: n.id, label: n.label, icon: n.icon }))}
            activeId={activeId}
            onNodeClick={setActiveId}
          />
          <p className="mt-sm flex items-center justify-center gap-1 text-caption font-caption text-on-surface-variant lg:hidden">
            <MousePointerClick size={14} /> Toca un elemento para ver el detalle
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
                  <TabsTrigger value="importancia">Importancia</TabsTrigger>
                  <TabsTrigger value="ejemplo">Ejemplo real</TabsTrigger>
                </TabsList>
                <TabsContent value="definicion" className="text-body-md font-body-md text-on-surface-variant">
                  {active.definition}
                </TabsContent>
                <TabsContent value="importancia" className="text-body-md font-body-md text-on-surface-variant">
                  {active.importance}
                </TabsContent>
                <TabsContent value="ejemplo" className="text-body-md font-body-md text-on-surface-variant">
                  {active.example}
                </TabsContent>
              </Tabs>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="space-y-sm">
        <p className="text-body-lg font-body-lg text-on-surface max-w-3xl">
          La gestión de archivos electrónicos comprende las actividades y controles necesarios para gestionar
          documentos y expedientes en entornos digitales, manteniendo su identificación, contexto, organización,
          acceso y control durante las diferentes etapas de su ciclo de vida.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-sm">
          {conceptualDimensions.map((dimension) => (
            <div key={dimension.id} className="rounded-lg border border-outline-variant bg-surface-container-lowest p-md">
              <p className="text-label-md font-label-md font-semibold text-primary-container">{dimension.title}</p>
              <p className="text-body-md font-body-md text-on-surface-variant mt-1">{dimension.question}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
