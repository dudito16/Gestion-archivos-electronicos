import { WeekSection } from "./WeekSection";
import type { CourseUnit, WeekModule } from "../../types/course.types";

interface UnitSectionProps {
  unit: CourseUnit;
  weeks: WeekModule[];
  currentWeekNumber?: number;
}

/** One "UNIDAD" group in the sidebar tree: a heading over its weeks' `WeekSection`s. */
export function UnitSection({ unit, weeks, currentWeekNumber }: UnitSectionProps) {
  return (
    <div className="border-t border-surface-container first:border-t-0">
      <p className="px-md pt-md pb-1 text-caption font-caption font-bold uppercase tracking-wider text-on-surface-variant">
        {unit.title}
      </p>
      <div>
        {weeks.map((week) => (
          <WeekSection key={week.number} week={week} isCurrent={week.number === currentWeekNumber} />
        ))}
      </div>
    </div>
  );
}
