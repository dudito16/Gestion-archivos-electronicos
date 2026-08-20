import { NavLink } from "react-router-dom";
import { cn } from "../../utils/cn";
import { getIcon } from "../../utils/getIcon";
import type { WeekModule } from "../../types/course.types";

interface LessonNavigationProps {
  week: WeekModule;
  className?: string;
}

/** The lesson link list for one week — used inside the sidebar's expanded `WeekSection`. */
export function LessonNavigation({ week, className }: LessonNavigationProps) {
  return (
    <nav className={cn("flex flex-col", className)}>
      {week.lessons.map((lesson) => {
        const Icon = getIcon(lesson.icon);
        return (
          <NavLink
            key={lesson.id}
            to={`/semana/${week.number}/${lesson.slug}`}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-xs pl-xl pr-md py-2 text-label-md font-label-md transition-colors duration-200",
                isActive
                  ? "text-primary bg-secondary-container border-l-4 border-primary font-bold"
                  : "text-on-surface-variant hover:bg-surface-container-high border-l-4 border-transparent",
              )
            }
          >
            <Icon size={16} />
            {lesson.title}
          </NavLink>
        );
      })}
    </nav>
  );
}
