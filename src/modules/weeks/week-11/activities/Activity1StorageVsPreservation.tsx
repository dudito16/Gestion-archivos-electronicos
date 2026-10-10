import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { MultiSelectCheck } from "../../../../components/common/MultiSelectCheck";
import { ActivityShell } from "./components/ActivityShell";
import { OpenTextField, OpenAnswerDisclaimer } from "./components/OpenTextField";
import { FeedbackNote } from "./components/FeedbackNote";
import { activity1Statements } from "./activities.data";
import { isMeaningfulText } from "./evaluate";
import { useWeek11Activities } from "./activitiesProgress";

const ID = "actividad-1" as const;

export function Activity1StorageVsPreservation() {
  const { getAnswer, setAnswer, markCompleted, isCompleted } = useWeek11Activities();
  const [checked, setChecked] = useState(isCompleted(ID));
  const [explanation, setExplanation] = useState<string>(() => getAnswer(ID, ""));
  const [submitted, setSubmitted] = useState(isCompleted(ID));
  const [error, setError] = useState<string | null>(null);

  useEffect(() => setAnswer(ID, explanation), [explanation, setAnswer]);

  function handleSubmit() {
    if (!isMeaningfulText(explanation, 6)) {
      setError("Explica con algo más de detalle tu selección.");
      return;
    }
    setError(null);
    markCompleted(ID);
    setSubmitted(true);
  }

  return (
    <ActivityShell
      id={ID}
      number={1}
      title="Almacenar no es preservar"
      objective="Diferenciar el almacenamiento y el respaldo de una verdadera estrategia de preservación digital."
      instructions={<>Selecciona las afirmaciones correctas sobre la diferencia entre almacenar y preservar.</>}
      done={isCompleted(ID)}
    >
      <MultiSelectCheck items={activity1Statements} onComplete={() => setChecked(true)} />

      <AnimatePresence>
        {checked && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="space-y-sm pt-xs border-t border-outline-variant">
            <OpenTextField
              id="act1-explain"
              label="¿Por qué una copia de seguridad no resuelve, por sí sola, la obsolescencia de formatos?"
              value={explanation}
              onChange={setExplanation}
              rows={3}
              disabled={submitted}
            />
            <OpenAnswerDisclaimer />
            {error && <p className="text-label-md font-label-md text-error">{error}</p>}
            {!submitted ? (
              <Button onClick={handleSubmit}>Enviar respuesta</Button>
            ) : (
              <FeedbackNote kind="bien">
                Una copia de seguridad protege contra una pérdida accidental inmediata, pero no gestiona que un
                formato deje de tener soporte ni que el software necesario desaparezca — eso requiere planificación.
              </FeedbackNote>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </ActivityShell>
  );
}
