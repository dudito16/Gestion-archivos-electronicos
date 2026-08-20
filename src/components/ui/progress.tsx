import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "../../utils/cn";

interface ProgressProps {
  value: number;
  className?: string;
  indicatorClassName?: string;
}

/** Linear progress bar — 8px track per DESIGN.md, primary-container fill. */
export function Progress({ value, className, indicatorClassName }: ProgressProps) {
  return (
    <ProgressPrimitive.Root
      className={cn("relative h-2 w-full overflow-hidden rounded-full bg-surface-variant", className)}
      value={value}
    >
      <ProgressPrimitive.Indicator
        className={cn("h-full rounded-full bg-primary-container transition-all duration-500 ease-out", indicatorClassName)}
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      />
    </ProgressPrimitive.Root>
  );
}

interface CircularProgressProps {
  value: number;
  size?: number;
  strokeWidth?: number;
  className?: string;
}

/** Circular progress ring matching the "Mi Progreso" card in the source design. */
export function CircularProgress({ value, size = 96, strokeWidth = 4, className }: CircularProgressProps) {
  const clamped = Math.min(100, Math.max(0, value));
  return (
    <div className={cn("relative", className)} style={{ width: size, height: size }}>
      <svg className="h-full w-full -rotate-90" viewBox="0 0 36 36">
        <path
          className="text-surface-container"
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
        />
        <path
          className="text-primary-container transition-[stroke-dasharray] duration-700 ease-out"
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke="currentColor"
          strokeDasharray={`${clamped}, 100`}
          strokeLinecap="round"
          strokeWidth={strokeWidth}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-headline-md font-headline-md text-primary font-bold">{clamped}%</span>
      </div>
    </div>
  );
}
