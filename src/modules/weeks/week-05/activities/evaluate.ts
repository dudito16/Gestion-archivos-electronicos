/** Lightweight, forgiving helpers for grading Week 5's open-ended answers (workshop and graded practice) — same approach as Week 4's lab (never a hard mismatch, just a length/effort heuristic). */

export interface ConceptCandidate {
  id: string;
  label: string;
  keywords: string[];
}

export function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(new RegExp("[\\u0300-\\u036f]", "g"), "")
    .replace(/[^a-z0-9\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function isMeaningfulText(text: string, minWords = 4): boolean {
  return text.trim().split(/\s+/).filter(Boolean).length >= minWords;
}

export function countListedItems(text: string): number {
  return text
    .split(/[\n,;]/)
    .map((s) => s.trim())
    .filter(Boolean).length;
}

/** Which of a pool of candidate concepts (by name) the student's free-form list mentions. */
export function matchConcepts(studentText: string, candidates: ConceptCandidate[]): { candidate: ConceptCandidate; matched: boolean }[] {
  const clean = normalize(studentText);
  return candidates.map((candidate) => ({
    candidate,
    matched: clean.length > 0 && candidate.keywords.some((kw) => clean.includes(normalize(kw))),
  }));
}
