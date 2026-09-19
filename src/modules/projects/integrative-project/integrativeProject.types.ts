/** Content types for the "Proyecto Integrador — Del documento a la evidencia" module (closes Unidad I). */

export interface Actor {
  id: string;
  label: string;
  icon: string;
  description: string;
}

export interface CaseDocument {
  id: string;
  label: string;
  icon: string;
  generatedBy: string;
  purpose: string;
  moment: string;
  relatesTo: string;
}

export interface FlowStageDetail {
  id: string;
  label: string;
  document: string;
  responsible: string;
  system: string;
  action: string;
  evidence: string;
}

export interface MetadataField {
  id: string;
  label: string;
  value: string;
  category: "identificacion" | "contexto" | "responsabilidad" | "relacion" | "estado" | "trazabilidad";
}

export interface RiskFinding {
  id: string;
  finding: string;
  attribute: string;
  risk: string;
  control: string;
}

export interface TimelineEvent {
  id: string;
  time: string;
  event: string;
  responsible: string;
  document: string;
  result: string;
}

export interface AuditRow {
  element: string;
  result: "Sí" | "Parcial" | "No";
  observation: string;
}

export interface WeekDeliverable {
  week: number;
  title: string;
  items: string[];
}

export interface RubricCriterion {
  id: string;
  label: string;
  points: number;
  description: string;
}

export interface EvidenceType {
  id: string;
  icon: string;
  label: string;
  whenToUse: string;
}

export interface ChecklistItem {
  id: string;
  label: string;
}

export interface OrganizationOption {
  id: string;
  letter: string;
  label: string;
}

// ---------------------------------------------------------------------------
// Modelo Completo del Proyecto — "así debe quedar un trabajo terminado"
// ---------------------------------------------------------------------------

export interface ModeloChapter {
  id: string;
  num: string;
  title: string;
}

export interface ModeloMatrixRow {
  criterion: string;
  values: string[];
}

export interface ModeloConclusion {
  id: string;
  hallazgo: string;
  evidencia: string;
  analisis: string;
  propuesta: string;
}

export interface ModeloRecommendation {
  id: string;
  recomendacion: string;
  porque: string;
  problema: string;
  resultadoEsperado: string;
}

export interface ModeloComparisonExample {
  id: string;
  tema: string;
  superficial: string;
  esperado: string;
}

export interface ModeloAnexo {
  id: string;
  titulo: string;
  descripcion: string;
}
