import { useState } from "react";
import { Button } from "../../../../../components/ui/button";
import { DragDropClassifier } from "../../../../../components/common/DragDropClassifier";
import { OpenTextField } from "../../activities/components/OpenTextField";
import type { AnswerValue6, DragClassifyQuestion } from "../practice6.types";

interface Props {
  question: DragClassifyQuestion;
  disabled: boolean;
  onCheck: (value: AnswerValue6) => void;
}

export function DragClassifyView6({ question, disabled, onCheck }: Props) {
  const [result, setResult] = useState<{ score: number; total: number } | null>(null);
  const [justification, setJustification] = useState("");

  if (disabled) {
    return (
      <p className="text-caption font-caption text-on-surface-variant italic">
        {result ? `Clasificación registrada: ${result.score}/${result.total}.` : "Respuesta registrada."}
      </p>
    );
  }

  return (
    <div className="space-y-md">
      <DragDropClassifier
        items={question.items}
        categories={question.categories}
        onComplete={(score, total) => {
          setResult({ score, total });
          if (!question.justifyPrompt) onCheck({ kind: "dragClassify", score, total, justification: "" });
        }}
      />

      {result && question.justifyPrompt && (
        <div className="space-y-sm pt-sm border-t border-outline-variant">
          <OpenTextField id={`dc6-${question.id}`} label={question.justifyPrompt} value={justification} onChange={setJustification} rows={2} />
          <Button
            disabled={justification.trim().length === 0}
            onClick={() => onCheck({ kind: "dragClassify", score: result.score, total: result.total, justification })}
          >
            Enviar respuesta
          </Button>
        </div>
      )}
    </div>
  );
}
