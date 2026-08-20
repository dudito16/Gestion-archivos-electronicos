import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

const STORAGE_KEY = "gae2.week1.progress";

/** One entry per gradable/trackable milestone in the Week 1 module (content read, activity done, quiz done). */
const MILESTONES = [
  "activacion",
  "actividad-clasificacion",
  "caso-interactivo",
  "que-falta",
  "detecta-problemas",
  "debate",
  "caso-integrador",
  "quiz",
] as const;

type Milestone = (typeof MILESTONES)[number];

interface Week01ProgressValue {
  percent: number;
  completedCount: number;
  total: number;
  isComplete: (milestone: Milestone) => boolean;
  markComplete: (milestone: Milestone) => void;
}

const Week01ProgressContext = createContext<Week01ProgressValue | null>(null);

function readStored(): Milestone[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((id): id is Milestone => MILESTONES.includes(id)) : [];
  } catch {
    return [];
  }
}

/**
 * Local (no-backend) progress tracker for the Week 1 module — persists to localStorage so the
 * learner's progress bar survives a refresh. Scoped to this week only; not wired to any server.
 */
export function Week01ProgressProvider({ children }: { children: ReactNode }) {
  const [completed, setCompleted] = useState<Set<Milestone>>(() => new Set(readStored()));

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify([...completed]));
  }, [completed]);

  const markComplete = useCallback((milestone: Milestone) => {
    setCompleted((prev) => (prev.has(milestone) ? prev : new Set(prev).add(milestone)));
  }, []);

  const isComplete = useCallback((milestone: Milestone) => completed.has(milestone), [completed]);

  const value = useMemo<Week01ProgressValue>(
    () => ({
      percent: Math.round((completed.size / MILESTONES.length) * 100),
      completedCount: completed.size,
      total: MILESTONES.length,
      isComplete,
      markComplete,
    }),
    [completed, isComplete, markComplete],
  );

  return <Week01ProgressContext.Provider value={value}>{children}</Week01ProgressContext.Provider>;
}

export function useWeek01Progress() {
  const ctx = useContext(Week01ProgressContext);
  if (!ctx) throw new Error("useWeek01Progress must be used within Week01ProgressProvider");
  return ctx;
}
