import { ChevronDown, ChevronRight, Lock } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "../../utils/cn";
import { LessonNavigation } from "./LessonNavigation";
import { WeekHeader } from "./WeekHeader";
import type { WeekModule } from "../../types/course.types";

interface WeekSectionProps {
  week: WeekModule;
  /** Whether this week matches the current route — keeps it expanded and highlights its header. */
  isCurrent: boolean;
}

/** One collapsible week in the sidebar tree: a toggleable header over its `LessonNavigation`. */
export function WeekSection({ week, isCurrent }: WeekSectionProps) {
  const [open, setOpen] = useState(isCurrent);

  useEffect(() => {
    if (isCurrent) setOpen(true);
  }, [isCurrent]);

  const Chevron = open ? ChevronDown : ChevronRight;

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className={cn(
          "flex w-full items-center gap-1.5 px-md py-2 text-label-md font-label-md text-left transition-colors",
          isCurrent ? "text-primary bg-secondary-container/50" : "text-on-surface hover:bg-surface-container-high",
        )}
      >
        <Chevron size={16} className="shrink-0 text-on-surface-variant" />
        <WeekHeader week={week} dense className="flex-1 truncate" />
        {week.status === "upcoming" && <Lock size={14} className="shrink-0 text-outline" />}
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <LessonNavigation week={week} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
