import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Callout } from "../../../../components/common/Callout";
import { ActivityShell } from "./components/ActivityShell";
import { OpenTextField, OpenAnswerDisclaimer } from "./components/OpenTextField";
import { activity6InitialSheet, activity6KnownProblems } from "./activities.data";
import { isMeaningfulText } from "./evaluate";
import { useWeek4Activities } from "./activitiesProgress";

interface Draft {
  values: Record<string, string>;
  corrections: string;
}

const ID = "actividad-6" as const;

function initialValues(): Record<string, string> {
  const values: Record<string, string> = {};
  for (const row of activity6InitialSheet) values[row.id] = row.value;
  return values;
}

export function Activity6FixSheet() {
  const { getAnswer, setAnswer, markCompleted, isCompleted } = useWeek4Activities();
  const [draft, setDraft] = useState<Draft>(() => getAnswer(ID, { values: initialValues(), corrections: "" }));
  const [submitted, setSubmitted] = useState(isCompleted(ID));
  const [error, setError] = useState<string | null>(null);

  useEffect(() => setAnswer(ID, draft), [draft, setAnswer]);

  function handleSubmit() {
    const changed = activity6InitialSheet.filter((row) => draft.values[row.id]?.trim() !== row.value).length;
    if (changed < 3) {
      setError("Corrige al menos 3 campos de la ficha antes de enviarla.");
      return;
    }
    if (!isMeaningfulText(draft.corrections, 8)) {
      setError("Explica con más detalle al menos 3 de tus correcciones.");
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
      title="Corrige la ficha"
      objective="Aplicar criterio profesional para detectar y corregir metadatos deficientes."
      instructions={<>Esta ficha fue elaborada sin cuidado. Edita directamente los valores para corregirlos y luego explica tus correcciones.</>}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-sm">
        {activity6InitialSheet.map((row) => (
          <div key={row.id}>
            <label htmlFor={`act6-${row.id}`} className="text-label-md font-label-md font-semibold text-on-surface mb-1 block">
              {row.field}
            </label>
            <input
              id={`act6-${row.id}`}
              type="text"
              value={draft.values[row.id] ?? ""}
              disabled={submitted}
              onChange={(e) => setDraft((d) => ({ ...d, values: { ...d.values, [row.id]: e.target.value } }))}
              className="w-full rounded-lg border border-outline-variant bg-surface-container-low px-sm py-2 text-body-md font-body-md text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container disabled:opacity-80"
            />
          </div>
        ))}
      </div>

      <OpenTextField
        id="act6-corrections"
        label="Explica al menos 3 correcciones que realizaste y por qué eran necesarias."
        value={draft.corrections}
        onChange={(v) => setDraft((d) => ({ ...d, corrections: v }))}
        rows={4}
        disabled={submitted}
      />
      <OpenAnswerDisclaimer />

      {error && <p className="text-label-md font-label-md text-error">{error}</p>}

      {!submitted ? (
        <Button onClick={handleSubmit}>Enviar ficha corregida</Button>
      ) : (
        <AnimatePresence>
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}>
            <Callout variant="success" title="Problemas típicos en fichas mal elaboradas">
              {activity6KnownProblems.join(" · ")}. Compara esta lista con tus correcciones: una buena ficha de
              metadatos evita valores genéricos ("Documento nuevo", "Varios"), nombres incompletos, fechas sin día ni
              mes, y tipos documentales imprecisos.
            </Callout>
          </motion.div>
        </AnimatePresence>
      )}
    </ActivityShell>
  );
}
