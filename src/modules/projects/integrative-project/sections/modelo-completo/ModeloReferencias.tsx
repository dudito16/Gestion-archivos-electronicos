import { SectionHeading } from "../../../../../components/common/SectionHeading";
import { Callout } from "../../../../../components/common/Callout";
import { modeloReferencias } from "../../integrativeProject.data";
import { ModeloChapterNav } from "./ModeloChapterNav";

const groups: { label: string; items: string[] }[] = [
  { label: "Normativa", items: modeloReferencias.normativa },
  { label: "Fuentes institucionales", items: modeloReferencias.institucionales },
  { label: "Documentación de la organización", items: modeloReferencias.organizacion },
  { label: "Fuentes académicas", items: modeloReferencias.academicas },
];

export function ModeloReferencias() {
  return (
    <section id="modelo-referencias" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Modelo completo" title="Referencias" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-sm">
        {groups.map((group) => (
          <div key={group.label} className="rounded-lg border border-outline-variant bg-surface-container-lowest p-md">
            <p className="text-label-md font-label-md font-semibold text-on-surface mb-1">{group.label}</p>
            <ul className="list-disc list-inside text-body-md font-body-md text-on-surface-variant space-y-1">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <Callout variant="warning" title="Referencias ficticias">
        {modeloReferencias.nota}
      </Callout>

      <ModeloChapterNav currentId="modelo-referencias" />
    </section>
  );
}
