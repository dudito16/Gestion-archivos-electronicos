/**
 * Generic content shapes shared by reusable diagram components (`FlowChain`, `VerticalTimeline`, ...)
 * across every week module. Kept separate from `course.types.ts` (the catalog/navigation model) and
 * from any single week's `weekNN.types.ts` (that week's own content shapes) so a common component
 * never has to import from a specific week's folder.
 */

export interface FlowStep {
  id: string;
  label: string;
  description?: string;
}

export interface TimelineStep {
  id: string;
  period: string;
  title: string;
  description: string;
  icon: string;
}
