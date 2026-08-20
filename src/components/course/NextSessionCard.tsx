import { Download, PlayCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import type { WeekModule } from "../../types/course.types";

interface NextSessionCardProps {
  week: WeekModule;
}

/** "Próxima Sesión" highlight card pointing at the learner's active week. */
export function NextSessionCard({ week }: NextSessionCardProps) {
  const firstLesson = week.lessons[0];

  return (
    <Card className="md:col-span-8 p-lg border-l-4 border-primary-container flex flex-col justify-center relative overflow-hidden">
      <div className="absolute right-0 top-0 w-32 h-32 bg-primary-container opacity-5 rounded-bl-full -z-10" />
      <span className="text-label-md font-label-md text-primary-container font-semibold mb-xs uppercase tracking-wider">
        Próxima Sesión
      </span>
      <h2 className="text-headline-lg font-headline-lg text-on-surface mb-sm">
        Semana {week.number}: {week.title}
      </h2>
      <p className="text-body-md font-body-md text-on-surface-variant mb-md max-w-[36rem]">{week.description}</p>
      <div className="flex flex-wrap gap-sm">
        <Button asChild size="sm">
          <Link to={firstLesson ? `/semana/${week.number}/${firstLesson.slug}` : `/semana/${week.number}`}>
            <PlayCircle size={18} />
            Iniciar Módulo
          </Link>
        </Button>
        <Button variant="secondary" size="sm">
          <Download size={18} />
          Materiales
        </Button>
      </div>
    </Card>
  );
}
