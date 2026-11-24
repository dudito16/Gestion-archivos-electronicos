import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Breadcrumb } from "../../../components/common/Breadcrumb";
import { ReadingProgressBar } from "../../../components/ui/reading-progress-bar";
import { ProjectStoreProvider } from "../proyecto-directiva/projectStore";
import { WEEK16_STORAGE_KEY } from "../proyecto-directiva/storage";
import { AiUseSection, ScheduleSection } from "../proyecto-directiva/SharedSections";
import { Week16HeroSection } from "./sections/HeroSection";
import { Phase1Section } from "./sections/Phase1Section";
import { Phase2Section } from "./sections/Phase2Section";
import { Phase3Section } from "./sections/Phase3Section";
import { ProductsSection } from "./sections/ProductsSection";

/**
 * Week 16 — Proyecto integrador (parte 1 de 2): investigación y diagnóstico para diseñar una directiva
 * institucional de preservación digital. Same long-form, anchor-driven pattern as Weeks 1-14; the
 * team's progress lives under its own key (`gae2.week16.proyectoDirectiva`).
 */
export function Week16ModulePage() {
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
    <ProjectStoreProvider storageKey={WEEK16_STORAGE_KEY}>
      <div className="space-y-24">
        <ReadingProgressBar />

        <Breadcrumb items={[{ label: "Syllabus", to: "/" }, { label: "Semana 16" }]} />

        <Week16HeroSection />
        <ScheduleSection week={16} />
        <Phase1Section />
        <Phase2Section />
        <Phase3Section />
        <AiUseSection />
        <ProductsSection />
      </div>
    </ProjectStoreProvider>
  );
}
