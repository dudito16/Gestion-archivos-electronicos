/** Content shapes specific to Week 11 — "Preservación digital: fundamentos, estrategias y planificación". */

export interface HeroStep {
  id: string;
  label: string;
  icon: string;
}

export interface LearningOutcome {
  id: string;
  label: string;
  icon: string;
}

export interface PriorKnowledgeQuestion {
  id: string;
  prompt: string;
  options: { id: string; label: string }[];
  correctId: string;
  feedback: string;
}

export interface RelationStage {
  id: string;
  label: string;
  description: string;
}

export interface PreservationRisk {
  id: string;
  label: string;
  consequence: string;
  measure: string;
}

export interface PolicyComponent {
  id: string;
  label: string;
  description: string;
}

export interface PlanComponent {
  id: string;
  label: string;
  description: string;
}

export interface StrategyInfo {
  id: "migracion" | "normalizacion" | "emulacion";
  label: string;
  definition: string;
  objective: string;
  whenToUse: string;
  advantages: string[];
  risks: string[];
  example: string;
  controls: string[];
}

export interface StrategyCase {
  id: string;
  scenario: string;
  recommendedStrategies: ("migracion" | "normalizacion" | "emulacion")[];
  reason: string;
}

export interface InstitutionalCaseQuestion {
  id: string;
  prompt: string;
}

export interface SummaryPoint {
  id: string;
  label: string;
  icon: string;
}

export interface WeekConnectionStep {
  id: string;
  label: string;
}
