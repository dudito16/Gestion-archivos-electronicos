import type { Lesson, WeekModule, WeekStatus } from "../../types/course.types";

/** Default lesson set for a week whose content hasn't been authored yet — just enough for navigation to work. */
export function defaultLessons(): Lesson[] {
  return [{ id: "introduccion", slug: "introduccion", title: "Introducción", icon: "BookOpen", type: "reading" }];
}

interface CreateWeekModuleInput {
  number: number;
  unit: number;
  title: string;
  shortTitle: string;
  description: string;
  dates: string;
  status?: WeekStatus;
  progressPercent?: number;
  durationHours?: number;
  lessons?: Lesson[];
}

/**
 * Factory used to declare a new week module. To add a week's real content once it's authored,
 * call this with its own `lessons` list, following the pattern in `week-01/week01.data.ts`.
 * Nothing else needs to change — routing, the sidebar tree and the dashboard grid all derive
 * from `src/data/courseWeeks.ts`.
 */
export function createWeekModule(input: CreateWeekModuleInput): WeekModule {
  const slug = `semana-${String(input.number).padStart(2, "0")}`;
  return {
    number: input.number,
    unit: input.unit,
    slug,
    title: input.title,
    shortTitle: input.shortTitle,
    description: input.description,
    dates: input.dates,
    status: input.status ?? "upcoming",
    progressPercent: input.progressPercent ?? 0,
    durationHours: input.durationHours ?? 6,
    lessons: input.lessons ?? defaultLessons(),
  };
}
