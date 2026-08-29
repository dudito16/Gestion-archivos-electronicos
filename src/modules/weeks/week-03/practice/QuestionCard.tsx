import { AlertTriangle, CheckCircle2 } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Badge } from "../../../../components/ui/badge";
import { cn } from "../../../../utils/cn";
import { MatchView } from "./views/MatchView";
import { MultiSelectView } from "./views/MultiSelectView";
import { OpenFollowUp } from "./views/OpenFollowUp";
import { OrderView } from "./views/OrderView";
import { SingleChoiceView } from "./views/SingleChoiceView";
import { isAnswerCorrect, pointsForAttempt, summarizeAnswer, summarizeCorrectAnswer, type AnswerValue } from "./practice.scoring";
import type { PracticeQuestion, QuestionResult } from "./practice.types";

interface Props {
  question: PracticeQuestion;
  onFinalize: (result: QuestionResult) => void;
}

type Stage = "answering" | "retry-prompt" | "finalized";

export function QuestionCard({ question, onFinalize }: Props) {
  const [attemptNumber, setAttemptNumber] = useState<1 | 2>(1);
  const [stage, setStage] = useState<Stage>("answering");
  const [lastValue, setLastValue] = useState<AnswerValue | null>(null);
  const [lastCorrect, setLastCorrect] = useState(false);
  const [earnedPoints, setEarnedPoints] = useState(0);
  const [openAnswer, setOpenAnswer] = useState("");

  function handleCheck(value: AnswerValue) {
    const correct = isAnswerCorrect(question, value);
    setLastValue(value);
    setLastCorrect(correct);

    if (attemptNumber === 1 && !correct) {
      setStage("retry-prompt");
      return;
    }
    setEarnedPoints(pointsForAttempt(question, attemptNumber, correct));
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
      finalized: true,
      correct: lastCorrect,
      answerSummary: lastValue ? summarizeAnswer(question, lastValue) : "Sin respuesta",
      openAnswer: question.openQuestion ? openAnswer : undefined,
    });
  }

  const view = (() => {
    const disabled = stage !== "answering";
    switch (question.type) {
      case "single":
        return <SingleChoiceView key={attemptNumber} question={question} disabled={disabled} onCheck={handleCheck} />;
      case "multi":
        return <MultiSelectView key={attemptNumber} question={question} disabled={disabled} onCheck={handleCheck} />;
      case "order":
        return <OrderView key={attemptNumber} question={question} disabled={disabled} onCheck={handleCheck} />;
      case "match":
        return <MatchView key={attemptNumber} question={question} disabled={disabled} onCheck={handleCheck} />;
    }
  })();

  return (
    <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg space-y-md">
      <div className="flex items-center gap-xs flex-wrap">
        <Badge variant="secondary">{question.category}</Badge>
        <span className="text-caption font-caption text-on-surface-variant">Vale {question.points} puntos</span>
      </div>

      {question.scenario && (
        <p className="text-body-md font-body-md text-on-surface-variant italic whitespace-pre-line">{question.scenario}</p>
      )}

      {question.contextItems && (
        <div className="flex flex-wrap gap-xs">
          {question.contextItems.map((item) => (
            <span key={item} className="rounded-full border border-outline-variant bg-surface-container-low px-3 py-1 text-caption font-caption font-mono text-on-surface-variant">
              {item}
            </span>
          ))}
        </div>
      )}

      <p className="text-body-lg font-body-lg font-semibold text-on-surface whitespace-pre-line">{question.prompt}</p>

      {view}

      <AnimatePresence mode="wait">
        {stage === "retry-prompt" && (
          <motion.div
            key="retry"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-lg border-l-4 border-error bg-error-container/40 p-md space-y-sm"
          >
            <p className="flex items-center gap-xs text-label-md font-label-md font-bold text-on-error-container">
              <AlertTriangle size={18} /> REVISA TU DECISIÓN
            </p>
            <p className="text-body-md font-body-md text-on-error-container">{question.feedbackIncorrect}</p>
            <Button size="sm" onClick={retry}>
              Intentar de nuevo
            </Button>
          </motion.div>
        )}

        {stage === "finalized" && (
          <motion.div key="final" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="space-y-md">
            <div
              className={cn(
                "rounded-lg border-l-4 p-md space-y-1.5",
                lastCorrect ? "border-tertiary-fixed-dim bg-tertiary-fixed/30" : "border-error bg-error-container/40",
              )}
            >
              <p
                className={cn(
                  "flex items-center gap-xs text-label-md font-label-md font-bold",
                  lastCorrect ? "text-on-tertiary-fixed-variant" : "text-on-error-container",
                )}
              >
                {lastCorrect ? <CheckCircle2 size={18} /> : <AlertTriangle size={18} />}
                {lastCorrect ? "DECISIÓN ADECUADA" : "REVISA TU DECISIÓN"}
              </p>
              <p className={cn("text-body-md font-body-md", lastCorrect ? "text-on-tertiary-fixed-variant" : "text-on-error-container")}>
                {lastCorrect ? question.feedbackCorrect : question.feedbackIncorrect}
              </p>
              {!lastCorrect && (
                <p className="text-caption font-caption text-on-error-container">
                  Respuesta correcta: {summarizeCorrectAnswer(question)}
                </p>
              )}
              <p className="text-label-md font-label-md font-semibold text-on-surface">
                Puntos obtenidos: {earnedPoints} / {question.points}
              </p>
            </div>

            {question.openQuestion && (
              <OpenFollowUp question={question.openQuestion} suggestions={question.openSuggestions} onSubmit={setOpenAnswer} />
            )}

            <Button onClick={continueNext}>Continuar</Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
