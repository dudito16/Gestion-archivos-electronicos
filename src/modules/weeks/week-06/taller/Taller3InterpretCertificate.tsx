import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { MultiSelectCheck } from "../../../../components/common/MultiSelectCheck";
import { ActivityShell } from "../activities/components/ActivityShell";
import { OpenTextField, OpenAnswerDisclaimer } from "../activities/components/OpenTextField";
import { FeedbackNote } from "../activities/components/FeedbackNote";
import { taller3Certificate, taller3Concerns } from "./taller.data";
import { isMeaningfulText } from "../activities/evaluate";
import { useWeek6Taller } from "./tallerProgress";

const ID = "taller-3" as const;

export function Taller3InterpretCertificate() {
  const { getAnswer, setAnswer, markCompleted, isCompleted } = useWeek6Taller();
  const [checked, setChecked] = useState(isCompleted(ID));
  const [explanation, setExplanation] = useState<string>(() => getAnswer(ID, ""));
  const [submitted, setSubmitted] = useState(isCompleted(ID));
  const [error, setError] = useState<string | null>(null);

  useEffect(() => setAnswer(ID, explanation), [explanation, setAnswer]);

  function handleSubmit() {
    if (!isMeaningfulText(explanation, 8)) {
      setError("Explica con algo más de detalle qué comprobarías antes de aceptar este certificado.");
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
      title="Interpreta un certificado digital"
      objective="Leer los datos de un certificado digital e identificar qué elementos requieren verificación."
      instructions={<>Es el 6 de septiembre de 2026. Revisa los datos del certificado y selecciona qué elementos generan duda.</>}
      done={isCompleted(ID)}
    >
      <div className="rounded-lg border border-outline-variant bg-surface-container-low p-md grid grid-cols-1 sm:grid-cols-2 gap-xs text-body-md font-body-md text-on-surface">
        <p><span className="font-semibold">Titular:</span> {taller3Certificate.titular}</p>
        <p><span className="font-semibold">Emisor:</span> {taller3Certificate.emisor}</p>
        <p><span className="font-semibold">Vigencia:</span> {taller3Certificate.vigencia}</p>
        <p><span className="font-semibold">Uso declarado:</span> {taller3Certificate.usoDeclarado}</p>
      </div>

      <MultiSelectCheck items={taller3Concerns} onComplete={() => setChecked(true)} />

      <AnimatePresence>
        {checked && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="space-y-sm pt-xs border-t border-outline-variant">
            <OpenTextField
              id="taller3-explain"
              label="¿Qué comprobarías antes de aceptar este certificado para un documento actual?"
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
              <FeedbackNote kind="bien">
                El certificado venció en marzo de 2025 — no es vigente hoy. También conviene confirmar que el uso
                declarado corresponda al trámite y precisar quién lo emitió, en lugar de aceptar una descripción
                genérica.
              </FeedbackNote>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </ActivityShell>
  );
}
