import { useState } from "react";
import { Button } from "../../../../../components/ui/button";
import { OpenTextField } from "../../activities/components/OpenTextField";
import type { AnswerValue4, OpenTextQuestion } from "../practice4.types";

interface Props {
  question: OpenTextQuestion;
  disabled: boolean;
  onCheck: (value: AnswerValue4) => void;
}

export function OpenTextView({ question, disabled, onCheck }: Props) {
  const [text, setText] = useState("");

  return (
    <div className="space-y-sm">
      <OpenTextField id={`ot-${question.id}`} label={question.fieldLabel} value={text} onChange={setText} rows={4} disabled={disabled} />
      <Button disabled={text.trim().length === 0 || disabled} onClick={() => onCheck({ kind: "openText", text })}>
        Comprobar respuesta
      </Button>
    </div>
  );
}
