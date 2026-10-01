import { ArrowRight } from "lucide-react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { projectConnectionItems, weekConnections } from "../week07.data";

export function ConnectionsSection() {
  return (
    <section id="conexiones" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Conexiones" title="¿Cómo se conecta esta semana con lo aprendido?" />

      <div className="flex flex-wrap items-center gap-1">
        {weekConnections.map((conn, index) => (
          <div key={conn.week} className="flex items-center gap-1">
            <div
              className={
                conn.week === 7
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

      <Callout variant="info" title="Ahora puedes aplicarlo en el Proyecto Integrador">
        <p>En tu Proyecto Integrador podrás analizar, sobre tu propia organización o caso, los siguientes elementos:</p>
        <div className="flex flex-wrap gap-xs mt-sm">
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
