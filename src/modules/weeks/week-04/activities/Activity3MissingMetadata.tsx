import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Callout } from "../../../../components/common/Callout";
import { ActivityShell } from "./components/ActivityShell";
import { OpenTextField, OpenAnswerDisclaimer } from "./components/OpenTextField";
import { activity3IncompleteSheet, activity3MissingCandidates } from "./activities.data";
import { isMeaningfulText, matchConcepts } from "./evaluate";
import { useWeek4Activities } from "./activitiesProgress";

interface Draft {
  missing: string;
  reason: string;
}

const ID = "actividad-3" as const;

export function Activity3MissingMetadata() {
  const { getAnswer, setAnswer, markCompleted, isCompleted } = useWeek4Activities();
  const [draft, setDraft] = useState<Draft>(() => getAnswer(ID, { missing: "", reason: "" }));
  const [submitted, setSubmitted] = useState(isCompleted(ID));
  const [error, setError] = useState<string | null>(null);

  useEffect(() => setAnswer(ID, draft), [draft, setAnswer]);

  const listedCount = draft.missing.split(/[\n,;]/).map((s) => s.trim()).filter(Boolean).length;

  function handleSubmit() {
    if (listedCount < 3) {
      setError("Escribe al menos 3 metadatos que consideres faltantes.");
      return;
    }
    if (!isMeaningfulText(draft.reason, 6)) {
      setError("Explica con un poco más de detalle por qué son necesarios.");
      return;
    }
    setError(null);
    markCompleted(ID);
    setSubmitted(true);
  }

  const results = matchConcepts(draft.missing, activity3MissingCandidates);

  return (
    <ActivityShell
      id={ID}
      number={3}
      title="¿Qué metadato falta?"
      objective="Identificar vacíos de información que comprometen la identificación y gestión de un documento."
      instructions={<>Esta ficha está incompleta. Identifica qué metadatos faltan y explica por qué son necesarios.</>}
    >
      <div className="rounded-lg border border-outline-variant bg-surface-container-low p-md space-y-1">
        {activity3IncompleteSheet.map((row) => (
          <p key={row.field} className="text-body-md font-body-md text-on-surface">
            <span className="font-semibold">{row.field}:</span> {row.value}
          </p>
        ))}
      </div>

      <OpenTextField
        id="act3-missing"
        label="¿Qué metadatos faltan? (mínimo 3)"
        value={draft.missing}
        onChange={(v) => setDraft((d) => ({ ...d, missing: v }))}
        placeholder="Autor, Código, Expediente, ..."
        rows={2}
        disabled={submitted}
      />
      <OpenTextField
        id="act3-reason"
        label="¿Por qué son necesarios?"
        value={draft.reason}
        onChange={(v) => setDraft((d) => ({ ...d, reason: v }))}
        rows={3}
        disabled={submitted}
      />
      <OpenAnswerDisclaimer />

      {error && <p className="text-label-md font-label-md text-error">{error}</p>}

      {!submitted ? (
        <Button onClick={handleSubmit}>Enviar respuesta</Button>
      ) : (
        <AnimatePresence>
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}>
            <Callout variant="success" title="Retroalimentación">
              Tu respuesta coincide con {results.filter((r) => r.matched).length} de los vacíos habituales en una
              ficha como esta ({results.filter((r) => r.matched).map((r) => r.candidate.label).join(", ") || "ninguno detectado automáticamente"}).
              No todos los sistemas necesitan exactamente los mismos campos, pero los metadatos siempre deben
              responder a tres necesidades: identificar el documento, comprender su contexto y sostener su gestión.
            </Callout>
          </motion.div>
        </AnimatePresence>
      )}
    </ActivityShell>
  );
}
