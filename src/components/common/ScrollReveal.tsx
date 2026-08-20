import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "up" | "left" | "right" | "none";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
  /** Re-triggers every time the element enters the viewport instead of only once. */
  repeat?: boolean;
}

const offsets: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 24 },
  left: { x: -24 },
  right: { x: 24 },
  none: {},
};

/** Fade-up/in scroll-reveal wrapper used throughout the Week 1 storytelling experience. */
export function ScrollReveal({ children, direction = "up", delay = 0, className, repeat = false }: ScrollRevealProps) {
  const offset = offsets[direction];
  const variants: Variants = {
    hidden: { opacity: 0, ...offset },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.5, delay, ease: "easeOut" } },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: !repeat, amount: 0.25 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
