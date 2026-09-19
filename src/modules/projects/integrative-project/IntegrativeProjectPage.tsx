import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Breadcrumb } from "../../../components/common/Breadcrumb";
import { ReadingProgressBar } from "../../../components/ui/reading-progress-bar";
import { CasoModeloBanner } from "./sections/CasoModeloBanner";
import { ChecklistSection } from "./sections/ChecklistSection";
import { CriteriosCalidadSection } from "./sections/CriteriosCalidadSection";
import { DesarrolloPorSemanaSection } from "./sections/DesarrolloPorSemanaSection";
import { EvidenciasSection } from "./sections/EvidenciasSection";
import { FuentesSection } from "./sections/FuentesSection";
import { HeroSection } from "./sections/HeroSection";
import { OrientacionYDefensaSection } from "./sections/OrientacionYDefensaSection";
import { Paso1Organizacion } from "./sections/Paso1Organizacion";
import { Paso2Documentos } from "./sections/Paso2Documentos";
import { Paso3Gestion } from "./sections/Paso3Gestion";
import { Paso4SGD } from "./sections/Paso4SGD";
import { Paso5Flujo } from "./sections/Paso5Flujo";
import { Paso6Metadatos } from "./sections/Paso6Metadatos";
import { Paso7Riesgos } from "./sections/Paso7Riesgos";
import { Paso8Firma } from "./sections/Paso8Firma";
import { Paso9Trazabilidad } from "./sections/Paso9Trazabilidad";
import { Paso10Auditoria } from "./sections/Paso10Auditoria";
import { Paso11Propuesta } from "./sections/Paso11Propuesta";
import { Paso12Sintesis } from "./sections/Paso12Sintesis";
import { ModeloAnexos } from "./sections/modelo-completo/ModeloAnexos";
import { ModeloCap01Organizacion } from "./sections/modelo-completo/ModeloCap01Organizacion";
import { ModeloCap02Situacion } from "./sections/modelo-completo/ModeloCap02Situacion";
import { ModeloCap03SGD } from "./sections/modelo-completo/ModeloCap03SGD";
import { ModeloCap04Flujo } from "./sections/modelo-completo/ModeloCap04Flujo";
import { ModeloCap05Expediente } from "./sections/modelo-completo/ModeloCap05Expediente";
import { ModeloCap06Metadatos } from "./sections/modelo-completo/ModeloCap06Metadatos";
import { ModeloCap07Atributos } from "./sections/modelo-completo/ModeloCap07Atributos";
import { ModeloCap08Riesgos } from "./sections/modelo-completo/ModeloCap08Riesgos";
import { ModeloCap09Firma } from "./sections/modelo-completo/ModeloCap09Firma";
import { ModeloCap10Trazabilidad } from "./sections/modelo-completo/ModeloCap10Trazabilidad";
import { ModeloCap11Auditoria } from "./sections/modelo-completo/ModeloCap11Auditoria";
import { ModeloCap12Propuesta } from "./sections/modelo-completo/ModeloCap12Propuesta";
import { ModeloComparacion } from "./sections/modelo-completo/ModeloComparacion";
import { ModeloCompletoIntro } from "./sections/modelo-completo/ModeloCompletoIntro";
import { ModeloConclusiones } from "./sections/modelo-completo/ModeloConclusiones";
import { ModeloFraseCentral } from "./sections/modelo-completo/ModeloFraseCentral";
import { ModeloNoCopiar } from "./sections/modelo-completo/ModeloNoCopiar";
import { ModeloPortada } from "./sections/modelo-completo/ModeloPortada";
import { ModeloRecomendaciones } from "./sections/modelo-completo/ModeloRecomendaciones";
import { ModeloReferencias } from "./sections/modelo-completo/ModeloReferencias";
import { ModeloResumenEjecutivo } from "./sections/modelo-completo/ModeloResumenEjecutivo";
import { ProductosYEstructuraSection } from "./sections/ProductosYEstructuraSection";
import { ProyectoEquipoIntroSection } from "./sections/ProyectoEquipoIntroSection";
import { ReglaDeOroSection } from "./sections/ReglaDeOroSection";
import { RubricaSection } from "./sections/RubricaSection";
import { SeleccionOrganizacionSection } from "./sections/SeleccionOrganizacionSection";
import { QueHacerYNoHacerSection } from "./sections/QueHacerYNoHacerSection";
import { TransicionSection } from "./sections/TransicionSection";

/**
 * Proyecto Integrador — "Del documento a la evidencia": closes Unidad I, integrating Semanas 1-6.
 * Same long-form, scroll-driven, anchor-navigable pattern as every week module (see
 * `week-06/Week06ModulePage.tsx`) — 🔎 Caso Modelo (12 pasos, teaches the method) + 📘 Modelo Completo
 * del Proyecto (a finished-work example, see `sections/modelo-completo/`) + 📝 Proyecto del Equipo.
 */
export function IntegrativeProjectPage() {
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

      <Breadcrumb items={[{ label: "Syllabus", to: "/" }, { label: "Proyecto Integrador" }]} />

      <HeroSection />

      <CasoModeloBanner />
      <Paso1Organizacion />
      <Paso2Documentos />
      <Paso3Gestion />
      <Paso4SGD />
      <Paso5Flujo />
      <Paso6Metadatos />
      <Paso7Riesgos />
      <Paso8Firma />
      <Paso9Trazabilidad />
      <Paso10Auditoria />
      <Paso11Propuesta />
      <Paso12Sintesis />

      <ModeloCompletoIntro />
      <ModeloPortada />
      <ModeloResumenEjecutivo />
      <ModeloCap01Organizacion />
      <ModeloCap02Situacion />
      <ModeloCap03SGD />
      <ModeloCap04Flujo />
      <ModeloCap05Expediente />
      <ModeloCap06Metadatos />
      <ModeloCap07Atributos />
      <ModeloCap08Riesgos />
      <ModeloCap09Firma />
      <ModeloCap10Trazabilidad />
      <ModeloCap11Auditoria />
      <ModeloCap12Propuesta />
      <ModeloConclusiones />
      <ModeloRecomendaciones />
      <ModeloReferencias />
      <ModeloAnexos />
      <ModeloNoCopiar />
      <ModeloComparacion />
      <ModeloFraseCentral />

      <TransicionSection />

      <ProyectoEquipoIntroSection />
      <SeleccionOrganizacionSection />
      <ReglaDeOroSection />
      <DesarrolloPorSemanaSection />
      <ProductosYEstructuraSection />
      <EvidenciasSection />
      <QueHacerYNoHacerSection />
      <RubricaSection />
      <CriteriosCalidadSection />
      <ChecklistSection />
      <OrientacionYDefensaSection />
      <FuentesSection />
    </div>
  );
}
