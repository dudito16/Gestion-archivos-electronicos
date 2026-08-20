import type { LucideIcon } from "lucide-react";

/** A single link in the top header navigation bar. */
export interface NavLink {
  label: string;
  to: string;
}

/** A single breadcrumb segment. */
export interface BreadcrumbItem {
  label: string;
  to?: string;
}

/** Generic icon-labelled link used by the sidebar lesson list. */
export interface SidebarLessonLink {
  label: string;
  to: string;
  icon: LucideIcon;
  active?: boolean;
}
