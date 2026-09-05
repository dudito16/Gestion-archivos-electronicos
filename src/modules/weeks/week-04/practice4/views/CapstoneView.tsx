import { useState } from "react";
import { Button } from "../../../../../components/ui/button";
import { cn } from "../../../../../utils/cn";
import { DynamicFieldList } from "../../activities/components/DynamicFieldList";
import { OpenTextField } from "../../activities/components/OpenTextField";
import type { AnswerValue4, CapstoneQuestion } from "../practice4.types";

const COLUMNS = [
  { key: "campo", label: "Metadato propuesto", placeholder: "p. ej. Unidad responsable" },
  { key: "finalidad", label: "Finalidad", placeholder: "¿Para qué sirve?" },
];

interface Props {
  question: CapstoneQuestion;
  disabled: boolean;
  onCheck: (value: AnswerValue4) => void;
}

export function CapstoneView({ question, disabled, onCheck }: Props) {
  const [rows, setRows] = useState<Record<string, string>[]>(() =>
    Array.from({ length: question.minRows }, () => ({ campo: "", finalidad: "" })),
  );
  const [indispensable, setIndispensable] = useState<string[]>([]);
  const [justification, setJustification] = useState("");

  const proposedFields = rows.map((r) => r.campo?.trim()).filter((v): v is string => Boolean(v));
  const filledCount = rows.filter((r) => r.campo?.trim() && r.finalidad?.trim()).length;

  function toggleIndispensable(field: string) {
    if (disabled) return;
    setIndispensable((prev) => (prev.includes(field) ? prev.filter((x) => x !== field) : [...prev, field]));
  }

  const canCheck = filledCount >= question.minRows && indispensable.length > 0 && justification.trim().length > 0;

  return (
    <div className="space-y-md">
      <DynamicFieldList columns={COLUMNS} rows={rows} onChange={setRows} minRows={question.minRows} addLabel="+ Agregar metadato" disabled={disabled} />
      <p className="text-caption font-caption text-on-surface-variant">Propón al menos {question.minRows} metadatos, cada uno con su finalidad.</p>

      {proposedFields.length > 0 && (
        <div>
          <p className="text-label-md font-label-md text-on-surface-variant mb-xs">
            De los metadatos que propusiste, selecciona los que consideras indispensables
          </p>
          <div className="flex flex-wrap gap-xs">
            {proposedFields.map((field, index) => {
              const isSelected = indispensable.includes(field);
              return (
                <button
                  key={`${field}-${index}`}
                  type="button"
                  disabled={disabled}
                  onClick={() => toggleIndispensable(field)}
                  className={cn(
                    "rounded-full border px-3 py-2 text-caption font-caption font-medium transition-colors",
                    isSelected
                      ? "border-primary-container bg-secondary-container text-on-secondary-container"
                      : "border-outline-variant bg-surface-container-lowest text-on-surface hover:border-primary-container",
                    disabled && "opacity-70",
                  )}
                >
                  {field}
                </button>
              );
            })}
          </div>
        </div>
      )}

      <OpenTextField
        id="capstone-justify"
        label="Justifica tu propuesta en conjunto: ¿cómo resuelve los problemas de identificación, recuperación y contexto del caso?"
        value={justification}
        onChange={setJustification}
        rows={4}
        disabled={disabled}
      />

      <Button disabled={!canCheck || disabled} onClick={() => onCheck({ kind: "capstone", rows, indispensable, justification })}>
        Enviar propuesta final
      </Button>
    </div>
  );
}
