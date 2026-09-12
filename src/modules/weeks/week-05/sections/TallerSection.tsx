import { PartyPopper } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Progress } from "../../../../components/ui/progress";
import { Activity1Evidence } from "../activities/Activity1Evidence";
import { Activity2Attributes } from "../activities/Activity2Attributes";
import { Activity3Risks } from "../activities/Activity3Risks";
import { Activity4Capture } from "../activities/Activity4Capture";
import { Activity5Registration } from "../activities/Activity5Registration";
import { Activity6Order } from "../activities/Activity6Order";
import { Activity7FixSystem } from "../activities/Activity7FixSystem";
import { Activity8Flow } from "../activities/Activity8Flow";
import { Activity9AttributeRisk } from "../activities/Activity9AttributeRisk";
import { Activity10Integrator } from "../activities/Activity10Integrator";
import { Week5ActivitiesProvider, useWeek5Activities } from "../activities/activitiesProgress";

function ProgressHeader() {
  const { completedCount, total, percent } = useWeek5Activities();

  return (
    <div className="sticky top-16 z-30 -mx-md md:-mx-lg lg:-mx-xl px-md md:px-lg lg:px-xl py-sm bg-surface-container-lowest/95 backdrop-blur-sm border-b border-outline-variant space-y-1.5">
      <div className="flex items-center justify-between flex-wrap gap-xs">
        <span className="text-label-md font-label-md font-bold uppercase tracking-wider text-primary-container">
          Taller Semana 5
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
  const { completedCount, total } = useWeek5Activities();
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
          <p className="text-headline-md font-headline-md text-on-tertiary-fixed-variant">Taller completado</p>
          <p className="text-body-md font-body-md text-on-tertiary-fixed-variant max-w-xl">
            Has finalizado el taller de la Semana 5. Revisa tus respuestas y reflexiona sobre los controles
            necesarios para garantizar una gestión documental adecuada.
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function TallerContent() {
  return (
    <div className="space-y-lg">
      <ProgressHeader />

      <p className="text-body-lg font-body-lg text-on-surface max-w-2xl">
        Diez actividades formativas para analizar, identificar, relacionar, proponer controles y tomar decisiones
        frente a casos reales de gestión documental — no un cuestionario de alternativas. Este taller no otorga
        una nota calificada: es un espacio para aprender con retroalimentación. Tu progreso se guarda
        automáticamente.
      </p>

      <Activity1Evidence />
      <Activity2Attributes />
      <Activity3Risks />
      <Activity4Capture />
      <Activity5Registration />
      <Activity6Order />
      <Activity7FixSystem />
      <Activity8Flow />
      <Activity9AttributeRisk />
      <Activity10Integrator />

      <CompletionBanner />
    </div>
  );
}

/** Week 5's "Taller" — 10 formative ISO 15489-1 activities, following the same pattern as Week 4's activities lab. */
export function TallerSection() {
  return (
    <section id="taller" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="Taller"
        title="Taller: análisis y gestión de documentos electrónicos según ISO 15489-1:2016"
        description="Analiza, identifica, detecta problemas, relaciona, propone controles, decide y justifica — diez experiencias distintas para aplicar autenticidad, fiabilidad, integridad y disponibilidad a casos concretos."
      />
      <Week5ActivitiesProvider>
        <TallerContent />
      </Week5ActivitiesProvider>
    </section>
  );
}
