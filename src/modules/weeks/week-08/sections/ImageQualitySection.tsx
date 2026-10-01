import { useState } from "react";
import { Check, X } from "lucide-react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { cn } from "../../../../utils/cn";
import { imageQualityBad, imageQualityGood } from "../week08.data";

export function ImageQualitySection() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="calidad-imagen" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Calidad de imagen" title="¿Cuál imagen cumple mejor el objetivo de digitalización?" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-sm">
        {[imageQualityBad, imageQualityGood].map((img) => {
          const isSelected = selected === img.label;
          return (
            <button
              key={img.label}
              type="button"
              onClick={() => setSelected(img.label)}
              className={cn(
                "text-left rounded-lg border p-md transition-colors",
                isSelected ? "border-primary-container bg-secondary-container/30" : "border-outline-variant bg-surface-container-lowest hover:border-primary-container",
              )}
            >
              <p className="text-label-md font-label-md font-bold text-on-surface mb-1">{img.label}</p>
              <ul className="space-y-1">
                {img.issues.map((issue) => (
                  <li key={issue} className="flex items-center gap-1.5 text-caption font-caption text-on-surface-variant">
                    {img === imageQualityGood ? <Check size={13} className="text-tertiary shrink-0" /> : <X size={13} className="text-error shrink-0" />}
                    {issue}
                  </li>
                ))}
              </ul>
            </button>
          );
        })}
      </div>

      {selected && (
        <Callout variant={selected === imageQualityGood.label ? "success" : "warning"} title="Análisis">
          {selected === imageQualityGood.label
            ? "Correcto: una imagen correctamente orientada, completa y legible cumple el objetivo de digitalización — permite consultar y gestionar el documento sin dificultad."
            : "La Imagen A está inclinada, cortada y es poco legible. Revisa la Imagen B: una digitalización debe permitir leer y gestionar el documento, no solo producir un archivo."}
        </Callout>
      )}
    </section>
  );
}
