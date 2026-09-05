import { Download } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Callout } from "../../../../components/common/Callout";
import { ActivityShell } from "./components/ActivityShell";
import { OpenTextField, OpenAnswerDisclaimer } from "./components/OpenTextField";
import { VerdictBadge } from "./components/VerdictBadge";
import {
  activity2Fields,
  activity2JustifyPrompts,
  activity2PdfUrl,
  activity2ReflectionIntro,
  activity2ReflectionPrompts,
} from "./activities.data";
import { evaluateField, isMeaningfulText } from "./evaluate";
import { useWeek4Activities } from "./activitiesProgress";

interface Draft {
  values: Record<string, string>;
  justifications: string[];
  reflections: string[];
}

const ID = "actividad-2" as const;

function emptyDraft(): Draft {
  const values: Record<string, string> = {};
  for (const f of activity2Fields) values[f.id] = "";
  return { values, justifications: ["", "", ""], reflections: ["", ""] };
}

export function Activity2CompleteForm() {
  const { getAnswer, setAnswer, markCompleted, isCompleted } = useWeek4Activities();
  const [draft, setDraft] = useState<Draft>(() => getAnswer(ID, emptyDraft()));
  const [submitted, setSubmitted] = useState(isCompleted(ID));
  const [error, setError] = useState<string | null>(null);

  useEffect(() => setAnswer(ID, draft), [draft, setAnswer]);

  function updateValue(fieldId: string, value: string) {
    setDraft((d) => ({ ...d, values: { ...d.values, [fieldId]: value } }));
  }

  function updateJustification(index: number, value: string) {
    setDraft((d) => {
      const next = [...d.justifications];
      next[index] = value;
      return { ...d, justifications: next };
    });
  }

  function updateReflection(index: number, value: string) {
    setDraft((d) => {
      const next = [...d.reflections];
      next[index] = value;
      return { ...d, reflections: next };
    });
  }

  const filledCount = activity2Fields.filter((f) => draft.values[f.id]?.trim()).length;

  function handleCheckFicha() {
    if (filledCount < activity2Fields.length) {
      setError(`Completa los ${activity2Fields.length} campos de la ficha antes de enviarla (llevas ${filledCount}).`);
      return;
    }
    setError(null);
    setSubmitted(true);
  }

  function handleFinalize() {
    if (!isMeaningfulText(draft.reflections[0], 6)) {
      setError("Completa la primera pregunta de la Reflexión profesional con una respuesta más desarrollada.");
      return;
    }
    if (!isMeaningfulText(draft.reflections[1], 6)) {
      setError("Completa la segunda pregunta de la Reflexión profesional con una respuesta más desarrollada.");
      return;
    }
    setError(null);
    markCompleted(ID);
  }

  return (
    <ActivityShell
      id={ID}
      number={2}
      title="Completa la ficha — Informe técnico"
      objective="Extraer metadatos reales a partir de la lectura y el análisis de un documento completo."
      instructions={
        <>
          Descarga y revisa el Informe técnico. Luego completa los metadatos utilizando exclusivamente la
          información que encuentres en el documento.
        </>
      }
    >
      <a
        href={activity2PdfUrl}
        download
        className="inline-flex items-center gap-xs rounded-lg bg-primary-container px-md py-sm text-label-md font-label-md font-semibold text-on-primary hover:bg-primary transition-colors"
      >
        <Download size={16} /> Descargar Informe técnico (PDF)
      </a>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-sm">
        {activity2Fields.map((field) => {
          const result = submitted ? evaluateField(draft.values[field.id] ?? "", field) : null;
          return (
            <div key={field.id} className="space-y-1">
              <label htmlFor={`act2-${field.id}`} className="text-label-md font-label-md font-semibold text-on-surface block">
                {field.label}
              </label>
              <input
                id={`act2-${field.id}`}
                type="text"
                value={draft.values[field.id] ?? ""}
                onChange={(e) => updateValue(field.id, e.target.value)}
                placeholder={field.placeholder}
                disabled={submitted}
                className="w-full rounded-lg border border-outline-variant bg-surface-container-low px-sm py-2 text-body-md font-body-md text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container disabled:opacity-80"
              />
              {result && (
                <div className="rounded-md bg-surface-container-low p-2 space-y-1">
                  <VerdictBadge verdict={result} />
                  <p className="text-caption font-caption text-on-surface-variant">
                    <span className="font-semibold text-on-surface">Criterio esperado:</span> {field.criterionText}
                  </p>
                  <p className="text-caption font-caption text-on-surface-variant">{field.explanation}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {submitted && (
        <div className="space-y-md pt-sm border-t border-outline-variant">
          <p className="text-label-md font-label-md font-bold text-on-surface">Justifica 3 de los metadatos que propusiste</p>
          {activity2JustifyPrompts.map((prompt, index) => (
            <OpenTextField
              key={prompt}
              id={`act2-justify-${index}`}
              label={prompt}
              value={draft.justifications[index] ?? ""}
              onChange={(v) => updateJustification(index, v)}
              rows={2}
            />
          ))}
          <OpenAnswerDisclaimer />

          <div className="space-y-sm pt-sm border-t border-outline-variant">
            <p className="text-label-md font-label-md font-bold text-on-surface">Reflexión profesional</p>
            <p className="text-body-md font-body-md text-on-surface-variant">{activity2ReflectionIntro}</p>
            {activity2ReflectionPrompts.map((prompt, index) => (
              <OpenTextField
                key={prompt}
                id={`act2-reflection-${index}`}
                label={prompt}
                value={draft.reflections[index] ?? ""}
                onChange={(v) => updateReflection(index, v)}
                rows={3}
              />
            ))}
            <OpenAnswerDisclaimer />
          </div>
        </div>
      )}

      {error && <p className="text-label-md font-label-md text-error">{error}</p>}

      {!isCompleted(ID) && (
        <Button onClick={submitted ? handleFinalize : handleCheckFicha}>
          {submitted ? "Finalizar actividad" : "Enviar ficha"}
        </Button>
      )}

      <AnimatePresence>
        {submitted && (
          <motion.div key="ficha-feedback" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}>
            <Callout variant="success" title="Ficha enviada">
              Revisa el indicador junto a cada campo: ✓ significa que tu respuesta coincide razonablemente con lo que
              dice el informe, ⚠ que va en la dirección correcta pero podría ser más precisa, y ↻ que conviene
              revisar ese dato directamente en el PDF.
            </Callout>
          </motion.div>
        )}
        {isCompleted(ID) && (
          <motion.div key="reflection-feedback" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}>
            <Callout variant="success" title="Retroalimentación de tu reflexión">
              Sobre la primera pregunta: registrar mal los metadatos de un informe puede dificultar su identificación
              dentro del sistema, generar problemas para recuperarlo cuando se necesite, hacer que pierda el contexto
              de por qué y para qué se produjo, y complicar su organización y conservación a lo largo del tiempo.
              Sobre la segunda: no hay una única respuesta correcta — la importancia de un metadato depende del
              propósito. Un identificador puede ser fundamental para distinguir el documento sin ambigüedad, mientras
              que otros metadatos pueden ser esenciales para comprender su contexto, procedencia o gestión.
            </Callout>
          </motion.div>
        )}
      </AnimatePresence>
    </ActivityShell>
  );
}
