import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { DragDropClassifier } from "../../../../components/common/DragDropClassifier";
import { ActivityShell } from "./components/ActivityShell";
import { OpenTextField, OpenAnswerDisclaimer } from "./components/OpenTextField";
import { FeedbackNote } from "./components/FeedbackNote";
import { activity2Cases, activity2Categories } from "./activities.data";
import { isMeaningfulText } from "./evaluate";
import { useWeek5Activities } from "./activitiesProgress";

const ID = "actividad-2" as const;

const classifierItems = activity2Cases.map((c) => ({ id: c.id, label: c.label, icon: c.icon, category: c.category }));

export function Activity2Attributes() {
  const { getAnswer, setAnswer, markCompleted, isCompleted } = useWeek5Activities();
  const [classified, setClassified] = useState(isCompleted(ID));
  const [explanation, setExplanation] = useState<string>(() => getAnswer(ID, ""));
  const [submitted, setSubmitted] = useState(isCompleted(ID));
  const [error, setError] = useState<string | null>(null);

  useEffect(() => setAnswer(ID, explanation), [explanation, setAnswer]);

  function handleSubmit() {
    if (!isMeaningfulText(explanation, 8)) {
      setError("Explica con algo más de detalle la diferencia entre los dos atributos que elegiste.");
      return;
    }
    setError(null);
    markCompleted(ID);
    setSubmitted(true);
  }

  return (
    <ActivityShell
      id={ID}
      number={2}
      title="Autenticidad, fiabilidad, integridad y disponibilidad"
      objective="Diferenciar los cuatro atributos de un documento de archivo y reconocerlos en situaciones concretas."
      instructions={<>Cada caso describe una situación documental. Arrastra cada caso (o tócalo y luego toca la categoría) hacia el atributo que le corresponde.</>}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-xs">
        {activity2Cases.map((c) => (
          <p key={c.id} className="rounded-lg border border-outline-variant bg-surface-container-low p-sm text-body-md font-body-md text-on-surface">
            <span className="font-semibold text-primary-container">{c.label}: </span>
            {c.text}
          </p>
        ))}
      </div>

      <DragDropClassifier
        items={classifierItems}
        categories={activity2Categories}
        onComplete={() => setClassified(true)}
      />

      <AnimatePresence>
        {classified && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="pt-sm border-t border-outline-variant space-y-sm">
            <OpenTextField
              id="act2-explain"
              label="Explica con tus propias palabras la diferencia entre dos de estos atributos."
              value={explanation}
              onChange={setExplanation}
              rows={3}
              disabled={submitted}
            />
            <OpenAnswerDisclaimer />

            {error && <p className="text-label-md font-label-md text-error">{error}</p>}

            {!submitted ? (
              <Button onClick={handleSubmit}>Enviar explicación</Button>
            ) : (
              <FeedbackNote kind="bien">
                Los cuatro atributos se relacionan pero no son intercambiables: la autenticidad responde a quién lo
                creó, la fiabilidad a si su contenido representa fielmente lo ocurrido, la integridad a si sigue
                completo y sin alteraciones no autorizadas, y la disponibilidad a si puede localizarse y
                recuperarse cuando se necesita. Un documento puede fallar en uno de ellos sin fallar en los demás.
              </FeedbackNote>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </ActivityShell>
  );
}
