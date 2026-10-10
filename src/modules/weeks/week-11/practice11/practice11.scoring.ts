import { isMeaningfulText, normalize } from "../activities/evaluate";
import type {
  AnswerValue11,
  CompareChoiceQuestion,
  DragClassifyQuestion,
  MatchPairsQuestion,
  MatrixBuilderQuestion,
  Practice11Question,
  ReorderQuestion,
  SelectJustifyQuestion,
  StageFlowQuestion,
  Verdict,
} from "./practice11.types";

/** Combines a 0-1 correctness ratio with a written-answer quality gate into a 3-state verdict. Never a hard pass/fail. */
function combineVerdict(ratio: number, writingOk: boolean): Verdict {
  if (ratio >= 0.75 && writingOk) return "correct";
  if (ratio > 0 || writingOk) return "partial";
  return "review";
}

interface EvalResult {
  verdict: Verdict;
  summary: string;
  ratio: number;
}

export function evaluateQuestion11(question: Practice11Question, value: AnswerValue11): EvalResult {
  switch (question.kind) {
    case "selectJustify": {
      const q = question as SelectJustifyQuestion;
      const v = value as Extract<AnswerValue11, { kind: "selectJustify" }>;
      const correctSet = new Set(q.correctIds);
      const selectedSet = new Set(v.selected);
      const truePositives = [...selectedSet].filter((id) => correctSet.has(id)).length;
      const falsePositives = [...selectedSet].filter((id) => !correctSet.has(id)).length;
      const ratio = correctSet.size > 0 ? Math.max(0, truePositives - falsePositives * 0.5) / correctSet.size : 0;
      const justifyOk = v.justifications.every((j) => isMeaningfulText(j, q.justifyMinWords ?? 6));
      const labels = v.selected.map((id) => q.options.find((o) => o.id === id)?.label ?? id);
      return {
        verdict: combineVerdict(Math.min(1, ratio), justifyOk),
        summary: labels.length > 0 ? labels.join(", ") : "Sin selección",
        ratio,
      };
    }

    case "compareChoice": {
      const q = question as CompareChoiceQuestion;
      const v = value as Extract<AnswerValue11, { kind: "compareChoice" }>;
      const choiceOk = v.choice === q.expected;
      const justifyOk = isMeaningfulText(v.justification, q.justifyMinWords ?? 6);
      let verdict: Verdict;
      if (choiceOk && justifyOk) verdict = "correct";
      else if (justifyOk) verdict = "partial";
      else verdict = "review";
      return {
        verdict,
        summary: `${v.choice === "a" ? q.labelA : q.labelB} — ${v.justification || "sin justificación"}`,
        ratio: choiceOk ? 1 : 0.3,
      };
    }

    case "reorder": {
      const q = question as ReorderQuestion;
      const v = value as Extract<AnswerValue11, { kind: "reorder" }>;
      const matches = v.order.filter((id, i) => id === q.correctOrder[i]).length;
      const ratio = q.correctOrder.length > 0 ? matches / q.correctOrder.length : 0;
      const labels = v.order.map((id) => q.items.find((i) => i.id === id)?.label ?? id);
      return { verdict: combineVerdict(ratio, true), summary: labels.join(" → "), ratio };
    }

    case "dragClassify": {
      const q = question as DragClassifyQuestion;
      const v = value as Extract<AnswerValue11, { kind: "dragClassify" }>;
      const ratio = v.total > 0 ? v.score / v.total : 0;
      const justifyOk = q.justifyPrompt ? isMeaningfulText(v.justification, 6) : true;
      return {
        verdict: combineVerdict(ratio, justifyOk),
        summary: `${v.score}/${v.total} elementos clasificados correctamente`,
        ratio,
      };
    }

    case "matchPairs": {
      const q = question as MatchPairsQuestion;
      const v = value as Extract<AnswerValue11, { kind: "matchPairs" }>;
      const correctCount = q.concepts.filter((c) => v.pairs[c.id] === q.correctPairs[c.id]).length;
      const ratio = q.concepts.length > 0 ? correctCount / q.concepts.length : 0;
      const justifyOk = q.justifyPrompt ? isMeaningfulText(v.justification ?? "", q.justifyMinWords ?? 6) : true;
      const summary = q.concepts
        .map((c) => `${c.label} → ${q.definitions.find((d) => d.id === v.pairs[c.id])?.label ?? "—"}`)
        .join("; ");
      return { verdict: combineVerdict(ratio, justifyOk), summary, ratio };
    }

    case "stageFlow": {
      const q = question as StageFlowQuestion;
      const v = value as Extract<AnswerValue11, { kind: "stageFlow" }>;
      const filledStages = q.stages.filter((s) => {
        const row = v.rows[s.id];
        return row && Object.values(row).every((val) => val?.trim());
      }).length;
      const ratio = Math.min(1, filledStages / q.minStages);
      const writingOk = Boolean(v.criticalStageId) && isMeaningfulText(v.criticalJustification, q.criticalMinWords ?? 6);
      const stageLabel = q.stages.find((s) => s.id === v.criticalStageId)?.label ?? "sin elegir";
      return {
        verdict: writingOk ? combineVerdict(ratio, true) : "review",
        summary: `${filledStages}/${q.stages.length} etapas completadas; etapa crítica: ${stageLabel}`,
        ratio,
      };
    }

    case "matrixBuilder": {
      const q = question as MatrixBuilderQuestion;
      const v = value as Extract<AnswerValue11, { kind: "matrixBuilder" }>;
      const completeRows = v.rows.filter((row) => q.columns.every((c) => row[c.key]?.trim())).length;
      const rowsRatio = Math.min(1, completeRows / q.minRows);

      // Catch a row that names one of the suggested problems but assigns it a contradictory
      // strategy (e.g. "emulación" for a plain governance gap) — filling every column is not the
      // same as the analysis being professionally coherent.
      let hasContradiction = false;
      if (q.consistencyHints) {
        for (const row of v.rows) {
          const problemText = normalize(Object.values(row).join(" "));
          for (const hint of q.consistencyHints) {
            if (problemText.includes(normalize(hint.problemKeyword))) {
              const actual = row[hint.column];
              const accepted = Array.isArray(hint.expectedValue) ? hint.expectedValue : [hint.expectedValue];
              if (actual && !accepted.some((value) => normalize(actual) === normalize(value))) hasContradiction = true;
            }
          }
        }
      }

      const writingOk = v.closingAnswers.every((a) => isMeaningfulText(a, q.closingMinWords ?? 6));
      const ratio = hasContradiction ? Math.min(rowsRatio, 0.5) : rowsRatio;
      return {
        verdict: writingOk ? combineVerdict(ratio, true) : "review",
        summary: `${completeRows} fila(s) completa(s) de ${v.rows.length}${hasContradiction ? " (con una relación problema–estrategia inconsistente)" : ""}`,
        ratio,
      };
    }
  }
}

/** Same attempt-based reduction as Week 10's `pointsForVerdict10`: first-try full credit, second-try reduced. */
export function pointsForVerdict11(verdict: Verdict, attemptNumber: 1 | 2, points: number): number {
  if (attemptNumber === 1) {
    if (verdict === "correct") return points;
    if (verdict === "partial") return points * 0.5;
    return 0;
  }
  if (verdict === "correct") return points * 0.6;
  if (verdict === "partial") return points * 0.3;
  return 0;
}
