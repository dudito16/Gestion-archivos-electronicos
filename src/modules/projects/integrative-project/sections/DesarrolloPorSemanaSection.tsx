import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../../../components/ui/accordion";
import { Badge } from "../../../../components/ui/badge";
import { weekDeliverables } from "../integrativeProject.data";

export function DesarrolloPorSemanaSection() {
  return (
    <section id="desarrollo-por-semana" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Desarrollo del proyecto por semana" title="Una línea de tiempo para construir el proyecto" description="Cada tarjeta es expandible: toca una semana para ver qué debe entregar el equipo." />

      <Accordion type="single" collapsible className="rounded-xl border border-outline-variant bg-surface-container-lowest px-md divide-y divide-surface-container">
        {weekDeliverables.map((week) => (
          <AccordionItem key={week.week} value={`semana-${week.week}`}>
            <AccordionTrigger>
              <span className="flex items-center gap-xs">
                <Badge variant="secondary">Semana {week.week}</Badge>
                <span className="font-semibold">{week.title}</span>
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-md space-y-1">
                {week.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
