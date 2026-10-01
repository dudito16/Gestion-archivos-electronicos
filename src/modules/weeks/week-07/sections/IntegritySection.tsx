import { useState } from "react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { MultiSelectCheck } from "../../../../components/common/MultiSelectCheck";
import { attributes, integrityAfter, integrityBefore, integrityChangeOptions, integrityClosing } from "../week07.data";

const integrity = attributes.find((a) => a.id === "integridad")!;

function RecordCard({ label, data, highlight }: { label: string; data: typeof integrityBefore; highlight?: boolean }) {
  return (
    <div className={`rounded-lg border p-md space-y-1 ${highlight ? "border-primary-container/50 bg-secondary-container/20" : "border-outline-variant bg-surface-container-low"}`}>
      <p className="text-label-md font-label-md font-bold text-on-surface">{label}</p>
      <p className="text-body-md font-body-md text-on-surface-variant"><span className="font-semibold text-on-surface">Campo:</span> {data.campo}</p>
      <p className="text-body-md font-body-md text-on-surface-variant"><span className="font-semibold text-on-surface">Valor:</span> {data.valor}</p>
      <p className="text-body-md font-body-md text-on-surface-variant"><span className="font-semibold text-on-surface">Responsable:</span> {data.responsable}</p>
      <p className="text-body-md font-body-md text-on-surface-variant"><span className="font-semibold text-on-surface">Estado:</span> {data.estado}</p>
    </div>
  );
}

export function IntegritySection() {
  const [answered, setAnswered] = useState(false);

  return (
    <section id="integridad" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Integridad" title={integrity.definition} />

      <div>
        <p className="text-label-md font-label-md font-semibold text-on-surface mb-sm">Ejemplos</p>
        <div className="flex flex-wrap gap-xs">
          {integrity.examples.map((example) => (
            <span key={example} className="rounded-full border border-outline-variant bg-surface-container-lowest px-3 py-1.5 text-label-md font-label-md text-on-surface">
              {example}
            </span>
          ))}
        </div>
      </div>

      <Callout variant="warning" title="En una municipalidad">
        {integrity.institutionalExample}
      </Callout>

      <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg space-y-md">
        <p className="text-body-lg font-body-lg font-semibold text-on-surface">¿Qué cambió?</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-sm">
          <RecordCard label="Versión original" data={integrityBefore} />
          <RecordCard label="Versión encontrada hoy" data={integrityAfter} highlight />
        </div>
        <p className="text-body-md font-body-md text-on-surface-variant">Selecciona lo que identifiques al comparar ambas versiones.</p>
        <MultiSelectCheck items={integrityChangeOptions} onComplete={() => setAnswered(true)} />
      </div>

      {answered && (
        <Callout variant="info" title="El problema real">
          {integrityClosing}
        </Callout>
      )}
    </section>
  );
}
