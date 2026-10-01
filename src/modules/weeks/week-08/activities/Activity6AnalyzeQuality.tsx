import { useState } from "react";
import { Check, X } from "lucide-react";
import { cn } from "../../../../utils/cn";
import { ActivityShell } from "./components/ActivityShell";
import { FeedbackNote } from "./components/FeedbackNote";
import { activity6Comparison, activity6Options } from "./activities.data";
import { useWeek8Activities } from "./activitiesProgress";

const ID = "actividad-6" as const;

export function Activity6AnalyzeQuality() {
  const { markCompleted, isCompleted } = useWeek8Activities();
  const [selected, setSelected] = useState<string | null>(null);
  const [checked, setChecked] = useState(isCompleted(ID));

  function choose(id: string) {
    if (checked) return;
    setSelected(id);
    setChecked(true);
    markCompleted(ID);
  }

  const correct = activity6Options.find((o) => o.belongs)!;

  return (
    <ActivityShell
      id={ID}
      number={6}
      title="Analiza calidad de digitalización"
      objective="Reconocer qué características hacen que una imagen digitalizada cumpla su propósito."
      instructions={<>Compara ambas imágenes y selecciona cuál cumple mejor el objetivo de digitalización.</>}
      done={isCompleted(ID)}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-sm">
        {[activity6Comparison.imageA, activity6Comparison.imageB].map((img) => (
          <div key={img.label} className="rounded-lg border border-outline-variant bg-surface-container-low p-md">
            <p className="text-label-md font-label-md font-bold text-on-surface mb-1">{img.label}</p>
            <ul className="list-disc list-inside text-caption font-caption text-on-surface-variant">
              {img.issues.map((issue) => (
                <li key={issue}>{issue}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="space-y-xs">
        {activity6Options.map((opt) => {
          const isSelected = selected === opt.id;
          const isRight = checked && opt.id === correct.id;
          return (
            <button
              key={opt.id}
              type="button"
              disabled={checked}
              onClick={() => choose(opt.id)}
              className={cn(
                "w-full flex items-center justify-between gap-xs rounded-lg border px-md py-sm text-left text-label-md font-label-md transition-colors",
                !checked && "border-outline-variant bg-surface-container-lowest hover:border-primary-container",
                checked && isRight && "border-tertiary-fixed-dim bg-tertiary-fixed/40",
                checked && isSelected && !isRight && "border-error bg-error-container/40",
              )}
            >
              {opt.label}
              {checked && isSelected && (isRight ? <Check size={16} className="text-tertiary" /> : <X size={16} className="text-error" />)}
            </button>
          );
        })}
      </div>

      {checked && (
        <FeedbackNote kind={selected === correct.id ? "bien" : "revisar"}>
          La Imagen B cumple mejor el objetivo: está correctamente orientada, completa y es legible. Una imagen
          inclinada, cortada o poco legible no sirve para consultar ni gestionar el documento, sin importar qué tan
          alta sea su resolución.
        </FeedbackNote>
      )}
    </ActivityShell>
  );
}
