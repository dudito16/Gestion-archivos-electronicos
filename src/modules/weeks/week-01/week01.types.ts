/** Content types specific to the Week 1 interactive module (scoped here, not in the global domain model). */

import type { FlowStep, TimelineStep } from "../../../types/content.types";

export type { FlowStep, TimelineStep };

export interface ObjectiveCard {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ConceptNode {
  id: string;
  label: string;
  icon: string;
  definition: string;
  importance: string;
  example: string;
}

export interface ScopeStage {
  id: string;
  order: number;
  title: string;
  whatHappens: string;
  who: string[];
  documents: string[];
  metadata: string[];
}

export interface RelationItem {
  id: string;
  text: string;
}

export interface ElectronicDocumentInfo {
  definition: string;
  characteristics: string[];
  elements: string[];
  legalValue: string;
  normativa: string[];
  useCases: string[];
  agnFlow: FlowStep[];
}

export interface DigitalExample {
  id: string;
  format: string;
  icon: string;
  description: string;
}

export interface DigitizationInfo {
  flow: FlowStep[];
  advantages: string[];
  limitations: string[];
  whenValid: string;
}

export interface ElectronicFileDoc {
  id: string;
  title: string;
  icon: string;
  note: string;
}

export interface ComparisonRow {
  criterion: string;
  values: [string, string, string, string];
}

export interface AGNCaseStep {
  id: string;
  order: number;
  actor: string;
  document: string;
  action: string;
  result: string;
  time: string;
}

export type ClassificationCategory = "electronico" | "digital" | "digitalizado" | "expediente";

export interface ClassificationItem {
  id: string;
  label: string;
  icon: string;
  correctCategory: ClassificationCategory;
  feedback: string;
}

export interface InstantQuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface ResourceCard {
  id: string;
  title: string;
  badge: string;
  summary: string;
}

export interface SummaryPoint {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface DragDropItem {
  id: string;
  label: string;
  icon: string;
  category: ClassificationCategory;
}

export interface DragDropCategory {
  id: ClassificationCategory;
  label: string;
  icon: string;
}
