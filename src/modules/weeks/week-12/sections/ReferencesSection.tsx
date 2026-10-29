import { ExternalLink } from "lucide-react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { referenceItems, referencesIntro } from "../week12.data";

export function ReferencesSection() {
  return (
    <section id="referencias" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Referencias" title="Fuentes para profundizar" />

      <Callout variant="info" title="Sílabo vs. fuentes técnicas">
        {referencesIntro}
      </Callout>

      <div className="space-y-sm">
        {referenceItems.map((ref) => (
          <a
            key={ref.id}
            href={ref.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-sm rounded-lg border border-outline-variant bg-surface-container-lowest p-md hover:border-primary-container transition-colors"
          >
            <ExternalLink size={18} className="text-primary-container shrink-0 mt-0.5" />
            <div>
              <p className="text-label-md font-label-md font-semibold text-on-surface">{ref.label}</p>
              <p className="text-caption font-caption text-on-surface-variant">{ref.note}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
