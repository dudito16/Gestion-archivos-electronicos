import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Badge } from "../../../../components/ui/badge";
import { planComponents, planExample, planExampleInstitution } from "../week11.data";

export function PlanSection() {
  return (
    <section id="plan-preservacion" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Plan de preservación digital" title="De los principios a la ejecución" description="El plan organiza, de forma concreta, cómo se llevan a la práctica los principios establecidos en la política." />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-sm">
        {planComponents.map((comp) => (
          <div key={comp.id} className="rounded-lg border border-outline-variant bg-surface-container-lowest p-md">
            <p className="text-label-md font-label-md font-bold text-primary-container mb-1">{comp.label}</p>
            <p className="text-caption font-caption text-on-surface-variant">{comp.description}</p>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-outline-variant bg-surface-container-low p-lg space-y-sm">
        <Badge variant="tertiary">⚠️ CASO ACADÉMICO SIMULADO — {planExampleInstitution}</Badge>
        <p className="text-body-lg font-body-lg font-semibold text-on-surface">Ejemplo de un plan básico</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-sm">
          <p className="text-body-md font-body-md text-on-surface"><span className="font-semibold">Diagnóstico:</span> {planExample.diagnostico}</p>
          <p className="text-body-md font-body-md text-on-surface"><span className="font-semibold">Prioridad:</span> {planExample.prioridad}</p>
          <p className="text-body-md font-body-md text-on-surface"><span className="font-semibold">Estrategia:</span> {planExample.estrategia}</p>
          <p className="text-body-md font-body-md text-on-surface"><span className="font-semibold">Responsable:</span> {planExample.responsable}</p>
          <p className="text-body-md font-body-md text-on-surface"><span className="font-semibold">Cronograma:</span> {planExample.cronograma}</p>
          <p className="text-body-md font-body-md text-on-surface"><span className="font-semibold">Control:</span> {planExample.control}</p>
        </div>
      </div>
    </section>
  );
}
