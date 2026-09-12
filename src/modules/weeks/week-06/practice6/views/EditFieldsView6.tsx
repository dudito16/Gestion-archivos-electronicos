import { useState } from "react";
import { Button } from "../../../../../components/ui/button";
import { OpenTextField, OpenAnswerDisclaimer } from "../../activities/components/OpenTextField";
import type { AnswerValue6, EditFieldsQuestion } from "../practice6.types";

interface Props {
  question: EditFieldsQuestion;
  disabled: boolean;
  onCheck: (value: AnswerValue6) => void;
}

export function EditFieldsView6({ question, disabled, onCheck }: Props) {
  const [values, setValues] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    for (const f of question.fields) initial[f.id] = f.initialValue;
    return initial;
  });
  const [explanation, setExplanation] = useState("");

  const allFilled = question.fields.every((f) => (values[f.id] ?? "").trim().length > 0);

  return (
    <div className="space-y-md">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-sm">
        {question.fields.map((field) => (
          <div key={field.id}>
            <label htmlFor={`ef6-${question.id}-${field.id}`} className="text-label-md font-label-md font-semibold text-on-surface mb-1 block">
              {field.label}
            </label>
            <input
              id={`ef6-${question.id}-${field.id}`}
              type="text"
              value={values[field.id] ?? ""}
              disabled={disabled}
              onChange={(e) => setValues((prev) => ({ ...prev, [field.id]: e.target.value }))}
              className="w-full rounded-lg border border-outline-variant bg-surface-container-low px-sm py-2 text-body-md font-body-md text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container disabled:opacity-80"
            />
          </div>
        ))}
      </div>

      <OpenTextField id={`ef6-exp-${question.id}`} label={question.explanationPrompt} value={explanation} onChange={setExplanation} rows={3} disabled={disabled} />
      <OpenAnswerDisclaimer />

      <Button disabled={!allFilled || explanation.trim().length === 0 || disabled} onClick={() => onCheck({ kind: "editFields", values, explanation })}>
        Comprobar respuesta
      </Button>
    </div>
  );
}
