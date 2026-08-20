import { Check, X } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { cn } from "../../../../utils/cn";
import { getIcon } from "../../../../utils/getIcon";
import { dragDropCategories, interactiveCaseItems } from "../week01.data";
import type { ClassificationCategory } from "../week01.types";
import { useWeek01Progress } from "../week01Progress";

/** Scenario exercise: the learner classifies each document, with immediate feedback per choice. */
export function InteractiveCaseSection() {
  const { markComplete } = useWeek01Progress();
  const [answers, setAnswers] = useState<Record<string, ClassificationCategory>>({});

  function choose(itemId: string, category: ClassificationCategory) {
    if (answers[itemId]) return;
    setAnswers((prev) => {
      const next = { ...prev, [itemId]: category };
      if (Object.keys(next).length === interactiveCaseItems.length) markComplete("caso-interactivo");
      return next;
    });
  }

  const answeredCount = Object.keys(answers).length;
  const correctCount = interactiveCaseItems.filter((item) => answers[item.id] === item.correctCategory).length;

  return (
    <section id="caso-practico-interactivo" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="Ponte a prueba"
        title="¿Electrónico, digital, digitalizado o expediente?"
        description="Clasifica cada documento del escenario. Recibirás retroalimentación apenas elijas una opción."
      />

      <div className="space-y-sm">
        {interactiveCaseItems.map((item) => {
          const Icon = getIcon(item.icon);
          const chosen = answers[item.id];
          const isCorrect = chosen === item.correctCategory;

          return (
            <div key={item.id} className="rounded-xl border border-outline-variant bg-surface-container-lowest p-md">
              <div className="flex items-center gap-xs mb-sm">
                <Icon className="text-primary-container shrink-0" size={20} />
                <p className="text-body-md font-body-md font-medium text-on-surface">{item.label}</p>
              </div>

              <div className="flex flex-wrap gap-xs">
                {dragDropCategories.map((category) => {
                  const CategoryIcon = getIcon(category.icon);
                  const isChosen = chosen === category.id;
                  const revealCorrect = chosen && category.id === item.correctCategory;

                  return (
                    <button
                      key={category.id}
                      type="button"
                      disabled={Boolean(chosen)}
                      onClick={() => choose(item.id, category.id)}
                      className={cn(
                        "flex items-center gap-1 rounded-full border px-3 py-1.5 text-caption font-caption font-medium transition-colors",
                        !chosen && "border-outline-variant hover:border-primary-container",
                        chosen && !isChosen && !revealCorrect && "border-outline-variant opacity-50",
                        isChosen && isCorrect && "border-tertiary-fixed-dim bg-tertiary-fixed/60",
                        isChosen && !isCorrect && "border-error bg-error-container/60",
                        revealCorrect && !isChosen && "border-tertiary-fixed-dim bg-tertiary-fixed/30",
                      )}
                    >
                      <CategoryIcon size={13} />
                      {category.label}
                      {isChosen && (isCorrect ? <Check size={13} /> : <X size={13} />)}
                    </button>
                  );
                })}
              </div>

              {chosen && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-caption font-caption text-on-surface-variant mt-sm"
                >
                  {item.feedback}
                </motion.p>
              )}
            </div>
          );
        })}
      </div>

      {answeredCount === interactiveCaseItems.length && (
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-label-md font-label-md text-on-surface">
          Resultado del escenario: {correctCount}/{interactiveCaseItems.length} correctas.
        </motion.p>
      )}
    </section>
  );
}
