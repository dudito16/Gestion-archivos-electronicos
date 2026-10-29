import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Breadcrumb } from "../../../components/common/Breadcrumb";
import { ReadingProgressBar } from "../../../components/ui/reading-progress-bar";
import { ActivitiesSection } from "./sections/ActivitiesSection";
import { ConnectionsSection } from "./sections/ConnectionsSection";
import { EntitiesSection } from "./sections/EntitiesSection";
import { FundamentalsSection } from "./sections/FundamentalsSection";
import { Week12HeroSection } from "./sections/HeroSection";
import { InstitutionalCaseSection } from "./sections/InstitutionalCaseSection";
import { OaisFlowSection } from "./sections/OaisFlowSection";
import { ObjectivesSection } from "./sections/ObjectivesSection";
import { PackagesComparisonSection } from "./sections/PackagesComparisonSection";
import { PackagesSection } from "./sections/PackagesSection";
import { PracticalExam12Section } from "./sections/PracticalExam12Section";
import { PriorKnowledgeSection } from "./sections/PriorKnowledgeSection";
import { ReferencesSection } from "./sections/ReferencesSection";
import { RelationSection } from "./sections/RelationSection";
import { SummarySection } from "./sections/SummarySection";
import { TallerSection } from "./sections/TallerSection";

/**
 * Week 12 interactive module — same long-form, scroll-driven pattern as Weeks 1-11. Theory + diagrams +
 * animations + formative activities + workshop + graded practice, covering el modelo OAIS (ISO
 * 14721:2025), sus entidades funcionales, el flujo general, los paquetes SIP/AIP/DIP y la relación
 * OAIS-SGD-repositorio digital.
 */
export function Week12ModulePage() {
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

      <Breadcrumb items={[{ label: "Syllabus", to: "/" }, { label: "Semana 12" }]} />

      <Week12HeroSection />
      <ObjectivesSection />
      <PriorKnowledgeSection />
      <FundamentalsSection />
      <EntitiesSection />
      <OaisFlowSection />
      <PackagesSection />
      <PackagesComparisonSection />
      <RelationSection />
      <ReferencesSection />
      <InstitutionalCaseSection />
      <ActivitiesSection />
      <TallerSection />
      <ConnectionsSection />
      <SummarySection />
      <PracticalExam12Section />
    </div>
  );
}
