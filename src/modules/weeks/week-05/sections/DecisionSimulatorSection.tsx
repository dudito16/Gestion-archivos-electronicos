import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { SingleChoiceCheck } from "../../../../components/common/SingleChoiceCheck";
import { Callout } from "../../../../components/common/Callout";
import { Button } from "../../../../components/ui/button";
import { decisionClosing, decisionSteps } from "../week05.data";

/** Short, ungraded scenario walkthrough — formative, not a scored practice. */
export function DecisionSimulatorSection() {
  const [stepIndex, setStepIndex] = useState(0);
  const [answered, setAnswered] = useState(false);
  const finished = stepIndex >= decisionSteps.length;

  function next() {
    setStepIndex((i) => i + 1);
    setAnswered(false);
  }

  return (
    <section id="simulador-decisiones" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="Simulador de decisiones"
        title="Un reclamo ciudadano, paso a paso"
        description="Actividad formativa: avanza tomando decisiones y observa cómo cambia el análisis en cada paso."
      />

      <AnimatePresence mode="wait">
        {!finished ? (
          <motion.div key={decisionSteps[stepIndex].id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} className="space-y-md">
            <p className="text-caption font-caption font-bold uppercase tracking-wider text-on-surface-variant">
              Paso {stepIndex + 1} de {decisionSteps.length}
            </p>
            <SingleChoiceCheck
              prompt={decisionSteps[stepIndex].scenario + "\n\n" + decisionSteps[stepIndex].prompt}
              options={decisionSteps[stepIndex].options}
              correctId={decisionSteps[stepIndex].bestId}
              feedback={decisionSteps[stepIndex].feedback}
              onAnswer={() => setAnswered(true)}
            />
            {answered && <Button onClick={next}>{stepIndex + 1 === decisionSteps.length ? "Ver conclusión" : "Siguiente decisión"}</Button>}
          </motion.div>
        ) : (
          <motion.div key="closing" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
            <Callout variant="success" title="Conclusión del caso">
              {decisionClosing}
            </Callout>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
