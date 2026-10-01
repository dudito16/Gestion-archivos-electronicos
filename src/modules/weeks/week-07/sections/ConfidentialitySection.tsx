import { useState } from "react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { OpenTextField, OpenAnswerDisclaimer } from "../activities/components/OpenTextField";
import { cn } from "../../../../utils/cn";
import { getIcon } from "../../../../utils/getIcon";
import { attributes, confidentialityReflectionPrompt, profileOptions } from "../week07.data";

const confidentiality = attributes.find((a) => a.id === "confidencialidad")!;

export function ConfidentialitySection() {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [checked, setChecked] = useState(false);
  const [reflection, setReflection] = useState("");

  function toggle(id: string) {
    if (checked) return;
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  return (
    <section id="confidencialidad" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Confidencialidad" title={confidentiality.definition} />

      <div>
        <p className="text-label-md font-label-md font-semibold text-on-surface mb-sm">Ejemplos</p>
        <div className="flex flex-wrap gap-xs">
          {confidentiality.examples.map((example) => (
            <span key={example} className="rounded-full border border-outline-variant bg-surface-container-lowest px-3 py-1.5 text-label-md font-label-md text-on-surface">
              {example}
            </span>
          ))}
        </div>
      </div>

      <Callout variant="warning" title="En un archivo">
        {confidentiality.institutionalExample}
      </Callout>

      <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg space-y-md">
        <p className="text-body-lg font-body-lg font-semibold text-on-surface">{confidentialityReflectionPrompt}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-xs">
          {profileOptions.map((profile) => {
            const Icon = getIcon(profile.icon);
            const isSelected = selected.has(profile.id);
            const isRight = checked && isSelected === profile.shouldAccess;
            return (
              <button
                key={profile.id}
                type="button"
                disabled={checked}
                onClick={() => toggle(profile.id)}
                className={cn(
                  "flex items-center gap-xs rounded-lg border px-md py-sm text-left text-label-md font-label-md transition-colors",
                  !checked && isSelected && "border-primary-container bg-secondary-container/50",
                  !checked && !isSelected && "border-outline-variant bg-surface-container-lowest hover:border-primary-container",
                  checked && isRight && "border-tertiary-fixed-dim bg-tertiary-fixed/40",
                  checked && !isRight && "border-error bg-error-container/40",
                )}
              >
                <Icon size={16} className="shrink-0" /> {profile.label}
              </button>
            );
          })}
        </div>

        {!checked ? (
          <button
            type="button"
            onClick={() => setChecked(true)}
            className="rounded-lg bg-primary-container text-on-primary px-md py-2 text-label-md font-label-md font-semibold"
          >
            Comprobar selección
          </button>
        ) : (
          <div className="space-y-1.5 rounded-lg bg-surface-container-low p-md">
            {profileOptions.map((profile) => (
              <p key={profile.id} className="text-caption font-caption text-on-surface-variant">
                <span className="font-semibold text-on-surface">{profile.label}:</span> {profile.reason}
              </p>
            ))}
          </div>
        )}

        {checked && (
          <div className="space-y-sm pt-sm border-t border-outline-variant">
            <OpenTextField id="conf-reflection" label="Justifica tu selección con tus propias palabras." value={reflection} onChange={setReflection} rows={3} />
            <OpenAnswerDisclaimer />
          </div>
        )}
      </div>
    </section>
  );
}
