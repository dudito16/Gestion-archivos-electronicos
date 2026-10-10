import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Breadcrumb } from "../../../components/common/Breadcrumb";
import { ReadingProgressBar } from "../../../components/ui/reading-progress-bar";
import { ActivitiesSection } from "./sections/ActivitiesSection";
import { ConnectionsSection } from "./sections/ConnectionsSection";
import { FundamentalsSection } from "./sections/FundamentalsSection";
import { Week11HeroSection } from "./sections/HeroSection";
import { InstitutionalCaseSection } from "./sections/InstitutionalCaseSection";
import { ObjectivesSection } from "./sections/ObjectivesSection";
import { PlanSection } from "./sections/PlanSection";
import { PolicySection } from "./sections/PolicySection";
import { PracticalExam11Section } from "./sections/PracticalExam11Section";
import { PriorKnowledgeSection } from "./sections/PriorKnowledgeSection";
import { RelationSection } from "./sections/RelationSection";
import { RisksSection } from "./sections/RisksSection";
import { StrategiesSection } from "./sections/StrategiesSection";
import { StrategyComparisonSection } from "./sections/StrategyComparisonSection";
import { SummarySection } from "./sections/SummarySection";
import { TallerSection } from "./sections/TallerSection";

/**
 * Week 11 interactive module — same long-form, scroll-driven pattern as Weeks 1-10. Theory + diagrams +
 * animations + formative activities + workshop + graded practice, covering fundamentos de preservación
 * digital, la relación SGD-archivo electrónico-preservación, riesgos de obsolescencia, política y plan
 * de preservación, y las estrategias de migración, normalización y emulación.
 */
export function Week11ModulePage() {
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

      <Breadcrumb items={[{ label: "Syllabus", to: "/" }, { label: "Semana 11" }]} />

      <Week11HeroSection />
      <ObjectivesSection />
      <PriorKnowledgeSection />
      <FundamentalsSection />
      <RelationSection />
      <RisksSection />
      <PolicySection />
      <PlanSection />
      <StrategiesSection />
      <StrategyComparisonSection />
      <InstitutionalCaseSection />
      <ActivitiesSection />
      <TallerSection />
      <ConnectionsSection />
      <SummarySection />
      <PracticalExam11Section />
    </div>
  );
}
