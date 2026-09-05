/** Types for Week 4's "Actividades" lab (10 formative, non-graded metadata exercises). */

export type Verdict = "correct" | "partial" | "review";

/** A field's acceptable-answer model: groups of synonyms, any one of which counts as a match. */
export interface FieldCriterion {
  id: string;
  label: string;
  placeholder?: string;
  keywordGroups: string[][];
  criterionText: string;
  explanation: string;
  type?: "text" | "textarea" | "select";
  options?: string[];
}

/** A named concept the student is expected to recognize by name (used in "list what you found" activities). */
export interface ConceptCandidate {
  id: string;
  label: string;
  keywords: string[];
}

export interface DynamicColumn {
  key: string;
  label: string;
  placeholder?: string;
}
