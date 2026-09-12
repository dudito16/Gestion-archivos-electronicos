/** Content types specific to the Week 6 interactive module (scoped here, not in the global domain model). */

export interface ObjectiveCard {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export type SignatureTypeId = "manuscrita" | "electronica" | "digital";

export interface SignatureTypeInfo {
  id: SignatureTypeId;
  label: string;
  icon: string;
  whatItIs: string;
  howObtained: string;
  whatItProves: string;
  risks: string;
  context: string;
}

export interface SummaryPoint {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface CaseStep {
  id: string;
  scenario: string;
  prompt: string;
  options: { id: string; label: string }[];
  bestId: string;
  feedback: string;
}

export interface AuditField {
  id: string;
  question: string;
  icon: string;
  example: string;
}

export interface TraceabilityStage {
  id: string;
  label: string;
  icon: string;
  whatHappened: string;
  who: string;
  when: string;
  document: string;
  evidence: string;
}
