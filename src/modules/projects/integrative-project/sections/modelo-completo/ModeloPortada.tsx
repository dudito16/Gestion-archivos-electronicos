import { Callout } from "../../../../../components/common/Callout";
import { modeloPortada } from "../../integrativeProject.data";
import { ModeloChapterNav } from "./ModeloChapterNav";

/** Simulated cover page — shows students the level of formality and the fields a real cover page needs. */
export function ModeloPortada() {
  return (
    <section id="modelo-portada" className="scroll-mt-24 space-y-lg">
      <div className="rounded-xl border-2 border-outline-variant bg-surface-container-lowest p-xl text-center space-y-md">
        <p className="text-caption font-caption font-semibold uppercase tracking-widest text-on-surface-variant">Modelo de entrega</p>
        <h3 className="text-headline-lg font-headline-lg text-on-surface">{modeloPortada.proyecto}</h3>
        <p className="text-headline-md font-headline-md text-primary-container">{modeloPortada.subtitulo}</p>
        <p className="text-body-lg font-body-lg text-on-surface-variant max-w-xl mx-auto">{modeloPortada.lineaDescriptiva}</p>

        <div className="mx-auto max-w-md pt-md border-t border-outline-variant space-y-2 text-left">
          <Field label="Organización" value={modeloPortada.organizacion} />
          <Field label="Área" value={modeloPortada.area} />
          <Field label="Proceso" value={modeloPortada.proceso} />
          <Field label="Documento analizado" value={modeloPortada.documento} />
          <Field label="Integrantes" value={modeloPortada.integrantes} />
          <Field label="Curso" value={modeloPortada.curso} />
          <Field label="Unidad" value={modeloPortada.unidad} />
          <Field label="Año" value={modeloPortada.anio} />
        </div>
      </div>

      <Callout variant="info" title="Nota">
        {modeloPortada.nota}
      </Callout>

      <ModeloChapterNav currentId="modelo-portada" />
    </section>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-md text-body-md font-body-md">
      <span className="text-on-surface-variant">{label}:</span>
      <span className="font-semibold text-on-surface text-right">{value}</span>
    </div>
  );
}
