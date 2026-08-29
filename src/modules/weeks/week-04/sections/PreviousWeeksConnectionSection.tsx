import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Button } from "../../../../components/ui/button";
import { previousWeeksChain } from "../week04.data";

export function PreviousWeeksConnectionSection() {
  return (
    <section id="conexion-anteriores" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="¿Dónde estamos?" title="De la Semana 2 a la Semana 4" />

      <div className="rounded-xl border border-outline-variant bg-gradient-to-br from-surface-container-lowest to-surface-container-low p-lg">
        <div className="flex flex-col items-center gap-xs text-center">
          {previousWeeksChain.map((step, index) => (
            <div key={step.week} className="flex flex-col items-center gap-xs">
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.35, delay: index * 0.12 }}
                className="flex flex-col items-center gap-1"
              >
                <span className="text-label-md font-label-md font-semibold uppercase tracking-wider text-primary-container">
                  {step.week}
                </span>
                <p className="text-body-lg font-body-lg text-on-surface">{step.question}</p>
                {step.href && (
                  <Button asChild variant="secondary" size="sm" className="mt-1">
                    <Link to={step.href}>Recordar {step.week}</Link>
                  </Button>
                )}
              </motion.div>
              {index < previousWeeksChain.length - 1 && <ArrowDown className="text-outline" size={18} />}
            </div>
          ))}

          <ArrowDown className="text-outline" size={18} />
          <span className="rounded-full bg-primary-container px-4 py-1.5 text-label-md font-label-md font-bold text-on-primary uppercase tracking-wider">
            Metadatos
          </span>
        </div>
      </div>
    </section>
  );
}
