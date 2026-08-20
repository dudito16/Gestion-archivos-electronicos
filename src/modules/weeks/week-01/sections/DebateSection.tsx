import { SectionHeading } from "../../../../components/common/SectionHeading";
import { PositionSelect } from "../../../../components/common/PositionSelect";
import { debateData } from "../week01.data";
import { useWeek01Progress } from "../week01Progress";

export function DebateSection() {
  const { markComplete } = useWeek01Progress();

  return (
    <section id="debate" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Debate profesional" title="Toma una posición" />
      <PositionSelect
        statement={debateData.statement}
        resolution={debateData.resolution}
        onChoose={() => markComplete("debate")}
      />
    </section>
  );
}
