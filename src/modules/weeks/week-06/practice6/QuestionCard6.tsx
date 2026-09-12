import { AlertTriangle, CheckCircle2, HelpCircle } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Badge } from "../../../../components/ui/badge";
import { cn } from "../../../../utils/cn";
import { CompareChoiceView6 } from "./views/CompareChoiceView6";
import { DragClassifyView6 } from "./views/DragClassifyView6";
import { EditFieldsView6 } from "./views/EditFieldsView6";
import { MatchPairsView6 } from "./views/MatchPairsView6";
import { MatrixBuilderView6 } from "./views/MatrixBuilderView6";
import { OpenTextView6 } from "./views/OpenTextView6";
import { ReorderView6 } from "./views/ReorderView6";
import { SelectJustifyView6 } from "./views/SelectJustifyView6";
import { StageFlowView6 } from "./views/StageFlowView6";
import { evaluateQuestion6, pointsForVerdict6 } from "./practice6.scoring";
import type { AnswerValue6, Practice6Question, Question6Result, Verdict } from "./practice6.types";

interface Props {
  question: Practice6Question;
  onFinalize: (result: Question6Result) => void;
}

type Stage = "answering" | "retry-prompt" | "finalized";

const verdictLabel: Record<Verdict, string> = {
  correct: "✓ Correcto",
  partial: "⚠ Parcialmente correcto",
  review: "↻ Requiere revisión",
};

/** Trims trailing zeros so 1 shows as "1" and 0.5/0.6/0.3 show with a single decimal. */
function formatPoints(value: number): string {
  return Number(value.toFixed(2)).toString();
}

export function QuestionCard6({ question, onFinalize }: Props) {
  const [attemptNumber, setAttemptNumber] = useState<1 | 2>(1);
  const [stage, setStage] = useState<Stage>("answering");
  const [lastVerdict, setLastVerdict] = useState<Verdict>("review");
  const [lastSummary, setLastSummary] = useState("Sin respuesta");
  const [earnedPoints, setEarnedPoints] = useState(0);

  function handleCheck(value: AnswerValue6) {
    const { verdict, summary } = evaluateQuestion6(question, value);
    setLastVerdict(verdict);
    setLastSummary(summary);

    if (attemptNumber === 1 && verdict !== "correct") {
      setStage("retry-prompt");
      return;
    }
    setEarnedPoints(pointsForVerdict6(verdict, attemptNumber, question.points));
    setStage("finalized");
  }

  function retry() {
    setAttemptNumber(2);
    setStage("answering");
  }

  function continueNext() {
    onFinalize({
      attempts: attemptNumber,
      earnedPoints,
      verdict: lastVerdict,
      answerSummary: lastSummary,
      feedback: question.feedbackByVerdict[lastVerdict],
    });
  }

  const view = (() => {
    const disabled = stage !== "answering";
    switch (question.kind) {
      case "selectJustify":
        return <SelectJustifyView6 key={attemptNumber} question={question} disabled={disabled} onCheck={handleCheck} />;
      case "openText":
        return <OpenTextView6 key={attemptNumber} question={question} disabled={disabled} onCheck={handleCheck} />;
      case "dragClassify":
        return <DragClassifyView6 key={attemptNumber} question={question} disabled={disabled} onCheck={handleCheck} />;
      case "reorder":
        return <ReorderView6 key={attemptNumber} question={question} disabled={disabled} onCheck={handleCheck} />;
      case "matchPairs":
        return <MatchPairsView6 key={attemptNumber} question={question} disabled={disabled} onCheck={handleCheck} />;
      case "compareChoice":
        return <CompareChoiceView6 key={attemptNumber} question={question} disabled={disabled} onCheck={handleCheck} />;
      case "editFields":
        return <EditFieldsView6 key={attemptNumber} question={question} disabled={disabled} onCheck={handleCheck} />;
      case "stageFlow":
        return <StageFlowView6 key={attemptNumber} question={question} disabled={disabled} onCheck={handleCheck} />;
      case "matrixBuilder":
        return <MatrixBuilderView6 key={attemptNumber} question={question} disabled={disabled} onCheck={handleCheck} />;
    }
  })();

  return (
    <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg space-y-md">
      <div className="flex items-center gap-xs flex-wrap">
        <Badge variant="secondary">{question.category}</Badge>
        <span className="text-caption font-caption text-on-surface-variant">Vale {question.points} punto{question.points !== 1 ? "s" : ""}</span>
        {attemptNumber === 2 && stage !== "finalized" && (
          <span className="flex items-center gap-1 text-caption font-caption text-on-surface-variant italic">
            <HelpCircle size={13} /> Segundo intento
          </span>
        )}
      </div>

      {question.scenario && <p className="text-body-md font-body-md text-on-surface-variant italic whitespace-pre-line">{question.scenario}</p>}
      {question.instructions && <p className="text-caption font-caption text-on-surface-variant">{question.instructions}</p>}

      <p className="text-body-lg font-body-lg font-semibold text-on-surface whitespace-pre-line">{question.prompt}</p>

      {view}

      <AnimatePresence mode="wait">
        {stage === "retry-prompt" && (
          <motion.div key="retry" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="rounded-lg border-l-4 border-error bg-error-container/40 p-md space-y-sm">
            <p className="flex items-center gap-xs text-label-md font-label-md font-bold text-on-error-container">
              <AlertTriangle size={18} /> {verdictLabel[lastVerdict]}
            </p>
            <p className="text-body-md font-body-md text-on-error-container">{question.feedbackByVerdict[lastVerdict]}</p>
            <Button size="sm" onClick={retry}>
              Intentar de nuevo
            </Button>
          </motion.div>
        )}

        {stage === "finalized" && (
          <motion.div key="final" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="space-y-sm">
            <div
              className={cn(
                "rounded-lg border-l-4 p-md space-y-1.5",
                lastVerdict === "correct" && "border-tertiary-fixed-dim bg-tertiary-fixed/30",
                lastVerdict === "partial" && "border-secondary bg-secondary-container/40",
                lastVerdict === "review" && "border-error bg-error-container/40",
              )}
            >
              <p
                className={cn(
                  "flex items-center gap-xs text-label-md font-label-md font-bold",
                  lastVerdict === "review" ? "text-on-error-container" : "text-on-tertiary-fixed-variant",
                )}
              >
                {lastVerdict === "correct" ? <CheckCircle2 size={18} /> : <AlertTriangle size={18} />}
                {verdictLabel[lastVerdict]}
              </p>
              <p className={cn("text-body-md font-body-md", lastVerdict === "review" ? "text-on-error-container" : "text-on-surface")}>
                {question.feedbackByVerdict[lastVerdict]}
              </p>
              {lastVerdict !== "correct" && (
                <p className="text-caption font-caption text-on-surface-variant">
                  <span className="font-semibold text-on-surface">Criterio esperado:</span> {question.expectedSummary}
                </p>
              )}
              <p className="text-label-md font-label-md font-semibold text-on-surface">
                Puntos obtenidos: {formatPoints(earnedPoints)} / {question.points}
              </p>
            </div>
            <Button onClick={continueNext}>Continuar</Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
