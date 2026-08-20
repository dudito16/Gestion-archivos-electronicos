import { ArrowDown, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";
import type { FlowStep } from "../../types/content.types";

interface FlowChainProps {
  steps: FlowStep[];
  className?: string;
}

/** Animated sequence of connected steps (e.g. "Físico → Escáner → OCR → PDF"). Wraps to vertical on mobile. */
export function FlowChain({ steps, className }: FlowChainProps) {
  return (
    <div className={cn("flex flex-col md:flex-row md:items-stretch flex-wrap gap-xs", className)}>
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center md:items-stretch flex-col md:flex-row gap-xs">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.35, delay: index * 0.08 }}
            className="rounded-lg border border-outline-variant bg-surface-container-lowest px-md py-sm flex flex-col justify-center min-w-[10rem] shadow-sm"
          >
            <span className="text-label-md font-label-md font-semibold text-on-surface">{step.label}</span>
            {step.description && (
              <span className="text-caption font-caption text-on-surface-variant mt-1">{step.description}</span>
            )}
          </motion.div>
          {index < steps.length - 1 && (
            <span className="flex justify-center text-primary-container shrink-0">
              <ArrowDown className="md:hidden" size={18} />
              <ArrowRight className="hidden md:block" size={18} />
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
