import { useState } from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Callout } from "../../../../components/common/Callout";
import { case1Disclaimer, case1Feedback, case1Options, case1Question, case1Scenario } from "./cases.data";

/** Caso 1 — "Evaluación de un repositorio": institución con infraestructura pero sin política, verificación ni responsables. */
export function Case1Evaluation() {
  const [selected, setSelected] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const correct = case1Options.find((o) => o.correct)!;

  return (
    <div className="space-y-md">
      <Badge variant="tertiary">⚠️ {case1Disclaimer}</Badge>
      <p className="rounded-lg border border-outline-variant bg-surface-container-low p-md text-body-md font-body-md text-on-surface">{case1Scenario}</p>
      <p className="text-body-lg font-body-lg font-semibold text-on-surface">{case1Question}</p>

      <div className="flex flex-col gap-xs">
        {case1Options.map((opt) => (
          <Button key={opt.id} variant={selected === opt.id ? "primary" : "secondary"} disabled={submitted} onClick={() => setSelected(opt.id)} className="justify-start text-left h-auto py-2">
            {opt.label}
          </Button>
        ))}
      </div>

      {!submitted ? (
        <Button disabled={!selected} onClick={() => setSubmitted(true)}>
          Enviar evaluación
        </Button>
      ) : (
        <Callout variant={selected === correct.id ? "success" : "warning"} title={selected === correct.id ? "✓ Evaluación acertada" : "⚠ Revisa tu evaluación"}>
          {case1Feedback}
        </Callout>
      )}
    </div>
  );
}
