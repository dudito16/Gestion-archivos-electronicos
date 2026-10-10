import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { getIcon } from "../../../../utils/getIcon";
import { closingMessages, nextWeekConnection, summaryPoints } from "../week10.data";

export function SummarySection() {
  return (
    <section id="resumen" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Resumen" title="Lo esencial de la Semana 10" />

      <div className="flex flex-wrap items-center justify-center gap-xs">
        {summaryPoints.map((point, index) => {
          const Icon = getIcon(point.icon);
          return (
            <div key={point.id} className="flex items-center gap-xs">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex flex-col items-center gap-1 rounded-xl border border-outline-variant bg-gradient-to-br from-surface-container-lowest to-surface-container-low p-sm min-w-[6.5rem]"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-container text-on-primary">
                  <Icon size={16} />
                </div>
                <p className="text-caption font-caption font-bold text-on-surface text-center">{point.label}</p>
              </motion.div>
              {index < summaryPoints.length - 1 && <ArrowRight className="text-outline shrink-0" size={14} />}
            </div>
          );
        })}
      </div>

      <div className="rounded-xl border-2 border-primary-container bg-gradient-to-br from-secondary-container/40 to-surface-container-lowest p-lg text-center space-y-sm">
        {closingMessages.map((msg) => (
          <p key={msg} className="text-body-lg font-body-lg font-semibold text-on-surface max-w-2xl mx-auto">
            {msg}
          </p>
        ))}
      </div>

      <Callout variant="info" title={`Próxima semana: Semana ${nextWeekConnection.nextWeekNumber} — ${nextWeekConnection.nextTitle}`}>
        {nextWeekConnection.text}
      </Callout>
    </section>
  );
}
