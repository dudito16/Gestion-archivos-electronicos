import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { whyItMattersCase, whyItMattersLinks } from "../week06.data";

export function WhyItMattersSection() {
  return (
    <section id="por-que-importa" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="¿Por qué importa la firma?" title="La firma es un mecanismo dentro de la gestión documental" />

      <p className="rounded-lg border border-outline-variant bg-surface-container-low p-md text-body-md font-body-md text-on-surface italic">
        {whyItMattersCase}
      </p>

      <Callout variant="warning" title="Una firma válida no significa automáticamente que todo el proceso sea correcto">
        La firma es uno de los mecanismos que sostienen la confianza en un documento, pero no reemplaza a los demás.
        Debe analizarse junto con:
      </Callout>

      <div className="flex flex-wrap gap-xs">
        {whyItMattersLinks.map((link) => (
          <span key={link} className="rounded-full border border-outline-variant bg-surface-container-lowest px-3 py-1.5 text-label-md font-label-md text-on-surface">
            {link}
          </span>
        ))}
      </div>
    </section>
  );
}
