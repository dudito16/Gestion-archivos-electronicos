import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { policyComponents, policyPurpose, policyVsPlan } from "../week11.data";

export function PolicySection() {
  return (
    <section id="politica-preservacion" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Política de preservación digital" title="Los principios que la institución se compromete a respetar" description={policyPurpose} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-sm">
        {policyComponents.map((comp) => (
          <div key={comp.id} className="rounded-lg border border-outline-variant bg-surface-container-lowest p-md">
            <p className="text-label-md font-label-md font-bold text-primary-container mb-1">{comp.label}</p>
            <p className="text-caption font-caption text-on-surface-variant">{comp.description}</p>
          </div>
        ))}
      </div>

      <Callout variant="info" title="Política vs. plan">
        {policyVsPlan}
      </Callout>
    </section>
  );
}
