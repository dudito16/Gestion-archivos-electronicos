import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Breadcrumb } from "../../../components/common/Breadcrumb";
import { ReadingProgressBar } from "../../../components/ui/reading-progress-bar";
import { AccessSecuritySustainabilitySection } from "./sections/AccessSecuritySustainabilitySection";
import { ActivitiesSection } from "./sections/ActivitiesSection";
import { ArchitectureStorageSection } from "./sections/ArchitectureStorageSection";
import { CasesSection } from "./sections/CasesSection";
import { ConnectionsSection } from "./sections/ConnectionsSection";
import { Week14HeroSection } from "./sections/HeroSection";
import { Iso16363Section } from "./sections/Iso16363Section";
import { ObjectivesSection } from "./sections/ObjectivesSection";
import { PracticalExam14Section } from "./sections/PracticalExam14Section";
import { PriorKnowledgeSection } from "./sections/PriorKnowledgeSection";
import { ReferencesSection } from "./sections/ReferencesSection";
import { ReliabilityCharacteristicsSection } from "./sections/ReliabilityCharacteristicsSection";
import { RepositoryConceptSection } from "./sections/RepositoryConceptSection";
import { SgdRepositoryRelationSection } from "./sections/SgdRepositoryRelationSection";
import { SummarySection } from "./sections/SummarySection";
import { TallerSection } from "./sections/TallerSection";

/**
 * Week 14 interactive module — same long-form, scroll-driven pattern as Weeks 1-13. Theory + diagrams +
 * animations + formative activities + interactive cases + workshop + graded evaluation, covering los
 * repositorios digitales confiables: ISO 16363:2025, características de confiabilidad, arquitectura,
 * almacenamiento, acceso, seguridad, sostenibilidad y la relación entre el SGD y el repositorio.
 */
export function Week14ModulePage() {
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

      <Breadcrumb items={[{ label: "Syllabus", to: "/" }, { label: "Semana 14" }]} />

      <Week14HeroSection />
      <ObjectivesSection />
      <PriorKnowledgeSection />
      <RepositoryConceptSection />
      <ReliabilityCharacteristicsSection />
      <Iso16363Section />
      <ArchitectureStorageSection />
      <AccessSecuritySustainabilitySection />
      <SgdRepositoryRelationSection />
      <ReferencesSection />
      <CasesSection />
      <ActivitiesSection />
      <TallerSection />
      <ConnectionsSection />
      <SummarySection />
      <PracticalExam14Section />
    </div>
  );
}
