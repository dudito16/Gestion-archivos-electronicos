import { Fragment } from "react";
import { IntegrativeProjectCard } from "./IntegrativeProjectCard";
import { WeekCard } from "./WeekCard";
import { Badge } from "../ui/badge";
import type { CourseUnit, WeekModule } from "../../types/course.types";

interface ModuleGridProps {
  units: CourseUnit[];
  weeks: WeekModule[];
}

const statusLabel: Record<CourseUnit["status"], string> = {
  active: "En progreso",
  upcoming: "Próximamente",
  completed: "Completada",
};

/** "Contenido del Curso": every week, grouped by unit — the full Curso → Unidad → Semana map. */
export function ModuleGrid({ units, weeks }: ModuleGridProps) {
  return (
    <section className="space-y-xl">
      <div className="flex justify-between items-end border-b border-surface-container pb-xs">
        <h3 className="text-headline-md font-headline-md text-on-surface">Contenido del Curso</h3>
        <span className="text-label-md font-label-md text-on-surface-variant">{weeks.length} Semanas</span>
      </div>

      {units.map((unit) => {
        const unitWeeks = weeks.filter((week) => week.unit === unit.id);
        return (
          <Fragment key={unit.id}>
            <div id={`unidad-${unit.id}`} className="space-y-sm scroll-mt-24">
              <div className="flex flex-wrap items-center gap-xs">
                <h4 className="text-body-lg font-body-lg font-bold text-on-surface">{unit.title}</h4>
                <Badge variant={unit.status === "upcoming" ? "locked" : "secondary"}>{statusLabel[unit.status]}</Badge>
                <span className="text-caption font-caption text-on-surface-variant">
                  Semanas {unit.weekRange[0]}–{unit.weekRange[1]}
                </span>
              </div>
              <p className="text-body-md font-body-md text-on-surface-variant max-w-2xl">{unit.subtitle}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-md">
                {unitWeeks.map((week) => (
                  <WeekCard key={week.number} week={week} />
                ))}
              </div>
            </div>
            {unit.id === 1 && <IntegrativeProjectCard />}
          </Fragment>
        );
      })}
    </section>
  );
}
