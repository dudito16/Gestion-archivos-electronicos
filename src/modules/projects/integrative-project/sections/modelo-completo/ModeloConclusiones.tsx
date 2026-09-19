import { SectionHeading } from "../../../../../components/common/SectionHeading";
import { Callout } from "../../../../../components/common/Callout";
import { modeloConclusiones } from "../../integrativeProject.data";
import { ModeloChapterNav } from "./ModeloChapterNav";

export function ModeloConclusiones() {
  return (
    <section id="modelo-conclusiones" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Modelo completo" title="Conclusiones" description="Cada conclusión relaciona un hallazgo con su evidencia, su análisis y la propuesta que se deriva de él." />

      <Callout variant="warning" title="Lo que se evita">
        Una conclusión como "se concluye que la organización debe mejorar" es demasiado genérica. Cada conclusión
        debe poder rastrearse hasta un hallazgo concreto.
      </Callout>

      <div className="space-y-sm">
        {modeloConclusiones.map((c, index) => (
          <div key={c.id} className="rounded-xl border border-outline-variant bg-surface-container-lowest p-md space-y-2">
            <p className="text-body-md font-body-md font-semibold text-on-surface">Conclusión {index + 1}</p>
            <Row label="Hallazgo" value={c.hallazgo} />
            <Row label="Evidencia" value={c.evidencia} />
            <Row label="Análisis" value={c.analisis} />
            <Row label="Propuesta relacionada" value={c.propuesta} />
          </div>
        ))}
      </div>

      <ModeloChapterNav currentId="modelo-conclusiones" />
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <p className="text-caption font-caption text-on-surface-variant">
      <span className="font-bold uppercase tracking-wider">{label}: </span>
      {value}
    </p>
  );
}
