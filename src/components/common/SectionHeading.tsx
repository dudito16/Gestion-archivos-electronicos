import type { ReactNode } from "react";
import { ScrollReveal } from "./ScrollReveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: ReactNode;
}

/** Consistent "eyebrow / title / description" header used to open every module section. */
export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <ScrollReveal className="max-w-3xl space-y-xs">
      <span className="text-label-md font-label-md font-semibold uppercase tracking-wider text-primary-container">
        {eyebrow}
      </span>
      <h2 className="text-headline-lg font-headline-lg text-on-surface">{title}</h2>
      {description && <p className="text-body-lg font-body-lg text-on-surface-variant">{description}</p>}
    </ScrollReveal>
  );
}
