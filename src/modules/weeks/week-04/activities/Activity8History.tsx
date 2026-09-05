import { ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Callout } from "../../../../components/common/Callout";
import { ActivityShell } from "./components/ActivityShell";
import { OpenTextField, OpenAnswerDisclaimer } from "./components/OpenTextField";
import { activity8Candidates, activity8Flow } from "./activities.data";
import { isMeaningfulText, matchConcepts } from "./evaluate";
import { useWeek4Activities } from "./activitiesProgress";

interface Draft {
  list: string;
  reason: string;
}

const ID = "actividad-8" as const;

export function Activity8History() {
  const { getAnswer, setAnswer, markCompleted, isCompleted } = useWeek4Activities();
  const [draft, setDraft] = useState<Draft>(() => getAnswer(ID, { list: "", reason: "" }));
  const [submitted, setSubmitted] = useState(isCompleted(ID));
  const [error, setError] = useState<string | null>(null);

  useEffect(() => setAnswer(ID, draft), [draft, setAnswer]);

  const listedCount = draft.list.split(/[\n,;]/).map((s) => s.trim()).filter(Boolean).length;

  function handleSubmit() {
    if (listedCount < 4) {
      setError("Escribe al menos 4 metadatos que permitirían reconstruir esta historia.");
      return;
    }
    if (!isMeaningfulText(draft.reason, 6)) {
      setError("Explica con algo más de detalle por qué ayudan a la trazabilidad.");
      return;
    }
    setError(null);
    markCompleted(ID);
    setSubmitted(true);
  }

  const results = matchConcepts(draft.list, activity8Candidates);

  return (
    <ActivityShell
      id={ID}
      number={8}
      title="Reconstruye la historia del documento"
      objective="Relacionar los metadatos con la capacidad de reconstruir las acciones ocurridas sobre un documento."
      instructions={<>Este documento atravesó la siguiente secuencia de eventos. Identifica qué metadatos permitirían reconstruir esa historia.</>}
    >
      <div className="flex flex-wrap items-center gap-1">
        {activity8Flow.map((step, index) => (
          <div key={step} className="flex items-center gap-1">
            <span className="rounded-full border border-outline-variant bg-surface-container-low px-3 py-1 text-label-md font-label-md text-on-surface">
              {step}
            </span>
            {index < activity8Flow.length - 1 && <ArrowRight size={14} className="text-outline shrink-0" />}
          </div>
        ))}
      </div>

      <OpenTextField
        id="act8-list"
        label="¿Qué metadatos permitirían reconstruir esta historia? (mínimo 4)"
        value={draft.list}
        onChange={(v) => setDraft((d) => ({ ...d, list: v }))}
        placeholder="Fecha, Usuario, Acción, Estado, ..."
        rows={2}
        disabled={submitted}
      />
      <OpenTextField
        id="act8-reason"
        label="¿Por qué estos metadatos ayudan a la trazabilidad?"
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
              Tu lista coincide con {results.filter((r) => r.matched).length} de los metadatos típicos de
              trazabilidad ({results.filter((r) => r.matched).map((r) => r.candidate.label).join(", ") || "ninguno detectado automáticamente"}).
              La trazabilidad no es un simple registro cronológico: permite reconstruir quién intervino, cuándo, qué
              acción realizó y con qué resultado, en cada una de las etapas de esta secuencia.
            </Callout>
          </motion.div>
        </AnimatePresence>
      )}
    </ActivityShell>
  );
}
