import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { MultiSelectCheck } from "../../../../components/common/MultiSelectCheck";
import { ActivityShell } from "./components/ActivityShell";
import { OpenTextField, OpenAnswerDisclaimer } from "./components/OpenTextField";
import { FeedbackNote } from "./components/FeedbackNote";
import { activity3Case, activity3Risks } from "./activities.data";
import { isMeaningfulText } from "./evaluate";
import { useWeek5Activities } from "./activitiesProgress";

const ID = "actividad-3" as const;

export function Activity3Risks() {
  const { getAnswer, setAnswer, markCompleted, isCompleted } = useWeek5Activities();
  const [checked, setChecked] = useState(isCompleted(ID));
  const [mostImportant, setMostImportant] = useState<string>(() => getAnswer(ID, ""));
  const [submitted, setSubmitted] = useState(isCompleted(ID));
  const [error, setError] = useState<string | null>(null);

  useEffect(() => setAnswer(ID, mostImportant), [mostImportant, setAnswer]);

  function handleSubmit() {
    if (!isMeaningfulText(mostImportant, 8)) {
      setError("Explica con algo más de detalle cuál riesgo consideras más importante y por qué.");
      return;
    }
    setError(null);
    markCompleted(ID);
    setSubmitted(true);
  }

  return (
    <ActivityShell
      id={ID}
      number={3}
      title="Detecta los riesgos"
      objective="Identificar riesgos que comprometen la gestión documental cuando faltan controles básicos."
      instructions={<>Lee el caso, identifica al menos 4 riesgos y luego explica cuál consideras el más importante.</>}
    >
      <p className="rounded-lg border border-outline-variant bg-surface-container-low p-md text-body-md font-body-md text-on-surface">
        {activity3Case}
      </p>

      <p className="text-body-lg font-body-lg font-semibold text-on-surface">Selecciona al menos 4 riesgos presentes en este caso.</p>

      <MultiSelectCheck items={activity3Risks} onComplete={() => setChecked(true)} />

      <AnimatePresence>
        {checked && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="space-y-sm pt-xs border-t border-outline-variant">
            <OpenTextField
              id="act3-important"
              label="¿Cuál consideras que es el riesgo más importante y por qué?"
              value={mostImportant}
              onChange={setMostImportant}
              rows={3}
              disabled={submitted}
            />
            <OpenAnswerDisclaimer />

            {error && <p className="text-label-md font-label-md text-error">{error}</p>}

            {!submitted ? (
              <Button onClick={handleSubmit}>Enviar análisis</Button>
            ) : (
              <FeedbackNote kind="revisar">
                Cada uno de estos riesgos se reduce con un control concreto: el registro identifica y da
                trazabilidad a cada documento, definir responsables y procedimientos evita la dispersión en
                carpetas personales, y dejar constancia de los cambios sostiene la integridad. Los controles de
                gestión documental no eliminan el riesgo por completo, pero permiten detectarlo y demostrarlo.
              </FeedbackNote>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </ActivityShell>
  );
}
