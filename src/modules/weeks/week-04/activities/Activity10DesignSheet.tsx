import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Callout } from "../../../../components/common/Callout";
import { ActivityShell } from "./components/ActivityShell";
import { DynamicFieldList } from "./components/DynamicFieldList";
import { OpenTextField, OpenAnswerDisclaimer } from "./components/OpenTextField";
import { activity10ClosingQuestions, activity10Columns, activity10DocumentTypes, activity10MinFields } from "./activities.data";
import { isMeaningfulText } from "./evaluate";
import { useWeek4Activities } from "./activitiesProgress";

interface Draft {
  tipo: string;
  rows: Record<string, string>[];
  answers: string[];
}

const ID = "actividad-10" as const;

function initialRows(): Record<string, string>[] {
  return Array.from({ length: activity10MinFields }, () => ({ campo: "", valor: "", justificacion: "" }));
}

export function Activity10DesignSheet() {
  const { getAnswer, setAnswer, markCompleted, isCompleted } = useWeek4Activities();
  const [draft, setDraft] = useState<Draft>(() => getAnswer(ID, { tipo: "", rows: initialRows(), answers: ["", "", "", ""] }));
  const [submitted, setSubmitted] = useState(isCompleted(ID));
  const [error, setError] = useState<string | null>(null);

  useEffect(() => setAnswer(ID, draft), [draft, setAnswer]);

  const completeRows = draft.rows.filter((r) => r.campo?.trim() && r.valor?.trim()).length;

  function updateAnswer(index: number, value: string) {
    setDraft((d) => {
      const next = [...d.answers];
      next[index] = value;
      return { ...d, answers: next };
    });
  }

  function handleSubmit() {
    if (!draft.tipo) {
      setError("Selecciona un tipo documental.");
      return;
    }
    if (completeRows < activity10MinFields) {
      setError(`Diseña al menos ${activity10MinFields} metadatos (campo y valor) antes de enviar.`);
      return;
    }
    if (draft.answers.some((a) => !isMeaningfulText(a, 4))) {
      setError("Responde las cuatro preguntas de cierre con algo más de detalle.");
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
      title="Diseña tu propia ficha de metadatos"
      objective="Integrar lo aprendido en la semana diseñando, con criterio propio, una ficha de metadatos completa."
      instructions={<>Actividad de cierre. Selecciona un tipo documental y diseña una ficha con al menos 8 metadatos, cada uno con su valor propuesto y su justificación.</>}
    >
      <div>
        <label htmlFor="act10-tipo" className="text-label-md font-label-md font-semibold text-on-surface mb-1 block">
          Tipo documental
        </label>
        <select
          id="act10-tipo"
          value={draft.tipo}
          disabled={submitted}
          onChange={(e) => setDraft((d) => ({ ...d, tipo: e.target.value }))}
          className="w-full sm:w-64 rounded-lg border border-outline-variant bg-surface-container-low px-sm py-2 text-body-md font-body-md text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container"
        >
          <option value="">Selecciona...</option>
          {activity10DocumentTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <DynamicFieldList
        columns={activity10Columns}
        rows={draft.rows}
        onChange={(rows) => setDraft((d) => ({ ...d, rows }))}
        minRows={1}
        addLabel="+ Agregar metadato"
        disabled={submitted}
      />

      <div className="space-y-sm pt-sm border-t border-outline-variant">
        {activity10ClosingQuestions.map((question, index) => (
          <OpenTextField
            key={question}
            id={`act10-q-${index}`}
            label={`${index + 1}. ${question}`}
            value={draft.answers[index] ?? ""}
            onChange={(v) => updateAnswer(index, v)}
            rows={2}
            disabled={submitted}
          />
        ))}
        <OpenAnswerDisclaimer />
      </div>

      {error && <p className="text-label-md font-label-md text-error">{error}</p>}

      {!submitted ? (
        <Button onClick={handleSubmit}>Enviar ficha final</Button>
      ) : (
        <AnimatePresence>
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}>
            <Callout variant="success" title="¡Actividad de cierre completada!">
              Diseñaste una ficha de {completeRows} metadatos para un documento de tipo "{draft.tipo}". Esta
              actividad integra lo trabajado durante la semana: identificar, clasificar, corregir y ahora proponer
              con criterio propio — la esencia de diseñar un esquema de metadatos responsable.
            </Callout>
          </motion.div>
        </AnimatePresence>
      )}
    </ActivityShell>
  );
}
