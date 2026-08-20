import { CheckCircle2, Circle } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { cn } from "../../../../utils/cn";
import { integratorCaseQuestions, integratorCaseSteps } from "../week01.data";
import { useWeek01Progress } from "../week01Progress";

/** Caso integrador: documents join the expediente one at a time as the learner works through the reflection questions. */
export function IntegratorCaseSection() {
  const { markComplete } = useWeek01Progress();
  const [answered, setAnswered] = useState<Set<number>>(new Set());

  const visibleCount = Math.max(1, answered.size + 1);
  const visibleSteps = integratorCaseSteps.slice(0, Math.min(visibleCount, integratorCaseSteps.length));
  const allDone = answered.size === integratorCaseQuestions.length;

  function toggle(index: number) {
    setAnswered((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      if (next.size === integratorCaseQuestions.length) markComplete("caso-integrador");
      return next;
    });
  }

  return (
    <section id="caso-integrador" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="Caso integrador"
        title="Construyamos un expediente electrónico"
        description="Marca cada pregunta a medida que la razonas — el expediente se va completando en pantalla, documento a documento."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg items-start">
        <div className="lg:col-span-5 rounded-xl border border-outline-variant bg-surface-container-lowest p-lg">
          <p className="text-label-md font-label-md font-semibold uppercase tracking-wider text-on-surface-variant mb-sm">
            {allDone ? "Expediente Electrónico" : "Documentos incorporados"}
          </p>
          <div className="space-y-1">
            {visibleSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className={cn(
                  "rounded-lg border px-sm py-2 text-label-md font-label-md",
                  index === visibleSteps.length - 1 && !allDone
                    ? "border-primary-container bg-secondary-container/40 text-on-secondary-container"
                    : "border-outline-variant bg-surface-container-low text-on-surface",
                )}
              >
                {step.label}
              </motion.div>
            ))}
          </div>
          <p className="text-caption font-caption text-on-surface-variant mt-sm">
            Un mismo hilo contextual —el trámite— une a todos estos documentos.
          </p>
        </div>

        <div className="lg:col-span-7 space-y-xs">
          {integratorCaseQuestions.map((question, index) => {
            const isChecked = answered.has(index);
            return (
              <button
                key={question}
                type="button"
                onClick={() => toggle(index)}
                aria-pressed={isChecked}
                className={cn(
                  "flex w-full items-start gap-xs rounded-lg border px-md py-sm text-left text-body-md font-body-md transition-colors",
                  isChecked
                    ? "border-tertiary-fixed-dim bg-tertiary-fixed/30 text-on-surface"
                    : "border-outline-variant bg-surface-container-lowest text-on-surface-variant hover:border-primary-container",
                )}
              >
                {isChecked ? (
                  <CheckCircle2 className="text-tertiary shrink-0 mt-0.5" size={18} />
                ) : (
                  <Circle className="text-outline shrink-0 mt-0.5" size={18} />
                )}
                <span>{question}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
