/** Content shapes specific to Week 13 — "Estándares de preservación digital: PREMIS, METS, Dublin Core y BagIt". */

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

export interface MetadataType {
  id: string;
  label: string;
  description: string;
  example: string;
}

export interface PremisEntity {
  id: string;
  label: string;
  englishName: string;
  definition: string;
  managedInfo: string;
  example: string;
}

export interface PremisEventExample {
  id: string;
  label: string;
  description: string;
}

export interface MetsSection {
  id: string;
  code: string;
  label: string;
  description: string;
  example: string;
}

export interface DublinCoreElement {
  id: string;
  code: string;
  label: string;
  purpose: string;
  example: string;
}

export interface BagitComponent {
  id: string;
  code: string;
  label: string;
  description: string;
}

export interface FormatScenario {
  id: string;
  label: string;
  description: string;
}

export interface PreservationEvent {
  id: string;
  label: string;
  description: string;
  premisField: string;
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
