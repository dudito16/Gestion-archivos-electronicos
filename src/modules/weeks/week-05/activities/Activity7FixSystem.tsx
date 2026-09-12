import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { cn } from "../../../../utils/cn";
import { getIcon } from "../../../../utils/getIcon";
import { ActivityShell } from "./components/ActivityShell";
import { OpenTextField, OpenAnswerDisclaimer } from "./components/OpenTextField";
import { FeedbackNote } from "./components/FeedbackNote";
import { activity7Case, activity7Controls } from "./activities.data";
import { isMeaningfulText } from "./evaluate";
import { useWeek5Activities } from "./activitiesProgress";

interface Draft {
  selected: string[];
  priorities: string;
}

const ID = "actividad-7" as const;

export function Activity7FixSystem() {
  const { getAnswer, setAnswer, markCompleted, isCompleted } = useWeek5Activities();
  const [draft, setDraft] = useState<Draft>(() => getAnswer(ID, { selected: [], priorities: "" }));
  const [submitted, setSubmitted] = useState(isCompleted(ID));
  const [error, setError] = useState<string | null>(null);

  useEffect(() => setAnswer(ID, draft), [draft, setAnswer]);

  function toggle(id: string) {
    if (submitted) return;
    setDraft((d) => ({
      ...d,
      selected: d.selected.includes(id) ? d.selected.filter((x) => x !== id) : [...d.selected, id],
    }));
  }

  function handleSubmit() {
    if (draft.selected.length < 3) {
      setError("Selecciona al menos 3 controles que propondrías para este caso.");
      return;
    }
    if (!isMeaningfulText(draft.priorities, 12)) {
      setError("Explica qué problema resolvería cada uno de tus tres controles prioritarios.");
      return;
    }
    setError(null);
    markCompleted(ID);
    setSubmitted(true);
  }

  return (
    <ActivityShell
      id={ID}
      number={7}
      title="Corrige un sistema documental deficiente"
      objective="Proponer controles de gestión documental frente a un caso con versiones dispersas y ausencia de reglas."
      instructions={<>Lee el caso, selecciona los controles que propondrías y luego explica qué problema resolvería cada uno de tus tres controles prioritarios.</>}
    >
      <p className="rounded-lg border border-outline-variant bg-surface-container-low p-md text-body-md font-body-md text-on-surface">
        {activity7Case}
      </p>

      <div className="grid gap-xs sm:grid-cols-2">
        {activity7Controls.map((control) => {
          const Icon = getIcon(control.icon);
          const isSelected = draft.selected.includes(control.id);
          return (
            <button
              key={control.id}
              type="button"
              disabled={submitted}
              onClick={() => toggle(control.id)}
              aria-pressed={isSelected}
              className={cn(
                "flex items-center gap-xs rounded-lg border px-md py-sm text-left text-label-md font-label-md transition-colors",
                isSelected
                  ? "border-primary-container bg-secondary-container/50 text-on-secondary-container"
                  : "border-outline-variant bg-surface-container-lowest text-on-surface hover:border-primary-container",
              )}
            >
              <Icon size={16} className="shrink-0" />
              <span className="flex-1">{control.label}</span>
              {isSelected && <Check size={16} className="text-primary-container shrink-0" />}
            </button>
          );
        })}
      </div>

      <OpenTextField
        id="act7-priorities"
        label="Propón tres controles prioritarios y explica qué problema resolvería cada uno."
        value={draft.priorities}
        onChange={(v) => setDraft((d) => ({ ...d, priorities: v }))}
        rows={4}
        disabled={submitted}
      />
      <OpenAnswerDisclaimer />

      {error && <p className="text-label-md font-label-md text-error">{error}</p>}

      {!submitted ? (
        <Button onClick={handleSubmit}>Enviar propuesta de controles</Button>
      ) : (
        <AnimatePresence>
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}>
            <FeedbackNote kind="criterio">
              En un caso como este, el control de versiones y la identificación resuelven la confusión sobre cuál
              archivo usar como evidencia; el registro y los procedimientos documentados evitan que la gestión
              dependa de la memoria de cada persona; y las responsabilidades definidas aseguran que alguien
              responda por mantener el sistema ordenado en el tiempo.
            </FeedbackNote>
          </motion.div>
        </AnimatePresence>
      )}
    </ActivityShell>
  );
}
