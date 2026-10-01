import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { MultiSelectCheck } from "../../../../components/common/MultiSelectCheck";
import { ActivityShell } from "./components/ActivityShell";
import { OpenTextField, OpenAnswerDisclaimer } from "./components/OpenTextField";
import { FeedbackNote } from "./components/FeedbackNote";
import { activity10Aspects, activity10Case } from "./activities.data";
import { isMeaningfulText } from "./evaluate";
import { useWeek8Activities } from "./activitiesProgress";

const ID = "actividad-10" as const;

export function Activity10Integrator() {
  const { getAnswer, setAnswer, markCompleted, isCompleted } = useWeek8Activities();
  const [checked, setChecked] = useState(isCompleted(ID));
  const [plan, setPlan] = useState<string>(() => getAnswer(ID, ""));
  const [submitted, setSubmitted] = useState(isCompleted(ID));
  const [error, setError] = useState<string | null>(null);

  useEffect(() => setAnswer(ID, plan), [plan, setAnswer]);

  function handleSubmit() {
    if (!isMeaningfulText(plan, 10)) {
      setError("Describe con algo más de detalle las acciones que tomarías.");
      return;
    }
    setError(null);
    markCompleted(ID);
    setSubmitted(true);
  }

  return (
    <ActivityShell
      id={ID}
      number={10}
      title="Caso integrador de interoperabilidad y digitalización"
      objective="Integrar lo trabajado en la semana: correspondencia de campos, calidad de digitalización y metadatos."
      instructions={<>Actividad de cierre. Lee el caso, selecciona las acciones necesarias y describe tu plan de acción.</>}
      done={isCompleted(ID)}
    >
      <p className="rounded-lg border border-outline-variant bg-surface-container-low p-md text-body-md font-body-md text-on-surface">{activity10Case}</p>

      <MultiSelectCheck items={activity10Aspects} onComplete={() => setChecked(true)} />

      <AnimatePresence>
        {checked && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="space-y-sm pt-xs border-t border-outline-variant">
            <OpenTextField
              id="act10-plan"
              label="Describe, en orden, las acciones que tomarías antes de enviar este expediente."
              value={plan}
              onChange={setPlan}
              rows={4}
              disabled={submitted}
            />
            <OpenAnswerDisclaimer />
            {error && <p className="text-label-md font-label-md text-error">{error}</p>}
            {!submitted ? (
              <Button onClick={handleSubmit}>Enviar plan de acción</Button>
            ) : (
              <FeedbackNote kind="criterio">
                Integraste la correspondencia de campos (interoperabilidad semántica), la revisión de la calidad de
                digitalización y la confirmación organizacional de quién recibe — exactamente las tres dimensiones
                trabajadas toda la semana, aplicadas a un solo caso.
              </FeedbackNote>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </ActivityShell>
  );
}
