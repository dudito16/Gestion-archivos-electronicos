import { SectionHeading } from "../../../../../components/common/SectionHeading";
import { ComparisonMatrix } from "../../../../../components/common/ComparisonMatrix";
import { modeloRecomendaciones } from "../../integrativeProject.data";
import { ModeloChapterNav } from "./ModeloChapterNav";

export function ModeloRecomendaciones() {
  const rows = modeloRecomendaciones.map((r) => ({
    criterion: r.recomendacion,
    values: [r.porque, r.problema, r.resultadoEsperado],
  }));

  return (
    <section id="modelo-recomendaciones" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="Modelo completo"
        title="Recomendaciones"
        description="Cada recomendación responde: ¿qué se recomienda?, ¿por qué?, ¿qué problema atiende? y ¿qué resultado se espera?"
      />

      <ComparisonMatrix columns={["¿Por qué?", "¿Qué problema atiende?", "¿Qué resultado se espera?"]} rows={rows} />

      <ModeloChapterNav currentId="modelo-recomendaciones" />
    </section>
  );
}
