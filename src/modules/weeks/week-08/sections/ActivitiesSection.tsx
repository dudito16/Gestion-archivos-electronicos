import { PartyPopper } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Progress } from "../../../../components/ui/progress";
import { Activity1Interoperability } from "../activities/Activity1Interoperability";
import { Activity2ClassifyDimension } from "../activities/Activity2ClassifyDimension";
import { Activity3MapFields } from "../activities/Activity3MapFields";
import { Activity4ReconstructExchange } from "../activities/Activity4ReconstructExchange";
import { Activity5DetectLoss } from "../activities/Activity5DetectLoss";
import { Activity6AnalyzeQuality } from "../activities/Activity6AnalyzeQuality";
import { Activity7SelectColorMode } from "../activities/Activity7SelectColorMode";
import { Activity8CompareFormats } from "../activities/Activity8CompareFormats";
import { Activity9SelectFormat } from "../activities/Activity9SelectFormat";
import { Activity10Integrator } from "../activities/Activity10Integrator";
import { Week8ActivitiesProvider, useWeek8Activities } from "../activities/activitiesProgress";

function ProgressHeader() {
  const { completedCount, total, percent } = useWeek8Activities();

  return (
    <div className="sticky top-16 z-30 -mx-md md:-mx-lg lg:-mx-xl px-md md:px-lg lg:px-xl py-sm bg-surface-container-lowest/95 backdrop-blur-sm border-b border-outline-variant space-y-1.5">
      <div className="flex items-center justify-between flex-wrap gap-xs">
        <span className="text-label-md font-label-md font-bold uppercase tracking-wider text-primary-container">Actividades — Semana 8</span>
        <span className="text-label-md font-label-md font-semibold text-on-surface">Actividades completadas: {completedCount}/{total}</span>
      </div>
      <Progress value={percent} />
    </div>
  );
}

function CompletionBanner() {
  const { completedCount, total } = useWeek8Activities();
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
          <p className="text-headline-md font-headline-md text-on-tertiary-fixed-variant">¡Has completado las actividades de la Semana 8!</p>
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
        Diez ejercicios formativos para identificar dimensiones de interoperabilidad, relacionar campos, reconstruir
        intercambios, analizar calidad de digitalización y comparar formatos — no un cuestionario de alternativas. Tu
        progreso se guarda automáticamente.
      </p>

      <Activity1Interoperability />
      <Activity2ClassifyDimension />
      <Activity3MapFields />
      <Activity4ReconstructExchange />
      <Activity5DetectLoss />
      <Activity6AnalyzeQuality />
      <Activity7SelectColorMode />
      <Activity8CompareFormats />
      <Activity9SelectFormat />
      <Activity10Integrator />

      <CompletionBanner />
    </div>
  );
}

/** Week 8's "Actividades" lab: 10 formative exercises on interoperability, digitization and formats. */
export function ActivitiesSection() {
  return (
    <section id="actividades" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="Actividades"
        title="Laboratorio práctico de interoperabilidad y digitalización"
        description="Identifica, clasifica, relaciona, reconstruye y decide — diez experiencias distintas, no un cuestionario de alternativas."
      />
      <Week8ActivitiesProvider>
        <ActivitiesContent />
      </Week8ActivitiesProvider>
    </section>
  );
}
