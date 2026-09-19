import { SectionHeading } from "../../../../../components/common/SectionHeading";
import { Callout } from "../../../../../components/common/Callout";
import { ComparisonMatrix } from "../../../../../components/common/ComparisonMatrix";
import { modeloSGDTable } from "../../integrativeProject.data";
import { ModeloChapterNav } from "./ModeloChapterNav";

export function ModeloCap03SGD() {
  return (
    <section id="modelo-cap-3" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Modelo completo · Capítulo 3" title="3. Análisis del sistema de gestión documental" />

      <ComparisonMatrix columns={["Situación identificada", "Evidencia", "Análisis"]} rows={modeloSGDTable} />

      <Callout variant="info" title="No basta con describir">
        No es suficiente escribir "el sistema tiene usuarios". Un análisis completo muestra qué se observó, qué
        evidencia lo respalda y qué significa para el proceso — tal como en la tabla anterior.
      </Callout>

      <ModeloChapterNav currentId="modelo-cap-3" />
    </section>
  );
}
