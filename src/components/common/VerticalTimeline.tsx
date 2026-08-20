import { motion } from "framer-motion";
import { cn } from "../../utils/cn";
import { getIcon } from "../../utils/getIcon";
import type { TimelineStep } from "../../types/content.types";

interface VerticalTimelineProps {
  steps: TimelineStep[];
}

/** Rich, alternating-side vertical timeline with a scroll-revealed connecting spine. */
export function VerticalTimeline({ steps }: VerticalTimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-outline-variant md:-translate-x-1/2" aria-hidden />
      <ol className="space-y-lg">
        {steps.map((step, index) => {
          const Icon = getIcon(step.icon);
          const isEven = index % 2 === 0;
          return (
            <li key={step.id} className="relative pl-14 md:pl-0">
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="absolute left-5 md:left-1/2 top-0 -translate-x-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-primary-container text-on-primary shadow-sm z-10"
              >
                <Icon size={18} />
              </motion.span>

              <motion.div
                initial={{ opacity: 0, x: isEven ? -24 : 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className={cn(
                  "md:w-[calc(50%-2.5rem)] rounded-xl border border-outline-variant bg-surface-container-lowest p-md shadow-sm",
                  isEven ? "md:mr-auto" : "md:ml-auto",
                )}
              >
                <span className="text-caption font-caption font-semibold uppercase tracking-wider text-primary-container">
                  {step.period}
                </span>
                <h4 className="text-body-lg font-body-lg font-semibold text-on-surface mt-1">{step.title}</h4>
                <p className="text-body-md font-body-md text-on-surface-variant mt-1">{step.description}</p>
              </motion.div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
