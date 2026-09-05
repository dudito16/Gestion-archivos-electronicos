import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Callout } from "../../../../components/common/Callout";
import { cn } from "../../../../utils/cn";
import { ActivityShell } from "./components/ActivityShell";
import { OpenTextField, OpenAnswerDisclaimer } from "./components/OpenTextField";
import { activity9DocumentA, activity9DocumentB } from "./activities.data";
import { isMeaningfulText } from "./evaluate";
import { useWeek4Activities } from "./activitiesProgress";

interface Draft {
  choice: "a" | "b" | null;
  justification: string;
}

const ID = "actividad-9" as const;

function DocCard({ label, rows, highlight }: { label: string; rows: { field: string; value: string }[]; highlight?: boolean }) {
  return (
    <div className={cn("rounded-lg border p-md space-y-1", highlight ? "border-primary-container/50 bg-secondary-container/20" : "border-outline-variant bg-surface-container-low")}>
      <p className="text-label-md font-label-md font-bold text-on-surface">{label}</p>
      {rows.map((row) => (
        <p key={row.field} className="text-body-md font-body-md text-on-surface-variant">
          <span className="font-semibold text-on-surface">{row.field}:</span> {row.value}
        </p>
      ))}
    </div>
  );
}

export function Activity9Decision() {
  const { getAnswer, setAnswer, markCompleted, isCompleted } = useWeek4Activities();
  const [draft, setDraft] = useState<Draft>(() => getAnswer(ID, { choice: null, justification: "" }));
  const [submitted, setSubmitted] = useState(isCompleted(ID));
  const [error, setError] = useState<string | null>(null);

  useEffect(() => setAnswer(ID, draft), [draft, setAnswer]);

  function handleSubmit() {
    if (!draft.choice) {
      setError("Elige el documento A o B antes de continuar.");
      return;
    }
    if (!isMeaningfulText(draft.justification, 6)) {
      setError("Justifica tu decisión con algo más de detalle.");
      return;
    }
    setError(null);
    markCompleted(ID);
    setSubmitted(true);
  }

  return (
    <ActivityShell
      id={ID}
      number={9}
      title="Decisión profesional"
      objective="Evaluar la calidad de un conjunto de metadatos en función de su utilidad para la identificación y gestión."
      instructions={<>Dos documentos tienen aparentemente el mismo contenido, pero presentan metadatos distintos. Analiza ambos casos.</>}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-sm">
        <DocCard label="Documento A" rows={activity9DocumentA} highlight={draft.choice === "a"} />
        <DocCard label="Documento B" rows={activity9DocumentB} highlight={draft.choice === "b"} />
      </div>

      <p className="text-body-lg font-body-lg font-semibold text-on-surface">
        ¿Cuál de los dos documentos presenta mejores condiciones para su identificación y gestión?
      </p>
      <div className="flex gap-sm">
        <Button variant={draft.choice === "a" ? "primary" : "secondary"} disabled={submitted} onClick={() => setDraft((d) => ({ ...d, choice: "a" }))}>
          Documento A
        </Button>
        <Button variant={draft.choice === "b" ? "primary" : "secondary"} disabled={submitted} onClick={() => setDraft((d) => ({ ...d, choice: "b" }))}>
          Documento B
        </Button>
      </div>

      <OpenTextField
        id="act9-justify"
        label="Justifica tu decisión."
        value={draft.justification}
        onChange={(v) => setDraft((d) => ({ ...d, justification: v }))}
        rows={3}
        disabled={submitted}
      />
      <OpenAnswerDisclaimer />

      {error && <p className="text-label-md font-label-md text-error">{error}</p>}

      {!submitted ? (
        <Button onClick={handleSubmit}>Enviar decisión</Button>
      ) : (
        <AnimatePresence>
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}>
            <Callout variant="success" title="Retroalimentación">
              {draft.choice === "b"
                ? "El Documento B ofrece una fecha completa, un autor identificable con nombre y apellido, un código estructurado, unidad productora y asunto específico — condiciones que facilitan su identificación y gestión."
                : "Es una posición válida para discutir, pero conviene notar que el Documento B añade una fecha completa, autor identificable, código estructurado, unidad productora y asunto específico — elementos que facilitan su identificación y gestión."}{" "}
              En cualquier caso, la calidad de los metadatos depende del contexto y de las necesidades de gestión de
              cada institución, no de una regla absoluta.
            </Callout>
          </motion.div>
        </AnimatePresence>
      )}
    </ActivityShell>
  );
}
