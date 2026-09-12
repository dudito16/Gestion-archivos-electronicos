import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Breadcrumb } from "../../../components/common/Breadcrumb";
import { ReadingProgressBar } from "../../../components/ui/reading-progress-bar";
import { ActivitiesSection } from "./sections/ActivitiesSection";
import { AuditSection } from "./sections/AuditSection";
import { CertificateAuthoritySection } from "./sections/CertificateAuthoritySection";
import { CertificateSection } from "./sections/CertificateSection";
import { DigitalSignatureSection } from "./sections/DigitalSignatureSection";
import { ElectronicSignatureSection } from "./sections/ElectronicSignatureSection";
import { HandwrittenScannedSection } from "./sections/HandwrittenScannedSection";
import { Week06HeroSection } from "./sections/HeroSection";
import { HowSignatureWorksSection } from "./sections/HowSignatureWorksSection";
import { ObjectivesSection } from "./sections/ObjectivesSection";
import { PracticalCaseSection } from "./sections/PracticalCaseSection";
import { PracticalExam6Section } from "./sections/PracticalExam6Section";
import { SignatureSelectorSection } from "./sections/SignatureSelectorSection";
import { SummarySection } from "./sections/SummarySection";
import { TallerSection } from "./sections/TallerSection";
import { TimestampSection } from "./sections/TimestampSection";
import { TraceabilitySection } from "./sections/TraceabilitySection";
import { ValidationVerificationSection } from "./sections/ValidationVerificationSection";
import { WhyItMattersSection } from "./sections/WhyItMattersSection";

/**
 * Week 6 interactive module — same long-form, scroll-driven pattern as Weeks 1-5. Theory + diagrams +
 * animations + formative activities + workshop + graded practice, covering firma electrónica, firma
 * digital, certificados, validación/verificación, sellado de tiempo, trazabilidad y auditoría.
 */
export function Week06ModulePage() {
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

      <Breadcrumb items={[{ label: "Syllabus", to: "/" }, { label: "Semana 6" }]} />

      <Week06HeroSection />
      <ObjectivesSection />
      <WhyItMattersSection />
      <ElectronicSignatureSection />
      <DigitalSignatureSection />
      <HandwrittenScannedSection />
      <SignatureSelectorSection />
      <CertificateSection />
      <CertificateAuthoritySection />
      <HowSignatureWorksSection />
      <ValidationVerificationSection />
      <TimestampSection />
      <TraceabilitySection />
      <AuditSection />
      <PracticalCaseSection />
      <ActivitiesSection />
      <TallerSection />
      <SummarySection />
      <PracticalExam6Section />
    </div>
  );
}
