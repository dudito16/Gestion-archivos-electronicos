import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Breadcrumb } from "../../../components/common/Breadcrumb";
import { ReadingProgressBar } from "../../../components/ui/reading-progress-bar";
import { Activity1Section } from "./sections/Activity1Section";
import { Activity2Section } from "./sections/Activity2Section";
import { Activity3Section } from "./sections/Activity3Section";
import { Activity4Section } from "./sections/Activity4Section";
import { Activity5Section } from "./sections/Activity5Section";
import { AGNCaseSection } from "./sections/AGNCaseSection";
import { ArchivingSection } from "./sections/ArchivingSection";
import { ClassificationSection } from "./sections/ClassificationSection";
import { DescriptionSection } from "./sections/DescriptionSection";
import { DispatchSection } from "./sections/DispatchSection";
import { FoliationSection } from "./sections/FoliationSection";
import { Week03HeroSection } from "./sections/HeroSection";
import { IntegralFlowSection } from "./sections/IntegralFlowSection";
import { IntegratorCaseSection } from "./sections/IntegratorCaseSection";
import { InteractiveCaseSection } from "./sections/InteractiveCaseSection";
import { IssuanceSection } from "./sections/IssuanceSection";
import { KeyIdeasSection } from "./sections/KeyIdeasSection";
import { NextWeekConnectionSection } from "./sections/NextWeekConnectionSection";
import { ObjectivesSection } from "./sections/ObjectivesSection";
import { OrderingSection } from "./sections/OrderingSection";
import { OrganizationSection } from "./sections/OrganizationSection";
import { PreviousWeekConnectionSection } from "./sections/PreviousWeekConnectionSection";
import { ProcessDefinitionSection } from "./sections/ProcessDefinitionSection";
import { ProcessMapSection } from "./sections/ProcessMapSection";
import { RecordSection } from "./sections/RecordSection";
import { ReceptionSection } from "./sections/ReceptionSection";
import { RegistrationSection } from "./sections/RegistrationSection";
import { StartingQuestionSection } from "./sections/StartingQuestionSection";
import { SummarySection } from "./sections/SummarySection";

/**
 * Week 3 interactive module — same long-form, scroll-driven pattern as Weeks 1-2
 * (see `week-01/Week01ModulePage.tsx`). Theory + diagrams + animations + five short,
 * ungraded formative activities (per spec — no formal evaluation this week either).
 */
export function Week03ModulePage() {
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

      <Breadcrumb items={[{ label: "Syllabus", to: "/" }, { label: "Semana 3" }]} />

      <Week03HeroSection />
      <ObjectivesSection />
      <StartingQuestionSection />
      <ProcessDefinitionSection />
      <ProcessMapSection />
      <ReceptionSection />
      <RegistrationSection />
      <IssuanceSection />
      <DispatchSection />
      <ArchivingSection />
      <IntegralFlowSection />
      <RecordSection />
      <FoliationSection />
      <OrderingSection />
      <ClassificationSection />
      <OrganizationSection />
      <DescriptionSection />
      <AGNCaseSection />
      <InteractiveCaseSection />
      <Activity1Section />
      <Activity2Section />
      <Activity3Section />
      <Activity4Section />
      <Activity5Section />
      <IntegratorCaseSection />
      <PreviousWeekConnectionSection />
      <SummarySection />
      <KeyIdeasSection />
      <NextWeekConnectionSection />
    </div>
  );
}
