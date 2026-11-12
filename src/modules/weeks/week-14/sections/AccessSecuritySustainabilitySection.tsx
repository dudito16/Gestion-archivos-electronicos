import { useState } from "react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Button } from "../../../../components/ui/button";
import { cn } from "../../../../utils/cn";
import { securityScenarios, sustainabilityDimensions } from "../week14.data";
import type { SecurityScenario } from "../week14.types";

function OptionPicker({
  options,
  value,
  correctId,
  checked,
  onSelect,
}: {
  options: { id: string; label: string }[];
  value: string | null;
  correctId: string;
  checked: boolean;
  onSelect: (id: string) => void;
}) {
  return (
    <div className="flex flex-col gap-1">
      {options.map((opt) => {
        const isSelected = value === opt.id;
        const isRight = checked && isSelected && opt.id === correctId;
        const isWrong = checked && isSelected && opt.id !== correctId;
        return (
          <button
            key={opt.id}
            type="button"
            disabled={checked}
            onClick={() => onSelect(opt.id)}
            className={cn(
              "rounded-lg border px-sm py-1.5 text-left text-caption font-caption transition-colors",
              isRight && "border-tertiary-fixed-dim bg-tertiary-fixed/40",
              isWrong && "border-error bg-error-container/40",
              !checked && isSelected && "border-primary-container bg-secondary-container/50",
              !checked && !isSelected && "border-outline-variant bg-surface-container-lowest hover:border-primary-container",
            )}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}

function ScenarioCard({ scenario, number }: { scenario: SecurityScenario; number: number }) {
  const [risk, setRisk] = useState<string | null>(null);
  const [control, setControl] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);

  return (
    <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg space-y-sm">
      <p className="text-label-md font-label-md font-bold text-primary-container">Escenario {number}</p>
      <p className="text-body-md font-body-md text-on-surface">{scenario.scenario}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-sm">
        <div>
          <p className="text-label-md font-label-md text-on-surface-variant mb-1">¿Qué riesgo identificas?</p>
          <OptionPicker options={scenario.riskOptions} value={risk} correctId={scenario.correctRiskId} checked={checked} onSelect={setRisk} />
        </div>
        <div>
          <p className="text-label-md font-label-md text-on-surface-variant mb-1">¿Qué medida de control aplicarías?</p>
          <OptionPicker options={scenario.controlOptions} value={control} correctId={scenario.correctControlId} checked={checked} onSelect={setControl} />
        </div>
      </div>

      {!checked ? (
        <Button size="sm" disabled={!risk || !control} onClick={() => setChecked(true)}>
          Comprobar escenario
        </Button>
      ) : (
        <p className="rounded-lg bg-secondary-container/30 p-sm text-caption font-caption text-on-surface">{scenario.feedback}</p>
      )}
    </div>
  );
}

export function AccessSecuritySustainabilitySection() {
  return (
    <section id="acceso-seguridad-sostenibilidad" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="Módulo 5"
        title="Acceso, seguridad y sostenibilidad"
        description="Cinco escenarios institucionales: identifica el riesgo y selecciona una medida de control para cada uno."
      />

      <div className="space-y-sm">
        {securityScenarios.map((s, i) => (
          <ScenarioCard key={s.id} scenario={s} number={i + 1} />
        ))}
      </div>

      <div>
        <p className="text-body-lg font-body-lg font-semibold text-on-surface mb-sm">Tres dimensiones de sostenibilidad</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-sm">
          {sustainabilityDimensions.map((d) => (
            <div key={d.id} className="rounded-lg border border-outline-variant bg-surface-container-low p-md">
              <p className="text-label-md font-label-md font-bold text-on-surface mb-1">{d.label}</p>
              <p className="text-caption font-caption text-on-surface-variant">{d.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
