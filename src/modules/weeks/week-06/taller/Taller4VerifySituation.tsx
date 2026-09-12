import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Callout } from "../../../../components/common/Callout";
import { ActivityShell } from "../activities/components/ActivityShell";
import { OpenTextField, OpenAnswerDisclaimer } from "../activities/components/OpenTextField";
import { taller4Case } from "./taller.data";
import { isMeaningfulText } from "../activities/evaluate";
import { useWeek6Taller } from "./tallerProgress";

interface Draft {
  verification: "si" | "no" | null;
  validation: "si" | "no" | null;
  justification: string;
}

const ID = "taller-4" as const;

function ToggleRow({ label, value, onChange, disabled }: { label: string; value: "si" | "no" | null; onChange: (v: "si" | "no") => void; disabled: boolean }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-sm rounded-lg border border-outline-variant bg-surface-container-low p-sm">
      <span className="text-body-md font-body-md text-on-surface">{label}</span>
      <div className="flex gap-xs shrink-0">
        <button
          type="button"
          disabled={disabled}
          onClick={() => onChange("si")}
          className={`rounded-full border px-3 py-1.5 text-caption font-caption font-semibold transition-colors ${value === "si" ? "border-tertiary-fixed-dim bg-tertiary-fixed/50 text-on-tertiary-fixed-variant" : "border-outline-variant bg-surface-container-lowest text-on-surface"}`}
        >
          Sí
        </button>
        <button
          type="button"
          disabled={disabled}
          onClick={() => onChange("no")}
          className={`rounded-full border px-3 py-1.5 text-caption font-caption font-semibold transition-colors ${value === "no" ? "border-error bg-error-container/50 text-on-error-container" : "border-outline-variant bg-surface-container-lowest text-on-surface"}`}
        >
          No
        </button>
      </div>
    </div>
  );
}

export function Taller4VerifySituation() {
  const { getAnswer, setAnswer, markCompleted, isCompleted } = useWeek6Taller();
  const [draft, setDraft] = useState<Draft>(() => getAnswer(ID, { verification: null, validation: null, justification: "" }));
  const [submitted, setSubmitted] = useState(isCompleted(ID));
  const [error, setError] = useState<string | null>(null);

  useEffect(() => setAnswer(ID, draft), [draft, setAnswer]);

  function handleSubmit() {
    if (!draft.verification || !draft.validation) {
      setError("Responde ambas preguntas antes de continuar.");
      return;
    }
    if (!isMeaningfulText(draft.justification, 8)) {
      setError("Justifica tu respuesta con algo más de detalle.");
      return;
    }
    setError(null);
    markCompleted(ID);
    setSubmitted(true);
  }

  return (
    <ActivityShell
      id={ID}
      number={4}
      title="Verifica una situación de firma"
      objective="Diferenciar, ante un caso concreto, si una firma se verifica técnicamente y si el documento es válido para el trámite."
      instructions={<>Lee el caso y responde ambas preguntas.</>}
      done={isCompleted(ID)}
    >
      <p className="rounded-lg border border-outline-variant bg-surface-container-low p-md text-body-md font-body-md text-on-surface">{taller4Case}</p>

      <ToggleRow
        label="¿La firma se verifica técnicamente (corresponde al documento y no fue alterada)?"
        value={draft.verification}
        onChange={(v) => setDraft((d) => ({ ...d, verification: v }))}
        disabled={submitted}
      />
      <ToggleRow
        label="¿El documento es válido para continuar el trámite?"
        value={draft.validation}
        onChange={(v) => setDraft((d) => ({ ...d, validation: v }))}
        disabled={submitted}
      />

      <OpenTextField
        id="taller4-justify"
        label="Justifica ambas respuestas."
        value={draft.justification}
        onChange={(v) => setDraft((d) => ({ ...d, justification: v }))}
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
            <Callout variant="warning" title="Verificación técnica ≠ validez">
              La firma puede verificarse técnicamente (el documento no fue alterado), pero el documento no es válido
              para el trámite: el certificado fue revocado antes de firmarse. Esta es precisamente la diferencia
              entre verificación y validación.
            </Callout>
          </motion.div>
        </AnimatePresence>
      )}
    </ActivityShell>
  );
}
