import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Breadcrumb } from "../../../components/common/Breadcrumb";
import { ReadingProgressBar } from "../../../components/ui/reading-progress-bar";
import { AGNCaseSection } from "./sections/AGNCaseSection";
import { ArchitectureSection } from "./sections/ArchitectureSection";
import { ComponentsSection } from "./sections/ComponentsSection";
import { DocumentAloneSection } from "./sections/DocumentAloneSection";
import { DocumentsComponentSection } from "./sections/DocumentsComponentSection";
import { ExampleScenariosSection } from "./sections/ExampleScenariosSection";
import { Week02HeroSection } from "./sections/HeroSection";
import { IntegralFlowSection } from "./sections/IntegralFlowSection";
import { KeyIdeasSection } from "./sections/KeyIdeasSection";
import { LifecycleSection } from "./sections/LifecycleSection";
import { MetadataComponentSection } from "./sections/MetadataComponentSection";
import { NextWeekConnectionSection } from "./sections/NextWeekConnectionSection";
import { ObjectivesSection } from "./sections/ObjectivesSection";
import { PreviousWeekConnectionSection } from "./sections/PreviousWeekConnectionSection";
import { ProcessesComponentSection } from "./sections/ProcessesComponentSection";
import { PurposeSection } from "./sections/PurposeSection";
import { RecordsComponentSection } from "./sections/RecordsComponentSection";
import { SGDDefinitionSection } from "./sections/SGDDefinitionSection";
import { StartingQuestionSection } from "./sections/StartingQuestionSection";
import { StorageVsManagementSection } from "./sections/StorageVsManagementSection";
import { SummarySection } from "./sections/SummarySection";
import { TraceabilityComponentSection } from "./sections/TraceabilityComponentSection";
import { UsersComponentSection } from "./sections/UsersComponentSection";

/**
 * Week 2 interactive module — same long-form, scroll-driven pattern as Week 1
 * (see `week-01/Week01ModulePage.tsx`). Theory + diagrams + animations only:
 * no activities, drag & drop, debate, or quiz in this version (per spec).
 */
export function Week02ModulePage() {
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

      <Breadcrumb items={[{ label: "Syllabus", to: "/" }, { label: "Semana 2" }]} />

      <Week02HeroSection />
      <ObjectivesSection />
      <StartingQuestionSection />
      <SGDDefinitionSection />
      <PurposeSection />
      <StorageVsManagementSection />
      <ExampleScenariosSection />
      <ComponentsSection />
      <UsersComponentSection />
      <DocumentsComponentSection />
      <RecordsComponentSection />
      <MetadataComponentSection />
      <ProcessesComponentSection />
      <TraceabilityComponentSection />
      <ArchitectureSection />
      <AGNCaseSection />
      <LifecycleSection />
      <IntegralFlowSection />
      <DocumentAloneSection />
      <PreviousWeekConnectionSection />
      <NextWeekConnectionSection />
      <SummarySection />
      <KeyIdeasSection />
    </div>
  );
}
