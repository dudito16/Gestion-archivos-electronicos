import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { MultiSelectCheck } from "../../../../components/common/MultiSelectCheck";
import { ActivityShell } from "./components/ActivityShell";
import { OpenTextField, OpenAnswerDisclaimer } from "./components/OpenTextField";
import { FeedbackNote } from "./components/FeedbackNote";
import { activity1Statements } from "./activities.data";
import { isMeaningfulText } from "./evaluate";
import { useWeek12Activities } from "./activitiesProgress";

const ID = "actividad-1" as const;

export function Activity1OaisPurpose() {
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
      number={1}
      title="¿Para qué sirve el modelo OAIS?"
      objective="Identificar el propósito real del modelo OAIS, distinguiéndolo de una promesa automática de preservación."
      instructions={<>Selecciona las afirmaciones correctas sobre el propósito del modelo OAIS.</>}
      done={isCompleted(ID)}
    >
      <MultiSelectCheck items={activity1Statements} onComplete={() => setChecked(true)} />

      <AnimatePresence>
        {checked && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="space-y-sm pt-xs border-t border-outline-variant">
            <OpenTextField
              id="act1-explain"
              label="¿Por qué instalar un software no equivale, por sí solo, a aplicar el modelo OAIS?"
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
                OAIS es un modelo de referencia: aporta conceptos, funciones y vocabulario común. Un software puede
                adoptarlos, pero la preservación real depende de cómo la institución los interprete y los sostenga.
              </FeedbackNote>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </ActivityShell>
  );
}
