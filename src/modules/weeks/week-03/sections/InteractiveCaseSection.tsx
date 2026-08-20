import { Check, HelpCircle, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { cn } from "../../../../utils/cn";
import { interactiveCaseTimeline } from "../week03.data";

/** "¿Qué ocurrió con este documento?" — fill-the-gap timeline, formative only (no grade). */
export function InteractiveCaseSection() {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  function choose(gapId: string, option: string) {
    if (answers[gapId]) return;
    setAnswers((prev) => ({ ...prev, [gapId]: option }));
  }

  const allAnswered = Object.keys(answers).length === interactiveCaseTimeline.gaps.length;

  return (
    <section id="caso-practico" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Caso práctico interactivo" title="¿Qué ocurrió con este documento?" />

      <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg">
        <div className="flex flex-col items-center gap-1">
          {interactiveCaseTimeline.known.map((step, index) => (
            <div key={step} className="flex flex-col items-center w-full max-w-md">
              <span className="rounded-lg border border-outline-variant bg-surface-container-low px-4 py-2 text-label-md font-label-md font-semibold text-on-surface">
                {step}
              </span>

              {interactiveCaseTimeline.gaps
                .filter((g) => g.afterIndex === index)
                .map((gap) => {
                  const chosen = answers[gap.id];
                  const isCorrect = chosen === gap.correct;
                  return (
                    <div key={gap.id} className="flex flex-col items-center gap-xs my-xs w-full">
                      <HelpCircle className="text-outline" size={16} />
                      <div className="flex flex-wrap justify-center gap-1">
                        {gap.options.map((option) => {
                          const isChosen = chosen === option;
                          const revealCorrect = chosen && option === gap.correct;
                          return (
                            <button
                              key={option}
                              type="button"
                              disabled={Boolean(chosen)}
                              onClick={() => choose(gap.id, option)}
                              className={cn(
                                "flex items-center gap-1 rounded-full border px-3 py-1 text-caption font-caption font-medium transition-colors",
                                !chosen && "border-outline-variant hover:border-primary-container",
                                chosen && !isChosen && !revealCorrect && "border-outline-variant opacity-50",
                                isChosen && isCorrect && "border-tertiary-fixed-dim bg-tertiary-fixed/60",
                                isChosen && !isCorrect && "border-error bg-error-container/60",
                                revealCorrect && !isChosen && "border-tertiary-fixed-dim bg-tertiary-fixed/30",
                              )}
                            >
                              {option}
                              {isChosen && (isCorrect ? <Check size={12} /> : <X size={12} />)}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {allAnswered && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}>
            <Callout variant="success" title="Retroalimentación">
              {interactiveCaseTimeline.feedback}
            </Callout>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
