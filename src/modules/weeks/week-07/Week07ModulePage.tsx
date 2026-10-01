import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Breadcrumb } from "../../../components/common/Breadcrumb";
import { ReadingProgressBar } from "../../../components/ui/reading-progress-bar";
import { ActivitiesSection } from "./sections/ActivitiesSection";
import { AuthenticationSection } from "./sections/AuthenticationSection";
import { AvailabilitySection } from "./sections/AvailabilitySection";
import { BackupRecoverySection } from "./sections/BackupRecoverySection";
import { CIASelectorSection } from "./sections/CIASelectorSection";
import { ConfidentialitySection } from "./sections/ConfidentialitySection";
import { ConnectionsSection } from "./sections/ConnectionsSection";
import { ControlsSection } from "./sections/ControlsSection";
import { FundamentalConceptsSection } from "./sections/FundamentalConceptsSection";
import { Week07HeroSection } from "./sections/HeroSection";
import { IncidentsSection } from "./sections/IncidentsSection";
import { IntegritySection } from "./sections/IntegritySection";
import { ObjectivesSection } from "./sections/ObjectivesSection";
import { PracticalCaseSection } from "./sections/PracticalCaseSection";
import { PracticalExam7Section } from "./sections/PracticalExam7Section";
import { RisksThreatsSection } from "./sections/RisksThreatsSection";
import { RolesPermissionsSection } from "./sections/RolesPermissionsSection";
import { SummarySection } from "./sections/SummarySection";
import { TallerSection } from "./sections/TallerSection";
import { TraceabilityAuditSection } from "./sections/TraceabilityAuditSection";
import { WhySecuritySection } from "./sections/WhySecuritySection";

/**
 * Week 7 interactive module — same long-form, scroll-driven pattern as Weeks 1-6. Theory + diagrams +
 * animations + formative activities + workshop + graded practice, covering confidencialidad,
 * integridad, disponibilidad, autenticación, permisos, riesgos, controles, respaldo, trazabilidad,
 * auditoría e incidentes de seguridad documental.
 */
export function Week07ModulePage() {
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

      <Breadcrumb items={[{ label: "Syllabus", to: "/" }, { label: "Semana 7" }]} />

      <Week07HeroSection />
      <ObjectivesSection />
      <WhySecuritySection />
      <FundamentalConceptsSection />
      <ConfidentialitySection />
      <IntegritySection />
      <AvailabilitySection />
      <CIASelectorSection />
      <AuthenticationSection />
      <RolesPermissionsSection />
      <RisksThreatsSection />
      <ControlsSection />
      <BackupRecoverySection />
      <TraceabilityAuditSection />
      <IncidentsSection />
      <PracticalCaseSection />
      <ActivitiesSection />
      <TallerSection />
      <ConnectionsSection />
      <SummarySection />
      <PracticalExam7Section />
    </div>
  );
}
