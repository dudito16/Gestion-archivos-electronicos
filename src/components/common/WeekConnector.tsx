import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

export interface WeekConnectorBlock {
  weekLabel: string;
  question: string;
  answers?: string[];
  title?: string;
}

interface WeekConnectorProps {
  top: WeekConnectorBlock;
  bottom: WeekConnectorBlock;
  cta?: { label: string; href: string };
}

/** "Semana N → Semana N+1" bridge card: question/answer chips on each side, connected by an animated arrow. */
export function WeekConnector({ top, bottom, cta }: WeekConnectorProps) {
  return (
    <div className="rounded-xl border border-outline-variant bg-gradient-to-br from-surface-container-lowest to-surface-container-low p-lg">
      <div className="flex flex-col items-center gap-xs text-center">
        <Block block={top} />

        <motion.div initial={{ opacity: 0, y: -4 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-outline py-1">
          <ArrowDown size={22} />
        </motion.div>

        <Block block={bottom} />

        {cta && (
          <Button asChild className="mt-sm">
            <Link to={cta.href}>{cta.label}</Link>
          </Button>
        )}
      </div>
    </div>
  );
}

function Block({ block }: { block: WeekConnectorBlock }) {
  return (
    <>
      <span className="text-label-md font-label-md font-semibold uppercase tracking-wider text-primary-container">
        {block.weekLabel}
      </span>
      <p className="text-body-lg font-body-lg text-on-surface">{block.question}</p>
      {block.answers && (
        <div className="flex flex-wrap justify-center gap-xs">
          {block.answers.map((item) => (
            <span key={item} className="rounded-full border border-outline-variant bg-surface-container px-3 py-1 text-caption font-caption text-on-surface-variant">
              {item}
            </span>
          ))}
        </div>
      )}
      {block.title && <p className="text-headline-md font-headline-md text-on-surface mt-1">{block.title}</p>}
    </>
  );
}
