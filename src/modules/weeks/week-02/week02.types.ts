/** Content types specific to the Week 2 interactive module (scoped here, not in the global domain model). */

export interface ObjectiveCard {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface PurposeCard {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export type SGDComponentId = "usuarios" | "documentos" | "expedientes" | "metadatos" | "procesos" | "trazabilidad";

export interface SGDComponent {
  id: SGDComponentId;
  label: string;
  icon: string;
  definition: string;
  purpose: string;
  example: string;
  keyQuestion: string;
}

export interface ArchitectureBlock {
  id: string;
  label: string;
  icon: string;
  description: string;
  /** Row in the diagram: 0 = usuarios (top) ... 5 = integraciones (bottom). Blocks sharing a row render side by side. */
  row: number;
}

export interface TraceEvent {
  id: string;
  label: string;
  icon: string;
  user: string;
  date: string;
  time: string;
  action: string;
  status: string;
  origin: string;
  destination: string;
}

export interface ConceptMapNode {
  id: string;
  label: string;
  icon: string;
}

export interface SummaryPoint {
  id: string;
  title: string;
  description: string;
  icon: string;
}
