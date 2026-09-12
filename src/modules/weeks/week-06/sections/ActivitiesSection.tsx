import { PartyPopper } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Progress } from "../../../../components/ui/progress";
import { Activity1SignatureTypes } from "../activities/Activity1SignatureTypes";
import { Activity2Mechanism } from "../activities/Activity2Mechanism";
import { Activity3AnalyzeDocument } from "../activities/Activity3AnalyzeDocument";
import { Activity4MatchCertificate } from "../activities/Activity4MatchCertificate";
import { Activity5ValidationErrors } from "../activities/Activity5ValidationErrors";
import { Activity6OrderSigning } from "../activities/Activity6OrderSigning";
import { Activity7AuditInfo } from "../activities/Activity7AuditInfo";
import { Activity8Timeline } from "../activities/Activity8Timeline";
import { Activity9Decide } from "../activities/Activity9Decide";
import { Activity10Integrator } from "../activities/Activity10Integrator";
import { Week6ActivitiesProvider, useWeek6Activities } from "../activities/activitiesProgress";

function ProgressHeader() {
  const { completedCount, total, percent } = useWeek6Activities();

  return (
    <div className="sticky top-16 z-30 -mx-md md:-mx-lg lg:-mx-xl px-md md:px-lg lg:px-xl py-sm bg-surface-container-lowest/95 backdrop-blur-sm border-b border-outline-variant space-y-1.5">
      <div className="flex items-center justify-between flex-wrap gap-xs">
        <span className="text-label-md font-label-md font-bold uppercase tracking-wider text-primary-container">Actividades — Semana 6</span>
        <span className="text-label-md font-label-md font-semibold text-on-surface">Actividades completadas: {completedCount}/{total}</span>
      </div>
      <Progress value={percent} />
    </div>
  );
}

function CompletionBanner() {
  const { completedCount, total } = useWeek6Activities();
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
          <p className="text-headline-md font-headline-md text-on-tertiary-fixed-variant">¡Has completado las actividades de la Semana 6!</p>
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
        Diez ejercicios formativos para diferenciar mecanismos de firma, interpretar certificados, analizar
        validaciones y reconstruir trazabilidad — no un cuestionario de alternativas. Tu progreso se guarda
        automáticamente.
      </p>

      <Activity1SignatureTypes />
      <Activity2Mechanism />
      <Activity3AnalyzeDocument />
      <Activity4MatchCertificate />
      <Activity5ValidationErrors />
      <Activity6OrderSigning />
      <Activity7AuditInfo />
      <Activity8Timeline />
      <Activity9Decide />
      <Activity10Integrator />

      <CompletionBanner />
    </div>
  );
}

/** Week 6's "Actividades" lab: 10 formative exercises on signatures, certificates and traceability. */
export function ActivitiesSection() {
  return (
    <section id="actividades" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="Actividades"
        title="Laboratorio práctico de firma y certificados"
        description="Diferencia, identifica, analiza, relaciona, ordena y decide — diez experiencias distintas, no un cuestionario de alternativas."
      />
      <Week6ActivitiesProvider>
        <ActivitiesContent />
      </Week6ActivitiesProvider>
    </section>
  );
}
