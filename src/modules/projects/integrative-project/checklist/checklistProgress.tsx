import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { checklistItems, modeloReviewChecklist } from "../integrativeProject.data";

const STORAGE_KEY = "gae2.proyectoIntegrador.checklist";
const allItems = [...checklistItems, ...modeloReviewChecklist];

interface ChecklistValue {
  checkedCount: number;
  total: number;
  isChecked: (id: string) => boolean;
  toggle: (id: string) => void;
}

const ChecklistContext = createContext<ChecklistValue | null>(null);

function readStored(): Record<string, boolean> {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw) as Record<string, boolean>;
  } catch {
    return {};
  }
}

/** Local (no-backend) persistence for the team's final checklist — its own storage key, independent of every week's activities/taller/práctica keys. */
export function ChecklistProvider({ children }: { children: ReactNode }) {
  const [checked, setChecked] = useState<Record<string, boolean>>(() => readStored());

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(checked));
    } catch {
      // localStorage unavailable — the checklist still works for this session.
    }
  }, [checked]);

  const isChecked = useCallback((id: string) => Boolean(checked[id]), [checked]);

  const toggle = useCallback((id: string) => {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const checkedCount = useMemo(() => allItems.filter((item) => checked[item.id]).length, [checked]);

  const value = useMemo<ChecklistValue>(
    () => ({ checkedCount, total: allItems.length, isChecked, toggle }),
    [checkedCount, isChecked, toggle],
  );

  return <ChecklistContext.Provider value={value}>{children}</ChecklistContext.Provider>;
}

export function useChecklist() {
  const ctx = useContext(ChecklistContext);
  if (!ctx) throw new Error("useChecklist must be used within ChecklistProvider");
  return ctx;
}
