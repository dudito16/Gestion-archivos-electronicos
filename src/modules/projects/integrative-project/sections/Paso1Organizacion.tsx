import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../../../components/ui/accordion";
import { getIcon } from "../../../../utils/getIcon";
import { actors, caseOrg } from "../integrativeProject.data";

const facts: { label: string; value: string }[] = [
  { label: "Organización", value: caseOrg.name },
  { label: "Sector", value: caseOrg.sector },
  { label: "Área", value: caseOrg.area },
  { label: "Proceso", value: caseOrg.process },
  { label: "Documento seleccionado", value: caseOrg.document },
];

export function Paso1Organizacion() {
  return (
    <section id="paso-1-organizacion" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Caso modelo · Paso 01" title="Conozcamos la organización" />

      <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg grid grid-cols-1 sm:grid-cols-2 gap-sm">
        {facts.map((fact) => (
          <div key={fact.label}>
            <p className="text-caption font-caption font-bold uppercase tracking-wider text-on-surface-variant">{fact.label}</p>
            <p className="text-body-lg font-body-lg text-on-surface">{fact.value}</p>
          </div>
        ))}
      </div>

      <div>
        <p className="text-label-md font-label-md font-semibold text-on-surface mb-xs">Explorar actores</p>
        <Accordion type="single" collapsible className="rounded-xl border border-outline-variant bg-surface-container-lowest px-md">
          {actors.map((actor) => {
            const Icon = getIcon(actor.icon);
            return (
              <AccordionItem key={actor.id} value={actor.id}>
                <AccordionTrigger>
                  <span className="flex items-center gap-xs">
                    <Icon size={18} className="text-primary-container" />
                    {actor.label}
                  </span>
                </AccordionTrigger>
                <AccordionContent>{actor.description}</AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
}
