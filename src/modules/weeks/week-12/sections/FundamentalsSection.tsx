import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import {
  oaisAcronymExplanation,
  oaisDefinition,
  oaisImportance,
  oaisScope,
  oaisVsSoftware,
} from "../week12.data";

export function FundamentalsSection() {
  return (
    <section id="fundamentos-oais" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Fundamentos del modelo OAIS" title="¿Qué significa OAIS?" description={oaisAcronymExplanation} />

      <p className="text-body-lg font-body-lg text-on-surface max-w-3xl">{oaisDefinition}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-sm">
        <div className="rounded-xl border-2 border-primary-container bg-secondary-container/20 p-md">
          <p className="text-label-md font-label-md font-bold text-on-surface mb-sm">{oaisVsSoftware.model.label}</p>
          <ul className="space-y-1.5">
            {oaisVsSoftware.model.points.map((p) => (
              <li key={p} className="text-body-md font-body-md text-on-surface">• {p}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-outline-variant bg-surface-container-low p-md">
          <p className="text-label-md font-label-md font-bold text-on-surface mb-sm">{oaisVsSoftware.software.label}</p>
          <ul className="space-y-1.5">
            {oaisVsSoftware.software.points.map((p) => (
              <li key={p} className="text-body-md font-body-md text-on-surface-variant">• {p}</li>
            ))}
          </ul>
        </div>
      </div>

      <p className="text-body-md font-body-md text-on-surface max-w-3xl">{oaisScope}</p>

      <Callout variant="warning" title="OAIS no garantiza nada por sí solo">
        El modelo OAIS no garantiza automáticamente la preservación, la autenticidad ni la confiabilidad de los
        documentos: eso depende de cómo cada institución lo interprete, lo dote de recursos y lo sostenga con
        políticas y controles. {oaisImportance}
      </Callout>
    </section>
  );
}
