/** Práctica Calificada 6 scores out of 20 (20 preguntas × 1 punto), so the grade equals the score, rounded to one decimal. */
export function scoreToGrade(score: number): number {
  return Math.round(score * 10) / 10;
}

export function gradeMessage(nota: number): string {
  if (nota >= 18) return "Desempeño sobresaliente: aplicas con criterio profesional los conceptos de firma digital, certificados, validación y trazabilidad.";
  if (nota >= 15) return "Buen desempeño. Sigue afinando tu criterio para diferenciar verificación de validación y sostener la trazabilidad.";
  if (nota >= 11) return "Desempeño en desarrollo. Revisa la retroalimentación de las preguntas donde presentaste dificultades para consolidar tu análisis.";
  return "Requiere reforzamiento. Es recomendable revisar nuevamente los contenidos de la Semana 6 sobre firma, certificados y trazabilidad antes de continuar.";
}

/** Orientative performance band shown alongside the grade — never a substitute for it. */
export function gradeBand(nota: number): string {
  if (nota >= 18) return "Desempeño sobresaliente";
  if (nota >= 15) return "Buen desempeño";
  if (nota >= 11) return "Desempeño en desarrollo";
  return "Requiere reforzamiento";
}
