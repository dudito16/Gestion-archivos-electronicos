import { useState } from "react";
import { X, Check } from "lucide-react";
import { SectionHeading } from "../../../../../components/common/SectionHeading";
import { cn } from "../../../../../utils/cn";
import { modeloComparacion } from "../../integrativeProject.data";
import { ModeloChapterNav } from "./ModeloChapterNav";

export function ModeloComparacion() {
  const [activeId, setActiveId] = useState(modeloComparacion[0].id);
  const active = modeloComparacion.find((c) => c.id === activeId) ?? modeloComparacion[0];

  return (
    <section id="modelo-comparacion" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Autoevaluación" title="¿Mi trabajo se parece al modelo?" description="Selecciona un tema y compara un trabajo superficial con lo que se espera." />

      <div className="flex flex-wrap gap-2">
        {modeloComparacion.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => setActiveId(c.id)}
            className={cn(
              "rounded-full px-3 py-1.5 text-caption font-caption font-semibold transition-colors",
              c.id === activeId ? "bg-primary-container text-on-primary" : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high",
            )}
          >
            {c.tema}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-sm">
        <div className="rounded-xl border border-error/60 bg-error-container/20 p-md">
          <p className="flex items-center gap-1 text-label-md font-label-md font-bold text-on-error-container mb-2">
            <X size={16} /> Trabajo superficial
          </p>
          <p className="text-body-md font-body-md text-on-error-container italic">"{active.superficial}"</p>
        </div>
        <div className="rounded-xl border border-tertiary-fixed-dim/60 bg-tertiary-fixed/15 p-md">
          <p className="flex items-center gap-1 text-label-md font-label-md font-bold text-on-tertiary-fixed-variant mb-2">
            <Check size={16} /> Trabajo esperado
          </p>
          <p className="text-body-md font-body-md text-on-tertiary-fixed-variant">"{active.esperado}"</p>
        </div>
      </div>

      <ModeloChapterNav currentId="modelo-comparacion" />
    </section>
  );
}
