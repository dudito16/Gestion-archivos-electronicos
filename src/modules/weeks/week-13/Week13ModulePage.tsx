import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Breadcrumb } from "../../../components/common/Breadcrumb";
import { ReadingProgressBar } from "../../../components/ui/reading-progress-bar";
import { ActivitiesSection } from "./sections/ActivitiesSection";
import { BagitSection } from "./sections/BagitSection";
import { ConnectionsSection } from "./sections/ConnectionsSection";
import { DublinCoreSection } from "./sections/DublinCoreSection";
import { FormatIdentificationSection } from "./sections/FormatIdentificationSection";
import { FormatValidationSection } from "./sections/FormatValidationSection";
import { Week13HeroSection } from "./sections/HeroSection";
import { InstitutionalCaseSection } from "./sections/InstitutionalCaseSection";
import { MetadataSection } from "./sections/MetadataSection";
import { MetsSection } from "./sections/MetsSection";
import { NormalizationSection } from "./sections/NormalizationSection";
import { ObjectivesSection } from "./sections/ObjectivesSection";
import { PracticalExam13Section } from "./sections/PracticalExam13Section";
import { PremisSection } from "./sections/PremisSection";
import { PreservationEventsSection } from "./sections/PreservationEventsSection";
import { PriorKnowledgeSection } from "./sections/PriorKnowledgeSection";
import { StandardsComparisonSection } from "./sections/StandardsComparisonSection";
import { SummarySection } from "./sections/SummarySection";
import { TallerSection } from "./sections/TallerSection";

/**
 * Week 13 interactive module — same long-form, scroll-driven pattern as Weeks 1-12. Theory + diagrams +
 * animations + formative activities + workshop + graded practice, covering los estándares de
 * preservación digital: PREMIS 3.0, METS, Dublin Core, BagIt, identificación/validación/normalización
 * de formatos y eventos de preservación.
 */
export function Week13ModulePage() {
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

      <Breadcrumb items={[{ label: "Syllabus", to: "/" }, { label: "Semana 13" }]} />

      <Week13HeroSection />
      <ObjectivesSection />
      <PriorKnowledgeSection />
      <MetadataSection />
      <PremisSection />
      <MetsSection />
      <DublinCoreSection />
      <StandardsComparisonSection />
      <BagitSection />
      <FormatIdentificationSection />
      <FormatValidationSection />
      <NormalizationSection />
      <PreservationEventsSection />
      <InstitutionalCaseSection />
      <ActivitiesSection />
      <TallerSection />
      <ConnectionsSection />
      <SummarySection />
      <PracticalExam13Section />
    </div>
  );
}
