import { ArrowRight, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "../ui/badge";
import { cn } from "../../utils/cn";
import type { WeekModule } from "../../types/course.types";

interface WeekCardProps {
  week: WeekModule;
}

const statusLabel: Record<WeekModule["status"], string> = {
  active: "En progreso",
  upcoming: "Próxima",
  completed: "Completada",
};

/** A single week tile — number, title, dates, status, progress, and an "Ingresar" action. */
export function WeekCard({ week }: WeekCardProps) {
  const isUpcoming = week.status === "upcoming";

  const content = (
    <>
      <div className="flex justify-between items-start mb-sm">
        <span
          className={cn(
            "text-label-md font-label-md font-bold px-2 py-1 rounded",
            isUpcoming ? "text-outline font-medium" : "text-primary-container bg-secondary-container",
          )}
        >
          Semana {week.number}
        </span>
        <Badge variant={isUpcoming ? "locked" : "secondary"}>{statusLabel[week.status]}</Badge>
      </div>
      <h4
        className={cn(
          "text-body-lg font-body-lg font-semibold text-on-surface mb-1",
          !isUpcoming && "group-hover:text-primary-container transition-colors",
        )}
      >
        {week.title}
      </h4>
      <p className="text-caption font-caption text-on-surface-variant mb-xs">{week.dates}</p>
      <p className="text-caption font-caption text-on-surface-variant mb-md flex-grow">{week.description}</p>

      <div className="w-full bg-surface-variant h-2 rounded-full overflow-hidden mb-sm">
        {!isUpcoming && week.progressPercent > 0 && (
          <div className="bg-primary-container h-full rounded-full" style={{ width: `${week.progressPercent}%` }} />
        )}
      </div>

      <div className="flex items-center justify-between text-label-md font-label-md">
        <span className={isUpcoming ? "text-outline" : "text-primary-container font-semibold"}>
          {isUpcoming ? "Próximamente" : "Ingresar"}
        </span>
        {isUpcoming ? <Lock className="text-outline" size={18} /> : <ArrowRight className="text-primary-container" size={18} />}
      </div>
    </>
  );

  const baseClasses =
    "bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant p-md flex flex-col h-full relative overflow-hidden transition-theme";

  return (
    <Link
      to={`/semana/${week.number}`}
      className={cn(baseClasses, "group hover:border-primary-container hover:shadow-md cursor-pointer", isUpcoming && "opacity-80")}
    >
      <div className={cn("absolute top-0 left-0 w-1 h-full", isUpcoming ? "bg-outline-variant" : "bg-primary-container")} />
      <div className="pl-2 flex flex-col flex-1">{content}</div>
    </Link>
  );
}
