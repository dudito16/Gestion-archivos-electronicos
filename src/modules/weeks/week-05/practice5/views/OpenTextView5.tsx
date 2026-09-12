import { useState } from "react";
import { Button } from "../../../../../components/ui/button";
import { OpenTextField, OpenAnswerDisclaimer } from "../../activities/components/OpenTextField";
import type { AnswerValue5, OpenTextQuestion } from "../practice5.types";

interface Props {
  question: OpenTextQuestion;
  disabled: boolean;
  onCheck: (value: AnswerValue5) => void;
}

export function OpenTextView5({ question, disabled, onCheck }: Props) {
  const [text, setText] = useState("");

  return (
    <div className="space-y-sm">
      <OpenTextField id={`ot5-${question.id}`} label={question.fieldLabel} value={text} onChange={setText} rows={4} disabled={disabled} />
      <OpenAnswerDisclaimer />
      <Button disabled={text.trim().length === 0 || disabled} onClick={() => onCheck({ kind: "openText", text })}>
        Comprobar respuesta
      </Button>
    </div>
  );
}
