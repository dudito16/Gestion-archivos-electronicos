import { ArrowRight } from "lucide-react";

interface DiagramProps {
  title: string;
  steps: string[];
}

/** Simple horizontal step diagram (e.g. a document lifecycle) for lesson content. */
export function Diagram({ title, steps }: DiagramProps) {
  return (
    <div className="rounded-lg border border-outline-variant bg-surface-container-low p-md">
      <p className="text-label-md font-label-md font-semibold text-on-surface mb-md">{title}</p>
      <div className="flex flex-wrap items-center gap-xs">
        {steps.map((step, index) => (
          <div key={step} className="flex items-center gap-xs">
            <span className="text-caption font-caption font-medium text-primary-container bg-secondary-container px-3 py-2 rounded-full">
              {step}
            </span>
            {index < steps.length - 1 && <ArrowRight className="text-outline" size={16} />}
          </div>
        ))}
      </div>
    </div>
  );
}
