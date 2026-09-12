import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { ActivityShell } from "./components/ActivityShell";
import { OpenTextField, OpenAnswerDisclaimer } from "./components/OpenTextField";
import { FeedbackNote } from "./components/FeedbackNote";
import { activity5Document, activity5Fields } from "./activities.data";
import { isMeaningfulText } from "./evaluate";
import { useWeek5Activities } from "./activitiesProgress";

interface Draft {
  values: Record<string, string>;
  reflection: string;
}

const ID = "actividad-5" as const;

function emptyValues(): Record<string, string> {
  const values: Record<string, string> = {};
  for (const field of activity5Fields) values[field.key] = "";
  return values;
}

const MIN_FILLED = 8;

export function Activity5Registration() {
  const { getAnswer, setAnswer, markCompleted, isCompleted } = useWeek5Activities();
  const [draft, setDraft] = useState<Draft>(() => getAnswer(ID, { values: emptyValues(), reflection: "" }));
  const [submitted, setSubmitted] = useState(isCompleted(ID));
  const [error, setError] = useState<string | null>(null);

  useEffect(() => setAnswer(ID, draft), [draft, setAnswer]);

  const filledCount = activity5Fields.filter((f) => draft.values[f.key]?.trim()).length;

  function handleSubmit() {
    if (filledCount < MIN_FILLED) {
      setError(`Completa al menos ${MIN_FILLED} de los ${activity5Fields.length} campos de la ficha de registro.`);
      return;
    }
    if (!isMeaningfulText(draft.reflection, 6)) {
      setError("Explica con algo más de detalle qué información consideras indispensable.");
      return;
    }
    setError(null);
    markCompleted(ID);
    setSubmitted(true);
  }

  return (
    <ActivityShell
      id={ID}
      number={5}
      title="Construye el registro documental"
      objective="Identificar la información mínima que permite registrar y gestionar un documento electrónico."
      instructions={<>Lee el documento electrónico y completa su ficha de registro.</>}
    >
      <p className="rounded-lg border border-outline-variant bg-surface-container-low p-md text-body-md font-body-md text-on-surface">
        {activity5Document}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-sm">
        {activity5Fields.map((field) => (
          <div key={field.key}>
            <label htmlFor={`act5-${field.key}`} className="text-label-md font-label-md font-semibold text-on-surface mb-1 block">
              {field.label}
            </label>
            <input
              id={`act5-${field.key}`}
              type="text"
              value={draft.values[field.key] ?? ""}
              disabled={submitted}
              placeholder={field.placeholder}
              onChange={(e) => setDraft((d) => ({ ...d, values: { ...d.values, [field.key]: e.target.value } }))}
              className="w-full rounded-lg border border-outline-variant bg-surface-container-low px-sm py-2 text-body-md font-body-md text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container disabled:opacity-80"
            />
          </div>
        ))}
      </div>

      <OpenTextField
        id="act5-reflection"
        label="¿Qué información del registro consideras indispensable para poder identificar y gestionar el documento?"
        value={draft.reflection}
        onChange={(v) => setDraft((d) => ({ ...d, reflection: v }))}
        rows={3}
        disabled={submitted}
      />
      <OpenAnswerDisclaimer />

      {error && <p className="text-label-md font-label-md text-error">{error}</p>}

      {!submitted ? (
        <Button onClick={handleSubmit}>Enviar ficha de registro</Button>
      ) : (
        <AnimatePresence>
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}>
            <FeedbackNote kind="bien">
              Completaste {filledCount} de {activity5Fields.length} campos. Un buen registro no solo identifica el
              documento (identificador, título, fecha); también lo sitúa en su contexto — productor, unidad
              responsable y relación con el trámite — que es precisamente lo que permite tratarlo después como
              evidencia confiable de una actividad concreta.
            </FeedbackNote>
          </motion.div>
        </AnimatePresence>
      )}
    </ActivityShell>
  );
}
