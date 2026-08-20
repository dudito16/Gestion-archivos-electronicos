import { Badge } from "../ui/badge";
import type { WeekModule } from "../../types/course.types";

const statusLabel: Record<WeekModule["status"], string> = {
  active: "En progreso",
  upcoming: "Próximamente",
  completed: "Completada",
};

const statusBadgeVariant: Record<WeekModule["status"], "secondary" | "locked" | "tertiary"> = {
  active: "secondary",
  upcoming: "locked",
  completed: "tertiary",
};

interface WeekHeaderProps {
  week: WeekModule;
  /** Compact single-line variant for the sidebar tree; the full variant adds dates/unit/status. */
  dense?: boolean;
  className?: string;
}

/** Consistent "Semana N: Title" identity block — reused by the sidebar tree, the dashboard, and week pages. */
export function WeekHeader({ week, dense = false, className }: WeekHeaderProps) {
  if (dense) {
    return (
      <span className={className}>
        <span className="font-bold">Semana {week.number}</span>
        <span className="text-on-surface-variant">: {week.shortTitle}</span>
      </span>
    );
  }

  return (
    <div className={className}>
      <div className="flex flex-wrap items-center gap-xs mb-1">
        <span className="text-label-md font-label-md font-bold text-primary-container">Semana {week.number}</span>
        <Badge variant={statusBadgeVariant[week.status]}>{statusLabel[week.status]}</Badge>
      </div>
      <h1 className="text-headline-lg font-headline-lg text-on-surface">{week.title}</h1>
      <p className="text-caption font-caption text-on-surface-variant mt-1">{week.dates}</p>
    </div>
  );
}
