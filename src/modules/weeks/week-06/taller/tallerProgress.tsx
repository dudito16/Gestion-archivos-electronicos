import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

const STORAGE_KEY = "gae2.week6.taller";

export const TALLER_ACTIVITY_IDS = [
  "taller-1",
  "taller-2",
  "taller-3",
  "taller-4",
  "taller-5",
  "taller-6",
  "taller-7",
  "taller-8",
  "taller-9",
  "taller-10",
] as const;

export type TallerActivityId = (typeof TALLER_ACTIVITY_IDS)[number];

interface StoredState {
  completed: Partial<Record<TallerActivityId, boolean>>;
  answers: Partial<Record<TallerActivityId, unknown>>;
}

interface Week6TallerValue {
  percent: number;
  completedCount: number;
  total: number;
  isCompleted: (id: TallerActivityId) => boolean;
  markCompleted: (id: TallerActivityId) => void;
  getAnswer: <T>(id: TallerActivityId, fallback: T) => T;
  setAnswer: (id: TallerActivityId, value: unknown) => void;
}

const Week6TallerContext = createContext<Week6TallerValue | null>(null);

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
 * Local (no-backend) persistence for Week 6's "Taller" — 10 deeper, formative exercises — under its
 * own storage key (`gae2.week6.taller`), independent from the "Actividades" pool's
 * `gae2.week6.actividades` and from Practice 6's `gae2.week6.practica6`.
 */
export function Week6TallerProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<StoredState>(() => readStored());

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // localStorage unavailable — the workshop still works for this session.
    }
  }, [state]);

  const markCompleted = useCallback((id: TallerActivityId) => {
    setState((prev) => (prev.completed[id] ? prev : { ...prev, completed: { ...prev.completed, [id]: true } }));
  }, []);

  const isCompleted = useCallback((id: TallerActivityId) => Boolean(state.completed[id]), [state]);

  const getAnswer = useCallback(
    <T,>(id: TallerActivityId, fallback: T): T => (state.answers[id] as T | undefined) ?? fallback,
    [state],
  );

  const setAnswer = useCallback((id: TallerActivityId, value: unknown) => {
    setState((prev) => ({ ...prev, answers: { ...prev.answers, [id]: value } }));
  }, []);

  const completedCount = useMemo(() => TALLER_ACTIVITY_IDS.filter((id) => state.completed[id]).length, [state]);

  const value = useMemo<Week6TallerValue>(
    () => ({
      percent: Math.round((completedCount / TALLER_ACTIVITY_IDS.length) * 100),
      completedCount,
      total: TALLER_ACTIVITY_IDS.length,
      isCompleted,
      markCompleted,
      getAnswer,
      setAnswer,
    }),
    [completedCount, isCompleted, markCompleted, getAnswer, setAnswer],
  );

  return <Week6TallerContext.Provider value={value}>{children}</Week6TallerContext.Provider>;
}

export function useWeek6Taller() {
  const ctx = useContext(Week6TallerContext);
  if (!ctx) throw new Error("useWeek6Taller must be used within Week6TallerProvider");
  return ctx;
}
