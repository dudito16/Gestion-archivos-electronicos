import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { MultiSelectCheck } from "../../../../components/common/MultiSelectCheck";
import { ActivityShell } from "./components/ActivityShell";
import { OpenTextField, OpenAnswerDisclaimer } from "./components/OpenTextField";
import { FeedbackNote } from "./components/FeedbackNote";
import { activity6Statements } from "./activities.data";
import { isMeaningfulText } from "./evaluate";
import { useWeek12Activities } from "./activitiesProgress";

const ID = "actividad-6" as const;

export function Activity6DifferentiatePackages() {
  const { getAnswer, setAnswer, markCompleted, isCompleted } = useWeek12Activities();
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
      number={6}
      title="Diferencia SIP, AIP y DIP"
      objective="Reconocer correctamente las propiedades de cada paquete de información."
      instructions={<>Selecciona las afirmaciones correctas sobre SIP, AIP y DIP.</>}
      done={isCompleted(ID)}
    >
      <MultiSelectCheck items={activity6Statements} onComplete={() => setChecked(true)} />

      <AnimatePresence>
        {checked && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="space-y-sm pt-xs border-t border-outline-variant">
            <OpenTextField
              id="act6-explain"
              label="¿Por qué el DIP no siempre es idéntico al AIP?"
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
                El DIP se prepara según la solicitud específica y las restricciones de acceso vigentes — puede incluir
                solo una parte de lo conservado en el AIP, no necesariamente todo.
              </FeedbackNote>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </ActivityShell>
  );
}
