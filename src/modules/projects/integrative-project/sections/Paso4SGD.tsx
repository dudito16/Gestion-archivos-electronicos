import { motion } from "framer-motion";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { cn } from "../../../../utils/cn";
import { sgdComponents, sgdFunctionTable } from "../integrativeProject.data";

const situationStyles: Record<string, string> = {
  Existe: "bg-tertiary-fixed/50 text-on-tertiary-fixed-variant",
  Parcial: "bg-secondary-container text-on-secondary-container",
  "No existe": "bg-error-container/60 text-on-error-container",
};

export function Paso4SGD() {
  return (
    <section id="paso-4-sgd" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Caso modelo · Paso 04" title="Analicemos el SGD" />

      <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg flex flex-col items-center gap-sm">
        <span className="rounded-lg bg-primary-container text-on-primary px-4 py-2 text-label-md font-label-md font-bold">SGD</span>
        <div className="grid grid-cols-3 gap-sm w-full max-w-xl">
          {sgdComponents.slice(0, 3).map((c, i) => (
            <motion.span
              key={c}
              initial={{ opacity: 0, y: -8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center rounded-lg border border-outline-variant bg-surface-container-low px-2 py-2 text-label-md font-label-md text-on-surface"
            >
              {c}
            </motion.span>
          ))}
        </div>
        <div className="flex flex-col items-center gap-1">
          {sgdComponents.slice(3).map((c) => (
            <span key={c} className="rounded-lg bg-secondary-container text-on-secondary-container px-4 py-1.5 text-label-md font-label-md font-semibold">
              {c}
            </span>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto rounded-xl border border-outline-variant bg-surface-container-lowest">
        <table className="w-full min-w-[32rem] border-collapse text-left">
          <thead>
            <tr className="bg-surface-container-low">
              <th className="p-sm text-label-md font-label-md text-on-surface-variant">Función</th>
              <th className="p-sm text-label-md font-label-md text-on-surface-variant">Situación del caso</th>
              <th className="p-sm text-label-md font-label-md text-on-surface-variant">Evidencia</th>
            </tr>
          </thead>
          <tbody>
            {sgdFunctionTable.map((row) => (
              <tr key={row.function} className="border-t border-outline-variant">
                <td className="p-sm text-body-md font-body-md font-semibold text-on-surface">{row.function}</td>
                <td className="p-sm">
                  <span className={cn("rounded-full px-2.5 py-1 text-caption font-caption font-semibold", situationStyles[row.situation])}>{row.situation}</span>
                </td>
                <td className="p-sm text-body-md font-body-md text-on-surface-variant">{row.evidence}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Callout variant="info" title="Base del análisis">
        Este análisis se basa exclusivamente en la información proporcionada por el caso modelo — no se asumen
        funcionalidades que no fueron descritas.
      </Callout>
    </section>
  );
}
