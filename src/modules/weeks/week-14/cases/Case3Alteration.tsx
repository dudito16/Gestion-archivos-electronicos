import { useState } from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Progress } from "../../../../components/ui/progress";
import { OpenAnswerDisclaimer, OpenTextField } from "../activities/components/OpenTextField";
import { isMeaningfulText } from "../activities/evaluate";
import { case3Disclaimer, case3Guidance, case3Scenario, case3Steps } from "./cases.data";

/** Caso 3 — "Alteración de un documento": guía de 5 preguntas sobre un hash divergente detectado seis meses después del ingreso. */
export function Case3Alteration() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [step, setStep] = useState(0);
  const [showGuidance, setShowGuidance] = useState(false);
  const total = case3Steps.length;
  const current = case3Steps[step];
  const finished = step >= total;

  function setAnswer(value: string) {
    setAnswers((prev) => ({ ...prev, [current.id]: value }));
  }

  const canAdvance = isMeaningfulText(answers[current?.id] ?? "", 5);

  return (
    <div className="space-y-md">
      <Badge variant="tertiary">⚠️ {case3Disclaimer}</Badge>
      <p className="rounded-lg border border-outline-variant bg-surface-container-low p-md text-body-md font-body-md text-on-surface">{case3Scenario}</p>

      {!finished ? (
        <div className="space-y-sm">
          <div className="space-y-1">
            <p className="text-caption font-caption text-on-surface-variant">Pregunta {step + 1} de {total}</p>
            <Progress value={((step + 1) / total) * 100} />
          </div>
          <OpenTextField
            id={`case3-${current.id}`}
            label={current.prompt}
            value={answers[current.id] ?? ""}
            onChange={setAnswer}
            rows={3}
          />
          <OpenAnswerDisclaimer />
          <Button disabled={!canAdvance} onClick={() => setStep((s) => s + 1)}>
            {step + 1 < total ? "Siguiente pregunta" : "Finalizar análisis"}
          </Button>
        </div>
      ) : (
        <div className="space-y-sm">
          <p className="rounded-lg border border-tertiary-fixed-dim bg-tertiary-fixed/30 p-md text-body-md font-body-md text-on-tertiary-fixed-variant">
            Completaste el análisis del caso. Revisa la orientación docente para comparar tu razonamiento.
          </p>
          <Button variant="secondary" size="sm" onClick={() => setShowGuidance((v) => !v)}>
            {showGuidance ? "Ocultar orientación docente" : "Ver orientación para retroalimentación docente"}
          </Button>
          {showGuidance && (
            <p className="rounded-lg border-l-4 border-secondary bg-secondary-container/30 p-md text-caption font-caption text-on-secondary-container italic">
              {case3Guidance}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
