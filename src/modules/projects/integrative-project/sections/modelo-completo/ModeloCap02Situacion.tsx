import { SectionHeading } from "../../../../../components/common/SectionHeading";
import { modeloSituacion } from "../../integrativeProject.data";
import { ModeloChapterNav } from "./ModeloChapterNav";

export function ModeloCap02Situacion() {
  return (
    <section id="modelo-cap-2" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Modelo completo · Capítulo 2" title="2. Situación identificada" />

      <p className="text-body-md font-body-md text-on-surface leading-relaxed rounded-xl border border-outline-variant bg-surface-container-lowest p-lg">
        {modeloSituacion.narrativa}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-sm">
        <Block step="Hecho / evidencia" text={modeloSituacion.hecho} className="border-secondary bg-secondary-container/30" />
        <Block step="Interpretación" text={modeloSituacion.evidencia} className="border-outline-variant bg-surface-container-low" />
        <Block step="Análisis" text={modeloSituacion.analisis} className="border-primary-container bg-primary-container/15" />
      </div>

      <p className="text-caption font-caption text-on-surface-variant text-center">HECHO / EVIDENCIA → INTERPRETACIÓN → ANÁLISIS</p>

      <ModeloChapterNav currentId="modelo-cap-2" />
    </section>
  );
}

function Block({ step, text, className }: { step: string; text: string; className: string }) {
  return (
    <div className={`rounded-lg border-2 p-md ${className}`}>
      <p className="text-caption font-caption font-bold uppercase tracking-wider text-on-surface-variant mb-1">{step}</p>
      <p className="text-body-md font-body-md text-on-surface">{text}</p>
    </div>
  );
}
