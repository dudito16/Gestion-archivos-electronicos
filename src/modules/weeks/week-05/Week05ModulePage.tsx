import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Breadcrumb } from "../../../components/common/Breadcrumb";
import { ReadingProgressBar } from "../../../components/ui/reading-progress-bar";
import { AuthenticitySection } from "./sections/AuthenticitySection";
import { AvailabilitySection } from "./sections/AvailabilitySection";
import { CaptureSection } from "./sections/CaptureSection";
import { DecisionSimulatorSection } from "./sections/DecisionSimulatorSection";
import { DocumentFlowSection } from "./sections/DocumentFlowSection";
import { Week05HeroSection } from "./sections/HeroSection";
import { IntegritySection } from "./sections/IntegritySection";
import { MaintenanceSection } from "./sections/MaintenanceSection";
import { NextWeekConnectionSection } from "./sections/NextWeekConnectionSection";
import { ObjectivesSection } from "./sections/ObjectivesSection";
import { PracticalCaseSection } from "./sections/PracticalCaseSection";
import { PracticalExam5Section } from "./sections/PracticalExam5Section";
import { ProblemSection } from "./sections/ProblemSection";
import { RecordsManagementSection } from "./sections/RecordsManagementSection";
import { RegistrationSection } from "./sections/RegistrationSection";
import { ReliabilitySection } from "./sections/ReliabilitySection";
import { RequirementsOverviewSection } from "./sections/RequirementsOverviewSection";
import { SummarySection } from "./sections/SummarySection";
import { TallerSection } from "./sections/TallerSection";

/** Week 5 interactive module — same long-form, scroll-driven pattern as Weeks 1-4. */
export function Week05ModulePage() {
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

      <Breadcrumb items={[{ label: "Syllabus", to: "/" }, { label: "Semana 5" }]} />

      <Week05HeroSection />
      <ObjectivesSection />
      <ProblemSection />
      <RecordsManagementSection />
      <RequirementsOverviewSection />
      <AuthenticitySection />
      <ReliabilitySection />
      <IntegritySection />
      <AvailabilitySection />
      <CaptureSection />
      <RegistrationSection />
      <MaintenanceSection />
      <DocumentFlowSection />
      <PracticalCaseSection />
      <DecisionSimulatorSection />
      <TallerSection />
      <SummarySection />
      <NextWeekConnectionSection />
      <PracticalExam5Section />
    </div>
  );
}
