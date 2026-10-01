import { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { FeedbackNote } from "../activities/components/FeedbackNote";
import { ActivityShell } from "../activities/components/ActivityShell";
import { OpenTextField, OpenAnswerDisclaimer } from "../activities/components/OpenTextField";
import { taller8Cases, taller8FormatOptions } from "./taller.data";
import { isMeaningfulText } from "../activities/evaluate";
import { useWeek8Taller } from "./tallerProgress";

interface Draft {
  choices: Record<string, string>;
  justifications: Record<string, string>;
}

const ID = "taller-8" as const;

function emptyDraft(): Draft {
  return { choices: {}, justifications: {} };
}

export function Taller8FormatSelection() {
  const { getAnswer, setAnswer, markCompleted, isCompleted } = useWeek8Taller();
  const [draft, setDraft] = useState<Draft>(() => getAnswer(ID, emptyDraft()));
  const [submitted, setSubmitted] = useState(isCompleted(ID));
  const [error, setError] = useState<string | null>(null);

  useEffect(() => setAnswer(ID, draft), [draft, setAnswer]);

  const allAnswered = taller8Cases.every((c) => draft.choices[c.id] && isMeaningfulText(draft.justifications[c.id] ?? "", 6));

  function handleSubmit() {
    if (!allAnswered) {
      setError("Elige un formato y justifica cada uno de los tres casos.");
      return;
    }
    setError(null);
    markCompleted(ID);
    setSubmitted(true);
  }

  return (
    <ActivityShell
      id={ID}
      number={8}
      title="Selección de formato"
      objective="Elegir y justificar el formato adecuado para distintos casos de uso y conservación."
      instructions={<>Para cada caso, elige un formato y justifica tu elección.</>}
      done={isCompleted(ID)}
    >
      <div className="space-y-md">
        {taller8Cases.map((c) => (
          <div key={c.id} className="rounded-lg border border-outline-variant bg-surface-container-low p-md space-y-sm">
            <p className="text-label-md font-label-md font-bold text-on-surface">{c.label}</p>
            <p className="text-body-md font-body-md text-on-surface">{c.scenario}</p>
            <div>
              <label htmlFor={`taller8-formato-${c.id}`} className="text-caption font-caption text-on-surface-variant mb-0.5 block">Formato elegido</label>
              <select
                id={`taller8-formato-${c.id}`}
                value={draft.choices[c.id] ?? ""}
                disabled={submitted}
                onChange={(e) => setDraft((d) => ({ ...d, choices: { ...d.choices, [c.id]: e.target.value } }))}
                className="w-full sm:w-56 rounded-md border border-outline-variant bg-surface-container-lowest px-xs py-1.5 text-body-md text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container"
              >
                <option value="">Selecciona...</option>
                {taller8FormatOptions.map((opt) => (
                  <option key={opt.id} value={opt.id}>{opt.label}</option>
                ))}
              </select>
            </div>
            <OpenTextField
              id={`taller8-just-${c.id}`}
              label="Justificación"
              value={draft.justifications[c.id] ?? ""}
              onChange={(v) => setDraft((d) => ({ ...d, justifications: { ...d.justifications, [c.id]: v } }))}
              rows={2}
              disabled={submitted}
            />
          </div>
        ))}
      </div>
      <OpenAnswerDisclaimer />

      {error && <p className="text-label-md font-label-md text-error">{error}</p>}

      {!submitted ? (
        <Button onClick={handleSubmit}>Enviar selección</Button>
      ) : (
        <FeedbackNote kind="criterio">
          No existe un único formato correcto para todos los casos: la elección depende del propósito, las
          características del documento y los requisitos de conservación — no de una regla universal.
        </FeedbackNote>
      )}
    </ActivityShell>
  );
}
