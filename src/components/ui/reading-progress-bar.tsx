import { motion, useScroll, useSpring } from "framer-motion";

/** Thin fixed bar tracking whole-page scroll progress — orients the learner within a long module. */
export function ReadingProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-16 left-0 right-0 h-1 origin-left bg-primary-container z-40"
      aria-hidden
    />
  );
}
