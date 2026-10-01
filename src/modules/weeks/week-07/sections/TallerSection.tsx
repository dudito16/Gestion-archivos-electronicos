import { PartyPopper } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Progress } from "../../../../components/ui/progress";
import { Taller1AccessDiagnosis } from "../taller/Taller1AccessDiagnosis";
import { Taller2RolesMatrix } from "../taller/Taller2RolesMatrix";
import { Taller3RiskMap } from "../taller/Taller3RiskMap";
import { Taller4Vulnerabilities } from "../taller/Taller4Vulnerabilities";
import { Taller5ControlsMatrix } from "../taller/Taller5ControlsMatrix";
import { Taller6BackupRecovery } from "../taller/Taller6BackupRecovery";
import { Taller7ReconstructIncident } from "../taller/Taller7ReconstructIncident";
import { Taller8IncidentReport } from "../taller/Taller8IncidentReport";
import { Taller9InstitutionalCases } from "../taller/Taller9InstitutionalCases";
import { Taller10Integrator } from "../taller/Taller10Integrator";
import { Week7TallerProvider, useWeek7Taller } from "../taller/tallerProgress";

function ProgressHeader() {
  const { completedCount, total, percent } = useWeek7Taller();

  return (
    <div className="sticky top-16 z-30 -mx-md md:-mx-lg lg:-mx-xl px-md md:px-lg lg:px-xl py-sm bg-surface-container-lowest/95 backdrop-blur-sm border-b border-outline-variant space-y-1.5">
      <div className="flex items-center justify-between flex-wrap gap-xs">
        <span className="text-label-md font-label-md font-bold uppercase tracking-wider text-primary-container">Taller Semana 7</span>
        <span className="text-label-md font-label-md font-semibold text-on-surface">Actividades completadas: {completedCount}/{total}</span>
      </div>
      <Progress value={percent} />
    </div>
  );
}

function CompletionBanner() {
  const { completedCount, total } = useWeek7Taller();
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
            Has finalizado el taller de la Semana 7. Revisa tus respuestas y reflexiona sobre cómo se relacionan
            riesgos, permisos, controles, respaldos y trazabilidad en la seguridad de un documento electrónico.
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
        Diez actividades más profundas para diagnosticar accesos, mapear riesgos, definir controles, analizar
        respaldos y reconstruir incidentes — un espacio formativo, sin nota, para razonar como responsable de
        gestión documental. Tu progreso se guarda automáticamente.
      </p>

      <Taller1AccessDiagnosis />
      <Taller2RolesMatrix />
      <Taller3RiskMap />
      <Taller4Vulnerabilities />
      <Taller5ControlsMatrix />
      <Taller6BackupRecovery />
      <Taller7ReconstructIncident />
      <Taller8IncidentReport />
      <Taller9InstitutionalCases />
      <Taller10Integrator />

      <CompletionBanner />
    </div>
  );
}

/** Week 7's "Taller" — 10 deeper, formative exercises on documentary security. */
export function TallerSection() {
  return (
    <section id="taller" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="Taller"
        title="Taller: seguridad documental en la práctica"
        description="Diagnostica accesos, mapea riesgos, define controles, analiza respaldos y resuelve casos con criterio profesional."
      />
      <Week7TallerProvider>
        <TallerContent />
      </Week7TallerProvider>
    </section>
  );
}
