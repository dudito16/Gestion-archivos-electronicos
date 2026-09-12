import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { SequenceBuilder } from "../../../../components/common/SequenceBuilder";
import { FeedbackNote } from "../activities/components/FeedbackNote";
import { ActivityShell } from "../activities/components/ActivityShell";
import { OpenTextField, OpenAnswerDisclaimer } from "../activities/components/OpenTextField";
import { taller7CorrectOrder, taller7Items } from "./taller.data";
import { isMeaningfulText } from "../activities/evaluate";
import { useWeek6Taller } from "./tallerProgress";

const ID = "taller-7" as const;

export function Taller7OrderFullProcess() {
  const { getAnswer, setAnswer, markCompleted, isCompleted } = useWeek6Taller();
  const [ordered, setOrdered] = useState(isCompleted(ID));
  const [explanation, setExplanation] = useState<string>(() => getAnswer(ID, ""));
  const [submitted, setSubmitted] = useState(isCompleted(ID));

  useEffect(() => setAnswer(ID, explanation), [explanation, setAnswer]);

  return (
    <ActivityShell
      id={ID}
      number={7}
      title="Ordena el proceso completo: firma y verificación"
      objective="Integrar en una sola secuencia las fases de firma y de verificación de una firma digital."
      instructions={<>Ordena los siete elementos combinando ambas fases del proceso.</>}
      done={isCompleted(ID)}
    >
      <SequenceBuilder items={taller7Items} correctOrder={taller7CorrectOrder} onComplete={() => setOrdered(true)} />

      <AnimatePresence>
        {ordered && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="space-y-sm pt-xs border-t border-outline-variant">
            <OpenTextField
              id="taller7-explain"
              label="¿Por qué la verificación del certificado ocurre después de tener el documento firmado, y no antes?"
              value={explanation}
              onChange={setExplanation}
              rows={3}
              disabled={submitted}
            />
            <OpenAnswerDisclaimer />
            {!submitted ? (
              <Button
                disabled={!isMeaningfulText(explanation, 6)}
                onClick={() => {
                  markCompleted(ID);
                  setSubmitted(true);
                }}
              >
                Enviar explicación
              </Button>
            ) : (
              <FeedbackNote kind="bien">
                Firmar y verificar son procesos espejo: primero se genera el resumen y se aplica la firma con el
                certificado; después, al verificar, se identifica ese mismo certificado, se comprueba la firma y se
                compara el resultado con el documento recibido.
              </FeedbackNote>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </ActivityShell>
  );
}
