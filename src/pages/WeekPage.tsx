import { ArrowLeft, ArrowRight, Lock } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Breadcrumb } from "../components/common/Breadcrumb";
import { WeekHeader } from "../components/course/WeekHeader";
import { LessonContent } from "../components/course/LessonContent";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { useWeek } from "../hooks/useCourseData";
import { getIcon } from "../utils/getIcon";

/** Week overview + lesson detail screen, reached from the sidebar or a week card. */
export function WeekPage() {
  const { weekNumber, lessonSlug } = useParams<{ weekNumber: string; lessonSlug?: string }>();
  const week = useWeek(Number(weekNumber));

  if (!week) {
    return <Navigate to="/404" replace />;
  }

  if (week.status === "upcoming") {
    return (
      <div className="space-y-md">
        <Breadcrumb items={[{ label: "Syllabus", to: "/" }, { label: `Semana ${week.number}` }]} />
        <Card className="p-xl flex flex-col items-center text-center gap-sm">
          <Lock className="text-outline" size={40} />
          <WeekHeader week={week} className="[&_*]:justify-center" />
          <p className="text-body-md font-body-md text-on-surface-variant max-w-[28rem]">
            Este módulo aún no está disponible. Se desbloqueará al completar las semanas anteriores.
          </p>
          <Button asChild size="sm" variant="secondary">
            <Link to="/">Volver al Syllabus</Link>
          </Button>
        </Card>
      </div>
    );
  }

  const lesson = lessonSlug ? week.lessons.find((l) => l.slug === lessonSlug) : week.lessons[0];

  if (!lesson) {
    return <Navigate to="/404" replace />;
  }

  if (!lessonSlug) {
    return <Navigate to={`/semana/${week.number}/${lesson.slug}`} replace />;
  }

  const currentIndex = week.lessons.findIndex((l) => l.slug === lesson.slug);
  const prevLesson = week.lessons[currentIndex - 1];
  const nextLesson = week.lessons[currentIndex + 1];
  const LessonIcon = getIcon(lesson.icon);

  return (
    <div className="space-y-md">
      <Breadcrumb
        items={[
          { label: "Syllabus", to: "/" },
          { label: `Semana ${week.number}`, to: `/semana/${week.number}` },
          { label: lesson.title },
        ]}
      />

      <WeekHeader week={week} />

      <Card className="p-lg">
        <div className="flex items-center gap-xs mb-sm">
          <LessonIcon className="text-primary-container" size={24} />
          <h2 className="text-headline-lg font-headline-lg text-on-surface">{lesson.title}</h2>
        </div>

        {lesson.content ? (
          <LessonContent blocks={lesson.content} />
        ) : (
          <p className="text-body-md font-body-md text-on-surface-variant">
            Contenido de esta lección en desarrollo. Se publicará cuando corresponda avanzar a la Semana {week.number}.
          </p>
        )}
      </Card>

      <div className="flex justify-between gap-sm">
        {prevLesson ? (
          <Button asChild variant="secondary" size="sm">
            <Link to={`/semana/${week.number}/${prevLesson.slug}`}>
              <ArrowLeft size={16} />
              {prevLesson.title}
            </Link>
          </Button>
        ) : (
          <span />
        )}
        {nextLesson && (
          <Button asChild size="sm">
            <Link to={`/semana/${week.number}/${nextLesson.slug}`}>
              {nextLesson.title}
              <ArrowRight size={16} />
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
}
