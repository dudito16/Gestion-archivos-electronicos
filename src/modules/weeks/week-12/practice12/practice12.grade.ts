/** Práctica Calificada 12 scores out of 20 (10 preguntas × 2 puntos), so the grade equals the score, rounded to one decimal. */
export function scoreToGrade(score: number): number {
  return Math.round(score * 10) / 10;
}

export function gradeMessage(nota: number): string {
  if (nota >= 18) return "Desempeño sobresaliente: comprendes con criterio profesional el modelo OAIS, sus entidades funcionales y los paquetes SIP, AIP y DIP.";
  if (nota >= 15) return "Buen desempeño. Sigue afinando tu criterio para diferenciar las entidades funcionales y los paquetes de información.";
  if (nota >= 11) return "Desempeño en desarrollo. Revisa la retroalimentación de las preguntas donde presentaste dificultades para consolidar tu análisis.";
  return "Requiere reforzamiento. Es recomendable revisar nuevamente los contenidos de la Semana 12 sobre el modelo OAIS antes de continuar.";
}

/** Orientative performance band shown alongside the grade — never a substitute for it. */
export function gradeBand(nota: number): string {
  if (nota >= 18) return "Desempeño sobresaliente";
  if (nota >= 15) return "Buen desempeño";
  if (nota >= 11) return "Desempeño en desarrollo";
  return "Requiere reforzamiento";
}
