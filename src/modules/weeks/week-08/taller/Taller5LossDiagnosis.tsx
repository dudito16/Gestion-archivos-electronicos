import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { MultiSelectCheck } from "../../../../components/common/MultiSelectCheck";
import { FeedbackNote } from "../activities/components/FeedbackNote";
import { ActivityShell } from "../activities/components/ActivityShell";
import { OpenTextField, OpenAnswerDisclaimer } from "../activities/components/OpenTextField";
import { taller5Case, taller5Concerns } from "./taller.data";
import { isMeaningfulText } from "../activities/evaluate";
import { useWeek8Taller } from "./tallerProgress";

const ID = "taller-5" as const;

export function Taller5LossDiagnosis() {
  const { getAnswer, setAnswer, markCompleted, isCompleted } = useWeek8Taller();
  const [checked, setChecked] = useState(isCompleted(ID));
  const [explanation, setExplanation] = useState<string>(() => getAnswer(ID, ""));
  const [submitted, setSubmitted] = useState(isCompleted(ID));
  const [error, setError] = useState<string | null>(null);

  useEffect(() => setAnswer(ID, explanation), [explanation, setAnswer]);

  function handleSubmit() {
    if (!isMeaningfulText(explanation, 8)) {
      setError("Explica con algo más de detalle tu propuesta.");
      return;
    }
    setError(null);
    markCompleted(ID);
    setSubmitted(true);
  }

  return (
    <ActivityShell
      id={ID}
      number={5}
      title="Diagnóstico de pérdida de información"
      objective="Diagnosticar qué información se perdió realmente durante un intercambio documental."
      instructions={<>Lee el caso y selecciona lo que efectivamente representa una pérdida de información.</>}
      done={isCompleted(ID)}
    >
      <p className="rounded-lg border border-outline-variant bg-surface-container-low p-md text-body-md font-body-md text-on-surface">{taller5Case}</p>

      <MultiSelectCheck items={taller5Concerns} onComplete={() => setChecked(true)} />

      <AnimatePresence>
        {checked && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="space-y-sm pt-xs border-t border-outline-variant">
            <OpenTextField
              id="taller5-explain"
              label="Propón una medida concreta para evitar esta pérdida en futuros intercambios."
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
                Un cambio de tipo de letra no afecta la gestión del documento; perder documentos, fechas u orden sí
                compromete su contexto e impide reconstruir el expediente correctamente.
              </FeedbackNote>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </ActivityShell>
  );
}
