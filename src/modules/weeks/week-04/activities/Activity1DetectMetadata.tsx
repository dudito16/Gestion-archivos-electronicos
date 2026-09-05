import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Callout } from "../../../../components/common/Callout";
import { ActivityShell } from "./components/ActivityShell";
import { OpenTextField, OpenAnswerDisclaimer } from "./components/OpenTextField";
import { activity1Candidates, activity1SampleDocument } from "./activities.data";
import { matchConcepts, isMeaningfulText } from "./evaluate";
import { useWeek4Activities } from "./activitiesProgress";

interface Draft {
  list: string;
  justification: string;
}

const ID = "actividad-1" as const;

export function Activity1DetectMetadata() {
  const { getAnswer, setAnswer, markCompleted, isCompleted } = useWeek4Activities();
  const [draft, setDraft] = useState<Draft>(() => getAnswer(ID, { list: "", justification: "" }));
  const [submitted, setSubmitted] = useState(isCompleted(ID));
  const [error, setError] = useState<string | null>(null);

  useEffect(() => setAnswer(ID, draft), [draft, setAnswer]);

  const listedCount = draft.list.split(/[\n,;]/).map((s) => s.trim()).filter(Boolean).length;

  function handleSubmit() {
    if (listedCount < 5) {
      setError("Identifica al menos 5 metadatos (sepáralos con comas o en líneas distintas).");
      return;
    }
    if (!isMeaningfulText(draft.justification, 6)) {
      setError("Explica con algo más de detalle por qué esos datos pueden considerarse metadatos.");
      return;
    }
    setError(null);
    markCompleted(ID);
    setSubmitted(true);
  }

  const results = matchConcepts(draft.list, activity1Candidates);
  const foundCount = results.filter((r) => r.matched).length;

  return (
    <ActivityShell
      id={ID}
      number={1}
      title="Detecta los metadatos"
      objective="Reconocer qué datos de un documento electrónico funcionan como metadatos."
      instructions={
        <>Lee el documento de ejemplo y escribe al menos cinco datos que consideres metadatos. Después explica tu criterio.</>
      }
    >
      <pre className="overflow-x-auto rounded-lg border border-outline-variant bg-surface-container-low p-md text-body-md font-body-md font-mono text-on-surface whitespace-pre-wrap">
        {activity1SampleDocument}
      </pre>

      <OpenTextField
        id="act1-list"
        label="¿Qué datos del documento funcionan como metadatos? (mínimo 5, separados por coma o en líneas distintas)"
        value={draft.list}
        onChange={(v) => setDraft((d) => ({ ...d, list: v }))}
        placeholder="Título, Fecha, Código, ..."
        rows={3}
        disabled={submitted}
      />

      <OpenTextField
        id="act1-justify"
        label="Explica por qué los datos que seleccionaste pueden considerarse metadatos."
        value={draft.justification}
        onChange={(v) => setDraft((d) => ({ ...d, justification: v }))}
        rows={3}
        disabled={submitted}
      />
      <OpenAnswerDisclaimer />

      {error && <p className="text-label-md font-label-md text-error">{error}</p>}

      {!submitted ? (
        <Button onClick={handleSubmit}>Enviar identificación</Button>
      ) : (
        <AnimatePresence>
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}>
            <Callout variant="success" title="Retroalimentación">
              De los metadatos habituales en un documento como este, tu respuesta reconoce {foundCount} de{" "}
              {activity1Candidates.length} elementos típicos ({results.filter((r) => r.matched).map((r) => r.candidate.label).join(", ") || "ninguno detectado automáticamente"}).
              Un metadato no es cualquier dato: es información que permite identificar, describir, contextualizar o
              gestionar el documento — por eso el contenido narrativo del memorando no cuenta como metadato, pero sí
              su título, fecha, código o remitente.
            </Callout>
          </motion.div>
        </AnimatePresence>
      )}
    </ActivityShell>
  );
}
