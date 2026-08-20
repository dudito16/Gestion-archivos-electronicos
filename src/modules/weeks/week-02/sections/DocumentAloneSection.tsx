import { useState } from "react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { RadialLayout } from "../../../../components/common/RadialLayout";
import { documentAloneNodes } from "../week02.data";

export function DocumentAloneSection() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section id="documento-no-viaja-solo" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Idea central de la semana" title="El documento no viaja solo" />
      <RadialLayout
        center={{ label: "Documento", icon: "FileText" }}
        nodes={documentAloneNodes}
        activeId={activeId}
        onNodeClick={(id) => setActiveId((current) => (current === id ? null : id))}
      />
    </section>
  );
}
