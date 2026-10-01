import { AlertTriangle, CheckCircle2, HelpCircle } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Badge } from "../../../../components/ui/badge";
import { cn } from "../../../../utils/cn";
import { CompareChoiceView7 } from "./views/CompareChoiceView7";
import { DragClassifyView7 } from "./views/DragClassifyView7";
import { EditFieldsView7 } from "./views/EditFieldsView7";
import { MatchPairsView7 } from "./views/MatchPairsView7";
import { MatrixBuilderView7 } from "./views/MatrixBuilderView7";
import { OpenTextView7 } from "./views/OpenTextView7";
import { ReorderView7 } from "./views/ReorderView7";
import { SelectJustifyView7 } from "./views/SelectJustifyView7";
import { StageFlowView7 } from "./views/StageFlowView7";
import { evaluateQuestion7, pointsForVerdict7 } from "./practice7.scoring";
import type { AnswerValue7, Practice7Question, Question7Result, Verdict } from "./practice7.types";

interface Props {
  question: Practice7Question;
  onFinalize: (result: Question7Result) => void;
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

export function QuestionCard7({ question, onFinalize }: Props) {
  const [attemptNumber, setAttemptNumber] = useState<1 | 2>(1);
  const [stage, setStage] = useState<Stage>("answering");
  const [lastVerdict, setLastVerdict] = useState<Verdict>("review");
  const [lastSummary, setLastSummary] = useState("Sin respuesta");
  const [earnedPoints, setEarnedPoints] = useState(0);

  function handleCheck(value: AnswerValue7) {
    const { verdict, summary } = evaluateQuestion7(question, value);
    setLastVerdict(verdict);
    setLastSummary(summary);

    if (attemptNumber === 1 && verdict !== "correct") {
      setStage("retry-prompt");
      return;
    }
    setEarnedPoints(pointsForVerdict7(verdict, attemptNumber, question.points));
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
        return <SelectJustifyView7 key={attemptNumber} question={question} disabled={disabled} onCheck={handleCheck} />;
      case "openText":
        return <OpenTextView7 key={attemptNumber} question={question} disabled={disabled} onCheck={handleCheck} />;
      case "dragClassify":
        return <DragClassifyView7 key={attemptNumber} question={question} disabled={disabled} onCheck={handleCheck} />;
      case "reorder":
        return <ReorderView7 key={attemptNumber} question={question} disabled={disabled} onCheck={handleCheck} />;
      case "matchPairs":
        return <MatchPairsView7 key={attemptNumber} question={question} disabled={disabled} onCheck={handleCheck} />;
      case "compareChoice":
        return <CompareChoiceView7 key={attemptNumber} question={question} disabled={disabled} onCheck={handleCheck} />;
      case "editFields":
        return <EditFieldsView7 key={attemptNumber} question={question} disabled={disabled} onCheck={handleCheck} />;
      case "stageFlow":
        return <StageFlowView7 key={attemptNumber} question={question} disabled={disabled} onCheck={handleCheck} />;
      case "matrixBuilder":
        return <MatrixBuilderView7 key={attemptNumber} question={question} disabled={disabled} onCheck={handleCheck} />;
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
