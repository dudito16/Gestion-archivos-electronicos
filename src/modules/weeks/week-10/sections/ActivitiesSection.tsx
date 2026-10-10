import { ChevronLeft, ChevronRight, PartyPopper } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Button } from "../../../../components/ui/button";
import { Progress } from "../../../../components/ui/progress";
import { Activity1Integrity } from "../activities/Activity1Integrity";
import { Activity2HashVsChecksum } from "../activities/Activity2HashVsChecksum";
import { Activity3HashBehavior } from "../activities/Activity3HashBehavior";
import { Activity4FixityOrder } from "../activities/Activity4FixityOrder";
import { Activity5InterpretDifference } from "../activities/Activity5InterpretDifference";
import { Activity6ClassifyCauses } from "../activities/Activity6ClassifyCauses";
import { Activity7IdentifyRisk } from "../activities/Activity7IdentifyRisk";
import { Activity8MatchControls } from "../activities/Activity8MatchControls";
import { Activity9Traceability } from "../activities/Activity9Traceability";
import { Activity10ProfessionalCase } from "../activities/Activity10ProfessionalCase";
import { ACTIVITY_IDS, Week10ActivitiesProvider, useWeek10Activities } from "../activities/activitiesProgress";

const ACTIVITIES = [
  Activity1Integrity,
  Activity2HashVsChecksum,
  Activity3HashBehavior,
  Activity4FixityOrder,
  Activity5InterpretDifference,
  Activity6ClassifyCauses,
  Activity7IdentifyRisk,
  Activity8MatchControls,
  Activity9Traceability,
  Activity10ProfessionalCase,
];

function ActivitiesJourney() {
  const { completedCount, total, isCompleted } = useWeek10Activities();
  const [index, setIndex] = useState(0);
  const CurrentActivity = ACTIVITIES[index];
  const allDone = completedCount === total;

  return (
    <div className="space-y-md">
      <div className="sticky top-16 z-30 -mx-md md:-mx-lg lg:-mx-xl px-md md:px-lg lg:px-xl py-sm bg-surface-container-lowest/95 backdrop-blur-sm border-b border-outline-variant space-y-1.5">
        <div className="flex items-center justify-between flex-wrap gap-xs">
          <span className="text-label-md font-label-md font-bold uppercase tracking-wider text-primary-container">
            Actividad {index + 1} de {total}
          </span>
          <span className="text-label-md font-label-md font-semibold text-on-surface">Completadas: {completedCount}/{total}</span>
        </div>
        <Progress value={((index + 1) / total) * 100} />
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={index} initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -12 }} transition={{ duration: 0.25 }}>
          <CurrentActivity />
        </motion.div>
      </AnimatePresence>

      <div className="flex items-center justify-between gap-sm flex-wrap">
        <Button variant="secondary" disabled={index === 0} onClick={() => setIndex((i) => Math.max(0, i - 1))}>
          <ChevronLeft size={16} /> Anterior
        </Button>
        <div className="flex gap-1">
          {ACTIVITY_IDS.map((id, i) => (
            <button
              key={id}
              type="button"
              aria-label={`Ir a actividad ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 w-2 rounded-full transition-colors ${i === index ? "bg-primary-container" : isCompleted(id) ? "bg-tertiary-fixed-dim" : "bg-outline-variant"}`}
            />
          ))}
        </div>
        <Button variant="secondary" disabled={index === total - 1} onClick={() => setIndex((i) => Math.min(total - 1, i + 1))}>
          Siguiente <ChevronRight size={16} />
        </Button>
      </div>

      <AnimatePresence>
        {allDone && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-xl border border-tertiary-fixed-dim bg-tertiary-fixed/40 p-lg text-center flex flex-col items-center gap-xs"
          >
            <PartyPopper className="text-tertiary" size={28} />
            <p className="text-headline-md font-headline-md text-on-tertiary-fixed-variant">¡Has completado las actividades de la Semana 10!</p>
            <p className="text-body-md font-body-md text-on-tertiary-fixed-variant">
              Estas actividades son de aprendizaje y retroalimentación; no constituyen una evaluación calificada.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/** Week 10's "Actividades" — a guided, one-at-a-time journey through 10 formative exercises on integridad digital. */
export function ActivitiesSection() {
  return (
    <section id="actividades" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="Actividades"
        title="Recorrido de integridad digital"
        description="Diez experiencias formativas, una a la vez: concepto, hash, checksum, fixity, interpretación de diferencias, riesgos y controles. Tu progreso se guarda automáticamente."
      />
      <Week10ActivitiesProvider>
        <ActivitiesJourney />
      </Week10ActivitiesProvider>
    </section>
  );
}
