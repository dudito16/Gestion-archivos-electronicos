import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { MultiSelectCheck } from "../../../../components/common/MultiSelectCheck";
import { ActivityShell } from "./components/ActivityShell";
import { OpenTextField, OpenAnswerDisclaimer } from "./components/OpenTextField";
import { FeedbackNote } from "./components/FeedbackNote";
import { activity1Aspects, activity1Case } from "./activities.data";
import { isMeaningfulText } from "./evaluate";
import { useWeek5Activities } from "./activitiesProgress";

const ID = "actividad-1" as const;

export function Activity1Evidence() {
  const { getAnswer, setAnswer, markCompleted, isCompleted } = useWeek5Activities();
  const [checked, setChecked] = useState(isCompleted(ID));
  const [explanation, setExplanation] = useState<string>(() => getAnswer(ID, ""));
  const [submitted, setSubmitted] = useState(isCompleted(ID));
  const [error, setError] = useState<string | null>(null);

  useEffect(() => setAnswer(ID, explanation), [explanation, setAnswer]);

  function handleSubmit() {
    if (!isMeaningfulText(explanation, 8)) {
      setError("Elige uno de los aspectos seleccionados y explícalo con algo más de detalle.");
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
      title="¿Qué hace que un documento sea evidencia?"
      objective="Reconocer qué controles y características sostienen el valor de un documento electrónico como evidencia confiable."
      instructions={<>Lee el caso, selecciona los aspectos relevantes y luego explica uno de ellos. No te limites a marcar.</>}
    >
      <p className="rounded-lg border border-outline-variant bg-surface-container-low p-md text-body-md font-body-md text-on-surface">
        {activity1Case}
      </p>

      <p className="text-body-lg font-body-lg font-semibold text-on-surface">
        ¿Qué características o controles deberían considerarse para que el documento pueda funcionar como evidencia confiable?
      </p>

      <MultiSelectCheck
        items={activity1Aspects}
        onComplete={() => setChecked(true)}
      />

      <AnimatePresence>
        {checked && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="space-y-sm pt-xs border-t border-outline-variant">
            <OpenTextField
              id="act1-explain"
              label="Elige uno de los aspectos que marcaste como relevante y explica por qué es importante."
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
              <FeedbackNote kind="criterio">
                Un documento no es evidencia por el solo hecho de existir: lo es cuando puede sostenerse quién lo
                creó, cuándo, en qué contexto y si conserva su integridad desde entonces. Esos mismos elementos son
                la base de los cuatro atributos que trabajaremos en esta semana — autenticidad, fiabilidad,
                integridad y disponibilidad — y de los controles de gestión documental que los sostienen en el
                tiempo.
              </FeedbackNote>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </ActivityShell>
  );
}
