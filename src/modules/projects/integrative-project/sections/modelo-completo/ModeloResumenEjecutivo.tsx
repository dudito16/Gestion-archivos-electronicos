import { SectionHeading } from "../../../../../components/common/SectionHeading";
import { modeloResumenEjecutivo } from "../../integrativeProject.data";
import { ModeloChapterNav } from "./ModeloChapterNav";

/** A full, professionally-written executive summary example — not just instructions on what one should contain. */
export function ModeloResumenEjecutivo() {
  return (
    <section id="modelo-resumen-ejecutivo" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Modelo completo" title="Resumen ejecutivo" description="Así se redacta un resumen ejecutivo: organización, área, proceso, documento, problema, riesgos y propuesta, en un texto continuo." />

      <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg space-y-sm">
        {modeloResumenEjecutivo.map((paragraph, index) => (
          <p key={index} className="text-body-md font-body-md text-on-surface leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>

      <ModeloChapterNav currentId="modelo-resumen-ejecutivo" />
    </section>
  );
}
