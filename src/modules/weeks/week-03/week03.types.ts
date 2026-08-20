/** Content types specific to the Week 3 interactive module (scoped here, not in the global domain model). */

export interface ObjectiveCard {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ProcessMapBranch {
  id: string;
  steps: string[];
}

export interface ProcessSectionData {
  title: string;
  intro: string;
  examples: string[];
  flow: { id: string; label: string }[];
}

export interface SummaryPoint {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface SummaryCluster {
  id: string;
  title: string;
  icon: string;
  items: string[];
}

export interface DiffRow {
  concept: string;
  question: string;
}
