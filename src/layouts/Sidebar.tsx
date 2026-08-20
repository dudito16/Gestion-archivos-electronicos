import { NavLink } from "react-router-dom";
import { sidebarBrand } from "../data/course.data";
import { CourseSidebar } from "../components/course/CourseSidebar";
import { Button } from "../components/ui/button";

/**
 * Fixed left navigation — the full course tree (Unidad → Semana → Lecciones), always
 * visible so the learner can see and reach any week, not just the currently active one.
 */
export function Sidebar() {
  return (
    <aside className="hidden lg:flex flex-col w-sidebar-width h-screen fixed left-0 top-16 bg-surface-container-lowest border-r border-outline-variant shadow-sm overflow-y-auto pb-24 z-40 transition-theme">
      <div className="p-md flex flex-col items-center border-b border-surface-container">
        <img
          alt={sidebarBrand.imageAlt}
          className="w-16 h-16 rounded-full mb-xs object-cover"
          src={sidebarBrand.imageSrc}
        />
        <h2 className="text-label-md font-label-md font-bold text-primary text-center">{sidebarBrand.name}</h2>
        <p className="text-caption font-caption text-on-surface-variant text-center">Gestión de Archivos Electrónicos II</p>
        <Button asChild className="mt-sm w-full" size="sm">
          <NavLink to="/">Programa del curso</NavLink>
        </Button>
      </div>

      <CourseSidebar />
    </aside>
  );
}
