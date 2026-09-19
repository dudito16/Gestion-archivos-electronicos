import { FolderTree } from "lucide-react";
import { SectionHeading } from "../../../../../components/common/SectionHeading";
import { modeloExpedienteDocs, modeloOrganizacion } from "../../integrativeProject.data";
import { ModeloChapterNav } from "./ModeloChapterNav";

export function ModeloCap05Expediente() {
  return (
    <section id="modelo-cap-5" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Modelo completo · Capítulo 5" title="5. Expediente analizado" />

      <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg">
        <p className="flex items-center gap-2 text-body-lg font-body-lg font-bold text-on-surface mb-sm">
          <FolderTree size={18} className="text-primary-container" /> EXPEDIENTE {modeloOrganizacion.expediente}
        </p>
        <ul className="font-mono text-body-md text-on-surface-variant space-y-1 pl-2">
          {modeloExpedienteDocs.slice(0, -1).map((doc, index) => (
            <li key={doc.id}>{index === modeloExpedienteDocs.length - 2 ? "└── " : "├── "}{doc.label}</li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-sm">
        {modeloExpedienteDocs.map((doc) => (
          <div key={doc.id} className="rounded-lg border border-outline-variant bg-surface-container-lowest p-md space-y-1">
            <p className="text-body-md font-body-md font-semibold text-on-surface">{doc.label}</p>
            <p className="text-caption font-caption text-on-surface-variant"><strong>Tipo:</strong> {doc.tipo}</p>
            <p className="text-caption font-caption text-on-surface-variant"><strong>Productor:</strong> {doc.productor}</p>
            <p className="text-caption font-caption text-on-surface-variant"><strong>Fecha:</strong> {doc.fecha}</p>
            <p className="text-caption font-caption text-on-surface-variant"><strong>Función:</strong> {doc.funcion}</p>
            <p className="text-caption font-caption text-on-surface-variant"><strong>Relación con el expediente:</strong> {doc.relacion}</p>
          </div>
        ))}
      </div>

      <ModeloChapterNav currentId="modelo-cap-5" />
    </section>
  );
}
