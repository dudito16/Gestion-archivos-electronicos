import { useState } from "react";
import { Button } from "../../../../../components/ui/button";
import { Callout } from "../../../../../components/common/Callout";

interface Props {
  question: string;
  suggestions?: string[];
  onSubmit: (text: string) => void;
}

/** Ungraded open-ended follow-up (§29): recorded for docent review, never affects the score. */
export function OpenFollowUp({ question, suggestions, onSubmit }: Props) {
  const [text, setText] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="rounded-lg border border-outline-variant bg-surface-container-low p-md space-y-sm">
      <label htmlFor="open-followup" className="text-label-md font-label-md font-semibold text-on-surface block">
        {question}
      </label>
      <textarea
        id="open-followup"
        value={text}
        onChange={(e) => setText(e.target.value)}
        disabled={submitted}
        rows={3}
        placeholder="Escribe la respuesta del grupo…"
        className="w-full rounded-lg border border-outline-variant bg-surface-container-lowest p-sm text-body-md font-body-md text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container disabled:opacity-70"
      />
      {!submitted ? (
        <Button
          size="sm"
          variant="secondary"
          disabled={text.trim().length === 0}
          onClick={() => {
            setSubmitted(true);
            onSubmit(text.trim());
          }}
        >
          Registrar respuesta
        </Button>
      ) : (
        <p className="text-caption font-caption text-on-surface-variant italic">
          Respuesta registrada para revisión docente. No afecta tu puntaje.
        </p>
      )}

      {submitted && suggestions && (
        <Callout variant="info" title="Algunos elementos a considerar">
          {suggestions.join(" · ")}
        </Callout>
      )}
    </div>
  );
}
