import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { MultiSelectCheck } from "../../../../components/common/MultiSelectCheck";
import { SequenceBuilder } from "../../../../components/common/SequenceBuilder";
import { OpenTextField, OpenAnswerDisclaimer } from "../activities/components/OpenTextField";
import { isMeaningfulText } from "../activities/evaluate";
import { practicalCaseClosing, practicalCaseIntro, practicalCaseStages } from "../week07.data";

/** One 7-stage guided walkthrough of the Municipalidad Distrital de San Gabriel security incident — formative, not scored. */
export function PracticalCaseSection() {
  const [stepIndex, setStepIndex] = useState(0);
  const [stageDone, setStageDone] = useState(false);
  const [openTextValue, setOpenTextValue] = useState("");
  const finished = stepIndex >= practicalCaseStages.length;
  const stage = practicalCaseStages[stepIndex];

  function next() {
    setStepIndex((i) => i + 1);
    setStageDone(false);
    setOpenTextValue("");
  }

  return (
    <section id="caso-practico" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="Caso práctico"
        title="Un incidente de seguridad documental, paso a paso"
        description="Recorre el caso como lo haría un responsable de gestión documental."
      />
      <Badge variant="outline">Municipalidad Distrital de San Gabriel — simulación académica</Badge>

      <p className="rounded-lg border border-outline-variant bg-surface-container-low p-md text-body-md font-body-md text-on-surface italic">
        {practicalCaseIntro}
      </p>

      <AnimatePresence mode="wait">
        {!finished ? (
          <motion.div key={stage.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} className="space-y-md">
            <p className="text-caption font-caption font-bold uppercase tracking-wider text-on-surface-variant">
              {stage.title} — {stepIndex + 1} de {practicalCaseStages.length}
            </p>
            <p className="text-body-lg font-body-lg font-semibold text-on-surface">{stage.prompt}</p>

            {stage.kind === "multiSelect" && stage.options && (
              <MultiSelectCheck
                items={stage.options.map((o) => ({ id: o.id, label: o.label, icon: "HelpCircle", belongs: Boolean(o.belongs) }))}
                onComplete={() => setStageDone(true)}
              />
            )}

            {stage.kind === "sequence" && stage.options && stage.correctOrder && (
              <SequenceBuilder
                items={stage.options.map((o) => ({ id: o.id, label: o.label }))}
                correctOrder={stage.correctOrder}
                onComplete={() => setStageDone(true)}
              />
            )}

            {stage.kind === "openText" && (
              <div className="space-y-sm">
                <OpenTextField id={`caso-${stage.id}`} label="Tu respuesta" value={openTextValue} onChange={setOpenTextValue} rows={4} />
                <OpenAnswerDisclaimer />
                {!stageDone && (
                  <Button
                    onClick={() => {
                      if (isMeaningfulText(openTextValue, stage.minWords ?? 8)) setStageDone(true);
                    }}
                  >
                    Enviar respuesta
                  </Button>
                )}
              </div>
            )}

            {stageDone && (
              <>
                <Callout variant="info" title="Análisis de esta etapa">
                  {stage.closingNote}
                </Callout>
                <Button onClick={next}>{stepIndex + 1 === practicalCaseStages.length ? "Ver conclusión" : "Siguiente etapa"}</Button>
              </>
            )}
          </motion.div>
        ) : (
          <motion.div key="closing" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
            <Callout variant="success" title="Conclusión del caso">
              {practicalCaseClosing}
            </Callout>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
