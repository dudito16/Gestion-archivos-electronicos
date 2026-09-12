import { useState } from "react";
import { Button } from "../../../../../components/ui/button";
import { cn } from "../../../../../utils/cn";
import { OpenTextField } from "../../activities/components/OpenTextField";
import type { AnswerValue6, CompareChoiceQuestion } from "../practice6.types";

interface Props {
  question: CompareChoiceQuestion;
  disabled: boolean;
  onCheck: (value: AnswerValue6) => void;
}

function DocCard({ label, rows, highlight }: { label: string; rows: { field: string; value: string }[]; highlight: boolean }) {
  return (
    <div className={cn("rounded-lg border p-md space-y-1", highlight ? "border-primary-container/50 bg-secondary-container/20" : "border-outline-variant bg-surface-container-low")}>
      <p className="text-label-md font-label-md font-bold text-on-surface">{label}</p>
      {rows.map((row) => (
        <p key={row.field} className="text-body-md font-body-md text-on-surface-variant">
          <span className="font-semibold text-on-surface">{row.field}:</span> {row.value}
        </p>
      ))}
    </div>
  );
}

export function CompareChoiceView6({ question, disabled, onCheck }: Props) {
  const [choice, setChoice] = useState<"a" | "b" | null>(null);
  const [justification, setJustification] = useState("");

  return (
    <div className="space-y-md">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-sm">
        <DocCard label={question.labelA} rows={question.rowsA} highlight={choice === "a"} />
        <DocCard label={question.labelB} rows={question.rowsB} highlight={choice === "b"} />
      </div>

      <div className="flex gap-sm">
        <Button variant={choice === "a" ? "primary" : "secondary"} disabled={disabled} onClick={() => setChoice("a")}>
          {question.labelA}
        </Button>
        <Button variant={choice === "b" ? "primary" : "secondary"} disabled={disabled} onClick={() => setChoice("b")}>
          {question.labelB}
        </Button>
      </div>

      <OpenTextField id={`cc6-${question.id}`} label="Justifica tu decisión." value={justification} onChange={setJustification} rows={3} disabled={disabled} />

      <Button disabled={!choice || justification.trim().length === 0 || disabled} onClick={() => choice && onCheck({ kind: "compareChoice", choice, justification })}>
        Comprobar respuesta
      </Button>
    </div>
  );
}
