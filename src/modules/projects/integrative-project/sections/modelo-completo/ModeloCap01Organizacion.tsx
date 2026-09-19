import { SectionHeading } from "../../../../../components/common/SectionHeading";
import { Callout } from "../../../../../components/common/Callout";
import { actors, modeloOrganizacion } from "../../integrativeProject.data";
import { ModeloChapterNav } from "./ModeloChapterNav";

export function ModeloCap01Organizacion() {
  return (
    <section id="modelo-cap-1" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Modelo completo · Capítulo 1" title="1. Descripción de la organización" />

      <dl className="grid grid-cols-1 sm:grid-cols-2 gap-sm rounded-xl border border-outline-variant bg-surface-container-lowest p-lg">
        <Field label="Organización" value={modeloOrganizacion.organizacion} />
        <Field label="Sector" value={modeloOrganizacion.sector} />
        <Field label="Área" value={modeloOrganizacion.area} />
        <Field label="Proceso" value={modeloOrganizacion.proceso} />
        <Field label="Documento seleccionado" value={modeloOrganizacion.documento} />
        <Field label="Expediente relacionado" value={modeloOrganizacion.expediente} />
        <div className="sm:col-span-2">
          <dt className="text-caption font-caption font-bold uppercase tracking-wider text-on-surface-variant">Actividad</dt>
          <dd className="text-body-md font-body-md text-on-surface mt-0.5">{modeloOrganizacion.actividad}</dd>
        </div>
      </dl>

      <div>
        <p className="text-label-md font-label-md font-semibold text-on-surface mb-sm">Actores involucrados</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-sm">
          {actors.map((actor) => (
            <div key={actor.id} className="rounded-lg border border-outline-variant bg-surface-container-lowest p-md">
              <p className="text-body-md font-body-md font-semibold text-on-surface">{actor.label}</p>
              <p className="text-caption font-caption text-on-surface-variant mt-1">{actor.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-outline-variant bg-surface-container-low p-md space-y-2">
        <p className="text-label-md font-label-md font-semibold text-on-surface">Fuente / evidencia</p>
        <p className="text-body-md font-body-md text-on-surface-variant">{modeloOrganizacion.fuente}</p>
      </div>

      <Callout variant="info" title="En un caso real">
        {modeloOrganizacion.comoDocumentarEnCasoReal}
      </Callout>

      <ModeloChapterNav currentId="modelo-cap-1" />
    </section>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-caption font-caption font-bold uppercase tracking-wider text-on-surface-variant">{label}</dt>
      <dd className="text-body-md font-body-md text-on-surface mt-0.5">{value}</dd>
    </div>
  );
}
