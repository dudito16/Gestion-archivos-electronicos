import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { cn } from "../../../../utils/cn";
import { getIcon } from "../../../../utils/getIcon";
import { ActivityShell } from "./components/ActivityShell";
import { OpenTextField, OpenAnswerDisclaimer } from "./components/OpenTextField";
import { FeedbackNote } from "./components/FeedbackNote";
import { activity1Attributes, activity1Case } from "./activities.data";
import { isMeaningfulText } from "./evaluate";
import { useWeek7Activities } from "./activitiesProgress";

const ID = "actividad-1" as const;

export function Activity1Attribute() {
  const { getAnswer, setAnswer, markCompleted, isCompleted } = useWeek7Activities();
  const [selected, setSelected] = useState<string | null>(null);
  const [checked, setChecked] = useState(isCompleted(ID));
  const [explanation, setExplanation] = useState<string>(() => getAnswer(ID, ""));
  const [submitted, setSubmitted] = useState(isCompleted(ID));
  const [error, setError] = useState<string | null>(null);

  useEffect(() => setAnswer(ID, explanation), [explanation, setAnswer]);

  function check() {
    setChecked(true);
  }

  function handleSubmit() {
    if (!isMeaningfulText(explanation, 6)) {
      setError("Explica con algo más de detalle tu elección.");
      return;
    }
    setError(null);
    markCompleted(ID);
    setSubmitted(true);
  }

  const correct = activity1Attributes.find((a) => a.belongs)!;
  const isRight = checked && selected === correct.id;

  return (
    <ActivityShell
      id={ID}
      number={1}
      title="Identifica el atributo afectado"
      objective="Reconocer qué atributo de seguridad (confidencialidad, integridad o disponibilidad) se ve comprometido en un caso concreto."
      instructions={<>Lee el caso y selecciona el atributo principalmente afectado.</>}
      done={isCompleted(ID)}
    >
      <p className="rounded-lg border border-outline-variant bg-surface-container-low p-md text-body-md font-body-md text-on-surface">{activity1Case}</p>

      <div className="flex flex-wrap gap-xs">
        {activity1Attributes.map((attr) => {
          const Icon = getIcon(attr.icon);
          const isSelected = selected === attr.id;
          const showResult = checked;
          const isThisRight = showResult && attr.id === correct.id;
          return (
            <button
              key={attr.id}
              type="button"
              disabled={checked}
              onClick={() => setSelected(attr.id)}
              className={cn(
                "flex items-center gap-xs rounded-lg border px-md py-sm text-label-md font-label-md font-semibold transition-colors",
                !showResult && isSelected && "border-primary-container bg-secondary-container/50",
                !showResult && !isSelected && "border-outline-variant bg-surface-container-lowest hover:border-primary-container",
                showResult && isThisRight && "border-tertiary-fixed-dim bg-tertiary-fixed/50",
                showResult && isSelected && !isThisRight && "border-error bg-error-container/50",
              )}
            >
              <Icon size={16} /> {attr.label}
            </button>
          );
        })}
      </div>

      {!checked ? (
        <Button disabled={!selected} onClick={check}>
          Comprobar selección
        </Button>
      ) : (
        <>
          <p className={cn("text-label-md font-label-md font-semibold", isRight ? "text-tertiary" : "text-error")}>
            {isRight ? "Correcto." : "Revisa tu selección."}
          </p>

          <AnimatePresence>
            <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="space-y-sm pt-xs border-t border-outline-variant">
              <OpenTextField
                id="act1-explain"
                label="Explica por qué el registro sin autoría ni fecha compromete ese atributo."
                value={explanation}
                onChange={setExplanation}
                rows={3}
                disabled={submitted}
              />
              <OpenAnswerDisclaimer />
              {error && <p className="text-label-md font-label-md text-error">{error}</p>}
              {!submitted ? (
                <Button onClick={handleSubmit}>Enviar respuesta</Button>
              ) : (
                <FeedbackNote kind="bien">
                  El caso compromete la integridad: el contenido cambió sin que exista un registro de quién lo hizo ni
                  cuándo. No hay evidencia de que alguien no autorizado haya leído el documento (confidencialidad) ni
                  de que el sistema esté inaccesible (disponibilidad).
                </FeedbackNote>
              )}
            </motion.div>
          </AnimatePresence>
        </>
      )}
    </ActivityShell>
  );
}
