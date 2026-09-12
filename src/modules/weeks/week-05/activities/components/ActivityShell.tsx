import { CheckCircle2 } from "lucide-react";
import type { ReactNode } from "react";
import { Badge } from "../../../../../components/ui/badge";
import { cn } from "../../../../../utils/cn";
import { useWeek5Activities, type ActivityId } from "../activitiesProgress";

interface ActivityShellProps {
  id: ActivityId;
  number: number;
  title: string;
  objective: string;
  instructions: ReactNode;
  children: ReactNode;
}

/** Consistent "lab card" chrome for every Week 5 workshop activity: number, title, objetivo, instrucciones, work area. */
export function ActivityShell({ id, number, title, objective, instructions, children }: ActivityShellProps) {
  const { isCompleted } = useWeek5Activities();
  const done = isCompleted(id);

  return (
    <div
      id={id}
      className={cn(
        "scroll-mt-24 rounded-xl border bg-surface-container-lowest p-lg space-y-md transition-colors",
        done ? "border-tertiary-fixed-dim" : "border-outline-variant",
      )}
    >
      <div className="flex items-start justify-between gap-sm flex-wrap">
        <div className="flex items-center gap-xs">
          <Badge variant={done ? "tertiary" : "secondary"}>Actividad {number}</Badge>
          {done && (
            <span className="flex items-center gap-1 text-caption font-caption font-semibold text-tertiary">
              <CheckCircle2 size={14} /> Completada
            </span>
          )}
        </div>
      </div>

      <h3 className="text-headline-md font-headline-md text-on-surface">{title}</h3>

      <p className="text-caption font-caption font-semibold uppercase tracking-wider text-primary-container">
        Objetivo: <span className="font-normal normal-case text-on-surface-variant">{objective}</span>
      </p>

      <div className="rounded-lg bg-secondary-container/30 p-sm text-body-md font-body-md text-on-surface">{instructions}</div>

      <div className="space-y-md pt-xs">{children}</div>
    </div>
  );
}
