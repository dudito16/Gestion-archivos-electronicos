import { SectionHeading } from "../../../../components/common/SectionHeading";
import { ChecklistReveal } from "../../../../components/common/ChecklistReveal";
import { folderProblemsData } from "../week01.data";
import { useWeek01Progress } from "../week01Progress";

/** Activity 3 — "Detecta los problemas": a folder of inconsistently named PDFs, examined for archival risk. */
export function ProblemDetectionSection() {
  const { markComplete } = useWeek01Progress();

  return (
    <section id="detecta-problemas" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="Actividad 3"
        title="Detecta los problemas"
        description="¿Qué problemas observas en esta carpeta compartida? Marca los que identifiques."
      />

      <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg space-y-lg">
        <pre className="overflow-x-auto rounded-lg bg-surface-container-low p-md text-body-md font-body-md font-mono text-on-surface-variant">
          {folderProblemsData.files.join("\n")}
        </pre>

        <ChecklistReveal
          options={folderProblemsData.options}
          revealTitle={folderProblemsData.revealTitle}
          revealContent={folderProblemsData.revealContent}
          onReveal={() => markComplete("detecta-problemas")}
        />
      </div>
    </section>
  );
}
