/** Content shapes specific to Week 14 — "Repositorios digitales confiables: ISO 16363:2025". */

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

export interface StorageTier {
  id: string;
  label: string;
  description: string;
}

export interface ReliabilityCharacteristic {
  id: string;
  label: string;
  icon: string;
  definition: string;
  importance: string;
  example: string;
  risk: string;
  control: string;
}

export interface AuditScope {
  id: string;
  letter: string;
  label: string;
  items: string[];
  description: string;
}

export interface ArchitectureComponent {
  id: string;
  order: number;
  label: string;
  icon: string;
  does: string;
  receives: string;
  produces: string;
  risksControlled: string;
}

export interface StorageStrategy {
  id: string;
  label: string;
  description: string;
}

export interface SecurityScenario {
  id: string;
  scenario: string;
  riskOptions: { id: string; label: string }[];
  correctRiskId: string;
  controlOptions: { id: string; label: string }[];
  correctControlId: string;
  feedback: string;
}

export interface TransferCriterion {
  id: string;
  label: string;
  relatedStandard?: string;
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

export interface AuditMatrixRow {
  id: string;
  scope: string;
  situation: string;
  evidence: string;
  riskOptions: { id: string; label: string }[];
  correctRiskId: string;
  complianceOptions: { id: string; label: string }[];
  correctComplianceId: string;
  recommendation: string;
}

export interface TallerDimension {
  id: string;
  label: string;
  icon: string;
  prompt: string;
}
