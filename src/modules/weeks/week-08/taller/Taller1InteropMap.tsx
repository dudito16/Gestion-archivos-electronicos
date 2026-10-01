import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { MultiSelectCheck } from "../../../../components/common/MultiSelectCheck";
import { FeedbackNote } from "../activities/components/FeedbackNote";
import { ActivityShell } from "../activities/components/ActivityShell";
import { OpenTextField, OpenAnswerDisclaimer } from "../activities/components/OpenTextField";
import { taller1Case, taller1Concerns } from "./taller.data";
import { isMeaningfulText } from "../activities/evaluate";
import { useWeek8Taller } from "./tallerProgress";

const ID = "taller-1" as const;

export function Taller1InteropMap() {
  const { getAnswer, setAnswer, markCompleted, isCompleted } = useWeek8Taller();
  const [checked, setChecked] = useState(isCompleted(ID));
  const [explanation, setExplanation] = useState<string>(() => getAnswer(ID, ""));
  const [submitted, setSubmitted] = useState(isCompleted(ID));
  const [error, setError] = useState<string | null>(null);

  useEffect(() => setAnswer(ID, explanation), [explanation, setAnswer]);

  function handleSubmit() {
    if (!isMeaningfulText(explanation, 8)) {
      setError("Explica con algo más de detalle tu diagnóstico.");
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
      title="Mapa de interoperabilidad"
      objective="Verificar las condiciones organizacionales, semánticas y técnicas necesarias antes de un intercambio."
      instructions={<>Lee el caso y selecciona las condiciones que realmente deben verificarse.</>}
      done={isCompleted(ID)}
    >
      <p className="rounded-lg border border-outline-variant bg-surface-container-low p-md text-body-md font-body-md text-on-surface">{taller1Case}</p>

      <MultiSelectCheck items={taller1Concerns} onComplete={() => setChecked(true)} />

      <AnimatePresence>
        {checked && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="space-y-sm pt-xs border-t border-outline-variant">
            <OpenTextField
              id="taller1-explain"
              label="¿Por qué no basta con que ambas entidades usen el mismo proveedor de software?"
              value={explanation}
              onChange={setExplanation}
              rows={3}
              disabled={submitted}
            />
            <OpenAnswerDisclaimer />
            {error && <p className="text-label-md font-label-md text-error">{error}</p>}
            {!submitted ? (
              <Button onClick={handleSubmit}>Enviar diagnóstico</Button>
            ) : (
              <FeedbackNote kind="bien">
                Usar el mismo proveedor no garantiza interoperabilidad: igual deben existir procesos compatibles,
                significado compartido de los datos y un mecanismo técnico de intercambio definido.
              </FeedbackNote>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </ActivityShell>
  );
}
