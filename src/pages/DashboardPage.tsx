import { HeroSection } from "../components/course/HeroSection";
import { ModuleGrid } from "../components/course/ModuleGrid";
import { NextSessionCard } from "../components/course/NextSessionCard";
import { ProgressCard } from "../components/course/ProgressCard";
import { UnitsOverview } from "../components/course/UnitsOverview";
import { courseInfo } from "../data/course.data";
import { useCourseData } from "../hooks/useCourseData";

/** Course landing/syllabus screen — the exact "Dashboard" view from the Stitch design. */
export function DashboardPage() {
  const { activeWeek, progress, units, weeks } = useCourseData();

  return (
    <>
      <HeroSection course={courseInfo} activeWeek={activeWeek} totalWeeks={weeks.length} />

      <section className="grid grid-cols-1 md:grid-cols-12 gap-md md:gap-lg">
        <ProgressCard progress={progress} activeWeek={activeWeek} totalWeeks={weeks.length} />
        <NextSessionCard week={activeWeek} />
      </section>

      <UnitsOverview units={units} />

      <ModuleGrid units={units} weeks={weeks} />
    </>
  );
}
