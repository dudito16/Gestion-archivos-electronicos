import type { TimelineItem } from "../../types/course.types";

interface TimelineProps {
  items: TimelineItem[];
}

/** Vertical step timeline for ordered learning objectives/milestones. */
export function Timeline({ items }: TimelineProps) {
  return (
    <ol className="relative border-l-2 border-surface-container pl-md space-y-md">
      {items.map((item) => (
        <li key={item.id} className="relative">
          <span className="absolute -left-[calc(1.5rem+5px)] top-1 h-3 w-3 rounded-full bg-primary-container ring-4 ring-surface-container-lowest" />
          <div className="flex items-center gap-xs flex-wrap">
            <h4 className="text-body-md font-body-md font-semibold text-on-surface">{item.title}</h4>
            {item.date && (
              <span className="text-caption font-caption text-on-surface-variant">· {item.date}</span>
            )}
          </div>
          <p className="text-caption font-caption text-on-surface-variant mt-1">{item.description}</p>
        </li>
      ))}
    </ol>
  );
}
