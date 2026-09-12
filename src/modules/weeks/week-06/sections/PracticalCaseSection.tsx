import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { SingleChoiceCheck } from "../../../../components/common/SingleChoiceCheck";
import { Callout } from "../../../../components/common/Callout";
import { Button } from "../../../../components/ui/button";
import { Badge } from "../../../../components/ui/badge";
import { practicalCaseSteps } from "../week06.data";

const closing =
  "Este recorrido resume el criterio profesional ante un documento firmado: identificar al firmante y su certificado, verificar la firma, comprobar la integridad, situar la firma en el tiempo, y registrar la revisión para sostener la trazabilidad hacia adelante.";

/** Step-by-step scenario walkthrough — formative, not a scored practice (same pattern as Week 5's DecisionSimulatorSection). */
export function PracticalCaseSection() {
  const [stepIndex, setStepIndex] = useState(0);
  const [answered, setAnswered] = useState(false);
  const finished = stepIndex >= practicalCaseSteps.length;

  function next() {
    setStepIndex((i) => i + 1);
    setAnswered(false);
  }

  return (
    <section id="caso-practico" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="Caso práctico"
        title="Un documento firmado que debe incorporarse a un trámite"
        description="Recorre el caso paso a paso, como lo haría un responsable de gestión documental."
      />
      <Badge variant="outline">Ejemplo contextualizado al AGN</Badge>

      <AnimatePresence mode="wait">
        {!finished ? (
          <motion.div key={practicalCaseSteps[stepIndex].id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} className="space-y-md">
            <p className="text-caption font-caption font-bold uppercase tracking-wider text-on-surface-variant">
              Paso {stepIndex + 1} de {practicalCaseSteps.length}
            </p>
            <SingleChoiceCheck
              prompt={practicalCaseSteps[stepIndex].scenario + "\n\n" + practicalCaseSteps[stepIndex].prompt}
              options={practicalCaseSteps[stepIndex].options}
              correctId={practicalCaseSteps[stepIndex].bestId}
              feedback={practicalCaseSteps[stepIndex].feedback}
              onAnswer={() => setAnswered(true)}
            />
            {answered && <Button onClick={next}>{stepIndex + 1 === practicalCaseSteps.length ? "Ver conclusión" : "Siguiente paso"}</Button>}
          </motion.div>
        ) : (
          <motion.div key="closing" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
            <Callout variant="success" title="Conclusión del caso">
              {closing}
            </Callout>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
