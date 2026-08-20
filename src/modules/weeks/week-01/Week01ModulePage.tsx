import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Breadcrumb } from "../../../components/common/Breadcrumb";
import { ReadingProgressBar } from "../../../components/ui/reading-progress-bar";
import { AGNCaseStudySection } from "./sections/AGNCaseStudySection";
import { ActivitySection } from "./sections/ActivitySection";
import { ComparisonSection } from "./sections/ComparisonSection";
import { ConceptDiagramSection } from "./sections/ConceptDiagramSection";
import { ConceptMapSection } from "./sections/ConceptMapSection";
import { DebateSection } from "./sections/DebateSection";
import { DigitalDocumentSection } from "./sections/DigitalDocumentSection";
import { DigitizedDocumentSection } from "./sections/DigitizedDocumentSection";
import { ElectronicDocumentSection } from "./sections/ElectronicDocumentSection";
import { ElectronicFileSection } from "./sections/ElectronicFileSection";
import { EvolutionSection } from "./sections/EvolutionSection";
import { Week01HeroSection } from "./sections/HeroSection";
import { IntegratorCaseSection } from "./sections/IntegratorCaseSection";
import { InteractiveCaseSection } from "./sections/InteractiveCaseSection";
import { MissingContextSection } from "./sections/MissingContextSection";
import { NextWeekSection } from "./sections/NextWeekSection";
import { ObjectivesSection } from "./sections/ObjectivesSection";
import { PriorKnowledgeSection } from "./sections/PriorKnowledgeSection";
import { ProblemDetectionSection } from "./sections/ProblemDetectionSection";
import { ProfessionalCaseSection } from "./sections/ProfessionalCaseSection";
import { QuizSection } from "./sections/QuizSection";
import { RelationSection } from "./sections/RelationSection";
import { ResourcesSection } from "./sections/ResourcesSection";
import { ScopeSection } from "./sections/ScopeSection";
import { SummarySection } from "./sections/SummarySection";
import { Week01ProgressProvider } from "./week01Progress";

/**
 * Week 1 interactive module — a single long-form, scroll-driven experience
 * (Microsoft Learn / Coursera style) rather than a set of separate lesson pages.
 * The sidebar's six lesson links still work: they route to `/semana/1/<anchor>`,
 * and this page smooth-scrolls to the matching section id on mount.
 */
export function Week01ModulePage() {
  const { anchor } = useParams<{ anchor?: string }>();

  useEffect(() => {
    if (!anchor) return;
    const target = document.getElementById(anchor);
    if (target) {
      // Let the route's enter animation settle before scrolling, so the offset is accurate.
      const timeout = window.setTimeout(() => target.scrollIntoView({ behavior: "smooth", block: "start" }), 120);
      return () => window.clearTimeout(timeout);
    }
  }, [anchor]);

  return (
    <Week01ProgressProvider>
      <div className="space-y-24">
        <ReadingProgressBar />

        <Breadcrumb items={[{ label: "Syllabus", to: "/" }, { label: "Semana 1" }]} />

        <Week01HeroSection />
        <ObjectivesSection />
        <PriorKnowledgeSection />
        <EvolutionSection />
        <ConceptDiagramSection />
        <ScopeSection />
        <RelationSection />
        <ElectronicDocumentSection />
        <DigitalDocumentSection />
        <DigitizedDocumentSection />
        <ElectronicFileSection />
        <ComparisonSection />
        <AGNCaseStudySection />
        <InteractiveCaseSection />
        <ActivitySection />
        <MissingContextSection />
        <ProblemDetectionSection />
        <ProfessionalCaseSection />
        <DebateSection />
        <IntegratorCaseSection />
        <QuizSection />
        <ConceptMapSection />
        <SummarySection />
        <NextWeekSection />
        <ResourcesSection />
      </div>
    </Week01ProgressProvider>
  );
}
