import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { organizationOptions, organizationWarnings } from "../integrativeProject.data";

export function SeleccionOrganizacionSection() {
  return (
    <section id="seleccion-organizacion" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Selección de la organización" title="¿Sobre qué organización trabajará el equipo?" description="Cualquiera de estas cuatro opciones es válida." />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
        {organizationOptions.map((opt) => (
          <div key={opt.id} className="rounded-lg border border-outline-variant bg-surface-container-lowest p-md flex gap-sm">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-container text-on-primary font-bold">{opt.letter}</span>
            <p className="text-body-md font-body-md text-on-surface">{opt.label}</p>
          </div>
        ))}
      </div>

      <Callout variant="warning" title="Si utilizan una organización real">
        <ul className="list-disc pl-md space-y-0.5">
          {organizationWarnings.map((w) => (
            <li key={w}>{w}</li>
          ))}
        </ul>
      </Callout>
    </section>
  );
}
