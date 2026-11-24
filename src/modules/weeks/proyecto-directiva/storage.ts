/** Storage keys and helpers for the Semanas 16-17 project (see `projectStore.tsx`). */

export const WEEK16_STORAGE_KEY = "gae2.week16.proyectoDirectiva";
export const WEEK17_STORAGE_KEY = "gae2.week17.proyectoDirectiva";
export const BITACORA_STORAGE_KEY = "gae2.proyectoDirectiva.bitacora";

export interface MatrixRow {
  id: string;
  problema: string;
  causa: string;
  consecuencia: string;
  evidencia: string;
  medida: string;
}

export function readJson<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return fallback;
    return { ...fallback, ...(JSON.parse(raw) as Partial<T>) };
  } catch {
    return fallback;
  }
}

export function writeJson(key: string, value: unknown) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // localStorage unavailable — the page keeps working for this session.
  }
}

export function newId() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
}
