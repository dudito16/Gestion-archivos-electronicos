import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { MultiSelectCheck } from "../../../../components/common/MultiSelectCheck";
import { FeedbackNote } from "../activities/components/FeedbackNote";
import { ActivityShell } from "../activities/components/ActivityShell";
import { OpenTextField, OpenAnswerDisclaimer } from "../activities/components/OpenTextField";
import { taller8Case, taller8Risks } from "./taller.data";
import { isMeaningfulText } from "../activities/evaluate";
import { useWeek6Taller } from "./tallerProgress";

const ID = "taller-8" as const;

export function Taller8DetectManagementProblem() {
  const { getAnswer, setAnswer, markCompleted, isCompleted } = useWeek6Taller();
  const [checked, setChecked] = useState(isCompleted(ID));
  const [explanation, setExplanation] = useState<string>(() => getAnswer(ID, ""));
  const [submitted, setSubmitted] = useState(isCompleted(ID));
  const [error, setError] = useState<string | null>(null);

  useEffect(() => setAnswer(ID, explanation), [explanation, setAnswer]);

  function handleSubmit() {
    if (!isMeaningfulText(explanation, 8)) {
      setError("Explica con algo más de detalle qué acción tomarías.");
      return;
    }
    setError(null);
    markCompleted(ID);
    setSubmitted(true);
  }

  return (
    <ActivityShell
      id={ID}
      number={8}
      title="Detecta un problema de gestión con firma válida"
      objective="Reconocer que una firma técnicamente correcta no resuelve, por sí sola, los problemas de gestión documental."
      instructions={<>Lee el caso, selecciona los problemas reales presentes y explica qué acción tomarías.</>}
      done={isCompleted(ID)}
    >
      <p className="rounded-lg border border-outline-variant bg-surface-container-low p-md text-body-md font-body-md text-on-surface">{taller8Case}</p>

      <MultiSelectCheck items={taller8Risks} onComplete={() => setChecked(true)} />

      <AnimatePresence>
        {checked && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="space-y-sm pt-xs border-t border-outline-variant">
            <OpenTextField
              id="taller8-explain"
              label="¿Qué acción tomarías para corregir esta situación?"
              value={explanation}
              onChange={setExplanation}
              rows={3}
              disabled={submitted}
            />
            <OpenAnswerDisclaimer />
            {error && <p className="text-label-md font-label-md text-error">{error}</p>}
            {!submitted ? (
              <Button onClick={handleSubmit}>Enviar análisis</Button>
            ) : (
              <FeedbackNote kind="criterio">
                La firma en sí misma es válida — el problema no está ahí, sino en que el documento nunca fue
                capturado por el sistema de gestión documental ni registrado formalmente, y su conservación depende
                de una bandeja de correo personal en lugar de un repositorio institucional.
              </FeedbackNote>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </ActivityShell>
  );
}
