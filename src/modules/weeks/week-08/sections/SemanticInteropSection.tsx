import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { interopDimensions } from "../week08.data";

const dimension = interopDimensions.find((d) => d.id === "semantica")!;

const fieldExamples = [
  { systemA: "DNI", systemB: "Documento de identidad" },
  { systemA: "FechaDocumento", systemB: "Fecha de emisión" },
];

export function SemanticInteropSection() {
  return (
    <section id="interoperabilidad-semantica" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Interoperabilidad semántica" title={dimension.definition} />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-sm">
        {fieldExamples.map((ex) => (
          <div key={ex.systemA} className="rounded-lg border border-outline-variant bg-surface-container-lowest p-md flex items-center justify-between gap-sm">
            <div className="text-center flex-1">
              <p className="text-caption font-caption text-on-surface-variant">Sistema A</p>
              <p className="text-label-md font-label-md font-bold text-on-surface">{ex.systemA}</p>
            </div>
            <span className="text-primary-container text-headline-md">↕</span>
            <div className="text-center flex-1">
              <p className="text-caption font-caption text-on-surface-variant">Sistema B</p>
              <p className="text-label-md font-label-md font-bold text-on-surface">{ex.systemB}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="text-body-lg font-body-lg font-semibold text-on-surface">¿Cómo sabemos que ambos campos representan el mismo concepto?</p>

      <div>
        <p className="text-label-md font-label-md font-semibold text-on-surface mb-sm">Esto se conecta con:</p>
        <div className="flex flex-wrap gap-xs">
          {["Metadatos", "Vocabularios", "Estructuras", "Definiciones", "Significado"].map((item) => (
            <span key={item} className="rounded-full border border-outline-variant bg-surface-container-lowest px-3 py-1.5 text-label-md font-label-md text-on-surface">
              {item}
            </span>
          ))}
        </div>
      </div>

      <Callout variant="warning" title="Ejemplo institucional">
        {dimension.institutionalExample}
      </Callout>
    </section>
  );
}
