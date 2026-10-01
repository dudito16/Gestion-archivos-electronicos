import { useState } from "react";
import { FolderTree } from "lucide-react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { MultiSelectCheck } from "../../../../components/common/MultiSelectCheck";
import { expedienteLossIntro, expedienteLossItems, expedienteStructure } from "../week08.data";

const lossOptionsWithIcon = expedienteLossItems.map((item) => ({ id: item.id, label: item.label, icon: "FileX", belongs: item.lostInExchange }));

export function FileExchangeSection() {
  const [answered, setAnswered] = useState(false);

  return (
    <section id="intercambio-expedientes" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="Intercambio de expedientes"
        title="Intercambiar un expediente no es enviar varios archivos sueltos"
        description="Debe conservarse el contexto que une a esos documentos entre sí."
      />

      <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg">
        <p className="flex items-center gap-2 text-body-lg font-body-lg font-bold text-on-surface mb-sm">
          <FolderTree size={18} className="text-primary-container" /> EXPEDIENTE
        </p>
        <ul className="font-mono text-body-md text-on-surface-variant space-y-1 pl-2">
          {expedienteStructure.map((item, index) => (
            <li key={item}>{index === expedienteStructure.length - 1 ? "└── " : "├── "}{item}</li>
          ))}
        </ul>
      </div>

      <div>
        <p className="text-body-lg font-body-lg font-semibold text-on-surface mb-sm">¿Qué se perdió?</p>
        <p className="text-body-md font-body-md text-on-surface-variant mb-sm">{expedienteLossIntro}</p>
        <MultiSelectCheck items={lossOptionsWithIcon} onComplete={() => setAnswered(true)} />
      </div>

      {answered && (
        <Callout variant="warning" title="Un expediente incompleto, aunque los archivos lleguen">
          Perder documentos, metadatos, relaciones o el historial de trazabilidad compromete la capacidad de
          gestionar el expediente — aunque los archivos que sí llegaron estén en buen estado.
        </Callout>
      )}
    </section>
  );
}
