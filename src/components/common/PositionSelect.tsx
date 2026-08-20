import { ThumbsDown, ThumbsUp } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "../../utils/cn";

interface PositionSelectProps {
  statement: string;
  forLabel?: string;
  againstLabel?: string;
  resolution: string;
  onChoose?: () => void;
}

/** "A favor / En contra" debate prompt: the learner commits to a position, then sees the professional resolution. */
export function PositionSelect({
  statement,
  forLabel = "A favor",
  againstLabel = "En contra",
  resolution,
  onChoose,
}: PositionSelectProps) {
  const [position, setPosition] = useState<"favor" | "contra" | null>(null);

  function choose(next: "favor" | "contra") {
    if (position) return;
    setPosition(next);
    onChoose?.();
  }

  return (
    <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg space-y-md">
      <blockquote className="border-l-4 border-primary-container pl-md text-body-lg font-body-lg italic text-on-surface">
        "{statement}"
      </blockquote>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-sm">
        <button
          type="button"
          onClick={() => choose("favor")}
          disabled={Boolean(position)}
          className={cn(
            "flex items-center justify-center gap-xs rounded-lg border px-md py-sm text-label-md font-label-md font-semibold transition-colors",
            position === "favor"
              ? "border-primary-container bg-secondary-container text-on-secondary-container"
              : "border-outline-variant hover:border-primary-container",
            position && position !== "favor" && "opacity-50",
          )}
        >
          <ThumbsUp size={16} /> {forLabel}
        </button>
        <button
          type="button"
          onClick={() => choose("contra")}
          disabled={Boolean(position)}
          className={cn(
            "flex items-center justify-center gap-xs rounded-lg border px-md py-sm text-label-md font-label-md font-semibold transition-colors",
            position === "contra"
              ? "border-primary-container bg-secondary-container text-on-secondary-container"
              : "border-outline-variant hover:border-primary-container",
            position && position !== "contra" && "opacity-50",
          )}
        >
          <ThumbsDown size={16} /> {againstLabel}
        </button>
      </div>

      {position && (
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-lg border-l-4 border-primary-container bg-secondary-container/30 p-md"
        >
          <p className="text-label-md font-label-md font-semibold text-on-surface mb-1">Posición profesional</p>
          <p className="text-body-md font-body-md text-on-surface-variant">{resolution}</p>
        </motion.div>
      )}
    </div>
  );
}
