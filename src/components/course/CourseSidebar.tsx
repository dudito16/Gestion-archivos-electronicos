import { Fragment } from "react";
import { useLocation } from "react-router-dom";
import { IntegrativeProjectNavLink } from "./IntegrativeProjectNavLink";
import { UnitSection } from "./UnitSection";
import { useCourseData } from "../../hooks/useCourseData";

/** Full Curso → Unidad → Semana navigation tree rendered inside the fixed sidebar. */
export function CourseSidebar() {
  const { weeks, units } = useCourseData();
  const location = useLocation();

  const match = location.pathname.match(/^\/semana\/(\d+)/);
  const currentWeekNumber = match ? Number(match[1]) : undefined;

  return (
    <nav className="flex flex-col py-xs">
      {units.map((unit) => (
        <Fragment key={unit.id}>
          <UnitSection
            unit={unit}
            weeks={weeks.filter((week) => week.unit === unit.id)}
            currentWeekNumber={currentWeekNumber}
          />
          {unit.id === 1 && <IntegrativeProjectNavLink />}
        </Fragment>
      ))}
    </nav>
  );
}
