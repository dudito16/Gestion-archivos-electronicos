/** Content types specific to the Week 8 interactive module (scoped here, not in the global domain model). */

export interface ObjectiveCard {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export type InteropDimension = "organizacional" | "semantica" | "tecnica";

export interface InteropDimensionInfo {
  id: InteropDimension;
  label: string;
  icon: string;
  definition: string;
  questions: string[];
  institutionalExample: string;
}

export interface DimensionCase {
  id: string;
  scenario: string;
  belongsTo: InteropDimension;
}

export interface FieldMapping {
  id: string;
  systemAField: string;
  systemBField: string;
  valid: boolean;
  note: string;
}

export interface ExpedienteLossItem {
  id: string;
  label: string;
  lostInExchange: boolean;
}

export interface FormatInfo {
  id: string;
  label: string;
  icon: string;
  type: string;
  compression: string;
  definition: string;
  considerations: string[];
}

export interface FormatComparisonRow {
  format: string;
  type: string;
  compression: string;
  use: string;
  consideration: string;
}

export interface FormatSelectionCase {
  id: string;
  scenario: string;
  recommendedFormats: string[];
}

export interface QualityControlStage {
  id: string;
  label: string;
  icon: string;
  whatToCheck: string;
}

export interface DigitizationCaseItem {
  id: string;
  label: string;
  icon: string;
  needs: string;
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
