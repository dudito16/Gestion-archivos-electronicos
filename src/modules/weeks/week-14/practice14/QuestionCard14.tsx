import { AlertTriangle, CheckCircle2, HelpCircle } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Badge } from "../../../../components/ui/badge";
import { cn } from "../../../../utils/cn";
import { MultipleChoiceView14 } from "./views/MultipleChoiceView14";
import { evaluateQuestion14, pointsForVerdict14 } from "./practice14.scoring";
import type { AnswerValue14, Practice14Question, Question14Result, Verdict14 } from "./practice14.types";

interface Props {
  question: Practice14Question;
  onFinalize: (result: Question14Result) => void;
}

type Stage = "answering" | "retry-prompt" | "finalized";

const verdictLabel: Record<Verdict14, string> = {
  correct: "✓ Correcto",
  incorrect: "✗ Incorrecto",
};

/** Trims trailing zeros so 2 shows as "2" and 1.2 shows with its decimal. */
function formatPoints(value: number): string {
  return Number(value.toFixed(2)).toString();
}

export function QuestionCard14({ question, onFinalize }: Props) {
  const [attemptNumber, setAttemptNumber] = useState<1 | 2>(1);
  const [stage, setStage] = useState<Stage>("answering");
  const [lastVerdict, setLastVerdict] = useState<Verdict14>("incorrect");
  const [lastSummary, setLastSummary] = useState("Sin respuesta");
  const [earnedPoints, setEarnedPoints] = useState(0);

  function handleCheck(value: AnswerValue14) {
    const { verdict, summary } = evaluateQuestion14(question, value);
    setLastVerdict(verdict);
    setLastSummary(summary);

    if (attemptNumber === 1 && verdict !== "correct") {
      setStage("retry-prompt");
      return;
    }
    setEarnedPoints(pointsForVerdict14(verdict, attemptNumber, question.points));
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

  const disabled = stage !== "answering";

  return (
    <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg space-y-md">
      <div className="flex items-center gap-xs flex-wrap">
        <Badge variant="secondary">{question.category}</Badge>
        <span className="text-caption font-caption text-on-surface-variant">Vale {question.points} puntos</span>
        {attemptNumber === 2 && stage !== "finalized" && (
          <span className="flex items-center gap-1 text-caption font-caption text-on-surface-variant italic">
            <HelpCircle size={13} /> Segundo intento
          </span>
        )}
      </div>

      {question.scenario && <p className="text-body-md font-body-md text-on-surface-variant italic whitespace-pre-line">{question.scenario}</p>}

      <p className="text-body-lg font-body-lg font-semibold text-on-surface whitespace-pre-line">{question.prompt}</p>

      <MultipleChoiceView14 key={attemptNumber} question={question} disabled={disabled} onCheck={handleCheck} />

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
                lastVerdict === "incorrect" && "border-error bg-error-container/40",
              )}
            >
              <p
                className={cn(
                  "flex items-center gap-xs text-label-md font-label-md font-bold",
                  lastVerdict === "incorrect" ? "text-on-error-container" : "text-on-tertiary-fixed-variant",
                )}
              >
                {lastVerdict === "correct" ? <CheckCircle2 size={18} /> : <AlertTriangle size={18} />}
                {verdictLabel[lastVerdict]}
              </p>
              <p className={cn("text-body-md font-body-md", lastVerdict === "incorrect" ? "text-on-error-container" : "text-on-surface")}>
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
