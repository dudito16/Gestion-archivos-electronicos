import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Breadcrumb } from "../../../components/common/Breadcrumb";
import { ReadingProgressBar } from "../../../components/ui/reading-progress-bar";
import { ActivitiesSection } from "./sections/ActivitiesSection";
import { AdministrativeSection } from "./sections/AdministrativeSection";
import { AGNExampleSection } from "./sections/AGNExampleSection";
import { ContextSection } from "./sections/ContextSection";
import { ControlledValuesSection } from "./sections/ControlledValuesSection";
import { DescriptiveSection } from "./sections/DescriptiveSection";
import { FinalDiagramSection } from "./sections/FinalDiagramSection";
import { FunctionsSection } from "./sections/FunctionsSection";
import { Week04HeroSection } from "./sections/HeroSection";
import { ISO23081Section } from "./sections/ISO23081Section";
import { LifecycleSection } from "./sections/LifecycleSection";
import { MetadataAndSGDSection } from "./sections/MetadataAndSGDSection";
import { MetadataConceptSection } from "./sections/MetadataConceptSection";
import { NextWeekConnectionSection } from "./sections/NextWeekConnectionSection";
import { ObjectivesSection } from "./sections/ObjectivesSection";
import { PracticalCaseSection } from "./sections/PracticalCaseSection";
import { PracticalExam4Section } from "./sections/PracticalExam4Section";
import { PreservationSection } from "./sections/PreservationSection";
import { PreviousWeeksConnectionSection } from "./sections/PreviousWeeksConnectionSection";
import { QualitySection } from "./sections/QualitySection";
import { SchemaSection } from "./sections/SchemaSection";
import { StartingQuestionSection } from "./sections/StartingQuestionSection";
import { StructuralSection } from "./sections/StructuralSection";
import { SummarySection } from "./sections/SummarySection";
import { TypesOverviewSection } from "./sections/TypesOverviewSection";
import { Week2ReviewSection } from "./sections/Week2ReviewSection";
import { WhyNeededSection } from "./sections/WhyNeededSection";
import { WorkshopSection } from "./sections/WorkshopSection";

/**
 * Week 4 interactive module — same long-form, scroll-driven pattern as Weeks 1-3
 * (see `week-01/Week01ModulePage.tsx`). Theory + diagrams + animations + formative
 * activities + the syllabus-mandated workshop (metadata schema design).
 */
export function Week04ModulePage() {
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

      <Breadcrumb items={[{ label: "Syllabus", to: "/" }, { label: "Semana 4" }]} />

      <Week04HeroSection />
      <ObjectivesSection />
      <PreviousWeeksConnectionSection />
      <StartingQuestionSection />
      <MetadataConceptSection />
      <WhyNeededSection />
      <FunctionsSection />
      <ContextSection />
      <ISO23081Section />
      <TypesOverviewSection />
      <DescriptiveSection />
      <AdministrativeSection />
      <StructuralSection />
      <PreservationSection />
      <LifecycleSection />
      <SchemaSection />
      <QualitySection />
      <ControlledValuesSection />
      <MetadataAndSGDSection />
      <AGNExampleSection />
      <Week2ReviewSection />
      <PracticalCaseSection />
      <ActivitiesSection />
      <WorkshopSection />
      <FinalDiagramSection />
      <SummarySection />
      <NextWeekConnectionSection />
      <PracticalExam4Section />
    </div>
  );
}
