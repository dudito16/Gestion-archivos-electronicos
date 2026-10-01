import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { MultiSelectCheck } from "../../../../components/common/MultiSelectCheck";
import { ActivityShell } from "./components/ActivityShell";
import { OpenTextField, OpenAnswerDisclaimer } from "./components/OpenTextField";
import { FeedbackNote } from "./components/FeedbackNote";
import { activity10Aspects, activity10Case } from "./activities.data";
import { isMeaningfulText } from "./evaluate";
import { useWeek7Activities } from "./activitiesProgress";

const ID = "actividad-10" as const;

export function Activity10Integrator() {
  const { getAnswer, setAnswer, markCompleted, isCompleted } = useWeek7Activities();
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
      title="Caso integrador de seguridad documental"
      objective="Integrar lo trabajado en la semana: atributos, riesgos, permisos, respaldo y evidencia."
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
              label="Describe, en orden, las acciones que tomarías ante este caso."
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
                Integraste la respuesta inmediata (registrar y revisar accesos) con las mejoras estructurales
                (respaldo y permisos por responsabilidad) — exactamente la relación entre atributo, riesgo, control y
                evidencia que trabajamos toda la semana.
              </FeedbackNote>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </ActivityShell>
  );
}
