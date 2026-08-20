import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { BreadcrumbItem } from "../../types/navigation.types";

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

/** Simple "A / B / C" trail used at the top of week/lesson pages. */
export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-xs text-label-md font-label-md">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <span key={`${item.label}-${index}`} className="flex items-center gap-xs">
            {item.to && !isLast ? (
              <Link to={item.to} className="text-on-surface-variant hover:text-primary-container transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className={isLast ? "text-on-surface font-semibold" : "text-on-surface-variant"}>
                {item.label}
              </span>
            )}
            {!isLast && <ChevronRight className="text-outline" size={14} />}
          </span>
        );
      })}
    </nav>
  );
}
