import { useState } from "react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { RadialLayout } from "../../../../components/common/RadialLayout";
import { conceptMapFinalNodes } from "../week01.data";

export function ConceptMapSection() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section id="mapa-conceptual" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="Mapa conceptual"
        title="Todo lo visto, en un solo mapa"
        description="Un resumen visual de cómo se relacionan los conceptos trabajados en esta semana."
      />
      <RadialLayout
        center={{ label: "Gestión de Archivos Electrónicos", icon: "Workflow" }}
        nodes={conceptMapFinalNodes}
        activeId={activeId}
        onNodeClick={(id) => setActiveId((current) => (current === id ? null : id))}
      />
    </section>
  );
}
