import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { MultiSelectCheck } from "../../../../components/common/MultiSelectCheck";
import { ActivityShell } from "../activities/components/ActivityShell";
import { OpenTextField, OpenAnswerDisclaimer } from "../activities/components/OpenTextField";
import { FeedbackNote } from "../activities/components/FeedbackNote";
import { taller1Aspects, taller1Case } from "./taller.data";
import { isMeaningfulText } from "../activities/evaluate";
import { useWeek6Taller } from "./tallerProgress";

const ID = "taller-1" as const;

export function Taller1AnalyzeSignature() {
  const { getAnswer, setAnswer, markCompleted, isCompleted } = useWeek6Taller();
  const [checked, setChecked] = useState(isCompleted(ID));
  const [explanation, setExplanation] = useState<string>(() => getAnswer(ID, ""));
  const [submitted, setSubmitted] = useState(isCompleted(ID));
  const [error, setError] = useState<string | null>(null);

  useEffect(() => setAnswer(ID, explanation), [explanation, setAnswer]);

  function handleSubmit() {
    if (!isMeaningfulText(explanation, 8)) {
      setError("Explica con algo más de detalle qué condiciones se cumplen y cuáles no.");
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
      title="Analiza una firma digital paso a paso"
      objective="Distinguir qué condiciones sostiene realmente el visor de firma de un documento y cuáles no."
      instructions={<>Lee la información que muestra el visor y selecciona qué puede afirmarse con base en ella.</>}
      done={isCompleted(ID)}
    >
      <p className="rounded-lg border border-outline-variant bg-surface-container-low p-md text-body-md font-body-md font-mono text-on-surface">{taller1Case}</p>

      <MultiSelectCheck items={taller1Aspects} onComplete={() => setChecked(true)} />

      <AnimatePresence>
        {checked && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="space-y-sm pt-xs border-t border-outline-variant">
            <OpenTextField
              id="taller1-explain"
              label="¿Qué condiciones adicionales, no visibles en este visor, convendría comprobar de todas formas?"
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
                El visor confirma identidad, vigencia técnica e integridad, pero no dice nada sobre si el certificado
                fue revocado, si el documento fue registrado, ni sobre el contexto del trámite — información que
                normalmente se comprueba en fuentes adicionales.
              </FeedbackNote>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </ActivityShell>
  );
}
