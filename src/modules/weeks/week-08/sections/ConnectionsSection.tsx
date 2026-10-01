import { ArrowRight } from "lucide-react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import {
  projectConnectionDigitization,
  projectConnectionInterop,
  weekConnections,
  weekConnectionsClosing,
} from "../week08.data";

export function ConnectionsSection() {
  return (
    <section id="conexiones" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Conexiones" title="¿Cómo llegamos hasta aquí?" />

      <div className="flex flex-wrap items-center gap-1">
        {weekConnections.map((conn, index) => (
          <div key={conn.week} className="flex items-center gap-1">
            <div
              className={
                conn.week === 8
                  ? "rounded-lg bg-primary-container text-on-primary px-3 py-2 text-caption font-caption font-semibold text-center"
                  : "rounded-lg bg-surface-container-low text-on-surface-variant px-3 py-2 text-caption font-caption text-center"
              }
            >
              <p className="font-bold">{conn.label}</p>
              <p>{conn.concept}</p>
            </div>
            {index < weekConnections.length - 1 && <ArrowRight className="text-outline shrink-0" size={14} />}
          </div>
        ))}
      </div>

      <p className="text-body-md font-body-md text-on-surface max-w-3xl">{weekConnectionsClosing}</p>

      <Callout variant="info" title="Aplicación al Proyecto Integrador">
        <p className="font-semibold text-on-surface">Interoperabilidad</p>
        <div className="flex flex-wrap gap-xs mt-1 mb-sm">
          {projectConnectionInterop.map((item) => (
            <span key={item} className="rounded-full border border-outline-variant bg-surface-container-lowest px-3 py-1.5 text-caption font-caption text-on-surface">
              {item}
            </span>
          ))}
        </div>
        <p className="font-semibold text-on-surface">Digitalización</p>
        <div className="flex flex-wrap gap-xs mt-1">
          {projectConnectionDigitization.map((item) => (
            <span key={item} className="rounded-full border border-outline-variant bg-surface-container-lowest px-3 py-1.5 text-caption font-caption text-on-surface">
              {item}
            </span>
          ))}
        </div>
      </Callout>
    </section>
  );
}
