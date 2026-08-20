import type { CourseProgress } from "../types/course.types";

/**
 * Sample learner progress snapshot (1/18 weeks started). Replace with a real
 * progress service once user accounts/tracking exist.
 */
export const sampleCourseProgress: CourseProgress = {
  completedModules: 1,
  totalModules: 18,
  hoursRemaining: 45,
  percent: Math.round((1 / 18) * 100),
};
