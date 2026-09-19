import { Paperclip } from "lucide-react";
import { SectionHeading } from "../../../../../components/common/SectionHeading";
import { Callout } from "../../../../../components/common/Callout";
import { modeloAnexos } from "../../integrativeProject.data";
import { ModeloChapterNav } from "./ModeloChapterNav";

export function ModeloAnexos() {
  return (
    <section id="modelo-anexos" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Modelo completo" title="Anexos" />

      <div className="space-y-xs">
        {modeloAnexos.map((anexo) => (
          <div key={anexo.id} className="flex items-start gap-sm rounded-lg border border-outline-variant bg-surface-container-lowest p-md">
            <Paperclip size={18} className="text-primary-container shrink-0 mt-0.5" />
            <div>
              <p className="text-body-md font-body-md font-semibold text-on-surface">{anexo.titulo}</p>
              <p className="text-caption font-caption text-on-surface-variant mt-0.5">{anexo.descripcion}</p>
            </div>
          </div>
        ))}
      </div>

      <Callout variant="warning" title="Evidencias simuladas">
        Todas las evidencias de este modelo están claramente identificadas como simuladas. En un proyecto real, cada
        anexo debe corresponder a una evidencia auténtica y autorizada.
      </Callout>

      <ModeloChapterNav currentId="modelo-anexos" />
    </section>
  );
}
