import { useState } from "react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { FlowChain } from "../../../../components/common/FlowChain";
import {
  caseBagitProposal,
  caseDisclaimer,
  caseFormatSituation,
  caseGuidance,
  caseNarrative,
  caseProblems,
  caseQuestions,
  caseStandardsApplication,
  practiceConnectionDisclaimer,
  practiceConnectionRoles,
} from "../week13.data";

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
        <p className="text-label-md font-label-md font-bold text-on-surface mb-sm">3. Qué estándar resuelve cada necesidad</p>
        <p className="text-body-md font-body-md text-on-surface max-w-3xl">{caseStandardsApplication}</p>
      </div>

      <div>
        <p className="text-label-md font-label-md font-bold text-on-surface mb-sm">4. Un archivo que no es lo que su extensión indica</p>
        <p className="text-body-md font-body-md text-on-surface max-w-3xl">{caseFormatSituation}</p>
      </div>

      <div>
        <p className="text-label-md font-label-md font-bold text-on-surface mb-sm">5. Propuesta de empaquetado con BagIt</p>
        <FlowChain steps={caseBagitProposal} />
      </div>

      <div>
        <p className="text-label-md font-label-md font-bold text-on-surface mb-sm">6. Preguntas de análisis</p>
        <div className="space-y-xs">
          {caseQuestions.map((q, i) => (
            <p key={q.id} className="rounded-lg border border-outline-variant bg-surface-container-low p-md text-body-md font-body-md text-on-surface">
              {i + 1}. {q.prompt}
            </p>
          ))}
        </div>
      </div>

      <div>
        <p className="text-label-md font-label-md font-bold text-on-surface mb-sm">7. Conexión con la práctica archivística: roles institucionales</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-sm">
          {practiceConnectionRoles.map((role) => (
            <div key={role.id} className="rounded-lg border border-outline-variant bg-surface-container-low p-md">
              <p className="text-label-md font-label-md font-bold text-on-surface mb-1">{role.label}</p>
              <p className="text-caption font-caption text-on-surface-variant">{role.description}</p>
            </div>
          ))}
        </div>
        <p className="text-caption font-caption text-on-surface-variant italic mt-sm">{practiceConnectionDisclaimer}</p>
      </div>

      <div>
        <p className="text-label-md font-label-md font-bold text-on-surface mb-sm">8. Solución orientativa para el docente</p>
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
