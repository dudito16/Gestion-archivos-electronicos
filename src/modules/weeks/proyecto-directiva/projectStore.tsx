import { readJson, writeJson, type MatrixRow } from "./storage";
import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

/**
 * Local (no-backend) persistence for the Semanas 16-17 project "Directiva institucional de preservación
 * digital". Same Context + localStorage pattern used by Weeks 4-14 (activities, taller, checklist), but
 * every instance lives under its own key, so it never reads nor overwrites earlier weeks' records:
 *
 *  - `gae2.week16.proyectoDirectiva` — Semana 16 (fases revisadas, reflexiones, matriz, entregables).
 *  - `gae2.week17.proyectoDirectiva` — Semana 17 (fases revisadas, notas, preguntas, entregables).
 *  - `gae2.proyectoDirectiva.bitacora` — bitácora de investigación y uso de IA, shared by both weeks
 *    because it documents one continuous research process (see `ResearchLog.tsx`).
 *
 * Nothing here is graded automatically: it only lets the team see what they reviewed and what is missing.
 */

interface StoredState {
  reviewed: Record<string, boolean>;
  checked: Record<string, boolean>;
  notes: Record<string, string>;
  matrix: MatrixRow[];
}

const emptyState: StoredState = { reviewed: {}, checked: {}, notes: {}, matrix: [] };

interface ProjectStoreValue {
  isReviewed: (id: string) => boolean;
  toggleReviewed: (id: string) => void;
  reviewedCount: (ids: readonly string[]) => number;
  isChecked: (id: string) => boolean;
  toggleChecked: (id: string) => void;
  checkedCount: (ids: readonly string[]) => number;
  getNote: (id: string) => string;
  setNote: (id: string, value: string) => void;
  matrix: MatrixRow[];
  setMatrix: (rows: MatrixRow[]) => void;
}

const ProjectStoreContext = createContext<ProjectStoreValue | null>(null);

export function ProjectStoreProvider({ storageKey, children }: { storageKey: string; children: ReactNode }) {
  const [state, setState] = useState<StoredState>(() => readJson(storageKey, emptyState));

  useEffect(() => {
    writeJson(storageKey, state);
  }, [storageKey, state]);

  const isReviewed = useCallback((id: string) => Boolean(state.reviewed[id]), [state]);
  const toggleReviewed = useCallback((id: string) => {
    setState((prev) => ({ ...prev, reviewed: { ...prev.reviewed, [id]: !prev.reviewed[id] } }));
  }, []);
  const reviewedCount = useCallback((ids: readonly string[]) => ids.filter((id) => state.reviewed[id]).length, [state]);

  const isChecked = useCallback((id: string) => Boolean(state.checked[id]), [state]);
  const toggleChecked = useCallback((id: string) => {
    setState((prev) => ({ ...prev, checked: { ...prev.checked, [id]: !prev.checked[id] } }));
  }, []);
  const checkedCount = useCallback((ids: readonly string[]) => ids.filter((id) => state.checked[id]).length, [state]);

  const getNote = useCallback((id: string) => state.notes[id] ?? "", [state]);
  const setNote = useCallback((id: string, value: string) => {
    setState((prev) => ({ ...prev, notes: { ...prev.notes, [id]: value } }));
  }, []);

  const setMatrix = useCallback((rows: MatrixRow[]) => setState((prev) => ({ ...prev, matrix: rows })), []);

  const value = useMemo<ProjectStoreValue>(
    () => ({
      isReviewed,
      toggleReviewed,
      reviewedCount,
      isChecked,
      toggleChecked,
      checkedCount,
      getNote,
      setNote,
      matrix: state.matrix,
      setMatrix,
    }),
    [isReviewed, toggleReviewed, reviewedCount, isChecked, toggleChecked, checkedCount, getNote, setNote, state.matrix, setMatrix],
  );

  return <ProjectStoreContext.Provider value={value}>{children}</ProjectStoreContext.Provider>;
}

export function useProjectStore() {
  const ctx = useContext(ProjectStoreContext);
  if (!ctx) throw new Error("useProjectStore must be used within ProjectStoreProvider");
  return ctx;
}

