import { useState } from "react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import {
  institutionalCaseDisclaimer,
  institutionalCaseGuidance,
  institutionalCaseNarrative,
  institutionalCaseQuestions,
} from "../week11.data";

export function InstitutionalCaseSection() {
  const [showGuidance, setShowGuidance] = useState(false);

  return (
    <section id="caso-institucional" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Caso práctico institucional" title="Un caso real, planteado para analizar" />

      <Badge variant="tertiary">⚠️ {institutionalCaseDisclaimer}</Badge>

      <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg space-y-sm">
        {institutionalCaseNarrative.map((p) => (
          <p key={p} className="text-body-md font-body-md text-on-surface">{p}</p>
        ))}
      </div>

      <div>
        <p className="text-body-lg font-body-lg font-semibold text-on-surface mb-sm">Preguntas de análisis</p>
        <div className="space-y-xs">
          {institutionalCaseQuestions.map((q, i) => (
            <p key={q.id} className="rounded-lg border border-outline-variant bg-surface-container-low p-md text-body-md font-body-md text-on-surface">
              {i + 1}. {q.prompt}
            </p>
          ))}
        </div>
      </div>

      <div>
        <Button variant="secondary" size="sm" onClick={() => setShowGuidance((v) => !v)}>
          {showGuidance ? "Ocultar orientación docente" : "Ver orientación para retroalimentación docente"}
        </Button>
        {showGuidance && (
          <p className="mt-sm rounded-lg border-l-4 border-secondary bg-secondary-container/30 p-md text-caption font-caption text-on-secondary-container italic">
            {institutionalCaseGuidance}
          </p>
        )}
      </div>
    </section>
  );
}
