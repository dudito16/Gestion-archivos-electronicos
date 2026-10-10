import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { preservationDefinition, preservationObjectives, storageVsPreservation } from "../week11.data";

export function FundamentalsSection() {
  return (
    <section id="fundamentos" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Fundamentos de la preservación digital" title="¿Qué es realmente preservar?" description={preservationDefinition} />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-sm">
        <div className="rounded-xl border border-outline-variant bg-surface-container-low p-md">
          <p className="text-label-md font-label-md font-bold text-on-surface mb-sm">{storageVsPreservation.storage.label}</p>
          <ul className="space-y-1.5">
            {storageVsPreservation.storage.points.map((p) => (
              <li key={p} className="text-body-md font-body-md text-on-surface-variant">• {p}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border-2 border-primary-container bg-secondary-container/20 p-md">
          <p className="text-label-md font-label-md font-bold text-on-surface mb-sm">{storageVsPreservation.preservation.label}</p>
          <ul className="space-y-1.5">
            {storageVsPreservation.preservation.points.map((p) => (
              <li key={p} className="text-body-md font-body-md text-on-surface">• {p}</li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <p className="text-body-lg font-body-lg font-semibold text-on-surface mb-sm">Objetivos de la preservación digital</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-xs">
          {preservationObjectives.map((obj) => (
            <div key={obj} className="rounded-lg border border-outline-variant bg-surface-container-lowest p-md text-body-md font-body-md text-on-surface">
              {obj}
            </div>
          ))}
        </div>
      </div>

      <Callout variant="info" title="No es lo mismo">
        Conservar un archivo almacenado no equivale a mantener su autenticidad, integridad, accesibilidad e
        interpretabilidad a lo largo del tiempo — eso es, precisamente, lo que distingue preservar de solo guardar.
      </Callout>
    </section>
  );
}
