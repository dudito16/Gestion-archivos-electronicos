import { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { cn } from "../../../../utils/cn";
import { getIcon } from "../../../../utils/getIcon";
import { colorCases, colorModes } from "../week08.data";

export function ColorSection() {
  const [choices, setChoices] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState<Set<string>>(new Set());

  function choose(caseId: string, modeId: string) {
    if (checked.has(caseId)) return;
    setChoices((prev) => ({ ...prev, [caseId]: modeId }));
  }

  function check(caseId: string) {
    setChecked((prev) => new Set(prev).add(caseId));
  }

  return (
    <section id="color" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Color y escala de grises" title="El modo de color depende del valor informativo del documento" />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-sm">
        {colorModes.map((mode) => (
          <div key={mode.id} className="rounded-lg border border-outline-variant bg-surface-container-lowest p-md">
            <p className="text-label-md font-label-md font-bold text-on-surface mb-1">{mode.label}</p>
            <p className="text-caption font-caption text-on-surface-variant">{mode.description}</p>
          </div>
        ))}
      </div>

      <div>
        <p className="text-body-lg font-body-lg font-semibold text-on-surface mb-sm">¿Qué modo utilizarías?</p>
        <div className="space-y-sm">
          {colorCases.map((c) => {
            const Icon = getIcon(c.icon);
            const choice = choices[c.id];
            const isChecked = checked.has(c.id);
            const isRight = isChecked && choice === c.recommendedMode;
            return (
              <div key={c.id} className="rounded-lg border border-outline-variant bg-surface-container-low p-md space-y-sm">
                <p className="flex items-center gap-2 text-body-md font-body-md text-on-surface">
                  <Icon size={16} className="text-primary-container shrink-0" /> {c.label}
                </p>
                <div className="flex gap-xs flex-wrap">
                  {colorModes.map((mode) => (
                    <button
                      key={mode.id}
                      type="button"
                      disabled={isChecked}
                      onClick={() => choose(c.id, mode.id)}
                      className={cn(
                        "rounded-full border px-3 py-1.5 text-caption font-caption font-medium transition-colors",
                        choice === mode.id
                          ? "border-primary-container bg-secondary-container text-on-secondary-container"
                          : "border-outline-variant bg-surface-container-lowest text-on-surface hover:border-primary-container",
                      )}
                    >
                      {mode.label}
                    </button>
                  ))}
                </div>
                {!isChecked ? (
                  <Button size="sm" disabled={!choice} onClick={() => check(c.id)}>
                    Comprobar
                  </Button>
                ) : (
                  <p className={cn("text-caption font-caption", isRight ? "text-tertiary" : "text-on-surface-variant")}>{c.reason}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
