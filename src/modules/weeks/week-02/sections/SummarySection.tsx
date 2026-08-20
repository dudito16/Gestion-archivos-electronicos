import { ArrowDown } from "lucide-react";
import { useState } from "react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { RadialLayout } from "../../../../components/common/RadialLayout";
import { conceptMapNodes } from "../week02.data";

export function SummarySection() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section id="resumen" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Resumen visual" title="Todo lo visto, en un solo mapa" />

      <RadialLayout
        center={{ label: "SGD", icon: "Database" }}
        nodes={conceptMapNodes}
        activeId={activeId}
        onNodeClick={(id) => setActiveId((current) => (current === id ? null : id))}
      />

      <div className="flex flex-col items-center gap-1">
        <ArrowDown className="text-outline" size={18} />
        <span className="rounded-full bg-secondary-container px-4 py-1.5 text-label-md font-label-md font-semibold text-on-secondary-container">
          Gestión documental
        </span>
        <ArrowDown className="text-outline" size={18} />
        <span className="rounded-full border border-outline-variant px-4 py-1.5 text-label-md font-label-md text-on-surface">
          Ciclo de vida del documento
        </span>
      </div>
    </section>
  );
}
