import { PartyPopper } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Progress } from "../../../../components/ui/progress";
import { Activity1Attribute } from "../activities/Activity1Attribute";
import { Activity2Classify } from "../activities/Activity2Classify";
import { Activity3AssignPermissions } from "../activities/Activity3AssignPermissions";
import { Activity4RiskChain } from "../activities/Activity4RiskChain";
import { Activity5ClassifyControls } from "../activities/Activity5ClassifyControls";
import { Activity6AnalyzeIncident } from "../activities/Activity6AnalyzeIncident";
import { Activity7OrderResponse } from "../activities/Activity7OrderResponse";
import { Activity8AuditLog } from "../activities/Activity8AuditLog";
import { Activity9BackupStrategy } from "../activities/Activity9BackupStrategy";
import { Activity10Integrator } from "../activities/Activity10Integrator";
import { Week7ActivitiesProvider, useWeek7Activities } from "../activities/activitiesProgress";

function ProgressHeader() {
  const { completedCount, total, percent } = useWeek7Activities();

  return (
    <div className="sticky top-16 z-30 -mx-md md:-mx-lg lg:-mx-xl px-md md:px-lg lg:px-xl py-sm bg-surface-container-lowest/95 backdrop-blur-sm border-b border-outline-variant space-y-1.5">
      <div className="flex items-center justify-between flex-wrap gap-xs">
        <span className="text-label-md font-label-md font-bold uppercase tracking-wider text-primary-container">Actividades — Semana 7</span>
        <span className="text-label-md font-label-md font-semibold text-on-surface">Actividades completadas: {completedCount}/{total}</span>
      </div>
      <Progress value={percent} />
    </div>
  );
}

function CompletionBanner() {
  const { completedCount, total } = useWeek7Activities();
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
          <p className="text-headline-md font-headline-md text-on-tertiary-fixed-variant">¡Has completado las actividades de la Semana 7!</p>
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
        Diez ejercicios formativos para identificar atributos, clasificar riesgos y controles, asignar permisos,
        analizar incidentes y construir una estrategia de respaldo — no un cuestionario de alternativas. Tu progreso
        se guarda automáticamente.
      </p>

      <Activity1Attribute />
      <Activity2Classify />
      <Activity3AssignPermissions />
      <Activity4RiskChain />
      <Activity5ClassifyControls />
      <Activity6AnalyzeIncident />
      <Activity7OrderResponse />
      <Activity8AuditLog />
      <Activity9BackupStrategy />
      <Activity10Integrator />

      <CompletionBanner />
    </div>
  );
}

/** Week 7's "Actividades" lab: 10 formative exercises on confidentiality, integrity, availability, risks and controls. */
export function ActivitiesSection() {
  return (
    <section id="actividades" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="Actividades"
        title="Laboratorio práctico de seguridad documental"
        description="Identifica, clasifica, relaciona, ordena y decide — diez experiencias distintas, no un cuestionario de alternativas."
      />
      <Week7ActivitiesProvider>
        <ActivitiesContent />
      </Week7ActivitiesProvider>
    </section>
  );
}
