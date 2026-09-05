import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Button } from "../../../../components/ui/button";
import { nextWeekConnection } from "../week05.data";

export function NextWeekConnectionSection() {
  return (
    <section id="conexion-semana-6" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="¿Qué sigue?" title={`Semana ${nextWeekConnection.nextWeekNumber}: ${nextWeekConnection.nextTitle}`} />

      <div className="rounded-xl border border-outline-variant bg-gradient-to-br from-surface-container-lowest to-surface-container-low p-lg">
        <div className="flex flex-col items-center gap-xs text-center">
          <span className="text-label-md font-label-md font-semibold uppercase tracking-wider text-primary-container">Semana 5</span>
          <p className="text-body-lg font-body-lg text-on-surface">{nextWeekConnection.currentTitle}</p>

          <motion.div initial={{ opacity: 0, y: -4 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-outline py-1">
            <ArrowDown size={22} />
          </motion.div>

          <span className="text-label-md font-label-md font-semibold uppercase tracking-wider text-primary-container">
            Semana {nextWeekConnection.nextWeekNumber}
          </span>
          <p className="text-headline-md font-headline-md text-on-surface">{nextWeekConnection.nextTitle}</p>
          <div className="flex flex-wrap justify-center gap-xs">
            {nextWeekConnection.nextConcepts.map((c) => (
              <span key={c} className="rounded-full border border-outline-variant bg-surface-container px-3 py-1 text-caption font-caption text-on-surface-variant">
                {c}
              </span>
            ))}
          </div>
          <p className="text-body-md font-body-md text-on-surface-variant max-w-xl mt-1">{nextWeekConnection.text}</p>

          <Button asChild className="mt-sm">
            <Link to={`/semana/${nextWeekConnection.nextWeekNumber}`}>Ir a la Semana {nextWeekConnection.nextWeekNumber}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
