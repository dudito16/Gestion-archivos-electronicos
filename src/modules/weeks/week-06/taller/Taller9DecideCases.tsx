import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { cn } from "../../../../utils/cn";
import { FeedbackNote } from "../activities/components/FeedbackNote";
import { ActivityShell } from "../activities/components/ActivityShell";
import { OpenTextField, OpenAnswerDisclaimer } from "../activities/components/OpenTextField";
import { taller9Cases } from "./taller.data";
import { isMeaningfulText } from "../activities/evaluate";
import { useWeek6Taller } from "./tallerProgress";

interface Draft {
  chosenCase: string | null;
  control: string;
}

const ID = "taller-9" as const;

function CaseDecision({ text, correct, onAnswer }: { text: string; correct: "continuar" | "detener"; onAnswer: () => void }) {
  const [choice, setChoice] = useState<"continuar" | "detener" | null>(null);

  function select(value: "continuar" | "detener") {
    if (choice) return;
    setChoice(value);
    onAnswer();
  }

  return (
    <div className="rounded-lg border border-outline-variant bg-surface-container-low p-md space-y-sm">
      <p className="text-body-md font-body-md text-on-surface">{text}</p>
      <div className="flex gap-xs">
        {(["continuar", "detener"] as const).map((option) => {
          const isChosen = choice === option;
          const isCorrectOption = option === correct;
          const showResult = choice !== null;
          return (
            <button
              key={option}
              type="button"
              disabled={showResult}
              onClick={() => select(option)}
              className={cn(
                "rounded-full border px-3 py-1.5 text-caption font-caption font-semibold transition-colors",
                !showResult && "border-outline-variant bg-surface-container-lowest text-on-surface hover:border-primary-container",
                showResult && isCorrectOption && "border-tertiary-fixed-dim bg-tertiary-fixed/50",
                showResult && isChosen && !isCorrectOption && "border-error bg-error-container/60",
                showResult && !isChosen && !isCorrectOption && "opacity-50",
              )}
            >
              {option === "continuar" ? "Continuar" : "Detener"}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function Taller9DecideCases() {
  const { getAnswer, setAnswer, markCompleted, isCompleted } = useWeek6Taller();
  const [answeredCount, setAnsweredCount] = useState(isCompleted(ID) ? taller9Cases.length : 0);
  const [draft, setDraft] = useState<Draft>(() => getAnswer(ID, { chosenCase: null, control: "" }));
  const [submitted, setSubmitted] = useState(isCompleted(ID));
  const [error, setError] = useState<string | null>(null);

  useEffect(() => setAnswer(ID, draft), [draft, setAnswer]);

  const allAnswered = answeredCount >= taller9Cases.length;

  function handleSubmit() {
    if (!draft.chosenCase) {
      setError("Elige uno de los tres casos antes de continuar.");
      return;
    }
    if (!isMeaningfulText(draft.control, 8)) {
      setError("Propón un control con algo más de detalle.");
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
      title="¿Continuar o detener?"
      objective="Tomar decisiones consistentes ante distintas combinaciones de verificación, vigencia y registro."
      instructions={<>Para cada caso, decide si el documento puede continuar o debe detenerse. Luego elige uno y propone un control.</>}
      done={isCompleted(ID)}
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-sm">
        {taller9Cases.map((c) => (
          <div key={c.id}>
            <p className="text-label-md font-label-md font-bold text-primary-container mb-1">{c.label}</p>
            <CaseDecision text={c.text} correct={c.correct} onAnswer={() => setAnsweredCount((n) => Math.min(taller9Cases.length, n + 1))} />
          </div>
        ))}
      </div>

      <AnimatePresence>
        {allAnswered && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="space-y-sm pt-xs border-t border-outline-variant">
            <p className="text-body-lg font-body-lg font-semibold text-on-surface">Elige uno de los casos que se detuvo (o el que consideres más relevante):</p>
            <div className="flex flex-wrap gap-xs">
              {taller9Cases.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  disabled={submitted}
                  onClick={() => setDraft((d) => ({ ...d, chosenCase: c.id }))}
                  className={cn(
                    "rounded-full border px-3 py-1.5 text-caption font-caption font-semibold transition-colors",
                    draft.chosenCase === c.id ? "border-primary-container bg-secondary-container text-on-secondary-container" : "border-outline-variant bg-surface-container-lowest text-on-surface hover:border-primary-container",
                  )}
                >
                  {c.label}
                </button>
              ))}
            </div>

            <OpenTextField
              id="taller9-control"
              label="Propón un control que evitaría este problema en el futuro."
              value={draft.control}
              onChange={(v) => setDraft((d) => ({ ...d, control: v }))}
              rows={3}
              disabled={submitted}
            />
            <OpenAnswerDisclaimer />

            {error && <p className="text-label-md font-label-md text-error">{error}</p>}

            {!submitted ? (
              <Button onClick={handleSubmit}>Enviar respuesta</Button>
            ) : (
              <FeedbackNote kind="bien">
                Solo el Caso A reúne firma verificada, certificado vigente y documento registrado. Los otros dos
                casos muestran que una firma técnicamente correcta no basta: la vigencia del certificado y el
                registro del documento son igual de necesarios.
              </FeedbackNote>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </ActivityShell>
  );
}
