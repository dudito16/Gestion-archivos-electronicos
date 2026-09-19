import { SectionHeading } from "../../../../components/common/SectionHeading";
import { qualityExamples } from "../integrativeProject.data";

export function CriteriosCalidadSection() {
  return (
    <section id="criterios-calidad" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Criterios de calidad" title="¿Qué diferencia un trabajo superficial de un buen proyecto?" />

      {qualityExamples.map((ex) => (
        <div key={ex.id} className="grid grid-cols-1 md:grid-cols-2 gap-sm">
          <div className="rounded-lg border border-error/40 bg-error-container/20 p-md">
            <p className="text-caption font-caption font-bold uppercase tracking-wider text-on-error-container mb-1">
              {ex.kind === "descripcion" ? "❌ Descripción" : "❌ Afirmación sin evidencia"}
            </p>
            <p className="text-body-md font-body-md text-on-error-container italic">"{ex.bad}"</p>
          </div>
          <div className="rounded-lg border border-tertiary-fixed-dim bg-tertiary-fixed/20 p-md">
            <p className="text-caption font-caption font-bold uppercase tracking-wider text-on-tertiary-fixed-variant mb-1">
              {ex.kind === "descripcion" ? "✅ Análisis" : "✅ Afirmación + evidencia + análisis"}
            </p>
            <p className="text-body-md font-body-md text-on-tertiary-fixed-variant">"{ex.good}"</p>
          </div>
        </div>
      ))}
    </section>
  );
}
