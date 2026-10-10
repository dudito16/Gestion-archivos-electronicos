import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { ZigzagFlow } from "../../../../components/common/ZigzagFlow";
import { backupMisconceptionText, backupMisconceptionTitle, relationClosing, relationStages } from "../week11.data";

export function RelationSection() {
  return (
    <section id="relacion-sgd-preservacion" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="SGD, archivo electrónico y preservación" title="Un recorrido, no un sinónimo" />

      <ZigzagFlow steps={relationStages} perRow={4} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-sm">
        {relationStages.map((stage) => (
          <div key={stage.id} className="rounded-lg border border-outline-variant bg-surface-container-lowest p-md">
            <p className="text-label-md font-label-md font-bold text-primary-container mb-1">{stage.label}</p>
            <p className="text-caption font-caption text-on-surface-variant">{stage.description}</p>
          </div>
        ))}
      </div>

      <p className="text-body-md font-body-md text-on-surface max-w-3xl">{relationClosing}</p>

      <Callout variant="warning" title={backupMisconceptionTitle}>
        {backupMisconceptionText}
      </Callout>
    </section>
  );
}
