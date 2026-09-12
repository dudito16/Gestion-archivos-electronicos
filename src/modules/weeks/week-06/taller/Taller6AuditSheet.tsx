import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { FeedbackNote } from "../activities/components/FeedbackNote";
import { ActivityShell } from "../activities/components/ActivityShell";
import { OpenTextField, OpenAnswerDisclaimer } from "../activities/components/OpenTextField";
import { taller6Fields } from "./taller.data";
import { isMeaningfulText } from "../activities/evaluate";
import { useWeek6Taller } from "./tallerProgress";

interface Draft {
  values: Record<string, string>;
  explanation: string;
}

const ID = "taller-6" as const;

function initialValues(): Record<string, string> {
  const values: Record<string, string> = {};
  for (const f of taller6Fields) values[f.id] = f.initialValue;
  return values;
}

export function Taller6AuditSheet() {
  const { getAnswer, setAnswer, markCompleted, isCompleted } = useWeek6Taller();
  const [draft, setDraft] = useState<Draft>(() => getAnswer(ID, { values: initialValues(), explanation: "" }));
  const [submitted, setSubmitted] = useState(isCompleted(ID));
  const [error, setError] = useState<string | null>(null);

  useEffect(() => setAnswer(ID, draft), [draft, setAnswer]);

  const filledCount = taller6Fields.filter((f) => draft.values[f.id]?.trim()).length;

  function handleSubmit() {
    if (filledCount < taller6Fields.length) {
      setError("Completa los cinco campos de la ficha de auditoría.");
      return;
    }
    if (!isMeaningfulText(draft.explanation, 8)) {
      setError("Explica con algo más de detalle cuáles campos consideras indispensables.");
      return;
    }
    setError(null);
    markCompleted(ID);
    setSubmitted(true);
  }

  return (
    <ActivityShell
      id={ID}
      number={6}
      title="Analiza una ficha de auditoría incompleta"
      objective="Completar una ficha de auditoría documental y reconocer qué campos son indispensables."
      instructions={<>Esta ficha de auditoría está incompleta. Complétala y luego explica qué campos consideras indispensables.</>}
      done={isCompleted(ID)}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-sm">
        {taller6Fields.map((field) => (
          <div key={field.id}>
            <label htmlFor={`taller6-${field.id}`} className="text-label-md font-label-md font-semibold text-on-surface mb-1 block">
              {field.label}
            </label>
            <input
              id={`taller6-${field.id}`}
              type="text"
              value={draft.values[field.id] ?? ""}
              disabled={submitted}
              onChange={(e) => setDraft((d) => ({ ...d, values: { ...d.values, [field.id]: e.target.value } }))}
              className="w-full rounded-lg border border-outline-variant bg-surface-container-low px-sm py-2 text-body-md font-body-md text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container disabled:opacity-80"
            />
          </div>
        ))}
      </div>

      <OpenTextField
        id="taller6-explain"
        label="¿Qué campos consideras indispensables para poder reconstruir esta acción? Justifica."
        value={draft.explanation}
        onChange={(v) => setDraft((d) => ({ ...d, explanation: v }))}
        rows={3}
        disabled={submitted}
      />
      <OpenAnswerDisclaimer />

      {error && <p className="text-label-md font-label-md text-error">{error}</p>}

      {!submitted ? (
        <Button onClick={handleSubmit}>Enviar ficha completada</Button>
      ) : (
        <AnimatePresence>
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}>
            <FeedbackNote kind="bien">
              Una ficha de auditoría sin quién, cuándo o resultado deja huecos que impiden reconstruir la acción con
              confianza — completar cada campo es lo que sostiene después la trazabilidad del documento.
            </FeedbackNote>
          </motion.div>
        </AnimatePresence>
      )}
    </ActivityShell>
  );
}
