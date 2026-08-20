import { Callout } from "../common/Callout";
import { Diagram } from "../common/Diagram";
import { Quiz } from "../common/Quiz";
import { Timeline } from "../common/Timeline";
import type { LessonContentBlock } from "../../types/course.types";

interface LessonContentProps {
  blocks: LessonContentBlock[];
}

/** Renders a lesson's content blocks in order, dispatching by block kind. */
export function LessonContent({ blocks }: LessonContentProps) {
  return (
    <div className="space-y-md">
      {blocks.map((block, index) => {
        switch (block.kind) {
          case "paragraph":
            return (
              <p key={index} className="text-body-md font-body-md text-on-surface-variant">
                {block.text}
              </p>
            );
          case "callout":
            return (
              <Callout key={index} variant={block.variant} title={block.title}>
                {block.text}
              </Callout>
            );
          case "timeline":
            return <Timeline key={index} items={block.items} />;
          case "diagram":
            return <Diagram key={index} title={block.title} steps={block.steps} />;
          case "quiz":
            return <Quiz key={index} quiz={block.quiz} />;
          default:
            return null;
        }
      })}
    </div>
  );
}
