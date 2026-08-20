import { SectionHeading } from "../../../../components/common/SectionHeading";
import { AnimatedFolder } from "../../../../components/common/AnimatedFolder";
import { recordsDocs } from "../week02.data";

export function RecordsComponentSection() {
  return (
    <section id="expedientes" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="Componente · Expedientes"
        title="Expedientes"
        description="Haz clic en la carpeta para ver los documentos que agrupa."
      />

      <AnimatedFolder label="Expediente" docs={recordsDocs} />

      <p className="text-body-lg font-body-lg text-on-surface max-w-2xl">
        El expediente permite mantener la relación contextual entre documentos vinculados a un mismo asunto,
        procedimiento o actuación.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
        <div className="rounded-lg border border-outline-variant bg-surface-container-lowest p-md">
          <p className="text-label-md font-label-md font-bold text-on-surface mb-1">Documento</p>
          <p className="text-body-md font-body-md text-on-surface-variant">Unidad documental individual.</p>
        </div>
        <div className="rounded-lg border border-primary-container/50 bg-secondary-container/20 p-md">
          <p className="text-label-md font-label-md font-bold text-primary-container mb-1">Expediente</p>
          <p className="text-body-md font-body-md text-on-surface-variant">Agrupación estructurada de documentos relacionados.</p>
        </div>
      </div>
    </section>
  );
}
