import { ArrowDown, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import type { FlowStep } from "../../types/content.types";

interface ZigzagFlowProps {
  steps: FlowStep[];
  perRow?: number;
  className?: string;
}

/**
 * Wide, wrapping process flow: rows of connected cards (→) with a row-break (↓) in between —
 * generalized from Week 2's "Flujo integral" so any week can show a long process without
 * cramming it into a single narrow column. Falls back to a single vertical column on mobile.
 */
export function ZigzagFlow({ steps, perRow = 5, className }: ZigzagFlowProps) {
  const rows: FlowStep[][] = [];
  for (let i = 0; i < steps.length; i += perRow) rows.push(steps.slice(i, i + perRow));

  return (
    <div className={className}>
      <div className="hidden lg:flex flex-col items-center gap-sm">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-col items-center gap-sm">
            <div className="flex items-center justify-center flex-wrap gap-2">
              {row.map((step, index) => (
                <div key={step.id} className="flex items-center gap-2">
                  <FlowCard label={step.label} delay={rowIndex * row.length * 0.06 + index * 0.08} />
                  {index < row.length - 1 && <ArrowRight className="text-outline shrink-0" size={18} />}
                </div>
              ))}
            </div>
            {rowIndex < rows.length - 1 && <ArrowDown className="text-outline shrink-0" size={20} />}
          </div>
        ))}
      </div>

      <div className="flex lg:hidden flex-col items-center gap-1">
        {steps.map((step, index) => (
          <div key={step.id} className="flex flex-col items-center">
            <FlowCard label={step.label} delay={index * 0.06} />
            {index < steps.length - 1 && <ArrowDown className="text-outline shrink-0 my-0.5" size={16} />}
          </div>
        ))}
      </div>
    </div>
  );
}

function FlowCard({ label, delay }: { label: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.35, delay }}
      className="min-w-[9.5rem] max-w-[11.5rem] rounded-lg border border-outline-variant bg-surface-container-lowest px-md py-sm md:py-4 text-center shadow-sm"
    >
      <span className="text-label-md font-label-md font-semibold text-on-surface">{label}</span>
    </motion.div>
  );
}
