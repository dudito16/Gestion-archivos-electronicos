import { courseUnits, courseWeeks } from "../data/courseWeeks";
import { sampleCourseProgress } from "../data/progress.data";
import type { CourseProgress, CourseUnit, Lesson, WeekModule } from "../types/course.types";

/**
 * Thin data-access layer over `src/data/courseWeeks.ts` (the Curso → Unidad → Semana catalog).
 * Pages/components should go through this service instead of importing the data file directly,
 * so the data source can change later (API, CMS, etc.) without touching UI code.
 */

export function getAllWeeks(): WeekModule[] {
  return courseWeeks;
}

export function getAllUnits(): CourseUnit[] {
  return courseUnits;
}

export function getWeekByNumber(number: number): WeekModule | undefined {
  return courseWeeks.find((week) => week.number === number);
}

export function getWeeksByUnit(unitId: number): WeekModule[] {
  return courseWeeks.filter((week) => week.unit === unitId);
}

export function getActiveWeek(): WeekModule {
  return courseWeeks.find((week) => week.status === "active") ?? courseWeeks[0];
}

export function getLesson(weekNumber: number, lessonSlug: string): Lesson | undefined {
  return getWeekByNumber(weekNumber)?.lessons.find((lesson) => lesson.slug === lessonSlug);
}

export function getCourseProgress(): CourseProgress {
  return sampleCourseProgress;
}
