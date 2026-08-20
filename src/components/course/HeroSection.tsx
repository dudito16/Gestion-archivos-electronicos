import { UserRound } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import type { CourseInfo, WeekModule } from "../../types/course.types";

interface HeroSectionProps {
  course: CourseInfo;
  activeWeek: WeekModule;
  totalWeeks: number;
}

/** Course hero banner: title, instructor, description and CTA. */
export function HeroSection({ course, activeWeek, totalWeeks }: HeroSectionProps) {
  const firstLesson = activeWeek.lessons[0];

  return (
    <section className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col md:flex-row items-center p-lg gap-lg transition-theme">
      <div className="flex-1 space-y-md">
        <div className="inline-block px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed text-caption font-caption rounded-full font-medium">
          Semana {activeWeek.number} de {totalWeeks}
        </div>
        <h1 className="text-display-lg font-display-lg text-on-surface">{course.title}</h1>
        <div className="flex items-center gap-sm">
          <UserRound className="text-primary-container" size={22} />
          <p className="text-body-lg font-body-lg text-on-surface-variant">{course.instructor}</p>
        </div>
        <p className="text-body-md font-body-md text-on-surface-variant max-w-2xl">{course.description}</p>
        <Button asChild>
          <Link to={firstLesson ? `/semana/${activeWeek.number}/${firstLesson.slug}` : `/semana/${activeWeek.number}`}>
            Continuar Aprendizaje
          </Link>
        </Button>
      </div>
      <div className="w-full md:w-1/3 aspect-square max-w-[24rem] rounded-lg overflow-hidden border border-surface-container bg-surface-container-low flex items-center justify-center">
        <img alt={course.heroImageAlt} className="w-full h-full object-cover" src={course.heroImageSrc} />
      </div>
    </section>
  );
}
