import { PartyPopper } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Progress } from "../../../../components/ui/progress";
import { Taller1AnalyzeSignature } from "../taller/Taller1AnalyzeSignature";
import { Taller2DifferentiateMechanisms } from "../taller/Taller2DifferentiateMechanisms";
import { Taller3InterpretCertificate } from "../taller/Taller3InterpretCertificate";
import { Taller4VerifySituation } from "../taller/Taller4VerifySituation";
import { Taller5Reconstruct } from "../taller/Taller5Reconstruct";
import { Taller6AuditSheet } from "../taller/Taller6AuditSheet";
import { Taller7OrderFullProcess } from "../taller/Taller7OrderFullProcess";
import { Taller8DetectManagementProblem } from "../taller/Taller8DetectManagementProblem";
import { Taller9DecideCases } from "../taller/Taller9DecideCases";
import { Taller10Integrator } from "../taller/Taller10Integrator";
import { Week6TallerProvider, useWeek6Taller } from "../taller/tallerProgress";

function ProgressHeader() {
  const { completedCount, total, percent } = useWeek6Taller();

  return (
    <div className="sticky top-16 z-30 -mx-md md:-mx-lg lg:-mx-xl px-md md:px-lg lg:px-xl py-sm bg-surface-container-lowest/95 backdrop-blur-sm border-b border-outline-variant space-y-1.5">
      <div className="flex items-center justify-between flex-wrap gap-xs">
        <span className="text-label-md font-label-md font-bold uppercase tracking-wider text-primary-container">Taller Semana 6</span>
        <span className="text-label-md font-label-md font-semibold text-on-surface">Actividades completadas: {completedCount}/{total}</span>
      </div>
      <Progress value={percent} />
    </div>
  );
}

function CompletionBanner() {
  const { completedCount, total } = useWeek6Taller();
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
            Has finalizado el taller de la Semana 6. Revisa tus respuestas y reflexiona sobre cómo la firma, el
            certificado, la validación y la trazabilidad se sostienen mutuamente en la gestión de documentos
            electrónicos.
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
        Diez actividades más profundas para analizar firmas, interpretar certificados, verificar situaciones,
        reconstruir trazabilidad y resolver casos — un espacio formativo, sin nota, para aplicar criterio
        profesional. Tu progreso se guarda automáticamente.
      </p>

      <Taller1AnalyzeSignature />
      <Taller2DifferentiateMechanisms />
      <Taller3InterpretCertificate />
      <Taller4VerifySituation />
      <Taller5Reconstruct />
      <Taller6AuditSheet />
      <Taller7OrderFullProcess />
      <Taller8DetectManagementProblem />
      <Taller9DecideCases />
      <Taller10Integrator />

      <CompletionBanner />
    </div>
  );
}

/** Week 6's "Taller" — 10 deeper, formative exercises on signatures, certificates and traceability. */
export function TallerSection() {
  return (
    <section id="taller" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="Taller"
        title="Taller: firma, certificados y trazabilidad en la práctica"
        description="Analiza firmas, interpreta certificados, verifica situaciones, reconstruye trazabilidad y resuelve casos con criterio profesional."
      />
      <Week6TallerProvider>
        <TallerContent />
      </Week6TallerProvider>
    </section>
  );
}
