import { ArrowDown, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { WeekConnector } from "../../../../components/common/WeekConnector";
import { DeliverablesChecklist } from "../../proyecto-directiva/components";
import { bridgeToWeek17, week16Deliverables } from "../week16.data";

export function ProductsSection() {
  return (
    <section id="productos" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="Producto final de la Semana 16"
        title="Panel de productos que el equipo debe completar"
        description="Marca cada producto cuando el equipo lo tenga elaborado y sustentado con evidencias."
      />

      <DeliverablesChecklist items={week16Deliverables} title="Productos de la Semana 16" />

      <div id="antes-de-continuar" className="scroll-mt-24 rounded-xl border-2 border-primary-container bg-gradient-to-br from-surface-container-lowest to-secondary-container/30 p-lg space-y-md">
        <p className="text-label-md font-label-md font-bold uppercase tracking-wider text-primary-container">Antes de continuar a la Semana 17</p>
        <p className="text-headline-md font-headline-md text-on-surface">La Semana 17 se construye con lo que investigaron esta semana</p>
        <p className="text-body-md font-body-md text-on-surface-variant max-w-3xl">
          Cada producto de la Semana 16 se convierte en una parte de la directiva o de sus anexos. Si un riesgo no fue
          investigado, la disposición que lo atienda no tendrá sustento.
        </p>
        <div className="space-y-xs">
          {bridgeToWeek17.map((b, index) => (
            <motion.div
              key={b.from}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.3, delay: index * 0.06 }}
              className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-xs"
            >
              <span className="rounded-lg bg-surface-container-low px-md py-sm text-body-md font-body-md text-on-surface">
                <span className="text-caption font-caption font-semibold text-primary-container block">Semana 16</span>
                {b.from}
              </span>
              <span className="flex justify-center text-primary-container">
                <ArrowDown className="md:hidden" size={18} />
                <ArrowRight className="hidden md:block" size={18} />
              </span>
              <span className="rounded-lg bg-primary-container/10 border border-primary-container/40 px-md py-sm text-body-md font-body-md text-on-surface">
                <span className="text-caption font-caption font-semibold text-primary-container block">Semana 17</span>
                {b.to}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <WeekConnector
        top={{ weekLabel: "Semana 16", question: "Investigamos la institución, diagnosticamos sus riesgos y estudiamos los referentes técnicos.", answers: ["Ficha", "Inventario", "Matriz de riesgos", "OAIS", "PREMIS", "Fuentes"] }}
        bottom={{ weekLabel: "Semana 17", question: "¿Cómo convertimos la investigación en reglas institucionales aplicables?", title: "Elaboración, aplicación y sustentación de la directiva" }}
        cta={{ label: "Continuar en la Semana 17", href: "/semana/17/introduccion" }}
      />
    </section>
  );
}
