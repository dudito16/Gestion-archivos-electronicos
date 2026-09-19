import { ScrollReveal } from "../../../../components/common/ScrollReveal";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { ZigzagFlow } from "../../../../components/common/ZigzagFlow";
import { proposalAfter, proposalBefore, proposalExplanations } from "../integrativeProject.data";

const beforeSteps = proposalBefore.map((label, i) => ({ id: `b${i}`, label }));
const afterSteps = proposalAfter.map((label, i) => ({ id: `a${i}`, label }));

export function Paso11Propuesta() {
  return (
    <section id="paso-11-propuesta" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Caso modelo · Paso 11" title="Propuesta de mejora" />

      <div>
        <p className="text-label-md font-label-md font-bold uppercase tracking-wider text-error mb-sm">Situación actual</p>
        <ScrollReveal>
          <ZigzagFlow steps={beforeSteps} perRow={4} />
        </ScrollReveal>
      </div>

      <div>
        <p className="text-label-md font-label-md font-bold uppercase tracking-wider text-tertiary mb-sm">Propuesta</p>
        <ScrollReveal>
          <ZigzagFlow steps={afterSteps} perRow={4} />
        </ScrollReveal>
      </div>

      <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg space-y-sm">
        <p className="text-label-md font-label-md font-semibold text-on-surface">¿Qué problema resuelve cada mejora?</p>
        <div className="space-y-xs">
          {proposalExplanations.map((item) => (
            <div key={item.id} className="rounded-lg border border-outline-variant bg-surface-container-low p-sm">
              <p className="text-body-md font-body-md font-semibold text-on-surface">{item.improvement}</p>
              <p className="text-caption font-caption text-on-surface-variant mt-0.5">{item.solves}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
