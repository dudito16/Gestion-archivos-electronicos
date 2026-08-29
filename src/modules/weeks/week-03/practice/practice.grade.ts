/** §27: nota = puntaje * 0.20, sobre 20, con un decimal. */
export function scoreToGrade(score: number): number {
  return Math.round(score * 0.2 * 10) / 10;
}

/** §26: mensaje según el resultado. */
export function gradeMessage(nota: number): string {
  if (nota >= 18) return "Excelente desempeño.";
  if (nota >= 14) return "Buen desempeño. Continúa fortaleciendo tu criterio documental.";
  if (nota >= 11) return "Resultado aprobado. Revisa los temas donde presentaste dificultades.";
  return "Es recomendable revisar nuevamente los contenidos de la Semana 3.";
}
