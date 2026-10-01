/** Content types specific to the Week 7 interactive module (scoped here, not in the global domain model). */

export interface ObjectiveCard {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export type AttributeId = "confidencialidad" | "integridad" | "disponibilidad";

export interface AttributeInfo {
  id: AttributeId;
  label: string;
  icon: string;
  definition: string;
  examples: string[];
  institutionalExample: string;
}

export interface ProfileOption {
  id: string;
  label: string;
  icon: string;
  shouldAccess: boolean;
  reason: string;
}

export interface PermissionRole {
  id: string;
  label: string;
  ver: string;
  crear: string;
  modificar: string;
  eliminar: string;
  administrar: string;
}

export interface RiskChainCase {
  id: string;
  threat: string;
  vulnerability: string;
  risk: string;
  impact: string;
  control: string;
}

export type ControlKind = "preventivo" | "detectivo" | "correctivo";

export interface ControlTypeInfo {
  id: ControlKind;
  label: string;
  icon: string;
  definition: string;
  examples: string[];
}

export interface BackupIdea {
  id: string;
  label: string;
  detail: string;
}

export interface IncidentCase {
  id: string;
  scenario: string;
  prompt: string;
  options: { id: string; label: string; icon: string; belongs: boolean }[];
  explanation: string;
}

export interface CaseStageOption {
  id: string;
  label: string;
  belongs?: boolean;
}

export type CaseStageKind = "multiSelect" | "sequence" | "openText";

export interface CaseStage {
  id: string;
  title: string;
  prompt: string;
  kind: CaseStageKind;
  options?: CaseStageOption[];
  correctOrder?: string[];
  minWords?: number;
  closingNote: string;
}

export interface SummaryPoint {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface WeekConnection {
  week: number;
  label: string;
  concept: string;
}
