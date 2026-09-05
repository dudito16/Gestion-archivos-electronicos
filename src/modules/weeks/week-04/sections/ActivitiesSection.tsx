import { PartyPopper } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Progress } from "../../../../components/ui/progress";
import { Activity1DetectMetadata } from "../activities/Activity1DetectMetadata";
import { Activity2CompleteForm } from "../activities/Activity2CompleteForm";
import { Activity3MissingMetadata } from "../activities/Activity3MissingMetadata";
import { Activity4Classify } from "../activities/Activity4Classify";
import { Activity5BuildMetadata } from "../activities/Activity5BuildMetadata";
import { Activity6FixSheet } from "../activities/Activity6FixSheet";
import { Activity7DocumentRecord } from "../activities/Activity7DocumentRecord";
import { Activity8History } from "../activities/Activity8History";
import { Activity9Decision } from "../activities/Activity9Decision";
import { Activity10DesignSheet } from "../activities/Activity10DesignSheet";
import { Week4ActivitiesProvider, useWeek4Activities } from "../activities/activitiesProgress";

function ProgressHeader() {
  const { completedCount, total, percent } = useWeek4Activities();

  return (
    <div className="sticky top-16 z-30 -mx-md md:-mx-lg lg:-mx-xl px-md md:px-lg lg:px-xl py-sm bg-surface-container-lowest/95 backdrop-blur-sm border-b border-outline-variant space-y-1.5">
      <div className="flex items-center justify-between flex-wrap gap-xs">
        <span className="text-label-md font-label-md font-bold uppercase tracking-wider text-primary-container">
          Laboratorio de metadatos
        </span>
        <span className="text-label-md font-label-md font-semibold text-on-surface">
          Actividades completadas: {completedCount}/{total}
        </span>
      </div>
      <Progress value={percent} />
    </div>
  );
}

function CompletionBanner() {
  const { completedCount, total } = useWeek4Activities();
  const allDone = completedCount === total;

  return (
    <AnimatePresence>
      {allDone && (
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className="rounded-xl border border-tertiary-fixed-dim bg-tertiary-fixed/40 p-lg text-center flex flex-col items-center gap-xs"
        >
          <PartyPopper className="text-tertiary" size={28} />
          <p className="text-headline-md font-headline-md text-on-tertiary-fixed-variant">
            ¡Has completado las actividades de la Semana 4!
          </p>
          <p className="text-body-md font-body-md text-on-tertiary-fixed-variant">
            Estas actividades son de aprendizaje y retroalimentación; no constituyen una evaluación calificada.
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ActivitiesContent() {
  return (
    <div className="space-y-lg">
      <ProgressHeader />

      <p className="text-body-lg font-body-lg text-on-surface max-w-2xl">
        Diez ejercicios para pasar de reconocer metadatos a proponerlos, corregirlos y justificarlos con criterio
        profesional. Cada actividad guarda tu progreso automáticamente.
      </p>

      <Activity1DetectMetadata />
      <Activity2CompleteForm />
      <Activity3MissingMetadata />
      <Activity4Classify />
      <Activity5BuildMetadata />
      <Activity6FixSheet />
      <Activity7DocumentRecord />
      <Activity8History />
      <Activity9Decision />
      <Activity10DesignSheet />

      <CompletionBanner />
    </div>
  );
}

/** Week 4's "Actividades" lab: 10 hands-on metadata exercises, replacing the previous 3-activity set. */
export function ActivitiesSection() {
  return (
    <section id="actividades" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="Actividades"
        title="Laboratorio práctico de metadatos"
        description="Lee, analiza, identifica, propone, completa, corrige, justifica y diseña — diez experiencias distintas, no un cuestionario de alternativas."
      />
      <Week4ActivitiesProvider>
        <ActivitiesContent />
      </Week4ActivitiesProvider>
    </section>
  );
}
