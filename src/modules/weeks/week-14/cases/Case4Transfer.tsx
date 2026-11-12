import { useState } from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { MultiSelectCheck } from "../../../../components/common/MultiSelectCheck";
import { OpenAnswerDisclaimer, OpenTextField } from "../activities/components/OpenTextField";
import { FeedbackNote } from "../activities/components/FeedbackNote";
import { isMeaningfulText } from "../activities/evaluate";
import {
  case4ChecklistItems,
  case4ConfirmationFeedback,
  case4ConfirmationQuestion,
  case4Disclaimer,
  case4Scenario,
} from "./cases.data";

/** Caso 4 — "Transferencia desde un SGD": checklist de buenas prácticas + confirmación de recepción. */
export function Case4Transfer() {
  const [checklistDone, setChecklistDone] = useState(false);
  const [confirmation, setConfirmation] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="space-y-md">
      <Badge variant="tertiary">⚠️ {case4Disclaimer}</Badge>
      <p className="rounded-lg border border-outline-variant bg-surface-container-low p-md text-body-md font-body-md text-on-surface">{case4Scenario}</p>

      <div>
        <p className="text-body-md font-body-md font-semibold text-on-surface mb-sm">
          Selecciona las decisiones correctas para esta transferencia.
        </p>
        <MultiSelectCheck items={case4ChecklistItems} onComplete={() => setChecklistDone(true)} />
      </div>

      {checklistDone && (
        <div className="space-y-sm pt-sm border-t border-outline-variant">
          <OpenTextField
            id="case4-confirmation"
            label={case4ConfirmationQuestion}
            value={confirmation}
            onChange={setConfirmation}
            rows={3}
            disabled={submitted}
          />
          <OpenAnswerDisclaimer />
          {!submitted ? (
            <Button disabled={!isMeaningfulText(confirmation, 8)} onClick={() => setSubmitted(true)}>
              Enviar respuesta
            </Button>
          ) : (
            <FeedbackNote kind="criterio">{case4ConfirmationFeedback}</FeedbackNote>
          )}
        </div>
      )}
    </div>
  );
}
