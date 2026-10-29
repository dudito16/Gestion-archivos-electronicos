import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

const STORAGE_KEY = "gae2.week12.actividades";

export const ACTIVITY_IDS = [
  "actividad-1",
  "actividad-2",
  "actividad-3",
  "actividad-4",
  "actividad-5",
  "actividad-6",
  "actividad-7",
  "actividad-8",
  "actividad-9",
  "actividad-10",
] as const;

export type ActivityId = (typeof ACTIVITY_IDS)[number];

interface StoredState {
  completed: Partial<Record<ActivityId, boolean>>;
  answers: Partial<Record<ActivityId, unknown>>;
}

interface Week12ActivitiesValue {
  percent: number;
  completedCount: number;
  total: number;
  isCompleted: (id: ActivityId) => boolean;
  markCompleted: (id: ActivityId) => void;
  getAnswer: <T>(id: ActivityId, fallback: T) => T;
  setAnswer: (id: ActivityId, value: unknown) => void;
}

const Week12ActivitiesContext = createContext<Week12ActivitiesValue | null>(null);

function readStored(): StoredState {
  if (typeof window === "undefined") return { completed: {}, answers: {} };
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return { completed: {}, answers: {} };
    const parsed = JSON.parse(raw) as Partial<StoredState>;
    return { completed: parsed.completed ?? {}, answers: parsed.answers ?? {} };
  } catch {
    return { completed: {}, answers: {} };
  }
}

/**
 * Local (no-backend) persistence for Week 12's 10-activity "Actividades" set — same pattern as
 * Weeks 4-11's activities labs, under its own storage key (`gae2.week12.actividades`, independent
 * from the Taller's `gae2.week12.taller`) so navigating away or reloading never loses the student's work.
 */
export function Week12ActivitiesProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<StoredState>(() => readStored());

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // localStorage unavailable — activities still work for this session.
    }
  }, [state]);

  const markCompleted = useCallback((id: ActivityId) => {
    setState((prev) => (prev.completed[id] ? prev : { ...prev, completed: { ...prev.completed, [id]: true } }));
  }, []);

  const isCompleted = useCallback((id: ActivityId) => Boolean(state.completed[id]), [state]);

  const getAnswer = useCallback(
    <T,>(id: ActivityId, fallback: T): T => (state.answers[id] as T | undefined) ?? fallback,
    [state],
  );

  const setAnswer = useCallback((id: ActivityId, value: unknown) => {
    setState((prev) => ({ ...prev, answers: { ...prev.answers, [id]: value } }));
  }, []);

  const completedCount = useMemo(() => ACTIVITY_IDS.filter((id) => state.completed[id]).length, [state]);

  const value = useMemo<Week12ActivitiesValue>(
    () => ({
      percent: Math.round((completedCount / ACTIVITY_IDS.length) * 100),
      completedCount,
      total: ACTIVITY_IDS.length,
      isCompleted,
      markCompleted,
      getAnswer,
      setAnswer,
    }),
    [completedCount, isCompleted, markCompleted, getAnswer, setAnswer],
  );

  return <Week12ActivitiesContext.Provider value={value}>{children}</Week12ActivitiesContext.Provider>;
}

export function useWeek12Activities() {
  const ctx = useContext(Week12ActivitiesContext);
  if (!ctx) throw new Error("useWeek12Activities must be used within Week12ActivitiesProvider");
  return ctx;
}
