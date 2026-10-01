import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { FeedbackNote } from "../activities/components/FeedbackNote";
import { ActivityShell } from "../activities/components/ActivityShell";
import { taller9Fields } from "./taller.data";
import { isMeaningfulText } from "../activities/evaluate";
import { useWeek8Taller } from "./tallerProgress";

type Draft = Record<string, string>;

const ID = "taller-9" as const;

function emptyDraft(): Draft {
  const draft: Draft = {};
  for (const field of taller9Fields) draft[field.id] = "";
  return draft;
}

export function Taller9DigitizationPlan() {
  const { getAnswer, setAnswer, markCompleted, isCompleted } = useWeek8Taller();
  const [draft, setDraft] = useState<Draft>(() => getAnswer(ID, emptyDraft()));
  const [submitted, setSubmitted] = useState(isCompleted(ID));
  const [error, setError] = useState<string | null>(null);

  useEffect(() => setAnswer(ID, draft), [draft, setAnswer]);

  const completeCount = taller9Fields.filter((f) => isMeaningfulText(draft[f.id] ?? "", 5)).length;

  function handleSubmit() {
    if (completeCount < taller9Fields.length) {
      setError("Completa los cinco campos del plan antes de enviarlo.");
      return;
    }
    setError(null);
    markCompleted(ID);
    setSubmitted(true);
  }

  return (
    <ActivityShell
      id={ID}
      number={9}
      title="Plan básico de digitalización"
      objective="Elaborar un plan básico que cubra preparación, captura, control de calidad, metadatos y almacenamiento."
      instructions={<>Completa los cinco campos del plan a partir de un caso real o hipotético.</>}
      done={isCompleted(ID)}
    >
      <div className="space-y-sm">
        {taller9Fields.map((field) => (
          <div key={field.id}>
            <label htmlFor={`taller9-${field.id}`} className="text-label-md font-label-md font-semibold text-on-surface mb-1 block">
              {field.label}
            </label>
            <textarea
              id={`taller9-${field.id}`}
              rows={2}
              value={draft[field.id] ?? ""}
              disabled={submitted}
              placeholder={field.placeholder}
              onChange={(e) => setDraft((d) => ({ ...d, [field.id]: e.target.value }))}
              className="w-full rounded-lg border border-outline-variant bg-surface-container-low p-sm text-body-md font-body-md text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container disabled:opacity-80"
            />
          </div>
        ))}
      </div>

      <p className="text-caption font-caption text-on-surface-variant">Campos completos: {completeCount}/{taller9Fields.length}.</p>

      {error && <p className="text-label-md font-label-md text-error">{error}</p>}

      {!submitted ? (
        <Button onClick={handleSubmit}>Enviar plan</Button>
      ) : (
        <AnimatePresence>
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}>
            <FeedbackNote kind="bien">
              Un plan de digitalización completo cubre todo el flujo: preparación, captura, control de calidad,
              metadatos y almacenamiento — no basta con "escanear y guardar".
            </FeedbackNote>
          </motion.div>
        </AnimatePresence>
      )}
    </ActivityShell>
  );
}
