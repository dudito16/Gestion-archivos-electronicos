import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { cn } from "../../../../utils/cn";
import { ActivityShell } from "./components/ActivityShell";
import { OpenTextField, OpenAnswerDisclaimer } from "./components/OpenTextField";
import { FeedbackNote } from "./components/FeedbackNote";
import { activity9AttributeOptions, activity9Cases } from "./activities.data";
import { isMeaningfulText } from "./evaluate";
import { useWeek5Activities } from "./activitiesProgress";

interface Draft {
  chosenCase: string | null;
  control: string;
}

const ID = "actividad-9" as const;

function CaseAttributePicker({ text, correct, onAnswer }: { text: string; correct: string; onAnswer: () => void }) {
  const [selected, setSelected] = useState<string | null>(null);

  function select(id: string) {
    if (selected) return;
    setSelected(id);
    onAnswer();
  }

  return (
    <div className="rounded-lg border border-outline-variant bg-surface-container-low p-md space-y-sm">
      <p className="text-body-md font-body-md text-on-surface">{text}</p>
      <div className="flex flex-wrap gap-xs">
        {activity9AttributeOptions.map((opt) => {
          const isSelected = selected === opt.id;
          const isCorrectOption = opt.id === correct;
          const showResult = selected !== null;
          return (
            <button
              key={opt.id}
              type="button"
              disabled={showResult}
              onClick={() => select(opt.id)}
              className={cn(
                "rounded-full border px-3 py-1.5 text-caption font-caption font-semibold transition-colors",
                !showResult && "border-outline-variant bg-surface-container-lowest text-on-surface hover:border-primary-container",
                showResult && isCorrectOption && "border-tertiary-fixed-dim bg-tertiary-fixed/50",
                showResult && isSelected && !isCorrectOption && "border-error bg-error-container/60",
                showResult && !isSelected && !isCorrectOption && "opacity-50",
              )}
            >
              {opt.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function Activity9AttributeRisk() {
  const { getAnswer, setAnswer, markCompleted, isCompleted } = useWeek5Activities();
  const [answeredCount, setAnsweredCount] = useState(isCompleted(ID) ? activity9Cases.length : 0);
  const [draft, setDraft] = useState<Draft>(() => getAnswer(ID, { chosenCase: null, control: "" }));
  const [submitted, setSubmitted] = useState(isCompleted(ID));
  const [error, setError] = useState<string | null>(null);

  useEffect(() => setAnswer(ID, draft), [draft, setAnswer]);

  const allAnswered = answeredCount >= activity9Cases.length;

  function handleSubmit() {
    if (!draft.chosenCase) {
      setError("Elige uno de los cuatro casos antes de continuar.");
      return;
    }
    if (!isMeaningfulText(draft.control, 6)) {
      setError("Explica con algo más de detalle qué control propondrías.");
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
      title="¿Qué atributo está en riesgo?"
      objective="Reconocer cuál de los cuatro atributos (autenticidad, fiabilidad, integridad, disponibilidad) compromete cada situación."
      instructions={<>Para cada caso, identifica el atributo comprometido. Luego elige uno de los casos y propone un control.</>}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-sm">
        {activity9Cases.map((c) => (
          <div key={c.id}>
            <p className="text-label-md font-label-md font-bold text-primary-container mb-1">{c.label}</p>
            <CaseAttributePicker
              text={c.text}
              correct={c.correct}
              onAnswer={() => setAnsweredCount((n) => Math.min(activity9Cases.length, n + 1))}
            />
          </div>
        ))}
      </div>

      <AnimatePresence>
        {allAnswered && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="space-y-sm pt-xs border-t border-outline-variant">
            <p className="text-body-lg font-body-lg font-semibold text-on-surface">Elige uno de los casos anteriores:</p>
            <div className="flex flex-wrap gap-xs">
              {activity9Cases.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  disabled={submitted}
                  onClick={() => setDraft((d) => ({ ...d, chosenCase: c.id }))}
                  className={cn(
                    "rounded-full border px-3 py-1.5 text-caption font-caption font-semibold transition-colors",
                    draft.chosenCase === c.id
                      ? "border-primary-container bg-secondary-container text-on-secondary-container"
                      : "border-outline-variant bg-surface-container-lowest text-on-surface hover:border-primary-container",
                  )}
                >
                  {c.label}
                </button>
              ))}
            </div>

            <OpenTextField
              id="act9-control"
              label="¿Qué control propondrías para reducir este riesgo?"
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
                Cada caso aísla un atributo distinto: la autoría cuestionada afecta la autenticidad, un cambio sin
                rastro afecta la integridad, un contenido que no representa fielmente la actuación afecta la
                fiabilidad, y no poder localizar el documento afecta la disponibilidad. Distinguirlos con precisión
                es lo que permite proponer el control correcto en lugar de una medida genérica.
              </FeedbackNote>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </ActivityShell>
  );
}
