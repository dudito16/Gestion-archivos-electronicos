import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Breadcrumb } from "../../../components/common/Breadcrumb";
import { ReadingProgressBar } from "../../../components/ui/reading-progress-bar";
import { ProjectStoreProvider } from "../proyecto-directiva/projectStore";
import { WEEK17_STORAGE_KEY } from "../proyecto-directiva/storage";
import { AiUseSection, ScheduleSection } from "../proyecto-directiva/SharedSections";
import { DeliverySection, FinalDocumentSection, RubricSection } from "./sections/ClosingSections";
import { Week17HeroSection } from "./sections/HeroSection";
import { Phase4Section } from "./sections/Phase4Section";
import { Phase5Section } from "./sections/Phase5Section";
import { Phase6Section } from "./sections/Phase6Section";

/**
 * Week 17 — Proyecto integrador (parte 2 de 2): elaboración, aplicación y sustentación de la directiva
 * institucional de preservación digital. Continues Week 16's project; its own progress lives under
 * `gae2.week17.proyectoDirectiva` (Week 16's matrix is only read, never modified).
 */
export function Week17ModulePage() {
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
    <ProjectStoreProvider storageKey={WEEK17_STORAGE_KEY}>
      <div className="space-y-24">
        <ReadingProgressBar />

        <Breadcrumb items={[{ label: "Syllabus", to: "/" }, { label: "Semana 16", to: "/semana/16/introduccion" }, { label: "Semana 17" }]} />

        <Week17HeroSection />
        <Phase4Section />
        <Phase5Section />
        <Phase6Section />
        <FinalDocumentSection />
        <AiUseSection />
        <ScheduleSection week={17} />
        <RubricSection />
        <DeliverySection />
      </div>
    </ProjectStoreProvider>
  );
}
