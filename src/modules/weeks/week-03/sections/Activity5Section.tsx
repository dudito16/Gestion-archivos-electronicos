import { SectionHeading } from "../../../../components/common/SectionHeading";
import { ChecklistReveal } from "../../../../components/common/ChecklistReveal";
import { activity5Data } from "../week03.data";

export function Activity5Section() {
  return (
    <section id="actividad-5" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="Actividad 5"
        title="Detecta los problemas"
        description={`${activity5Data.recordLabel} — ¿qué problemas identificas?`}
      />

      <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg space-y-lg">
        <pre className="overflow-x-auto rounded-lg bg-surface-container-low p-md text-body-md font-body-md font-mono text-on-surface-variant">
          {activity5Data.files.join("\n")}
        </pre>

        <ChecklistReveal
          options={activity5Data.options}
          revealTitle={activity5Data.revealTitle}
          revealContent={activity5Data.revealContent}
        />
      </div>
    </section>
  );
}
