import { ArrowRight } from "lucide-react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import {
  connectionNext,
  connectionNextClosing,
  connectionPrevious,
  connectionPreviousClosing,
  projectConnectionItems,
} from "../week11.data";

function ConnectionRow({ steps }: { steps: { id: string; label: string }[] }) {
  return (
    <div className="flex flex-wrap items-center gap-1">
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center gap-1">
          <span className="rounded-lg bg-surface-container-low text-on-surface-variant px-3 py-2 text-caption font-caption text-center max-w-[11rem]">{step.label}</span>
          {index < steps.length - 1 && <ArrowRight className="text-outline shrink-0" size={14} />}
        </div>
      ))}
    </div>
  );
}

export function ConnectionsSection() {
  return (
    <section id="conexiones" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Conexiones" title="¿Cómo llegamos hasta aquí, y hacia dónde vamos?" />

      <div className="space-y-sm">
        <p className="text-label-md font-label-md font-bold uppercase tracking-wider text-primary-container">Desde la Semana 10</p>
        <ConnectionRow steps={connectionPrevious} />
        <p className="text-body-md font-body-md text-on-surface max-w-3xl">{connectionPreviousClosing}</p>
      </div>

      <div className="space-y-sm">
        <p className="text-label-md font-label-md font-bold uppercase tracking-wider text-primary-container">Hacia la Semana 12</p>
        <ConnectionRow steps={connectionNext} />
        <p className="text-body-md font-body-md text-on-surface max-w-3xl">{connectionNextClosing}</p>
      </div>

      <Callout variant="info" title="Aplicación al Proyecto Integrador">
        <div className="flex flex-wrap gap-xs mt-1">
          {projectConnectionItems.map((item) => (
            <span key={item} className="rounded-full border border-outline-variant bg-surface-container-lowest px-3 py-1.5 text-caption font-caption text-on-surface">
              {item}
            </span>
          ))}
        </div>
      </Callout>
    </section>
  );
}
