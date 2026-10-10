import { CheckCircle2, AlertTriangle } from "lucide-react";
import { useState } from "react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Button } from "../../../../components/ui/button";
import { cn } from "../../../../utils/cn";
import { integrityComparatorCases, integrityDefinition, integrityDocumentName, integrityMatchMessage, integrityMismatchMessage } from "../week10.data";

export function IntegrityConceptSection() {
  const [caseId, setCaseId] = useState(integrityComparatorCases[0].id);
  const active = integrityComparatorCases.find((c) => c.id === caseId)!;
  const matches = active.result === "match";

  return (
    <section id="integridad-digital" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Integridad digital" title="Comparar contra una referencia, no asumir" description={integrityDefinition} />

      <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg space-y-md">
        <div className="flex justify-center">
          <div className="rounded-xl border-2 border-primary-container bg-secondary-container/30 px-xl py-md text-center">
            <p className="text-caption font-caption font-semibold uppercase tracking-wider text-on-surface-variant">Documento</p>
            <p className="text-headline-md font-headline-md text-on-surface">{integrityDocumentName}</p>
          </div>
        </div>

        <div className="flex justify-center gap-sm flex-wrap">
          {integrityComparatorCases.map((c) => (
            <Button key={c.id} variant={caseId === c.id ? "primary" : "secondary"} size="sm" onClick={() => setCaseId(c.id)}>
              {c.label}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-sm max-w-xl mx-auto">
          <div className="rounded-lg border border-outline-variant bg-surface-container-low p-md text-center">
            <p className="text-caption font-caption font-semibold uppercase tracking-wider text-on-surface-variant">Estado de referencia</p>
            <p className="text-label-md font-label-md font-mono font-bold text-on-surface mt-1">{active.reference}</p>
          </div>
          <div className="rounded-lg border border-outline-variant bg-surface-container-low p-md text-center">
            <p className="text-caption font-caption font-semibold uppercase tracking-wider text-on-surface-variant">Estado actual</p>
            <p className="text-label-md font-label-md font-mono font-bold text-on-surface mt-1">{active.actual}</p>
          </div>
        </div>

        <div
          className={cn(
            "mx-auto max-w-xl flex items-center gap-sm rounded-lg border-l-4 p-md",
            matches ? "border-tertiary-fixed-dim bg-tertiary-fixed/30" : "border-error bg-error-container/40",
          )}
        >
          {matches ? <CheckCircle2 className="text-tertiary shrink-0" size={20} /> : <AlertTriangle className="text-error shrink-0" size={20} />}
          <p className={cn("text-body-md font-body-md font-semibold", matches ? "text-on-tertiary-fixed-variant" : "text-on-error-container")}>
            {matches ? integrityMatchMessage : integrityMismatchMessage}
          </p>
        </div>
      </div>
    </section>
  );
}
