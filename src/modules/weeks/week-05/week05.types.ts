/** Content types specific to the Week 5 interactive module (scoped here, not in the global domain model). */

export interface ObjectiveCard {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export type RequirementId = "autenticidad" | "fiabilidad" | "integridad" | "disponibilidad";

export interface RequirementInfo {
  id: RequirementId;
  label: string;
  icon: string;
  question: string;
  definition: string;
  purpose: string;
  example: string;
  risk: string;
}

export interface SummaryPoint {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface DecisionStep {
  id: string;
  scenario: string;
  prompt: string;
  options: { id: string; label: string }[];
  bestId: string;
  feedback: string;
}
