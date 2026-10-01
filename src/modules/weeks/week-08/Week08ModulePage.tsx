import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Breadcrumb } from "../../../components/common/Breadcrumb";
import { ReadingProgressBar } from "../../../components/ui/reading-progress-bar";
import { ActivitiesSection } from "./sections/ActivitiesSection";
import { ColorSection } from "./sections/ColorSection";
import { ConnectionsSection } from "./sections/ConnectionsSection";
import { DigitizationCaseSection } from "./sections/DigitizationCaseSection";
import { DigitizationIntroSection } from "./sections/DigitizationIntroSection";
import { DigitizingWellSection } from "./sections/DigitizingWellSection";
import { DocumentExchangeSection } from "./sections/DocumentExchangeSection";
import { FileExchangeSection } from "./sections/FileExchangeSection";
import { FormatComparatorSection } from "./sections/FormatComparatorSection";
import { FormatSelectionSection } from "./sections/FormatSelectionSection";
import { FormatsSection } from "./sections/FormatsSection";
import { Week08HeroSection } from "./sections/HeroSection";
import { ImageQualitySection } from "./sections/ImageQualitySection";
import { InteropCaseSection } from "./sections/InteropCaseSection";
import { InteroperabilityIntroSection } from "./sections/InteroperabilityIntroSection";
import { ObjectivesSection } from "./sections/ObjectivesSection";
import { OrganizationalInteropSection } from "./sections/OrganizationalInteropSection";
import { PracticalExam8Section } from "./sections/PracticalExam8Section";
import { QualityControlSection } from "./sections/QualityControlSection";
import { ResolutionSection } from "./sections/ResolutionSection";
import { SemanticInteropSection } from "./sections/SemanticInteropSection";
import { StatePeruInteropSection } from "./sections/StatePeruInteropSection";
import { SummarySection } from "./sections/SummarySection";
import { TallerSection } from "./sections/TallerSection";
import { TechnicalInteropSection } from "./sections/TechnicalInteropSection";

/**
 * Week 8 interactive module — same long-form, scroll-driven pattern as Weeks 1-7. Theory + diagrams +
 * animations + formative activities + workshop + graded practice, covering interoperabilidad
 * organizacional/semántica/técnica, intercambio de documentos y expedientes, digitalización,
 * calidad de imagen, resolución, color y formatos (TIFF/JPEG/PNG/PDF/PDF-A).
 */
export function Week08ModulePage() {
  const { anchor } = useParams<{ anchor?: string }>();

  useEffect(() => {
    if (!anchor) return;
    const target = document.getElementById(anchor);
    if (target) {
      const timeout = window.setTimeout(() => target.scrollIntoView({ behavior: "smooth", block: "start" }), 120);
      return () => window.clearTimeout(timeout);
    }
  }, [anchor]);

  return (
    <div className="space-y-24">
      <ReadingProgressBar />

      <Breadcrumb items={[{ label: "Syllabus", to: "/" }, { label: "Semana 8" }]} />

      <Week08HeroSection />
      <ObjectivesSection />
      <InteroperabilityIntroSection />
      <OrganizationalInteropSection />
      <SemanticInteropSection />
      <TechnicalInteropSection />
      <StatePeruInteropSection />
      <DocumentExchangeSection />
      <FileExchangeSection />
      <InteropCaseSection />
      <DigitizationIntroSection />
      <DigitizingWellSection />
      <ResolutionSection />
      <ColorSection />
      <ImageQualitySection />
      <FormatsSection />
      <FormatComparatorSection />
      <FormatSelectionSection />
      <QualityControlSection />
      <DigitizationCaseSection />
      <ActivitiesSection />
      <TallerSection />
      <ConnectionsSection />
      <SummarySection />
      <PracticalExam8Section />
    </div>
  );
}
