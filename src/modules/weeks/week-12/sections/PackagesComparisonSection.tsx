import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { ComparisonMatrix } from "../../../../components/common/ComparisonMatrix";
import { FlowChain } from "../../../../components/common/FlowChain";
import { informationPackages, packagesFlow, packagesFlowDisclaimer } from "../week12.data";

export function PackagesComparisonSection() {
  const columns = informationPackages.map((p) => p.acronym);
  const rows = [
    { criterion: "Nombre completo", values: informationPackages.map((p) => p.fullName) },
    { criterion: "Finalidad", values: informationPackages.map((p) => p.purpose) },
    { criterion: "Momento de utilización", values: ["Ingreso al entorno de preservación", "Mientras la información permanece conservada", "Entrega ante una solicitud de acceso"] },
    { criterion: "Actor relacionado", values: ["Productor (lo envía)", "Entorno de preservación (lo conserva)", "Consumidor (lo recibe)"] },
    { criterion: "Ejemplo institucional", values: informationPackages.map((p) => p.example) },
    { criterion: "Diferencia principal", values: ["Puede llegar con información incompleta, sujeta a validación", "Incluye información de preservación, no solo el contenido", "Puede contener solo una parte del AIP, según la solicitud y las restricciones"] },
  ];

  return (
    <section id="comparacion-paquetes" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Comparación de paquetes" title="SIP, AIP y DIP, lado a lado" />

      <ComparisonMatrix columns={columns} rows={rows} />

      <div>
        <p className="text-body-lg font-body-lg font-semibold text-on-surface mb-sm">Secuencia conceptual</p>
        <FlowChain steps={packagesFlow} />
      </div>

      <Callout variant="warning" title="Una representación conceptual">
        {packagesFlowDisclaimer}
      </Callout>
    </section>
  );
}
