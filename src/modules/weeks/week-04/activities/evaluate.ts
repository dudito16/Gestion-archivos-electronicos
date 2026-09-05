import type { ConceptCandidate, FieldCriterion, Verdict } from "./activities.types";

export function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(new RegExp("[\\u0300-\\u036f]", "g"), "")
    .replace(/[^a-z0-9\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Flexible per-field grading (§ Actividad 2): never requires exact text — counts how many
 * expected keyword groups appear in the student's answer and returns a 3-state verdict.
 * Never "wrong", only correct / partial / requiere revisión — matching the didactic tone required.
 */
export function evaluateField(answer: string, criterion: FieldCriterion): Verdict {
  const clean = normalize(answer);
  if (clean.length < 2) return "review";

  const groups = criterion.keywordGroups;
  if (groups.length === 0) return clean.length >= 4 ? "correct" : "partial";

  const matchedGroups = groups.filter((group) => group.some((kw) => clean.includes(normalize(kw))));
  const ratio = matchedGroups.length / groups.length;

  if (ratio >= 0.6) return "correct";
  if (ratio > 0 || clean.length >= 6) return "partial";
  return "review";
}

/** Which of a pool of candidate concepts (by name) the student's free-form list mentions. */
export function matchConcepts(studentText: string, candidates: ConceptCandidate[]): { candidate: ConceptCandidate; matched: boolean }[] {
  const clean = normalize(studentText);
  return candidates.map((candidate) => ({
    candidate,
    matched: clean.length > 0 && candidate.keywords.some((kw) => clean.includes(normalize(kw))),
  }));
}

export function isMeaningfulText(text: string, minWords = 4): boolean {
  return text.trim().split(/\s+/).filter(Boolean).length >= minWords;
}
