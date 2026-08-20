import { Link } from "react-router-dom";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import type { CourseUnit } from "../../types/course.types";

interface UnitsOverviewProps {
  units: CourseUnit[];
}

const statusLabel: Record<CourseUnit["status"], string> = {
  active: "En progreso",
  upcoming: "Próximamente",
  completed: "Completada",
};

/** The three big "Unidad" cards that sit above the full week grid on the dashboard. */
export function UnitsOverview({ units }: UnitsOverviewProps) {
  return (
    <section className="space-y-sm">
      <h3 className="text-headline-md font-headline-md text-on-surface">Unidades</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
        {units.map((unit) => (
          <Link key={unit.id} to={`#unidad-${unit.id}`}>
            <Card className="p-lg h-full border border-outline-variant hover:border-primary-container hover:shadow-md transition-all">
              <div className="flex items-center justify-between mb-xs">
                <CardTitle className="text-headline-md font-headline-md">{unit.title}</CardTitle>
                <Badge variant={unit.status === "upcoming" ? "locked" : "secondary"}>{statusLabel[unit.status]}</Badge>
              </div>
              <CardDescription>{unit.subtitle}</CardDescription>
              <CardContent className="p-0 mt-sm">
                <span className="text-label-md font-label-md text-on-surface-variant">
                  Semanas {unit.weekRange[0]}–{unit.weekRange[1]}
                </span>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
