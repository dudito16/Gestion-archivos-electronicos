import { cva, type VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "react";
import { cn } from "../../utils/cn";

const badgeVariants = cva(
  "inline-flex items-center gap-1 text-caption font-caption font-medium rounded-full px-3 py-1",
  {
    variants: {
      variant: {
        tertiary: "bg-tertiary-fixed text-on-tertiary-fixed",
        secondary: "bg-secondary-container text-on-secondary-container",
        outline: "border border-outline-variant text-on-surface-variant",
        locked: "bg-surface-container text-outline",
      },
    },
    defaultVariants: { variant: "secondary" },
  },
);

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant, className }))} {...props} />;
}
