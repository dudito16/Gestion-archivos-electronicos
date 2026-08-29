/** Content types specific to the Week 4 interactive module (scoped here, not in the global domain model). */

export interface ObjectiveCard {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface FunctionCard {
  id: string;
  title: string;
  question: string;
  icon: string;
}

export interface ContextElement {
  id: string;
  label: string;
  icon: string;
  explanation: string;
}

export type MetadataTypeId = "descriptivos" | "administrativos" | "estructurales" | "preservacion";

export interface MetadataTypeInfo {
  id: MetadataTypeId;
  label: string;
  icon: string;
  question: string;
  definition: string;
  purpose: string;
  examples: string[];
}

export interface LifecycleStageMetadata {
  id: string;
  stage: string;
  fields: string[];
}

export interface QualityCard {
  id: string;
  title: string;
  question: string;
  icon: string;
}

export interface FichaField {
  id: string;
  field: string;
  value: string;
  function: string;
}

export interface DragDropItem {
  id: string;
  label: string;
  icon: string;
  category: MetadataTypeId;
}

export interface DragDropCategory {
  id: MetadataTypeId;
  label: string;
  icon: string;
}

export interface SummaryPoint {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface WorkshopRow {
  id: string;
  field: string;
  definition: string;
  type: string;
  required: string;
  example: string;
}
