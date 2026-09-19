import { X, Check } from "lucide-react";
import { SectionHeading } from "../../../../../components/common/SectionHeading";
import { modeloNoCopiar, modeloSiUsar } from "../../integrativeProject.data";
import { ModeloChapterNav } from "./ModeloChapterNav";

export function ModeloNoCopiar() {
  return (
    <section id="modelo-no-copiar" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="⚠️ Atención" title="¿Qué debo copiar del modelo?" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-sm">
        <div className="rounded-xl border border-error/60 bg-error-container/30 p-md">
          <p className="flex items-center gap-1 text-label-md font-label-md font-bold text-on-error-container mb-sm">
            <X size={16} /> No debes copiar
          </p>
          <ul className="space-y-1">
            {modeloNoCopiar.map((item) => (
              <li key={item} className="text-body-md font-body-md text-on-error-container">{item}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-tertiary-fixed-dim/60 bg-tertiary-fixed/20 p-md">
          <p className="flex items-center gap-1 text-label-md font-label-md font-bold text-on-tertiary-fixed-variant mb-sm">
            <Check size={16} /> Sí debes usar como referencia
          </p>
          <ul className="space-y-1">
            {modeloSiUsar.map((item) => (
              <li key={item} className="text-body-md font-body-md text-on-tertiary-fixed-variant">{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="rounded-xl bg-primary-container text-on-primary p-lg text-center space-y-1">
        <p className="text-headline-md font-headline-md">NO COPIAR EL CONTENIDO.</p>
        <p className="text-headline-md font-headline-md">IMITAR EL MÉTODO.</p>
      </div>

      <ModeloChapterNav currentId="modelo-no-copiar" />
    </section>
  );
}
