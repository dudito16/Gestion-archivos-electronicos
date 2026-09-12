import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { cn } from "../../../../utils/cn";
import { getIcon } from "../../../../utils/getIcon";
import { ActivityShell } from "./components/ActivityShell";
import { OpenTextField, OpenAnswerDisclaimer } from "./components/OpenTextField";
import { FeedbackNote } from "./components/FeedbackNote";
import { activity4Items } from "./activities.data";
import { isMeaningfulText } from "./evaluate";
import { useWeek5Activities } from "./activitiesProgress";

type Choice = "captura" | "no-captura" | null;

interface Draft {
  choices: Record<string, Choice>;
  justification: string;
}

const ID = "actividad-4" as const;

function emptyChoices(): Record<string, Choice> {
  const choices: Record<string, Choice> = {};
  for (const item of activity4Items) choices[item.id] = null;
  return choices;
}

export function Activity4Capture() {
  const { getAnswer, setAnswer, markCompleted, isCompleted } = useWeek5Activities();
  const [draft, setDraft] = useState<Draft>(() => getAnswer(ID, { choices: emptyChoices(), justification: "" }));
  const [submitted, setSubmitted] = useState(isCompleted(ID));
  const [error, setError] = useState<string | null>(null);

  useEffect(() => setAnswer(ID, draft), [draft, setAnswer]);

  const allDecided = activity4Items.every((item) => draft.choices[item.id] !== null);

  function setChoice(id: string, choice: Choice) {
    if (submitted) return;
    setDraft((d) => ({ ...d, choices: { ...d.choices, [id]: choice } }));
  }

  function handleSubmit() {
    if (!allDecided) {
      setError("Toma una decisión (capturar o no capturar) para los cinco documentos.");
      return;
    }
    if (!isMeaningfulText(draft.justification, 10)) {
      setError("Justifica al menos dos de tus decisiones con algo más de detalle.");
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
      title="Captura o no captura"
      objective="Analizar, caso por caso, qué documentos deberían ser objeto de captura dentro del sistema de gestión documental."
      instructions={<>Para cada documento, decide si debería capturarse dentro del sistema de gestión documental. Luego justifica al menos dos decisiones.</>}
    >
      <div className="space-y-xs">
        {activity4Items.map((item) => {
          const Icon = getIcon(item.icon);
          const choice = draft.choices[item.id];
          return (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-sm rounded-lg border border-outline-variant bg-surface-container-low p-sm"
            >
              <div className="flex items-center gap-xs">
                <Icon size={16} className="shrink-0 text-primary-container" />
                <span className="text-body-md font-body-md text-on-surface">{item.label}</span>
              </div>
              <div className="flex gap-xs shrink-0">
                <button
                  type="button"
                  disabled={submitted}
                  onClick={() => setChoice(item.id, "captura")}
                  className={cn(
                    "rounded-full border px-3 py-1.5 text-caption font-caption font-semibold transition-colors",
                    choice === "captura"
                      ? "border-tertiary-fixed-dim bg-tertiary-fixed/50 text-on-tertiary-fixed-variant"
                      : "border-outline-variant bg-surface-container-lowest text-on-surface hover:border-primary-container",
                  )}
                >
                  Sí, capturar
                </button>
                <button
                  type="button"
                  disabled={submitted}
                  onClick={() => setChoice(item.id, "no-captura")}
                  className={cn(
                    "rounded-full border px-3 py-1.5 text-caption font-caption font-semibold transition-colors",
                    choice === "no-captura"
                      ? "border-error bg-error-container/50 text-on-error-container"
                      : "border-outline-variant bg-surface-container-lowest text-on-surface hover:border-primary-container",
                  )}
                >
                  No capturar
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <OpenTextField
        id="act4-justify"
        label="Justifica al menos dos de tus decisiones."
        value={draft.justification}
        onChange={(v) => setDraft((d) => ({ ...d, justification: v }))}
        rows={4}
        disabled={submitted}
      />
      <OpenAnswerDisclaimer />

      {error && <p className="text-label-md font-label-md text-error">{error}</p>}

      {!submitted ? (
        <Button onClick={handleSubmit}>Enviar decisiones</Button>
      ) : (
        <AnimatePresence>
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}>
            <FeedbackNote kind="criterio">
              No existe una regla rígida y universal: la captura depende del contexto, de las políticas
              institucionales y de si el documento debe mantenerse como evidencia de una actividad. Un borrador
              personal o una nota sin relación con un trámite normalmente no se capturan; un documento recibido
              formalmente, un informe que sustenta una decisión o algo que ya forma parte de un expediente,
              habitualmente sí — porque de eso depende poder demostrar después qué ocurrió y por qué.
            </FeedbackNote>
          </motion.div>
        </AnimatePresence>
      )}
    </ActivityShell>
  );
}
