import { useState } from "react";
import { Button } from "../../../../../components/ui/button";
import { OpenTextField, OpenAnswerDisclaimer } from "../../activities/components/OpenTextField";
import type { AnswerValue8, OpenTextQuestion } from "../practice8.types";

interface Props {
  question: OpenTextQuestion;
  disabled: boolean;
  onCheck: (value: AnswerValue8) => void;
}

export function OpenTextView8({ question, disabled, onCheck }: Props) {
  const [text, setText] = useState("");

  return (
    <div className="space-y-sm">
      <OpenTextField id={`ot8-${question.id}`} label={question.fieldLabel} value={text} onChange={setText} rows={4} disabled={disabled} />
      <OpenAnswerDisclaimer />
      <Button disabled={text.trim().length === 0 || disabled} onClick={() => onCheck({ kind: "openText", text })}>
        Comprobar respuesta
      </Button>
    </div>
  );
}
