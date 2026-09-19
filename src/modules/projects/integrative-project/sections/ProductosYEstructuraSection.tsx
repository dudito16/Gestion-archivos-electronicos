import { motion } from "framer-motion";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { finalProducts, reportStructure } from "../integrativeProject.data";

export function ProductosYEstructuraSection() {
  return (
    <section id="productos-finales" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Productos finales" title="Lo que el equipo debe entregar" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-sm">
        {finalProducts.map((p, index) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: index * 0.05 }}
            className="rounded-lg border border-outline-variant bg-surface-container-lowest p-md flex items-center gap-xs"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-container text-on-primary font-bold text-caption">
              {index + 1}
            </span>
            <p className="text-body-md font-body-md font-semibold text-on-surface">{p.label}</p>
          </motion.div>
        ))}
      </div>

      <Callout variant="info" title="No solo un Word">
        No limiten el proyecto únicamente a un archivo Word. El informe puede ser el documento principal, pero debe
        contener o enlazar los productos de análisis (diagramas, fichas, matrices y evidencias).
      </Callout>

      <div>
        <p className="text-label-md font-label-md font-semibold text-on-surface mb-sm">Estructura sugerida del informe final</p>
        <ol className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
          {reportStructure.map((item, index) => (
            <li key={item} className="flex items-center gap-xs text-body-md font-body-md text-on-surface-variant">
              <span className="text-caption font-caption font-bold text-primary-container w-5 shrink-0">{index + 1}.</span>
              {item}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
