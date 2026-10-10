import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Breadcrumb } from "../../../components/common/Breadcrumb";
import { ReadingProgressBar } from "../../../components/ui/reading-progress-bar";
import { ActivitiesSection } from "./sections/ActivitiesSection";
import { ConnectionWeek7Section } from "./sections/ConnectionWeek7Section";
import { ConnectionWeek8Section } from "./sections/ConnectionWeek8Section";
import { ControlsSection } from "./sections/ControlsSection";
import { DifferenceNotConclusionSection } from "./sections/DifferenceNotConclusionSection";
import { FixitySection } from "./sections/FixitySection";
import { FixitySimulatorSection } from "./sections/FixitySimulatorSection";
import { HashSection } from "./sections/HashSection";
import { HashVsChecksumSection } from "./sections/HashVsChecksumSection";
import { Week10HeroSection } from "./sections/HeroSection";
import { IntegrityConceptSection } from "./sections/IntegrityConceptSection";
import { PracticalExam10Section } from "./sections/PracticalExam10Section";
import { RisksSection } from "./sections/RisksSection";
import { SanGabrielCaseSection } from "./sections/SanGabrielCaseSection";
import { SummarySection } from "./sections/SummarySection";
import { TallerSection } from "./sections/TallerSection";
import { WhatYouWillLearnSection } from "./sections/WhatYouWillLearnSection";
import { WhyItMattersSection } from "./sections/WhyItMattersSection";

/**
 * Week 10 interactive module — same long-form, scroll-driven pattern as Weeks 1-8. Theory + diagrams +
 * animations + formative activities + workshop + graded practice, covering integridad digital, hash,
 * checksum, fixity, riesgos y controles — following the "archivo → huella → referencia → verificación →
 * resultado" metaphor throughout.
 */
export function Week10ModulePage() {
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

      <Breadcrumb items={[{ label: "Syllabus", to: "/" }, { label: "Semana 10" }]} />

      <Week10HeroSection />
      <WhatYouWillLearnSection />
      <WhyItMattersSection />
      <IntegrityConceptSection />
      <HashSection />
      <HashVsChecksumSection />
      <FixitySection />
      <FixitySimulatorSection />
      <DifferenceNotConclusionSection />
      <RisksSection />
      <ControlsSection />
      <ConnectionWeek7Section />
      <ConnectionWeek8Section />
      <SanGabrielCaseSection />
      <ActivitiesSection />
      <TallerSection />
      <SummarySection />
      <PracticalExam10Section />
    </div>
  );
}
