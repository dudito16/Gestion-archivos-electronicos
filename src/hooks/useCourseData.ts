import { useMemo } from "react";
import {
  getActiveWeek,
  getAllUnits,
  getAllWeeks,
  getCourseProgress,
  getWeekByNumber,
  getWeeksByUnit,
} from "../services/courseService";

/** Read-only access to the course catalog for components/pages. */
export function useCourseData() {
  const weeks = useMemo(() => getAllWeeks(), []);
  const units = useMemo(() => getAllUnits(), []);
  const activeWeek = useMemo(() => getActiveWeek(), []);
  const progress = useMemo(() => getCourseProgress(), []);

  return { weeks, units, activeWeek, progress };
}

/** Look up a single week by its route param, memoized per number. */
export function useWeek(weekNumber: number | undefined) {
  return useMemo(() => (weekNumber ? getWeekByNumber(weekNumber) : undefined), [weekNumber]);
}

/** All weeks belonging to one unit, memoized per unit id. */
export function useWeeksByUnit(unitId: number) {
  return useMemo(() => getWeeksByUnit(unitId), [unitId]);
}
