import { useState } from "react";
import { Button } from "../../../../../components/ui/button";
import { OpenTextField, OpenAnswerDisclaimer } from "../../activities/components/OpenTextField";
import type { AnswerValue7, OpenTextQuestion } from "../practice7.types";

interface Props {
  question: OpenTextQuestion;
  disabled: boolean;
  onCheck: (value: AnswerValue7) => void;
}

export function OpenTextView7({ question, disabled, onCheck }: Props) {
  const [text, setText] = useState("");

  return (
    <div className="space-y-sm">
      <OpenTextField id={`ot7-${question.id}`} label={question.fieldLabel} value={text} onChange={setText} rows={4} disabled={disabled} />
      <OpenAnswerDisclaimer />
      <Button disabled={text.trim().length === 0 || disabled} onClick={() => onCheck({ kind: "openText", text })}>
        Comprobar respuesta
      </Button>
    </div>
  );
}
