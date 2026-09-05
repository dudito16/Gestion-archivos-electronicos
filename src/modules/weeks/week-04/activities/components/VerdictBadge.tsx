import { AlertTriangle, Check, RotateCcw } from "lucide-react";
import { cn } from "../../../../../utils/cn";
import type { Verdict } from "../activities.types";

const config: Record<Verdict, { icon: typeof Check; label: string; classes: string }> = {
  correct: { icon: Check, label: "Correcto", classes: "bg-tertiary-fixed/50 text-on-tertiary-fixed-variant" },
  partial: { icon: AlertTriangle, label: "Parcialmente correcto", classes: "bg-secondary-container text-on-secondary-container" },
  review: { icon: RotateCcw, label: "Requiere revisión", classes: "bg-error-container/60 text-on-error-container" },
};

export function VerdictBadge({ verdict }: { verdict: Verdict }) {
  const { icon: Icon, label, classes } = config[verdict];
  return (
    <span className={cn("inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-caption font-caption font-semibold shrink-0", classes)}>
      <Icon size={13} />
      {label}
    </span>
  );
}
