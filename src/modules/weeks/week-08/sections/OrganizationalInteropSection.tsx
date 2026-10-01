import { ArrowDown } from "lucide-react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { interopDimensions } from "../week08.data";

const dimension = interopDimensions.find((d) => d.id === "organizacional")!;

const flowSteps = ["Entidad A", "Envía expediente", "Entidad B", "Recibe expediente", "Continúa el trámite"];

export function OrganizationalInteropSection() {
  return (
    <section id="interoperabilidad-organizacional" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Interoperabilidad organizacional" title={dimension.definition} />

      <div className="flex flex-col items-center gap-1 max-w-xs mx-auto">
        {flowSteps.map((step, index) => (
          <div key={step} className="flex flex-col items-center">
            <div className="rounded-lg border border-outline-variant bg-surface-container-lowest px-md py-sm text-center text-label-md font-label-md text-on-surface w-full">
              {step}
            </div>
            {index < flowSteps.length - 1 && <ArrowDown className="text-outline my-0.5" size={16} />}
          </div>
        ))}
      </div>

      <div>
        <p className="text-label-md font-label-md font-semibold text-on-surface mb-sm">Pero antes de dar esto por sentado, hay que preguntar:</p>
        <ul className="space-y-1">
          {dimension.questions.map((q) => (
            <li key={q} className="rounded-lg border border-outline-variant bg-surface-container-low px-md py-sm text-body-md font-body-md text-on-surface">
              {q}
            </li>
          ))}
        </ul>
      </div>

      <Callout variant="warning" title="Ejemplo institucional">
        {dimension.institutionalExample}
      </Callout>
    </section>
  );
}
