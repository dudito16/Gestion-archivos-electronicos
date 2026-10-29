/** Content shapes specific to Week 12 — "Modelo OAIS: ISO 14721:2025, entidades funcionales y paquetes de información". */

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

export interface OaisEntity {
  id: string;
  label: string;
  englishName: string;
  definition: string;
  mainFunction: string;
  activities: string[];
  managedInfo: string;
  relation: string;
  example: string;
  poorManagementConsequence: string;
}

export interface ExternalActor {
  id: string;
  label: string;
  description: string;
}

export interface InformationPackage {
  id: "sip" | "aip" | "dip";
  fullName: string;
  acronym: string;
  definition: string;
  purpose: string;
  elements: string[];
  relation: string;
  example: string;
}

export interface ComparisonModel {
  id: string;
  label: string;
  description: string;
}

export interface CaseQuestion {
  id: string;
  prompt: string;
}

export interface ReferenceItem {
  id: string;
  label: string;
  url: string;
  note: string;
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
