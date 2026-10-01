import { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { OpenTextField, OpenAnswerDisclaimer } from "../activities/components/OpenTextField";
import { cn } from "../../../../utils/cn";
import { formatSelectionCases, formats } from "../week08.data";
import { isMeaningfulText } from "../activities/evaluate";

export function FormatSelectionSection() {
  const [choices, setChoices] = useState<Record<string, string>>({});
  const [justifications, setJustifications] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState<Set<string>>(new Set());

  function submit(caseId: string) {
    if (!choices[caseId] || !isMeaningfulText(justifications[caseId] ?? "", 5)) return;
    setSubmitted((prev) => new Set(prev).add(caseId));
  }

  return (
    <section id="seleccion-formatos" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Selección de formatos" title="Elige el formato" description="Para cada caso, selecciona un formato y justifica tu elección — lo que se evalúa es el razonamiento, no una única palabra correcta." />

      <div className="space-y-md">
        {formatSelectionCases.map((c) => {
          const isSubmitted = submitted.has(c.id);
          return (
            <div key={c.id} className="rounded-lg border border-outline-variant bg-surface-container-lowest p-md space-y-sm">
              <p className="text-body-md font-body-md text-on-surface">{c.scenario}</p>
              <div className="flex gap-xs flex-wrap">
                {formats.map((f) => (
                  <button
                    key={f.id}
                    type="button"
                    disabled={isSubmitted}
                    onClick={() => setChoices((prev) => ({ ...prev, [c.id]: f.id }))}
                    className={cn(
                      "rounded-full border px-3 py-1.5 text-caption font-caption font-medium transition-colors",
                      choices[c.id] === f.id
                        ? "border-primary-container bg-secondary-container text-on-secondary-container"
                        : "border-outline-variant bg-surface-container-low text-on-surface hover:border-primary-container",
                    )}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
              <OpenTextField
                id={`format-case-${c.id}`}
                label="Justificación"
                value={justifications[c.id] ?? ""}
                onChange={(v) => setJustifications((prev) => ({ ...prev, [c.id]: v }))}
                rows={2}
                disabled={isSubmitted}
              />
              {!isSubmitted ? (
                <Button size="sm" disabled={!choices[c.id]} onClick={() => submit(c.id)}>
                  Enviar
                </Button>
              ) : (
                <p className="text-caption font-caption text-tertiary font-semibold">
                  Respuesta registrada. {c.recommendedFormats.includes(choices[c.id]) ? "Tu elección coincide con el formato generalmente recomendado para este caso." : "Revisa si tu elección realmente favorece el propósito descrito en el caso — puede haber una opción más adecuada."}
                </p>
              )}
            </div>
          );
        })}
      </div>
      <OpenAnswerDisclaimer />
    </section>
  );
}
