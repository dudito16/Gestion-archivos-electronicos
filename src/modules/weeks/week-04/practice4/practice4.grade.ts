/** Práctica Calificada 4 already scores out of 20 (20 questions × 1 punto), so unlike Week 3 (100 → ×0.2), the grade equals the score. */
export function scoreToGrade(score: number): number {
  return Math.round(score * 10) / 10;
}

export function gradeMessage(nota: number): string {
  if (nota >= 18) return "Excelente desempeño: aplicas con criterio profesional los conceptos de metadatos trabajados en la Semana 4.";
  if (nota >= 14) return "Buen desempeño. Sigue afinando tu criterio para seleccionar y justificar metadatos.";
  if (nota >= 11) return "Resultado aprobado. Revisa la retroalimentación de las preguntas donde presentaste dificultades.";
  return "Es recomendable revisar nuevamente los contenidos de la Semana 4 sobre metadatos antes de continuar.";
}
