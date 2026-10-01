import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { FeedbackNote } from "../activities/components/FeedbackNote";
import { ActivityShell } from "../activities/components/ActivityShell";
import { taller8Fields } from "./taller.data";
import { isMeaningfulText } from "../activities/evaluate";
import { useWeek7Taller } from "./tallerProgress";

type Draft = Record<string, string>;

const ID = "taller-8" as const;

function emptyDraft(): Draft {
  const draft: Draft = {};
  for (const field of taller8Fields) draft[field.id] = "";
  return draft;
}

export function Taller8IncidentReport() {
  const { getAnswer, setAnswer, markCompleted, isCompleted } = useWeek7Taller();
  const [draft, setDraft] = useState<Draft>(() => getAnswer(ID, emptyDraft()));
  const [submitted, setSubmitted] = useState(isCompleted(ID));
  const [error, setError] = useState<string | null>(null);

  useEffect(() => setAnswer(ID, draft), [draft, setAnswer]);

  const completeCount = taller8Fields.filter((f) => isMeaningfulText(draft[f.id] ?? "", 3)).length;

  function handleSubmit() {
    if (completeCount < taller8Fields.length) {
      setError("Completa los cinco campos de la ficha antes de enviarla.");
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
      title="Ficha de incidente"
      objective="Elaborar una ficha básica de incidente, con la información mínima necesaria para su seguimiento."
      instructions={<>Completa los cinco campos de la ficha a partir de un incidente real o hipotético.</>}
      done={isCompleted(ID)}
    >
      <div className="space-y-sm">
        {taller8Fields.map((field) => (
          <div key={field.id}>
            <label htmlFor={`taller8-${field.id}`} className="text-label-md font-label-md font-semibold text-on-surface mb-1 block">
              {field.label}
            </label>
            <textarea
              id={`taller8-${field.id}`}
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

      <p className="text-caption font-caption text-on-surface-variant">Campos completos: {completeCount}/{taller8Fields.length}.</p>

      {error && <p className="text-label-md font-label-md text-error">{error}</p>}

      {!submitted ? (
        <Button onClick={handleSubmit}>Enviar ficha</Button>
      ) : (
        <AnimatePresence>
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}>
            <FeedbackNote kind="bien">
              Una ficha de incidente completa es lo que permite, más adelante, comparar incidentes entre sí y detectar
              patrones — sin ella, cada incidente se trata de forma aislada y no se aprende de él.
            </FeedbackNote>
          </motion.div>
        </AnimatePresence>
      )}
    </ActivityShell>
  );
}
