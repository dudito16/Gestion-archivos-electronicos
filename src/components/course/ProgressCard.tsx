import { CheckCircle2, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import { CircularProgress, Progress } from "../ui/progress";
import type { CourseProgress, WeekModule } from "../../types/course.types";

interface ProgressCardProps {
  progress: CourseProgress;
  activeWeek: WeekModule;
  totalWeeks: number;
}

/** "Mi Progreso" panel: circular ring, "Semana X de N" progress bar, and modules/hours summary. */
export function ProgressCard({ progress, activeWeek, totalWeeks }: ProgressCardProps) {
  return (
    <Card className="md:col-span-4 p-lg flex flex-col justify-between">
      <div>
        <CardTitle className="mb-sm">Mi Progreso</CardTitle>
        <CardDescription className="mb-xs">Avance del curso actual.</CardDescription>
        <div className="mb-lg">
          <div className="flex items-center justify-between text-caption font-caption text-on-surface-variant mb-1">
            <span>
              Semana {activeWeek.number} de {totalWeeks}
            </span>
          </div>
          <Progress value={(activeWeek.number / totalWeeks) * 100} />
        </div>
      </div>
      <CardContent className="flex items-center gap-md p-0">
        <CircularProgress value={progress.percent} />
        <div className="flex flex-col gap-xs">
          <div className="flex items-center gap-xs">
            <CheckCircle2 className="text-primary-container" size={20} />
            <span className="text-label-md font-label-md text-on-surface">
              {progress.completedModules}/{progress.totalModules} Módulos
            </span>
          </div>
          <div className="flex items-center gap-xs">
            <Clock className="text-outline" size={20} />
            <span className="text-label-md font-label-md text-on-surface-variant">
              {progress.hoursRemaining} hrs restantes
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
