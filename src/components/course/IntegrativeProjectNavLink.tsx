import { Sparkles } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "../../utils/cn";

/** Standalone sidebar entry for the "Proyecto Integrador" — sits between Unidad I and Unidad II, closing the unit. */
export function IntegrativeProjectNavLink() {
  const location = useLocation();
  const isActive = location.pathname.startsWith("/proyecto-integrador");

  return (
    <div className="my-1 border-t border-b border-outline-variant/70 py-1.5">
      <Link
        to="/proyecto-integrador"
        className={cn(
          "flex items-center gap-2 px-md py-2 transition-colors",
          isActive ? "text-primary bg-secondary-container/50" : "text-on-surface hover:bg-surface-container-high",
        )}
      >
        <Sparkles size={16} className="shrink-0 text-tertiary" />
        <span className="flex flex-col leading-tight min-w-0">
          <span className="text-label-md font-label-md font-bold truncate">Proyecto Integrador</span>
          <span className="text-caption font-caption font-normal text-on-surface-variant truncate">Del documento a la evidencia</span>
        </span>
      </Link>
    </div>
  );
}
