import { MAX_SCORE_14 } from "./practice14.data";

/**
 * Evaluación final scores out of 30 (15 preguntas × 2 puntos), unlike other weeks' practices
 * (20 puntos). To keep the institutional "Nota (sobre 20)" convention consistent across the course,
 * the raw score is rescaled proportionally rather than shown as-is.
 */
export function scoreToGrade(score: number): number {
  return Math.round((score / MAX_SCORE_14) * 20 * 10) / 10;
}

export function gradeMessage(nota: number): string {
  if (nota >= 18) return "Desempeño sobresaliente: comprendes con criterio profesional qué hace confiable a un repositorio digital y cómo se evalúa conforme a ISO 16363:2025.";
  if (nota >= 15) return "Buen desempeño. Sigue afinando tu criterio para diferenciar las características de confiabilidad y los ámbitos de evaluación.";
  if (nota >= 11) return "Desempeño en desarrollo. Revisa la retroalimentación de las preguntas donde presentaste dificultades para consolidar tu análisis.";
  return "Requiere reforzamiento. Es recomendable revisar nuevamente los contenidos de la Semana 14 sobre repositorios digitales confiables antes de continuar.";
}

/** Orientative performance band shown alongside the grade — never a substitute for it. */
export function gradeBand(nota: number): string {
  if (nota >= 18) return "Desempeño sobresaliente";
  if (nota >= 15) return "Buen desempeño";
  if (nota >= 11) return "Desempeño en desarrollo";
  return "Requiere reforzamiento";
}
