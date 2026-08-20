import { AlertTriangle, CheckCircle2, Info } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "../../utils/cn";

type CalloutVariant = "info" | "warning" | "success";

interface CalloutProps {
  variant?: CalloutVariant;
  title: string;
  children: ReactNode;
}

const variantStyles: Record<CalloutVariant, { icon: typeof Info; classes: string }> = {
  info: { icon: Info, classes: "bg-secondary-container/40 border-secondary text-on-secondary-container" },
  warning: { icon: AlertTriangle, classes: "bg-error-container/60 border-error text-on-error-container" },
  success: { icon: CheckCircle2, classes: "bg-tertiary-fixed/60 border-tertiary-fixed-dim text-on-tertiary-fixed-variant" },
};

/** Inline highlight box for tips, warnings, or confirmations within lesson content. */
export function Callout({ variant = "info", title, children }: CalloutProps) {
  const { icon: Icon, classes } = variantStyles[variant];

  return (
    <div className={cn("flex gap-sm rounded-lg border-l-4 p-md", classes)}>
      <Icon className="shrink-0 mt-0.5" size={20} />
      <div>
        <p className="text-label-md font-label-md font-semibold mb-1">{title}</p>
        <div className="text-body-md font-body-md">{children}</div>
      </div>
    </div>
  );
}
