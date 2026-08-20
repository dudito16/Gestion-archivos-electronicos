import type { NavLink } from "../types/navigation.types";

/** Top header navigation (Syllabus / Resources / Support in the source design). */
export const headerNavLinks: NavLink[] = [
  { label: "Syllabus", to: "/" },
  { label: "Resources", to: "/recursos" },
  { label: "Support", to: "/soporte" },
];

export const footerLinks: NavLink[] = [
  { label: "Privacy Policy", to: "/privacidad" },
  { label: "Terms of Service", to: "/terminos" },
  { label: "Institutional Website", to: "/institucional" },
];
