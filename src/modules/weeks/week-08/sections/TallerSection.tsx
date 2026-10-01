import { PartyPopper } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Progress } from "../../../../components/ui/progress";
import { Taller1InteropMap } from "../taller/Taller1InteropMap";
import { Taller2IdentifyActors } from "../taller/Taller2IdentifyActors";
import { Taller3MetadataMapping } from "../taller/Taller3MetadataMapping";
import { Taller4ExchangeAnalysis } from "../taller/Taller4ExchangeAnalysis";
import { Taller5LossDiagnosis } from "../taller/Taller5LossDiagnosis";
import { Taller6ImageQualityEval } from "../taller/Taller6ImageQualityEval";
import { Taller7ResolutionSelection } from "../taller/Taller7ResolutionSelection";
import { Taller8FormatSelection } from "../taller/Taller8FormatSelection";
import { Taller9DigitizationPlan } from "../taller/Taller9DigitizationPlan";
import { Taller10Integrator } from "../taller/Taller10Integrator";
import { Week8TallerProvider, useWeek8Taller } from "../taller/tallerProgress";

function ProgressHeader() {
  const { completedCount, total, percent } = useWeek8Taller();

  return (
    <div className="sticky top-16 z-30 -mx-md md:-mx-lg lg:-mx-xl px-md md:px-lg lg:px-xl py-sm bg-surface-container-lowest/95 backdrop-blur-sm border-b border-outline-variant space-y-1.5">
      <div className="flex items-center justify-between flex-wrap gap-xs">
        <span className="text-label-md font-label-md font-bold uppercase tracking-wider text-primary-container">Taller Semana 8</span>
        <span className="text-label-md font-label-md font-semibold text-on-surface">Actividades completadas: {completedCount}/{total}</span>
      </div>
      <Progress value={percent} />
    </div>
  );
}

function CompletionBanner() {
  const { completedCount, total } = useWeek8Taller();
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
            Has finalizado el taller de la Semana 8. Revisa tus respuestas y reflexiona sobre cómo se relacionan
            interoperabilidad, calidad de digitalización y selección de formatos.
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
        Diez actividades más profundas para mapear interoperabilidad, relacionar metadatos, evaluar calidad de
        digitalización y seleccionar formatos — un espacio formativo, sin nota, para razonar como responsable de
        gestión documental. Tu progreso se guarda automáticamente.
      </p>

      <Taller1InteropMap />
      <Taller2IdentifyActors />
      <Taller3MetadataMapping />
      <Taller4ExchangeAnalysis />
      <Taller5LossDiagnosis />
      <Taller6ImageQualityEval />
      <Taller7ResolutionSelection />
      <Taller8FormatSelection />
      <Taller9DigitizationPlan />
      <Taller10Integrator />

      <CompletionBanner />
    </div>
  );
}

/** Week 8's "Taller" — 10 deeper, formative exercises on interoperability and digitization. */
export function TallerSection() {
  return (
    <section id="taller" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="Taller"
        title="Taller: interoperabilidad y digitalización en la práctica"
        description="Mapea interoperabilidad, relaciona metadatos, evalúa calidad de digitalización y selecciona formatos con criterio profesional."
      />
      <Week8TallerProvider>
        <TallerContent />
      </Week8TallerProvider>
    </section>
  );
}
