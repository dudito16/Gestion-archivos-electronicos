/** Práctica Calificada 5 scores out of 20 (20 preguntas × 1 punto), so the grade equals the score, rounded to one decimal. */
export function scoreToGrade(score: number): number {
  return Math.round(score * 10) / 10;
}

export function gradeMessage(nota: number): string {
  if (nota >= 18) return "Desempeño sobresaliente: aplicas con criterio profesional los principios de ISO 15489-1 sobre gestión de documentos y evidencia.";
  if (nota >= 15) return "Buen desempeño. Sigue afinando tu criterio para relacionar los atributos del documento con los controles adecuados.";
  if (nota >= 11) return "Desempeño en desarrollo. Revisa la retroalimentación de las preguntas donde presentaste dificultades para consolidar tu análisis.";
  return "Requiere reforzamiento. Es recomendable revisar nuevamente los contenidos de la Semana 5 sobre ISO 15489-1 y gestión de documentos antes de continuar.";
}

/** Orientative performance band shown alongside the grade — never a substitute for it. */
export function gradeBand(nota: number): string {
  if (nota >= 18) return "Desempeño sobresaliente";
  if (nota >= 15) return "Buen desempeño";
  if (nota >= 11) return "Desempeño en desarrollo";
  return "Requiere reforzamiento";
}
