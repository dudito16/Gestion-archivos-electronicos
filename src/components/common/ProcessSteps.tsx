import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

export interface ProcessStepField {
  label: string;
  value: string | string[];
}

export interface ProcessStepItem {
  id: string;
  order: number;
  title: string;
  subtitle?: string;
  fields: ProcessStepField[];
}

interface ProcessStepsProps {
  steps: ProcessStepItem[];
  className?: string;
}

/** Numbered, connected sequence of process-step cards — reused by the "Alcance" infographic and the AGN case study. */
export function ProcessSteps({ steps, className }: ProcessStepsProps) {
  return (
    <div className={cn("space-y-xs", className)}>
      {steps.map((step, index) => (
        <div key={step.id}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: (index % 4) * 0.05 }}
            className="rounded-xl border border-outline-variant bg-surface-container-lowest p-md shadow-sm"
          >
            <div className="flex items-start gap-sm">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-container text-on-primary text-label-md font-label-md font-bold">
                {step.order}
              </span>
              <div className="flex-1">
                <h4 className="text-body-lg font-body-lg font-semibold text-on-surface">{step.title}</h4>
                {step.subtitle && (
                  <p className="text-body-md font-body-md text-on-surface-variant mt-1">{step.subtitle}</p>
                )}
                <dl className="mt-sm grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-sm">
                  {step.fields.map((field) => (
                    <div key={field.label}>
                      <dt className="text-caption font-caption font-semibold uppercase tracking-wider text-on-surface-variant">
                        {field.label}
                      </dt>
                      <dd className="text-label-md font-label-md text-on-surface mt-0.5">
                        {Array.isArray(field.value) ? field.value.join(" · ") : field.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </motion.div>
          {index < steps.length - 1 && (
            <div className="flex justify-center py-1 text-outline">
              <ArrowDown size={16} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
