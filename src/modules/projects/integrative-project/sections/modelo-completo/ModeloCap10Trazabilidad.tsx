import { SectionHeading } from "../../../../../components/common/SectionHeading";
import { ComparisonMatrix } from "../../../../../components/common/ComparisonMatrix";
import { traceabilityEvents, modeloTrazabilidadNota } from "../../integrativeProject.data";
import { ModeloChapterNav } from "./ModeloChapterNav";

export function ModeloCap10Trazabilidad() {
  const rows = traceabilityEvents.map((e) => ({ criterion: e.time, values: [e.event, e.responsible, e.document, e.result] }));

  return (
    <section id="modelo-cap-10" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Modelo completo · Capítulo 10" title="10. Trazabilidad" description="Fecha/hora — evento, responsable, documento y resultado." />

      <ComparisonMatrix columns={["Evento", "Responsable", "Documento", "Resultado"]} rows={rows} />

      <p className="text-body-md font-body-md text-on-surface-variant rounded-xl border border-outline-variant bg-surface-container-lowest p-md">
        {modeloTrazabilidadNota}
      </p>

      <ModeloChapterNav currentId="modelo-cap-10" />
    </section>
  );
}
