/**
 * Core domain types for the course portal.
 * These types describe the shape of course content independent of how
 * it is fetched or rendered, so pages/components stay decoupled from data source.
 */

export type WeekStatus = "active" | "upcoming" | "completed";

export type LessonType = "reading" | "video" | "quiz";

/** A single navigable item inside a week module (e.g. "Introduction", "Quiz"). */
export interface Lesson {
  id: string;
  /** URL-friendly identifier, unique within its parent week. */
  slug: string;
  title: string;
  /** Lucide icon name rendered in the sidebar/nav. */
  icon: string;
  type: LessonType;
  /** Example/placeholder content blocks rendered on the lesson page. */
  content?: LessonContentBlock[];
}

export type LessonContentBlock =
  | { kind: "paragraph"; text: string }
  | { kind: "callout"; variant: "info" | "warning" | "success"; title: string; text: string }
  | { kind: "timeline"; items: TimelineItem[] }
  | { kind: "diagram"; title: string; steps: string[] }
  | { kind: "quiz"; quiz: QuizData };

export interface TimelineItem {
  id: string;
  title: string;
  description: string;
  date?: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctOptionIndex: number;
}

export interface QuizData {
  id: string;
  title: string;
  questions: QuizQuestion[];
}

/** A full course week — the top-level unit of course growth. */
export interface WeekModule {
  number: number;
  /** 1, 2 or 3 — which `CourseUnit` this week belongs to. */
  unit: number;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  /** Human-readable session date range, e.g. "12 y 14 de agosto de 2026". */
  dates: string;
  status: WeekStatus;
  progressPercent: number;
  durationHours: number;
  lessons: Lesson[];
}

/** One of the course's three units — the level above weeks in the Curso → Unidad → Semana hierarchy. */
export interface CourseUnit {
  id: number;
  title: string;
  subtitle: string;
  /** Inclusive [first, last] week number covered by this unit. */
  weekRange: [number, number];
  status: WeekStatus;
}

export interface CourseProgress {
  completedModules: number;
  totalModules: number;
  hoursRemaining: number;
  percent: number;
}

export interface CourseInfo {
  title: string;
  institution: string;
  school: string;
  instructor: string;
  description: string;
  heroImageAlt: string;
  heroImageSrc: string;
}
