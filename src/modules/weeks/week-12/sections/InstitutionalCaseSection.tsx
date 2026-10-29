import { useState } from "react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { FlowChain } from "../../../../components/common/FlowChain";
import {
  caseAipExplanation,
  caseDipExplanation,
  caseDisclaimer,
  caseEntitiesInvolved,
  caseGuidance,
  caseIngestInfo,
  caseNarrative,
  caseProblems,
  caseQuestions,
  caseRisksControls,
  caseSipExplanation,
  caseWorkflowProposal,
} from "../week12.data";

export function InstitutionalCaseSection() {
  const [showGuidance, setShowGuidance] = useState(false);

  return (
    <section id="caso-institucional" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Caso institucional aplicado" title="Un caso real, planteado para analizar" />

      <Badge variant="tertiary">⚠️ {caseDisclaimer}</Badge>

      <div>
        <p className="text-label-md font-label-md font-bold text-on-surface mb-sm">1. Descripción de la situación</p>
        <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg space-y-sm">
          {caseNarrative.map((p) => (
            <p key={p} className="text-body-md font-body-md text-on-surface">{p}</p>
          ))}
        </div>
      </div>

      <div>
        <p className="text-label-md font-label-md font-bold text-on-surface mb-sm">2. Problemas identificados</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-xs">
          {caseProblems.map((p) => (
            <div key={p} className="rounded-lg border border-outline-variant bg-surface-container-low p-md text-caption font-caption text-on-surface">{p}</div>
          ))}
        </div>
      </div>

      <div>
        <p className="text-label-md font-label-md font-bold text-on-surface mb-sm">3. Entidades OAIS involucradas</p>
        <p className="text-body-md font-body-md text-on-surface max-w-3xl">{caseEntitiesInvolved}</p>
      </div>

      <div>
        <p className="text-label-md font-label-md font-bold text-on-surface mb-sm">4. Información que debe prepararse para el ingreso</p>
        <p className="text-body-md font-body-md text-on-surface max-w-3xl">{caseIngestInfo}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-sm">
        <div className="rounded-lg border border-outline-variant bg-surface-container-lowest p-md">
          <p className="text-label-md font-label-md font-bold text-primary-container mb-1">5. El SIP en el caso</p>
          <p className="text-caption font-caption text-on-surface-variant">{caseSipExplanation}</p>
        </div>
        <div className="rounded-lg border border-outline-variant bg-surface-container-lowest p-md">
          <p className="text-label-md font-label-md font-bold text-primary-container mb-1">6. El AIP en el caso</p>
          <p className="text-caption font-caption text-on-surface-variant">{caseAipExplanation}</p>
        </div>
        <div className="rounded-lg border border-outline-variant bg-surface-container-lowest p-md">
          <p className="text-label-md font-label-md font-bold text-primary-container mb-1">7. El DIP en el caso</p>
          <p className="text-caption font-caption text-on-surface-variant">{caseDipExplanation}</p>
        </div>
      </div>

      <div>
        <p className="text-label-md font-label-md font-bold text-on-surface mb-sm">8. Flujo de trabajo propuesto</p>
        <FlowChain steps={caseWorkflowProposal} />
      </div>

      <div>
        <p className="text-label-md font-label-md font-bold text-on-surface mb-sm">9. Riesgos y controles</p>
        <div className="space-y-xs">
          {caseRisksControls.map((rc) => (
            <div key={rc.risk} className="flex items-center gap-sm rounded-lg border border-outline-variant bg-surface-container-lowest p-md flex-wrap">
              <span className="rounded-full bg-error-container/40 text-on-error-container px-3 py-1.5 text-caption font-caption font-medium">{rc.risk}</span>
              <span className="rounded-full bg-tertiary-fixed/40 text-on-tertiary-fixed-variant px-3 py-1.5 text-caption font-caption font-medium">{rc.control}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="text-label-md font-label-md font-bold text-on-surface mb-sm">10. Preguntas de análisis</p>
        <div className="space-y-xs">
          {caseQuestions.map((q, i) => (
            <p key={q.id} className="rounded-lg border border-outline-variant bg-surface-container-low p-md text-body-md font-body-md text-on-surface">
              {i + 1}. {q.prompt}
            </p>
          ))}
        </div>
      </div>

      <div>
        <p className="text-label-md font-label-md font-bold text-on-surface mb-sm">11. Solución orientativa para el docente</p>
        <Button variant="secondary" size="sm" onClick={() => setShowGuidance((v) => !v)}>
          {showGuidance ? "Ocultar orientación docente" : "Ver orientación para retroalimentación docente"}
        </Button>
        {showGuidance && (
          <p className="mt-sm rounded-lg border-l-4 border-secondary bg-secondary-container/30 p-md text-caption font-caption text-on-secondary-container italic">
            {caseGuidance}
          </p>
        )}
      </div>
    </section>
  );
}
