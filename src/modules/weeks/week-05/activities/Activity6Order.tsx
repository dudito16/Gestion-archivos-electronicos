import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { SequenceBuilder } from "../../../../components/common/SequenceBuilder";
import { ActivityShell } from "./components/ActivityShell";
import { OpenTextField, OpenAnswerDisclaimer } from "./components/OpenTextField";
import { FeedbackNote } from "./components/FeedbackNote";
import { activity6Items, activity6ReferenceOrder } from "./activities.data";
import { isMeaningfulText } from "./evaluate";
import { useWeek5Activities } from "./activitiesProgress";

const ID = "actividad-6" as const;

export function Activity6Order() {
  const { getAnswer, setAnswer, markCompleted, isCompleted } = useWeek5Activities();
  const [ordered, setOrdered] = useState(isCompleted(ID));
  const [explanation, setExplanation] = useState<string>(() => getAnswer(ID, ""));
  const [submitted, setSubmitted] = useState(isCompleted(ID));
  const [error, setError] = useState<string | null>(null);

  useEffect(() => setAnswer(ID, explanation), [explanation, setAnswer]);

  function handleSubmit() {
    if (!isMeaningfulText(explanation, 6)) {
      setError("Explica con algo más de detalle por qué el registro es importante dentro del flujo.");
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
      title="Ordena el ciclo de gestión"
      objective="Reconocer cómo se articulan creación, captura, registro, uso, mantenimiento, control y disposición."
      instructions={<>Toca los elementos en el orden en que normalmente se articulan dentro de un flujo de gestión documental.</>}
    >
      <SequenceBuilder items={activity6Items} correctOrder={activity6ReferenceOrder} onComplete={() => setOrdered(true)} />

      <AnimatePresence>
        {ordered && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="space-y-sm pt-xs border-t border-outline-variant">
            <FeedbackNote kind="revisar">
              El orden anterior representa un patrón habitual, no una secuencia universal obligatoria: según los
              procedimientos de cada organización, algunos procesos pueden solaparse o repetirse (por ejemplo, el
              control puede aplicarse durante toda la vigencia del documento, no solo al final).
            </FeedbackNote>
            <OpenTextField
              id="act6-explain"
              label="Explica por qué el registro es importante dentro del flujo."
              value={explanation}
              onChange={setExplanation}
              rows={3}
              disabled={submitted}
            />
            <OpenAnswerDisclaimer />

            {error && <p className="text-label-md font-label-md text-error">{error}</p>}

            {!submitted && <Button onClick={handleSubmit}>Enviar explicación</Button>}
          </motion.div>
        )}
      </AnimatePresence>
    </ActivityShell>
  );
}
