import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Callout } from "../../../../components/common/Callout";
import { ActivityShell } from "./components/ActivityShell";
import { OpenTextField, OpenAnswerDisclaimer } from "./components/OpenTextField";
import { activity9Case } from "./activities.data";
import { isMeaningfulText } from "./evaluate";
import { useWeek6Activities } from "./activitiesProgress";

interface Draft {
  choice: "continuar" | "detener" | null;
  justification: string;
}

const ID = "actividad-9" as const;

export function Activity9Decide() {
  const { getAnswer, setAnswer, markCompleted, isCompleted } = useWeek6Activities();
  const [draft, setDraft] = useState<Draft>(() => getAnswer(ID, { choice: null, justification: "" }));
  const [submitted, setSubmitted] = useState(isCompleted(ID));
  const [error, setError] = useState<string | null>(null);

  useEffect(() => setAnswer(ID, draft), [draft, setAnswer]);

  function handleSubmit() {
    if (!draft.choice) {
      setError("Elige si el documento puede continuar o debe detenerse.");
      return;
    }
    if (!isMeaningfulText(draft.justification, 8)) {
      setError("Justifica tu decisión con algo más de detalle.");
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
      title="Decide si el documento puede continuar"
      objective="Tomar una decisión profesional ante una firma técnicamente correcta pero con vacíos de gestión."
      instructions={<>Lee el caso y decide si el documento puede continuar al siguiente paso del trámite.</>}
      done={isCompleted(ID)}
    >
      <p className="rounded-lg border border-outline-variant bg-surface-container-low p-md text-body-md font-body-md text-on-surface">{activity9Case}</p>

      <div className="flex gap-sm">
        <Button variant={draft.choice === "continuar" ? "primary" : "secondary"} disabled={submitted} onClick={() => setDraft((d) => ({ ...d, choice: "continuar" }))}>
          Continuar al siguiente paso
        </Button>
        <Button variant={draft.choice === "detener" ? "primary" : "secondary"} disabled={submitted} onClick={() => setDraft((d) => ({ ...d, choice: "detener" }))}>
          Detener y registrar primero
        </Button>
      </div>

      <OpenTextField
        id="act9-justify"
        label="Justifica tu decisión."
        value={draft.justification}
        onChange={(v) => setDraft((d) => ({ ...d, justification: v }))}
        rows={3}
        disabled={submitted}
      />
      <OpenAnswerDisclaimer />

      {error && <p className="text-label-md font-label-md text-error">{error}</p>}

      {!submitted ? (
        <Button onClick={handleSubmit}>Enviar decisión</Button>
      ) : (
        <AnimatePresence>
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}>
            <Callout variant="info" title="Criterio profesional">
              Ambas posturas admiten debate, pero conviene notar que registrar la revisión antes de avanzar es lo que
              sostendrá la trazabilidad del documento más adelante — una firma correcta no sustituye ese registro.
            </Callout>
          </motion.div>
        </AnimatePresence>
      )}
    </ActivityShell>
  );
}
