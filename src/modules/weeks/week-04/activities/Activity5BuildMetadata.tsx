import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Callout } from "../../../../components/common/Callout";
import { ActivityShell } from "./components/ActivityShell";
import { DynamicFieldList } from "./components/DynamicFieldList";
import { OpenTextField, OpenAnswerDisclaimer } from "./components/OpenTextField";
import { activity5Columns, activity5DocumentBrief, activity5MinFields } from "./activities.data";
import { isMeaningfulText } from "./evaluate";
import { useWeek4Activities } from "./activitiesProgress";

interface Draft {
  rows: Record<string, string>[];
  reason: string;
}

const ID = "actividad-5" as const;

function initialRows(): Record<string, string>[] {
  return Array.from({ length: activity5MinFields }, () => ({ campo: "", valor: "" }));
}

export function Activity5BuildMetadata() {
  const { getAnswer, setAnswer, markCompleted, isCompleted } = useWeek4Activities();
  const [draft, setDraft] = useState<Draft>(() => getAnswer(ID, { rows: initialRows(), reason: "" }));
  const [submitted, setSubmitted] = useState(isCompleted(ID));
  const [error, setError] = useState<string | null>(null);

  useEffect(() => setAnswer(ID, draft), [draft, setAnswer]);

  const completeRows = draft.rows.filter((r) => r.campo?.trim() && r.valor?.trim()).length;

  function handleSubmit() {
    if (completeRows < activity5MinFields) {
      setError(`Completa al menos ${activity5MinFields} campos (campo y valor) antes de enviar.`);
      return;
    }
    if (!isMeaningfulText(draft.reason, 6)) {
      setError("Explica con algo más de detalle tu criterio.");
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
      title="Construye los metadatos"
      objective="Ejercitar criterio profesional al decidir, sin una plantilla previa, qué metadatos necesita un documento."
      instructions={<>Lee la situación y construye desde cero la ficha de metadatos que consideres necesaria. Agrega tantos campos como creas conveniente.</>}
    >
      <p className="text-body-md font-body-md text-on-surface-variant italic">{activity5DocumentBrief}</p>

      <DynamicFieldList
        columns={activity5Columns}
        rows={draft.rows}
        onChange={(rows) => setDraft((d) => ({ ...d, rows }))}
        minRows={1}
        addLabel="+ Agregar campo"
        disabled={submitted}
      />

      <OpenTextField
        id="act5-reason"
        label="¿Por qué consideras que estos metadatos son suficientes para identificar y gestionar el documento?"
        value={draft.reason}
        onChange={(v) => setDraft((d) => ({ ...d, reason: v }))}
        rows={3}
        disabled={submitted}
      />
      <OpenAnswerDisclaimer />

      {error && <p className="text-label-md font-label-md text-error">{error}</p>}

      {!submitted ? (
        <Button onClick={handleSubmit}>Enviar ficha</Button>
      ) : (
        <AnimatePresence>
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}>
            <Callout variant="success" title="Retroalimentación">
              Propusiste {completeRows} campos. No existe un número "correcto" de metadatos: lo relevante es que,
              en conjunto, permitan identificar el documento, comprender su contexto y sostener su gestión sin
              excederse en información innecesaria.
            </Callout>
          </motion.div>
        </AnimatePresence>
      )}
    </ActivityShell>
  );
}
