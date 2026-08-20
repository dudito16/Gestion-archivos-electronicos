import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import type { ReactNode } from "react";
import { cn } from "../../utils/cn";

export const TooltipProvider = TooltipPrimitive.Provider;

interface TooltipProps {
  content: ReactNode;
  children: ReactNode;
  className?: string;
}

/** Simple hover/focus tooltip built on Radix — announces extra context without cluttering the UI. */
export function Tooltip({ content, children, className }: TooltipProps) {
  return (
    <TooltipPrimitive.Root delayDuration={150}>
      <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
      <TooltipPrimitive.Portal>
        <TooltipPrimitive.Content
          className={cn(
            "z-50 max-w-[16rem] rounded-lg bg-inverse-surface px-3 py-2 text-caption font-caption text-inverse-on-surface shadow-md",
            "data-[state=delayed-open]:animate-[fade-in_150ms_ease-out]",
            className,
          )}
          sideOffset={6}
        >
          {content}
          <TooltipPrimitive.Arrow className="fill-inverse-surface" />
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Portal>
    </TooltipPrimitive.Root>
  );
}
