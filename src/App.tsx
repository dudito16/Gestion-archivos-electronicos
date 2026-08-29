import { BookOpen, FileText, Landmark, LifeBuoy, ShieldCheck } from "lucide-react";
import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { DashboardPage } from "./pages/DashboardPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { PlaceholderPage } from "./pages/PlaceholderPage";
import { WeekPage } from "./pages/WeekPage";

// Week 1's content module is large (radial diagrams, drag-and-drop, a 10-question
// quiz…) and most visits never touch it, so it ships as its own chunk.
const Week01ModulePage = lazy(() =>
  import("./modules/weeks/week-01/Week01ModulePage").then((m) => ({ default: m.Week01ModulePage })),
);

// Same reasoning for Week 2's module (diagrams, animated flows).
const Week02ModulePage = lazy(() =>
  import("./modules/weeks/week-02/Week02ModulePage").then((m) => ({ default: m.Week02ModulePage })),
);

// Same reasoning for Week 3's module (diagrams, activities).
const Week03ModulePage = lazy(() =>
  import("./modules/weeks/week-03/Week03ModulePage").then((m) => ({ default: m.Week03ModulePage })),
);

// Same reasoning for Week 4's module (diagrams, activities, workshop).
const Week04ModulePage = lazy(() =>
  import("./modules/weeks/week-04/Week04ModulePage").then((m) => ({ default: m.Week04ModulePage })),
);

/** Application route table. Every route renders inside the shared MainLayout shell. */
export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<DashboardPage />} />
        <Route
          path="semana/1/:anchor?"
          element={
            <Suspense fallback={null}>
              <Week01ModulePage />
            </Suspense>
          }
        />
        <Route
          path="semana/2/:anchor?"
          element={
            <Suspense fallback={null}>
              <Week02ModulePage />
            </Suspense>
          }
        />
        <Route
          path="semana/3/:anchor?"
          element={
            <Suspense fallback={null}>
              <Week03ModulePage />
            </Suspense>
          }
        />
        <Route
          path="semana/4/:anchor?"
          element={
            <Suspense fallback={null}>
              <Week04ModulePage />
            </Suspense>
          }
        />
        <Route path="semana/:weekNumber" element={<WeekPage />} />
        <Route path="semana/:weekNumber/:lessonSlug" element={<WeekPage />} />
        <Route
          path="recursos"
          element={
            <PlaceholderPage
              icon={BookOpen}
              title="Resources"
              description="Materiales de apoyo, lecturas y plantillas del curso. Contenido de ejemplo."
            />
          }
        />
        <Route
          path="soporte"
          element={
            <PlaceholderPage
              icon={LifeBuoy}
              title="Support"
              description="Canal de soporte académico y técnico para estudiantes del curso. Contenido de ejemplo."
            />
          }
        />
        <Route
          path="privacidad"
          element={
            <PlaceholderPage
              icon={ShieldCheck}
              title="Privacy Policy"
              description="Política de privacidad institucional. Contenido de ejemplo."
            />
          }
        />
        <Route
          path="terminos"
          element={
            <PlaceholderPage
              icon={FileText}
              title="Terms of Service"
              description="Términos de servicio del portal educativo. Contenido de ejemplo."
            />
          }
        />
        <Route
          path="institucional"
          element={
            <PlaceholderPage
              icon={Landmark}
              title="Institutional Website"
              description="Enlace institucional del Archivo General de la Nación del Perú. Contenido de ejemplo."
            />
          }
        />
        <Route path="404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Route>
    </Routes>
  );
}
