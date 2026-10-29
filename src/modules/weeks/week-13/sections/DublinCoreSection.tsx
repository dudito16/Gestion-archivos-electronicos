import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { dublinCoreDefinition, dublinCoreElements, dublinCoreExampleDisclaimer, dublinCoreVsPremis } from "../week13.data";

export function DublinCoreSection() {
  return (
    <section id="dublin-core" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Dublin Core" title="Describir recursos digitales de forma simple" description={dublinCoreDefinition} />

      <div className="overflow-x-auto rounded-xl border border-outline-variant bg-surface-container-lowest shadow-sm">
        <table className="w-full min-w-[42rem] border-collapse text-left">
          <thead>
            <tr className="bg-surface-container-low">
              <th className="p-sm text-label-md font-label-md text-on-surface-variant">Elemento</th>
              <th className="p-sm text-label-md font-label-md text-primary-container">Finalidad</th>
              <th className="p-sm text-label-md font-label-md text-primary-container">Ejemplo archivístico</th>
            </tr>
          </thead>
          <tbody>
            {dublinCoreElements.map((el) => (
              <tr key={el.id} className="border-t border-outline-variant hover:bg-surface-container-low transition-colors">
                <th scope="row" className="p-sm text-label-md font-label-md font-semibold text-on-surface align-top">
                  <code className="rounded bg-secondary-container/40 px-1.5 py-0.5 text-caption font-caption text-on-secondary-container">{el.code}</code>
                  <span className="ml-1">{el.label}</span>
                </th>
                <td className="p-sm text-body-md font-body-md text-on-surface-variant align-top">{el.purpose}</td>
                <td className="p-sm text-body-md font-body-md text-on-surface-variant align-top italic">{el.example}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-caption font-caption text-on-surface-variant italic">{dublinCoreExampleDisclaimer}</p>

      <Callout variant="info" title="Dublin Core no es PREMIS">
        {dublinCoreVsPremis}
      </Callout>
    </section>
  );
}
